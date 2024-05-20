const playButton = document.querySelector('#play-button img');
const videoButtons = document.querySelector('#video-buttons');
const pauseButton = document.querySelector('#video-pause');
const moveOnSecondButton = document.querySelector('#moveon-second-button');
const returnSecondButton = document.querySelector('#return-second-button');
const maximizeButton = document.querySelector('#maximize-button');
const video = document.querySelector('#video video');
const videoFilter = document.querySelector('#video #filter');

playButton.addEventListener('click', () => {
    video.play();
    playButton.style.display = 'none';
    videoFilter.style.backgroundColor = '#00000000';
    videoButtons.style.display = 'flex';
});
pauseButton.addEventListener('click', () => {
    video.pause();
    playButton.style.display = '';
    videoFilter.style.backgroundColor = '#000000a1';
    videoButtons.style.display = 'none';
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