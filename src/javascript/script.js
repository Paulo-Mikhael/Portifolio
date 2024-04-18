const home = document.querySelector('#home');
const services = document.querySelector('#services');
const projects = document.querySelector('#projects');
const footer = document.querySelector('footer');
const contactScreen = document.querySelector('#contact-screen');
const exitButton = document.querySelector('#exit-button');
const contacts = document.querySelectorAll('#contact-card .contact-options i');

const contactButtons = document.querySelectorAll('.options');
const linkedin = document.querySelector('#linkedin-content');
const whatsapp = document.querySelector('#whatsapp-content');
const instagram = document.querySelector('#instagram-content');
const github = document.querySelector('#github-content');
const linkedinButton = document.querySelector('#linkedin-icon');
const whatsappButton = document.querySelector('#whatsapp-icon');
const instagramButton = document.querySelector('#instagram-icon');
const githubButton = document.querySelector('#github-icon');

contactButton.forEach(el => {
    el.addEventListener('click', () => {
        home.classList.add('hidden');
        services.classList.add('hidden');
        projects.classList.add('hidden');
        footer.classList.add('hidden');
        contactScreen.classList.remove('hidden');
    });
});

exitButton.addEventListener('click', () => {
    home.classList.remove('hidden');
    services.classList.remove('hidden');
    projects.classList.remove('hidden');
    footer.classList.remove('hidden');
    contactScreen.classList.add('hidden');
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
    });
});

function hideContactContent(){
    contactButtons.forEach(el => {
        el.classList.add('hidden');
    })
}

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