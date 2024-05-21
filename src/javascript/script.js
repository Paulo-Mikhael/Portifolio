//#region 

const home = document.querySelector('#home');
const services = document.querySelector('#services');
const projects = document.querySelector('#projects');
const footer = document.querySelector('footer');
const contactButton = document.querySelectorAll('.contact-button');
const flag = document.getElementById('header-image');

const hamburguerMenu = document.querySelector('#hamburguer-menu-icon');
const menuSideBar = document.querySelector('#hamburguer-menu-sidebar');
const menuSideBarItems = document.querySelector('#hamburguer-menu-sidebar a');
const mobileLines = document.querySelectorAll('#hamburguer-menu-icon .line');

//#endregion

//#region

contactButton.forEach(el => {
    el.addEventListener('click', () => {
        window.location.replace('Pages/contacts/');
    });
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