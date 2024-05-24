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

//Functions
function changeText(target){
    contactOptionContainer.forEach(el => {
        if (el.classList.contains('contact-selected')){
            el.classList.remove('contact-selected');
        }
    });

    if (target === emailOption){
        contactForm.id = 'email-theme';
        formTitle.innerHTML = 'Send a message to my <a href="#text-input"><abbr title="Copy \'paulomiguel11111971@gmail.com\' to clipboard">Email</abbr></a>!';
        contactMessage.innerHTML = 'Type a message to <a href="#text-input">paulomiguel11111971@gmail.com</a>';
    }
    else if (target === whatsappOption){
        contactForm.id = 'whatsapp-theme';
        formTitle.innerHTML = 'Send a message to my <a href="#text-input"><abbr title="Copy \'+55 (92) 99281-3253\' to clipboard">Whatsapp</abbr></a>!';
        contactMessage.innerHTML = 'Send a message to my whatsapp through this form, or <a target="_blank" href="https://api.whatsapp.com/send/?phone=5592992813253&text=Bom+dia%2C+gostaria+de+fazer+uma+oferta&type=phone_number&app_absent=0">click here</a> to redirect yourself to whatsapp app';
    }
    else if (target === instagramOption){
        contactForm.id = 'instagram-theme';
        formTitle.innerHTML = 'Send a message to my <a href="#text-input"><abbr title="Copy \'@pa__miguel\' to clipboard">Instagram</abbr></a>!';
        contactMessage.innerHTML = 'Type a message to <a href="#text-input">@pa__miguel</a> direct, or visit me through the app <a href="https://www.instagram.com/pa__miguel?igsh=MWxoYzdqNGluZWcyaA%3D%3D">clicking on here</a>';
    }
    else if (target === linkedinOption){
        contactForm.id = 'linkedin-theme';
        formTitle.innerHTML = 'Send a message to my <a href="#text-input">Whatsapp</a>!';
        contactMessage.innerHTML = 'Send a message to my whatsapp through this form or <a target="_blank" href="https://api.whatsapp.com/send/?phone=5592992813253&text=Bom+dia%2C+gostaria+de+fazer+uma+oferta&type=phone_number&app_absent=0">click here</a> to redirect yourself to whatsapp app';
    }
    else if (target === githubOption){
        contactForm.id = 'github-theme';
        formTitle.innerHTML = 'Send a message to my <a href="#text-input">Whatsapp</a>!';
        contactMessage.innerHTML = 'Send a message to my whatsapp through this form or <a target="_blank" href="https://api.whatsapp.com/send/?phone=5592992813253&text=Bom+dia%2C+gostaria+de+fazer+uma+oferta&type=phone_number&app_absent=0">click here</a> to redirect yourself to whatsapp app';
    }
    else if (target === phoneOption){
        contactForm.id = 'phone-theme';
        formTitle.innerHTML = 'Text me a <a href="#text-input"><abbr title="Copy \'+55 (92) 99281-3253\' to clipboard">SMS</abbr></a>';
        contactMessage.innerHTML = 'Send a SMS to <a href="#text-input">+55 (92) 99281-3253</a>';
    }

    target.classList.add('contact-selected');
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