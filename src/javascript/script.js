//#region 

const home = document.querySelector('#home');
const services = document.querySelector('#services');
const projects = document.querySelector('#projects');
const footer = document.querySelector('footer');
const contactScreen = document.querySelector('#contact-screen');
const exitButton = document.querySelector('#exit-button');
const contacts = document.querySelectorAll('#contact-card .contact-options i');
const headerContact = document.querySelector('#header-contacts');

const contactButtons = document.querySelectorAll('.options');
const linkedin = document.querySelector('#linkedin-content');
const whatsapp = document.querySelector('#whatsapp-content');
const instagram = document.querySelector('#instagram-content');
const github = document.querySelector('#github-content');
const email = document.querySelector('#email-content');
const linkedinButton = document.querySelector('#linkedin-icon');
const whatsappButton = document.querySelector('#whatsapp-icon');
const instagramButton = document.querySelector('#instagram-icon');
const githubButton = document.querySelector('#github-icon');
const emailButton = document.querySelector('#email-icon');

const emailFromInput = document.querySelector('#email-from');
const emailMessageInput = document.querySelector('#email-message');
const fromP = document.querySelector('#from-p');
const messageP = document.querySelector('#message-p');

//#endregion

//#region 

headerContact.addEventListener('click', () => {
    contactScreenOpen();
});

contactButton.forEach(el => {
    el.addEventListener('click', () => {
        contactScreenOpen();
    });
});

exitButton.addEventListener('click', () => {
    contactScreenRemove();
});

contacts.forEach(el => {
    el.addEventListener('click', (evt) => {
        const actualOption = document.querySelector('.contact-selected');

        if (evt.target != actualOption){
            actualOption.classList.remove('contact-selected');
            evt.target.classList.add('contact-selected');
        }

        hideContactContent();

        if (evt.target == linkedinButton){
            linkedin.classList.remove('hidden');
        }
        
        if (evt.target == whatsappButton){
            whatsapp.classList.remove('hidden');
        }

        if (evt.target == instagramButton){
            instagram.classList.remove('hidden');
        }

        if (evt.target == githubButton){
            github.classList.remove('hidden');
        }

        if (evt.target == emailButton){
            email.classList.remove('hidden');
        }
    });
});

emailFromInput.addEventListener('focus', () => {
    fromP.style.margin = '0px';
});

fromP.addEventListener('click', () => {
    fromP.style.margin = '0px';
    emailFromInput.focus();
});

emailFromInput.addEventListener('blur', () => {
    if (emailFromInput.value == ""){
        fromP.style.margin = '29px 0px 0px 10px';
    }
});

emailMessageInput.addEventListener('focus', () => {
    messageP.style.margin = '0px';
});

messageP.addEventListener('click', () => {
    messageP.style.margin = '0px';
    emailMessageInput.focus();
});

emailMessageInput.addEventListener('blur', () => {
    if (emailMessageInput.value == ""){
        messageP.style.margin = '29px 0px 0px 10px';
    }
});

//#endregion

//#region 

function hideContactContent(){
    contactButtons.forEach(el => {
        el.classList.add('hidden');
    })
}

function contactScreenOpen(){
    home.classList.add('hidden');
    services.classList.add('hidden');
    projects.classList.add('hidden');
    footer.classList.add('hidden');
    contactScreen.classList.remove('hidden');
}

function contactScreenRemove(){
    home.classList.remove('hidden');
    services.classList.remove('hidden');
    projects.classList.remove('hidden');
    footer.classList.remove('hidden');
    contactScreen.classList.add('hidden');
}

//#endregion

window.sr = ScrollReveal( { reset: true } );

sr.reveal('#card-front-end', { 
    duration: 2000,
    scale: 0.2,
});
sr.reveal('#card-software', { 
    duration: 2000,
    scale: 0.2,
});
sr.reveal('#card-back-end', { 
    duration: 2000,
    scale: 0.2,
});
sr.reveal('.services-title', { 
    duration: 3000,
});