//Variables
const contactForm = document.querySelector('section');
const contactOptionContainer = document.querySelectorAll('#contact-options i');
const emailOption = document.querySelector('.fa-envelope');
const whatsappOption = document.querySelector('.fa-whatsapp');
const instagramOption = document.querySelector('.fa-instagram');
const linkedinOption = document.querySelector('.fa-linkedin-in');
const githubOption = document.querySelector('.fa-github');
const phoneOption = document.querySelector('.fa-phone');
const formTitle = document.querySelector('#form-title');
const contactMessage = document.querySelector('#contact-message h2');
const contactButton = document.querySelector('.footer.contact-button');
const emailInput = document.querySelector('#email-input');

//Functions
function changeText(target){
    if (target === emailOption){
        contactForm.id = 'email-theme';
        formTitle.innerHTML = 'Send a message to my <a href="#text-input"><abbr title="Copy \'paulomiguel11111971@gmail.com\' to clipboard">Email</abbr></a>!';
        contactMessage.innerHTML = 'Type a message to <a href="#text-input">paulomiguel11111971@gmail.com</a>';
    }
    else if (target === whatsappOption){
        window.open('https://wa.me/5592992813253?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20uma%20oferta...', '_blank');
    }
    else if (target === instagramOption){
        window.open('https://www.instagram.com/pa__miguel?igsh=MWxoYzdqNGluZWcyaA==', '_blank');
    }
    else if (target === linkedinOption){
        window.open('https://www.linkedin.com/in/paulo-miguel-4b706022b/', '_blank');
    }
    else if (target === githubOption){
        window.open('https://github.com/Paulo-Mikhael', '_blank');
    }
    else if (target === phoneOption){
        window.open('https://wa.me/5592992813253?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20uma%20oferta...', '_blank');
    }
}

//Events
contactOptionContainer.forEach(el => {
    el.addEventListener('click', (evt) => {
        const target = evt.target;
        changeText(target);
    });
});
contactButton.addEventListener('click', () => {
    window.location.replace('');
});