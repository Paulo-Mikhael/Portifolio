//Variables
const playButton = document.querySelector('#play-button img');
const videoButtons = document.querySelector('#video-buttons');
const pauseButton = document.querySelector('#video-pause');
const moveOnSecondButton = document.querySelector('#moveon-second-button');
const returnSecondButton = document.querySelector('#return-second-button');
const maximizeButton = document.querySelector('#maximize-button');
const helpButton = document.querySelector('#help-button');
const helpContainer = document.querySelector('#help-container');
const progressBar = document.querySelector('#progress-bar');
const videoTimeP = document.querySelector('#video-time p');
const videoContainer = document.querySelector('#video');
const video = document.querySelector('#video video');
const videoFilter = document.querySelector('#video #filter');
const contactButton = document.querySelectorAll('.contact-button');
const arrowLeft = document.querySelector('#arrow-left img');
const arrowRight = document.querySelector('#arrow-right img');
const videoCirclesContainer = document.querySelector('#status-circles');
const videoCircles = document.querySelectorAll('.circle');
const hiddenCircle = videoCircles[0];
const leftCircle = videoCircles[1];
const mainCircle = videoCircles[2];
const rightCircle = videoCircles[3];
const projectTextContainer = document.querySelector('#project-text');
const projectTitle = document.querySelector('#project-title');
const projectSubtitle = document.querySelector('#project-subtitle');
const iconsTecnologiesContainer = document.querySelector('#icons');
const projectsCarrousel = document.querySelectorAll('#projects-carousel img');
let order = 0;
const projectVideos = [
    {
        name: 'consul',
        function: () => changeVideoToConsul()
    },
    {
        name: 'academia',
        function: () => changeVideoToAcademia()
    },
    {
        name: 'unity',
        function: () => changeVideoToUnity()
    },
    {
        name: 'fastask',
        function: () => changeVideoToFastask()
    },
    {
        name: 'software',
        function: () => changeVideoToSoftware()
    }
]

//Functions
function pauseVideo(){
    video.pause();
    playButton.style.display = '';
    videoFilter.style.backgroundColor = '#000000a1';
    videoButtons.style.display = 'none';
}
function playVideo(){
    video.play();
    playButton.style.display = 'none';
    videoFilter.style.backgroundColor = '#00000000';
    videoButtons.style.display = 'flex';
}
function colocarEmTelaCheia() {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) { // Firefox
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) { // Chrome, Safari e Opera
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { // IE/Edge
        video.msRequestFullscreen();
    }
}
function previousVideo(){
    pauseVideo();
    video.currentTime = 0;

    if (videoContainer.classList.contains('previousVideo'))
    {
        videoContainer.classList.remove('previousVideo');
    }

    setInterval(() => {
        videoContainer.classList.add('previousVideo');
    }, 500);

    circlesPreviousAnimation();
    previousVideoContainer();
}
function nextVideo(){
    pauseVideo();
    video.currentTime = 0;
    
    if (videoContainer.classList.contains('nextVideo'))
    {
        videoContainer.classList.remove('nextVideo');
    }

    setInterval(() => {
        videoContainer.classList.add('nextVideo');
    }, 500);

    circlesNextAnimation();
    nextVideoContainer();
}
function circlesPreviousAnimation(){
    videoCircles.forEach(el => {
        el.style.animationDirection = 'reverse';
    });

    setInterval(() => {    
        hiddenCircle.style.animationName = 'nextHiddenCircle';
        leftCircle.style.animationName = 'nextLeftCircle';
        mainCircle.style.animationName = 'nextMainCircle';
        rightCircle.style.animationName = 'nextRightCircle';
    }, 500);

    hiddenCircle.style.animationName = '';
    leftCircle.style.animationName = '';
    mainCircle.style.animationName = '';
    rightCircle.style.animationName = '';
}
function circlesNextAnimation(){
    videoCircles.forEach(el => {
        el.style.animationDirection = 'normal';
    });

    setInterval(() => {
        hiddenCircle.style.animationName = 'nextHiddenCircle';
        leftCircle.style.animationName = 'nextLeftCircle';
        mainCircle.style.animationName = 'nextMainCircle';
        rightCircle.style.animationName = 'nextRightCircle';
    }, 500);
    
    hiddenCircle.style.animationName = '';
    leftCircle.style.animationName = '';
    mainCircle.style.animationName = '';
    rightCircle.style.animationName = '';
}
function updateProgressBar() {
    const percentage = (video.currentTime / video.duration) * 100;
    progressBar.style.width = percentage + '%';

    videoTimeP.innerHTML = `${formatTime(video.currentTime)} / ${formatTime(video.duration)}`;
}
function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${formattedMinutes}:${formattedSeconds}`;
}
function controls(event){
    if (event.shiftKey) {
        switch (event.key) {
            case 'ArrowLeft':
                previousVideo();
                break;
            case 'ArrowRight':
                nextVideo();
                break;
        }
    }
    if (event.key == 'F' || event.key == 'f'){
        colocarEmTelaCheia();
    }
    if (event.key == 'K' || event.key == 'k'){
        if (video.paused == true){
            playVideo();
        }
        else if (video.paused == false){
            pauseVideo();
        }
    }
    if (event.key == 'L' || event.key == 'l'){
        video.currentTime += 5;
    }
    if (event.key == 'J' || event.key == 'j'){
        video.currentTime -= 5;
    }
}
function nextVideoContainer(){
    if (order != projectVideos.length - 1){
        order++;
    } else{
        order = 0;
    }

    if (order < projectVideos.length){
        clearTecnologies();
        projectVideos[order].function();
    }
}
function previousVideoContainer(){
    if (order > 0){
        order--;
    } else{
        order = projectVideos.length - 1;
    }
    
    if (order >= 0){
        clearTecnologies();
        projectVideos[order].function();
    }
}
function changeVideoToConsul(){
    changeCarouselSelected('consul');
    appendTecnologiesClass('devicon-html5-plain');
    appendTecnologiesClass('devicon-css3-plain');

    projectTextContainer.classList.remove(projectTextContainer.classList[0]);
    projectTextContainer.classList.add('consul-theme');

    projectTitle.textContent = 'Consul+ Dentistry and Aesthetics';
    projectSubtitle.innerHTML = 'Neste projeto é apresentado a página de uma clínica odontógica, <a target="_blank" href="https://paulo-mikhael.github.io/consul-plus">a Consul+</a>, neste site é destacado um formulário para contato e os cards que apresentam os serviços, gerando atenção aos serviços da empresa.';

    loadVideo('../../src/images/consul-plus-video.mp4');
}
function changeVideoToAcademia(){
    changeCarouselSelected('academia');
    clearTecnologies();
    appendTecnologiesClass('devicon-html5-plain');
    appendTecnologiesClass('devicon-css3-plain');

    projectTextContainer.classList.remove(projectTextContainer.classList[0]);
    projectTextContainer.classList.add('academia-theme');

    projectTitle.textContent = 'Academia Vitalidade Fitness';
    projectSubtitle.innerHTML = 'Este projeto é uma página para uma academia, nela, é apresentado diversos cursos, sempre seguidos de mensagens motivadoras e que falam que a <a target="_blank" href="https://paulo-mikhael.github.io/academia-landing-page">Academia Vitalidade Fitness</a> é o lugar certo para sentirem sua evolução.';

    loadVideo('../../src/images/academia-video.mp4');
}
function changeVideoToFastask(){
    changeCarouselSelected('fastask');
    appendTecnologiesClass('devicon-html5-plain');
    appendTecnologiesClass('devicon-css3-plain');
    appendTecnologiesClass('devicon-javascript-plain');

    projectTextContainer.classList.remove(projectTextContainer.classList[0]);
    projectTextContainer.classList.add('fastask-theme');

    projectTitle.textContent = 'Fastask - Task Manager';
    projectSubtitle.innerHTML = 'A <a target="_blank" href="https://paulo-mikhael.github.io/fastask">Fastask</a> é uma aplicação web que busca facilitar a gestão de tarefas, a página possui um design limpo e intuitivo, seu funcionamento consiste principalmente em criar, excluir e editar tarefas.';

    loadVideo('../../src/images/fastask-video.mp4');
}
function changeVideoToUnity(){
    changeCarouselSelected('unity');
    appendTecnologiesClass('devicon-html5-plain');
    appendTecnologiesClass('devicon-css3-plain');
    appendTecnologiesClass('devicon-javascript-plain');

    projectTextContainer.classList.remove(projectTextContainer.classList[0]);
    projectTextContainer.classList.add('unity-theme');

    projectTitle.textContent = '[Clone] Unity Page';
    projectSubtitle.innerHTML = 'Neste projeto, decidi recriar o <a target="_blank" href="https://paulo-mikhael.github.io/pagina-unity-2024">site da Unity</a> esta é uma boa página de vendas pois apesar de o principal da página ser a versão profissional do app, tenta redirecionar o usuário para outras páginas da empresa, gerando a retenção do cliente e favorecendo o SEO do site.';

    loadVideo('../../src/images/unity-video.mp4');
}
function changeVideoToSoftware(){
    changeCarouselSelected('software');
    appendTecnologiesClass('devicon-csharp-plain');

    projectTextContainer.classList.remove(projectTextContainer.classList[0]);
    projectTextContainer.classList.add('software-theme');

    projectTitle.textContent = 'Modern Software UI';
    projectSubtitle.innerHTML = 'Neste projeto é apresentado um aplicativo com um design moderno e intuitivo facilitando o uso das funções que irão ser incluídas';

    loadVideo('../../src/images/modern-software-video.mp4');
}
function changeCarouselSelected(projectVideoName){
    for (let i = 0; i < projectVideos.length; i++){
        if (projectVideos[i].name === projectVideoName){
            order = i;
        }
    }

    projectsCarrousel.forEach(el => {
        if (el.classList.contains('project-selected')){
            el.classList.remove('project-selected');
        }

        if (el.classList.contains(`${projectVideoName}-carousel`)){
            el.classList.add('project-selected');
        }
    });
}
function clearTecnologies(){
    video.removeAttribute('src');

    while (iconsTecnologiesContainer.childElementCount != 0){
        iconsTecnologiesContainer.removeChild(iconsTecnologiesContainer.children[0]);
    }
}
function appendTecnologiesClass(tecnologiesIClass){
    const iElement = document.createElement('i');
    iElement.classList.add(tecnologiesIClass);

    iconsTecnologiesContainer.appendChild(iElement);
}
function loadVideo(src){
    video.src = src;

    video.onerror = function() {
        alert('Ocorreu um problema com o vídeo, não foi possível carregar');
    };

    video.oncanplaythrough = function() {
        console.log('vídeo pronto');
    };

    video.load();
}
loadVideo('../../src/images/consul-plus-video.mp4');
function helpButtonActive(target){
    target.style.backgroundColor = 'lime';

    
}

//Events
contactButton.forEach(el => {
    el.addEventListener('click', () => {
        window.location.replace('../contacts/');
    });
});
playButton.addEventListener('click', () => {
    playVideo();
});
pauseButton.addEventListener('click', () => {
    pauseVideo();
});
video.addEventListener('pause', () => {
    pauseVideo();
});
moveOnSecondButton.addEventListener('click', () => {
    video.currentTime += 5;
});
returnSecondButton.addEventListener('click', () => {
    video.currentTime -= 5;
});
maximizeButton.addEventListener('click', () => {
    colocarEmTelaCheia();
});
arrowLeft.addEventListener('mouseover', () => {
    arrowLeft.setAttribute('src', '../../src/images/arrow-left-hover.png');
});
arrowLeft.addEventListener('mouseleave', () => {
    arrowLeft.setAttribute('src', '../../src/images/arrow-left.png');
});
arrowLeft.addEventListener('click', () => {
    previousVideo();
});
arrowRight.addEventListener('mouseover', () => {
    arrowRight.setAttribute('src', '../../src/images/arrow-right-hover.png');
});
arrowRight.addEventListener('mouseleave', () => {
    arrowRight.setAttribute('src', '../../src/images/arrow-right.png');
});
arrowRight.addEventListener('click', () => {
    nextVideo();
});
leftCircle.addEventListener('click', () => {
    previousVideo();
});
rightCircle.addEventListener('click', () => {
    nextVideo();
});
video.addEventListener('timeupdate', () => {
    if (playButton.style.display === 'none'){
        updateProgressBar();
    }else{
        pauseVideo();
    }
});
document.addEventListener('keydown', function(event) {
    controls(event);
});
projectsCarrousel.forEach(el => {
    el.addEventListener('click', (evt) => {
        const target = evt.target;

        if (target.classList.contains('soon') == false && target.classList.contains('project-selected') == false){
            const className = target.classList[0];
            const newClassName = className.replace('-carousel', '');

            changeCarouselSelected(newClassName);
            order--;
            nextVideo();
        }
    });
});
helpButton.addEventListener('click', () => {
    if (helpButton.classList.contains('help-button-actived')){
        helpButton.classList.remove('help-button-actived');
        helpContainer.style.width = '0px';
        helpContainer.style.height = '0px';
        helpContainer.children[0].style.opacity = '0%';
    }else{
        helpButton.classList.add('help-button-actived');
        helpContainer.style.width = '500px';
        helpContainer.style.height = '200px';
        helpContainer.children[0].style.opacity = '100%';
    }
});