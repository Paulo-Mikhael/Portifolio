//#region 

const home = document.querySelector('#home');
const services = document.querySelector('#services');
const projects = document.querySelector('#projects');
const footer = document.querySelector('footer');
const contactScreen = document.querySelector('#contact-screen');
const exitButton = document.querySelector('#exit-button');
const contacts = document.querySelectorAll('#contact-card .contact-options i');
const headerContact = document.querySelector('#header-contacts');
const contactButton = document.querySelectorAll('.contact-button');
const flag = document.getElementById('header-image');

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

const academiaButton = document.querySelector('.github-project-button#academia-button');
const fastaskButton = document.querySelector('.github-project-button#fastask-button');
const unityButton = document.querySelector('.github-project-button#unity-button');
const modernSoftwareButton = document.querySelector('.github-project-button#modern-software-button');

const hamburguerMenu = document.querySelector('#hamburguer-menu-icon');
const menuSideBar = document.querySelector('#hamburguer-menu-sidebar');
const menuSideBarItems = document.querySelector('#hamburguer-menu-sidebar a');
const mobileLines = document.querySelectorAll('#hamburguer-menu-icon .line');

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

//#region 

academiaButton.addEventListener('click', () => {
    window.open("https://github.com/Paulo-Mikhael/academia-landing-page?tab=readme-ov-file#readme", "_blank");
});
fastaskButton.addEventListener('click', () => {
    window.open("https://github.com/Paulo-Mikhael/fastask?tab=readme-ov-file#readme", "_blank");
});
unityButton.addEventListener('click', () => {
    window.open("https://github.com/Paulo-Mikhael/pagina-unity-2024?tab=readme-ov-file#readme", "_blank");
});
modernSoftwareButton.addEventListener('click', () => {
    window.open("https://github.com/Paulo-Mikhael/ModernDesignSoftware?tab=readme-ov-file#readme", "_blank");
});

//#endregion

//#region 

hamburguerMenu.addEventListener('click', () => {
    if (hamburguerMenu.children[0].style.animationName == '')
    {
        Array.from(hamburguerMenu.children).forEach(el => {
            el.style.position = 'absolute';
            el.style.marginTop = '0';
        });

        hamburguerMenu.children[0].style.animationName = 'translateRight';
        hamburguerMenu.children[0].style.transform = 'rotate(50deg)';
        hamburguerMenu.children[1].style.animationName = 'translateLeft';
        hamburguerMenu.children[1].style.transform = 'rotate(-50deg)';
        hamburguerMenu.children[2].style.display = 'none';

        menuSideBar.style.display = 'flex';
        menuSideBar.style.animationName = 'grow';
        menuSideBar.style.height = '35vh';
    }
    else{
        Array.from(hamburguerMenu.children).forEach(el => {
            el.style.position = 'initial';
            el.style.marginTop = '5px';
        });

        hamburguerMenu.children[0].style.marginTop = '0';

        hamburguerMenu.children[0].style.animationName = '';
        hamburguerMenu.children[0].style.transform = '';
        hamburguerMenu.children[1].style.animationName = '';
        hamburguerMenu.children[1].style.transform = '';

        hamburguerMenu.children[2].style.display = 'block';

        menuSideBar.style.display = 'none';
    }
});

//#endregion