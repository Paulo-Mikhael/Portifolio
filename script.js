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
