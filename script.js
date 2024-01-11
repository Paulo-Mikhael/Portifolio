function menuShow(){
  let menuMobile=document.querySelector('.mobile-menu')
  if (isLight)
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
  else
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
}

const toggle = document.querySelector("#toggle")
const toggleMobile = document.querySelector(".moon-icon-mobile")
const mobileMenu = document.querySelector('.mobile-menu')
toggle.addEventListener("click", modeSwitch)
toggleMobile.addEventListener("click", modeSwitch)
let isLight=true
function modeSwitch(){
  isLight=!isLight
  let root=document.body
  if (isLight)
  {
    toggle.innerHTML="☀️";

    if (mobileMenu.classList.contains('open'))
    {
      document.querySelector('.mobile-icon').src = "img/tres-barras-preto.png"
    }
    else
    {
      document.querySelector('.mobile-icon').src="img/x-preto.png"
    }

    document.querySelector(".perfil-image").src="img/moldura_perfil_preto.png";
  }
  else
  {
    toggle.innerHTML="🌑";
    
    if (mobileMenu.classList.contains('open'))
    {
      document.querySelector('.mobile-icon').src="img/tres-barras-branco.png"
    }
    else
    {
      document.querySelector('.mobile-icon').src="img/x-branco.png"
    }
    

    document.querySelector(".perfil-image").src="img/moldura_perfil_branco.png";
  }
  root.classList.toggle("lightMode")
}

function ajustarConfiguracao() {
  // Obtenha a posição atual de rolagem vertical
  var scrollTop = window.scrollY;

  // Verifique a posição de rolagem e ajuste as configurações conforme necessário
  if (scrollTop > 50) {
    // Exemplo: Alterar a cor de fundo quando a rolagem atinge 200 pixels
    document.getElementById('bar').style.position = 'fixed'
    document.getElementById('bar').style.marginTop = '0px'
    document.getElementById('bar').style.height = '50px'
    document.getElementById('bar').style.borderBottom = '2px solid var(--mobile-menu-border)'

  } else {
    // Reverter a mudança quando a rolagem for menor que 200 pixels
    document.getElementById('bar').style.position = ''
    
    if (screen.width <= 650){
      document.getElementById('bar').style.marginTop = '0px'
    }else{
      document.getElementById('bar').style.marginTop = '15px'
    }
    document.getElementById('bar').style.height = '40px'
    document.getElementById('bar').style.borderBottom = ''
  }
}

window.addEventListener("scroll", ajustarConfiguracao)
