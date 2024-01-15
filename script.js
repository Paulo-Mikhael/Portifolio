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
  }
  else
  {
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
  }
  root.classList.toggle("darkMode")
}

function ajustarConfiguracao() {
  var scrollTop = window.scrollY;

  if (scrollTop > 45) {
    document.getElementById('bar').style.position = 'fixed'
    document.getElementById('bar').style.marginTop = '0px'
    document.getElementById('bar').style.height = '50px'
    document.getElementById('bar').style.borderBottom = '2px solid var(--mobile-menu-border)'

    document.getElementById('mobile-bar').style.marginTop = '52px'

    document.getElementById('mobile-home').style.borderTop = ''
  } else {
    document.getElementById('bar').style.position = ''
    if (screen.width <= 650){
      document.getElementById('bar').style.marginTop = '0px'
    }else{
      document.getElementById('bar').style.marginTop = '15px'
    }
    document.getElementById('bar').style.height = '40px'
    document.getElementById('bar').style.borderBottom = ''

    document.getElementById('mobile-bar').style.marginTop = '0px'

    document.getElementById('mobile-home').style.borderTop = '2px solid var(--mobile-menu-border)'
  }
}

window.addEventListener("scroll", ajustarConfiguracao)
