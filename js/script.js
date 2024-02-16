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
const btnEsquerda = document.querySelectorAll('.btn-esquerda');
const btnDireita = document.querySelectorAll('.btn-direita');

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

function ajustarConfiguracao() {
  var scrollTop = window.scrollY;
  if (scrollTop > 1100){
    const landingLeftButton = document.querySelector('#landing-left-button')
    const landingRightButton = document.querySelector('#landing-right-button')

    landingLeftButton.classList.add('arrowLeft');
    landingRightButton.classList.add('arrowRight');
  }
}

const celestialChicText = document.querySelector('#celestial-chic');
const celestialChicPoster = document.querySelector('#celestial-chic-poster');
const emProgressoText = document.querySelector('#em-progresso')
const emProgressoPoster = document.querySelector('.em-progresso');

function changeText()
{
  if (celestialChicPoster.classList.contains('main-page'))
  {
    celestialChicText.classList.remove('open');

    emProgressoText.classList.add('open');
  }
  else
  {
    emProgressoText.classList.remove('open');
    
    celestialChicText.classList.add('open');
  }
}

function changePageToLeft() {
  const mainPage = document.querySelector('.main-page');
  const pageLeft = document.querySelector('.pageLeft');
  const pageRight = document.querySelector('.pageRight');

  mainPage.classList.remove('main-page');
  mainPage.classList.add('pageLeft');

  pageRight.classList.remove('pageRight');
  pageRight.classList.add('main-page');

  pageLeft.classList.remove('pageLeft');
  pageLeft.classList.add('pageRight');

  changeText();
}

function changePageToRight() {
  const mainPage = document.querySelector('.main-page');
  const pageLeft = document.querySelector('.pageLeft');
  const pageRight = document.querySelector('.pageRight');

  mainPage.classList.remove('main-page');
  mainPage.classList.add('pageRight');

  pageRight.classList.remove('pageRight');
  pageRight.classList.add('pageLeft');

  pageLeft.classList.remove('pageLeft');
  pageLeft.classList.add('main-page');

  changeText();
}

window.addEventListener("scroll", ajustarConfiguracao)

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
