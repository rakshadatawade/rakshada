

function openModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

window.onclick = function(event) {
    const modals = document.getElementsByClassName('modal');
    for (let i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = 'none';
        }
    }
}
document.getElementById('more-info-btn').addEventListener('click', function() {
    const moreInfo = document.getElementById('more-info');
    if (moreInfo.classList.contains('hidden')) {
        moreInfo.classList.remove('hidden');
        this.textContent = 'Less Info';
    } else {
        moreInfo.classList.add('hidden');
        this.textContent = 'More Info';
    }
});

ocument.addEventListener('DOMContentLoaded', function() {
    
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); 

        
        const name = event.target[0].value;
        const email = event.target[1].value;
        const message = event.target[2].value;
        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
            return;
        }
        console.log('Form submitted:', { name, email, message });

        alert('Thank you for your message, ' + name + '! We will get back to you soon.');

        
        event.target.reset();
    });
});

  document.addEventListener('DOMContentLoaded', function() {
    const skills = document.querySelectorAll('.skill-progress');

    skills.forEach(skill => {
        const skillValue = skill.getAttribute('data-skill');
        skill.style.width = skillValue; 
    });
});

document.querySelectorAll('.faq-question').forEach(question => {
      question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const icon = question.querySelector('.faq-icon');

        
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
        
        icon.classList.toggle('rotate');
      });
    });