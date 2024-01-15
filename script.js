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
const emProgresso = document.querySelectorAll('#progresso')
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
    
    if (mobileMenu.classList.contains('open'))
    {
      document.querySelector('.mobile-icon').src="img/tres-barras-branco.png"
    }
    else
    {
      document.querySelector('.mobile-icon').src="img/x-branco.png"
    }
    
    emProgresso.src = 'img/em-progresso-branco2.png'
    document.querySelector(".perfil-image").src="img/moldura_perfil_branco.png";
    if (screen.width <= 650){
      document.getElementById("contend-text").style.backgroundImage = "none"
      document.getElementById("contend-text").style.backgroundColor = "#171923"
    }else{
      document.getElementById("contend-text").style.backgroundImage = "url(img/Portifolio-background.png)"
    }
  }
  else
  {
    toggleMobile.innerHTML="🌑";
    toggle.innerHTML="🌑";

    if (mobileMenu.classList.contains('open'))
    {
      document.querySelector('.mobile-icon').src = "img/tres-barras-preto.png"
    }
    else
    {
      document.querySelector('.mobile-icon').src="img/x-preto.png"
    }

    emProgresso.src = 'img/em-progresso-preto.png'
    document.querySelector(".perfil-image").src="img/moldura_perfil_preto.png"
    
    if (screen.width <= 650){
      document.getElementById("contend-text").style.backgroundImage = "none"
      document.getElementById("contend-text").style.backgroundColor = "#cecccc"
    }else{
      document.getElementById("contend-text").style.backgroundImage = "url(img/Portifolio-background-branco.png)"
    }
  }
  root.classList.toggle("darkMode")
}

function ajustarConfiguracao() {
  var scrollTop = window.scrollY;

  if (scrollTop > 10) {
    document.getElementById('bar').style.position = 'fixed'
    document.getElementById('bar').style.marginTop = '0px'

    document.getElementById('mobile-bar').style.marginTop = '52px'

  } else {
    document.getElementById('bar').style.position = ''

    document.getElementById('mobile-bar').style.marginTop = '0px'
  }
}

window.addEventListener("scroll", ajustarConfiguracao)
