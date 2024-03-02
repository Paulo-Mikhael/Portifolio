function menuShow(){
  let menuMobile=document.querySelector('.mobile-menu')
  if (isDark)
  {
    if (menuMobile.classList.contains('open'))
    {
      menuMobile.classList.remove('open')
      document.querySelector('.mobile-icon').src="img/x-branco.png"
    }
    else
    {
      menuMobile.classList.add('open')
      document.querySelector('.mobile-icon').src="img/tres-barras-branco.png"
    }
  }
  else
  {
    if (menuMobile.classList.contains('open'))
    {
      menuMobile.classList.remove('open')
      document.querySelector('.mobile-icon').src="img/x-preto.png"
    }
    else
    {
      menuMobile.classList.add('open')
      document.querySelector('.mobile-icon').src="img/tres-barras-preto.png"
    }
  }
}

const toggle = document.querySelector("#toggle")
const toggleMobile = document.querySelector(".moon-icon-mobile")
const mobileMenu = document.querySelector('.mobile-menu')
const codeIcon = document.querySelector("#code-icon")
const landingImage = document.querySelector('#landing-img')
const btnEsquerda = document.querySelectorAll('.button-left');
const btnDireita = document.querySelectorAll('.button-right');

function mudaCorBotao(urlDireita, urlEsquerda){
  btnDireita.forEach(btn => btn.src=urlDireita)
  btnEsquerda.forEach(btn => btn.src=urlEsquerda)
}

toggle.addEventListener("click", modeSwitch)
toggleMobile.addEventListener("click", modeSwitch)
let isDark=true
function modeSwitch(){
  isDark=!isDark
  let root=document.body
  if (isDark)
  {
    toggleMobile.innerHTML="☀️";
    toggle.innerHTML="☀️";
    codeIcon.src = "img/code-img-branco.png"
    /*landingImage.src = "img/boneco-landing-page-preto.gif"*/
    mudaCorBotao("img/btn-direita-preto.png", "img/btn-esquerda-preto.png")
    
    if (mobileMenu.classList.contains('open'))
    {
      document.querySelector('.mobile-icon').src="img/tres-barras-branco.png"
    }
    else
    {
      document.querySelector('.mobile-icon').src="img/x-branco.png"
    }
    
    document.querySelector(".perfil-image").src="img/moldura_perfil_branco.png";

    if (screen.width <= 650){
      document.getElementById("contend-text").style.backgroundImage = "none"
      document.getElementById("contend-text").style.backgroundColor = "#171923"
    }else{
      document.getElementById("contend-text").style.backgroundImage = "url(img/portifolio-background-preto.png)"
    }
  }
  else
  {
    toggleMobile.innerHTML="🌑";
    toggle.innerHTML="🌑";
    codeIcon.src = "img/code-img-preto.png"
    /*landingImage.src = "img/boneco-landing-page-branco.gif"*/
    mudaCorBotao("img/btn-direita-branco.png", "img/btn-esquerda-branco.png")

    if (mobileMenu.classList.contains('open'))
    {
      document.querySelector('.mobile-icon').src = "img/tres-barras-preto.png"
    }
    else
    {
      document.querySelector('.mobile-icon').src="img/x-preto.png"
    }

    document.querySelector(".perfil-image").src="img/moldura_perfil_preto.png"
    
    if (screen.width <= 650){
      document.getElementById("contend-text").style.backgroundImage = "none"
      document.getElementById("contend-text").style.backgroundColor = "#cecccc"
    }else{
      document.getElementById("contend-text").style.backgroundImage = "url(img/portifolio-background-branco.png)"
    }
  }
  toggleMobile.style.paddingLeft = "4px"
  root.classList.toggle("darkMode")
}

function changeText() {
  const emProgressoText = document.querySelector('#em-progresso')
  const emProgressoPoster = document.querySelector('.em-progresso');
  const celestialChicText = document.querySelector('#celestial-chic');
  const celestialChicPoster = document.querySelector('#celestial-chic-poster');
  const landingTextContainer = document.querySelector('#landing-text-container');

  if (celestialChicPoster.classList.contains('main-page')) {
      celestialChicText.classList.remove('open');
      emProgressoText.classList.add('open');
      landingTextContainer.style.border = '2px solid var(--celestial-chic)';
      landingTextContainer.style.backgroundColor = 'var(--celestial-chic-background)';
  } else {
      celestialChicText.classList.add('open');
      emProgressoText.classList.remove('open');
      landingTextContainer.style.border = '2px solid var(--em-progresso)';
      landingTextContainer.style.backgroundColor = 'var(--em-progresso-background)';
  }
}

function changeTextClone(){
  const paginaUnity = document.querySelector('#pagina-unity');
  const posterUnity = document.querySelector('#unity-poster');
  const paginaGartic = document.querySelector('#pagina-gartic');
  const posterGartic = document.querySelector('#gartic-poster');
  const paginaSpotify = document.querySelector('#pagina-spotify');
  const posterSpotify = document.querySelector('#spotify-poster');
  const cloneTextContainer = document.querySelector('#clone-text-container');

  if (posterUnity.classList.contains('main-page')){
    paginaGartic.classList.add('open');
    paginaSpotify.classList.add('open');
    paginaUnity.classList.remove('open');
    cloneTextContainer.style.border = '2px solid var(--pagina-unity)';
    cloneTextContainer.style.backgroundColor = 'var(--pagina-unity-background)';
  }
  else if (posterGartic.classList.contains('main-page')){
    paginaGartic.classList.remove('open');
    paginaUnity.classList.add('open');
    paginaSpotify.classList.add('open');
    cloneTextContainer.style.border = '2px solid var(--gartic)';
    cloneTextContainer.style.backgroundColor = 'var(--gartic-background)';
  }else if (posterSpotify.classList.contains('main-page')){
    paginaSpotify.classList.remove('open');
    paginaGartic.classList.add('open');
    paginaUnity.classList.add('open');
    cloneTextContainer.style.border = '2px solid var(--spotify)';
    cloneTextContainer.style.backgroundColor = 'var(--spotify-background)';
  }
  console.log(paginaUnity.classList.value)
}


function changePagesClone() {
  const mainPage = document.querySelector('.clone-sites > .projects > .main-page');
  const pageLeft = document.querySelector('.clone-sites > .projects > .pageLeft');
  const pageRight = document.querySelector('.clone-sites > .projects > .pageRight');

  document.body.addEventListener('click', evt => {
    var click = evt.target;
    var id = click.id;
    
    if (id == "clone-button-right"){
      mainPage.removeAttribute('class')
      mainPage.classList.add('pageRight');
    
      pageRight.removeAttribute('class');
      pageRight.classList.add('pageLeft');
    
      pageLeft.removeAttribute('class')
      pageLeft.classList.add('main-page');
    }else if (id == "clone-button-left"){
      mainPage.removeAttribute('class')
      mainPage.classList.add('pageLeft');
    
      pageRight.removeAttribute('class');
      pageRight.classList.add('main-page');
    
      pageLeft.removeAttribute('class')
      pageLeft.classList.add('pageRight');
    }
    changeTextClone();
  })
}

function changePagesLanding() {
  const mainPage = document.querySelector('.landing-pages > .projects > .main-page');
  const pageLeft = document.querySelector('.landing-pages > .projects > .pageLeft');
  const pageRight = document.querySelector('.landing-pages > .projects > .pageRight');

  document.body.addEventListener('click', evt => {
    var click = evt.target;
    var id = click.id;
    
    if (id == "landing-button-right"){
      mainPage.removeAttribute('class')
      mainPage.classList.add('pageRight');
      
      pageRight.removeAttribute('class');
      pageRight.classList.add('pageLeft');
      
      pageLeft.removeAttribute('class')
      pageLeft.classList.add('main-page');
      changeText();
    }else if (id == "landing-button-left"){
      mainPage.removeAttribute('class')
      mainPage.classList.add('pageLeft');
      
      pageRight.removeAttribute('class');
      pageRight.classList.add('main-page');
      
      pageLeft.removeAttribute('class')
      pageLeft.classList.add('pageRight');
      changeText();
    }
  })
}

function copyToClipboard(text) {
  var textarea = document.createElement("textarea");
  textarea.value = text;
  
  textarea.style.position = "absolute";
  textarea.style.left = "-9999px";

  document.body.appendChild(textarea);

  textarea.select();
  document.execCommand('copy');

  document.body.removeChild(textarea);
  if (text == '92 99281-3253'){
    alert('Copiado para a área de transferência')
  }else if (text == 'paulomiguel11111971@gmail.com'){
    var confirmacao = confirm('Email: paulomiguel11111971@gmail.com; \r\nCopiado para a área de transferência. \r\n \r\nDeseja abrir o formulário de contato?')
    if (confirmacao == true){
      window.open('https://paulo-mikhael.github.io/formulario-contato/')
    }
  }
}
