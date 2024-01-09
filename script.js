function menuShow(){
    let menuMobile=document.querySelector('.mobile-menu')
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open')
        document.querySelector('.mobile-icon').src="img/x-preto.png"
    }else{
      menuMobile.classList.add('open')
      document.querySelector('.mobile-icon').src="img/tres-barras-preto.png"
    }
}

const toggle = document.querySelector("#toggle")
toggle.addEventListener("click", modeSwitch)
let isLight=true
function modeSwitch(){
    isLight=!isLight
    let root=document.body
    if (isLight){
      toggle.innerHTML="☀️";
      document.querySelector(".perfil-image").src="img/moldura_perfil_preto.png";
    }
    else{
      toggle.innerHTML="🌑";
      document.querySelector(".perfil-image").src="img/moldura_perfil_branco.png";
    }
    root.classList.toggle("lightMode")
}
