const frontEndButton = document.querySelector("#front-end-button");
const backEndButton = document.querySelector("#back-end-button");
const softwaresButton = document.querySelector("#softwares-button");
const previousButton = document.querySelector("#previous");
const nextButton = document.querySelector("#next");
const tecnologiesText = document.querySelector(".tecnologies > h6");
const textContainer = document.querySelector(".text-button");
const avfText = document.querySelector("#avf-text");
const fastaskText = document.querySelector("#fastask-text");
const guiaText = document.querySelector("#guia-text");
const unityText = document.querySelector("#unity-text");
const garticText = document.querySelector("#gartic-text");
const imageA = document.querySelector(".image > a");
const imageContainer = document.querySelector(".image > a > img");
const buttonGithub = document.querySelector(".buttons > a > #github");
const buttonSite = document.querySelector(".buttons > a > #site");
const buttonDesign = document.querySelector(".buttons > a > #design");
const javascriptIcon = document.querySelector(".devicon-javascript-plain");

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

function copyToClipboard(text) {
  var textarea = document.createElement("textarea");
  textarea.value = text;
  
  textarea.style.position = "absolute";
  textarea.style.left = "-9999px";

  document.body.appendChild(textarea);

  textarea.select();
  document.execCommand('copy');

  document.body.removeChild(textarea);
}

function fastaskTheme()
{
  nextButton.style.backgroundColor = "var(--fastask-background)";
  nextButton.style.border = "3px solid var(--fastask-poster)";
  nextButton.style.color = "var(--fastask-font)";
  previousButton.style.backgroundColor = "var(--fastask-background)";
  previousButton.style.border = "3px solid var(--fastask-poster)";
  previousButton.style.color = "var(--fastask-font)";
  tecnologiesText.style.color = "var(--fastask-poster)";
  textContainer.style.backgroundColor = "var(--fastask-background)";
  textContainer.style.border = "3px solid var(--fastask-poster)";
  imageA.setAttribute("href", "https://paulo-mikhael.github.io/fastask/");
  imageContainer.setAttribute("src", "img/Fastask-poster.png");
  imageContainer.setAttribute("alt", "Fastask-poster.png");
  imageContainer.addEventListener("mouseenter", () => {imageContainer.style.border = "3px solid var(--fastask-poster)"});
  imageContainer.addEventListener("mouseleave", () => {imageContainer.style.border = "3px solid var(--front-end-border)"});
  buttonSite.parentElement.setAttribute("href", "https://paulo-mikhael.github.io/fastask/");
  buttonGithub.parentElement.setAttribute("href", "https://github.com/Paulo-Mikhael/fastask/");
  buttonDesign.parentElement.setAttribute("href", "https://drive.google.com/drive/folders/1f4Wq0-4xKMTeNsDwOT7qy-XSfVP_8LgA?usp=drive_link");
  javascriptIcon.classList.remove("open");
  avfText.classList.add("open");
  fastaskText.classList.remove("open");
  guiaText.classList.add("open");
  unityText.classList.add("open");
  garticText.classList.add("open");
}

function avfTheme()
{
  nextButton.style.backgroundColor = "var(--avf-background)";
  nextButton.style.border = "3px solid var(--avf-poster)";
  nextButton.style.color = "var(--avf-poster)";
  previousButton.style.backgroundColor = "var(--avf-background)";
  previousButton.style.border = "3px solid var(--avf-poster)";
  previousButton.style.color = "var(--avf-poster)";
  tecnologiesText.style.color = "var(--avf-poster)";
  textContainer.style.backgroundColor = "var(--avf-background)";
  textContainer.style.border = "3px solid var(--avf-poster)";
  imageA.setAttribute("href", "https://paulo-mikhael.github.io/academia-landing-page/");
  imageContainer.setAttribute("src", "img/avf-poster.png");
  imageContainer.setAttribute("alt", "avf-poster.png");
  imageContainer.addEventListener("mouseenter", () => {imageContainer.style.border = "3px solid var(--avf-poster)"});
  imageContainer.addEventListener("mouseleave", () => {imageContainer.style.border = "3px solid var(--front-end-border)"});
  buttonSite.parentElement.setAttribute("href", "https://paulo-mikhael.github.io/academia-landing-page/");
  buttonGithub.parentElement.setAttribute("href", "https://github.com/Paulo-Mikhael/academia-landing-page/");
  buttonDesign.parentElement.setAttribute("href","https://drive.google.com/drive/folders/1zgeYl-gR0xMGEpaVz2N994JK4wLCXq8L?usp=drive_link");
  javascriptIcon.classList.add("open");
  avfText.classList.remove("open");
  fastaskText.classList.add("open");
  guiaText.classList.add("open");
  unityText.classList.add("open");
  garticText.classList.add("open");
}

function guiaTheme()
{
  nextButton.style.backgroundColor = "var(--guia-background)";
  nextButton.style.border = "3px solid var(--guia-poster)";
  nextButton.style.color = "var(--guia-poster)";
  previousButton.style.backgroundColor = "var(--guia-background)";
  previousButton.style.border = "3px solid var(--guia-poster)";
  previousButton.style.color = "var(--guia-poster)";
  tecnologiesText.style.color = "var(--guia-poster)";
  textContainer.style.backgroundColor = "var(--guia-background)";
  textContainer.style.border = "3px solid var(--guia-poster)";
  imageA.setAttribute("href", "https://paulo-mikhael.github.io/guia-turistico");
  imageContainer.setAttribute("src", "img/Guia-poster.png");
  imageContainer.setAttribute("alt", "Guia-poster.png");
  imageContainer.addEventListener("mouseenter", () => {imageContainer.style.border = "3px solid var(--guia-poster)"});
  imageContainer.addEventListener("mouseleave", () => {imageContainer.style.border = "3px solid var(--front-end-border)"});
  buttonSite.parentElement.setAttribute("href", "https://paulo-mikhael.github.io/guia-turistico");
  buttonGithub.parentElement.setAttribute("href", "https://github.com/Paulo-Mikhael/guia-turistico");
  buttonDesign.parentElement.setAttribute("href","https://drive.google.com/drive/folders/1zgeYl-gR0xMGEpaVz2N994JK4wLCXq8L?usp=drive_link");
  javascriptIcon.classList.remove("open");
  avfText.classList.add("open");
  fastaskText.classList.add("open");
  guiaText.classList.remove("open");
  unityText.classList.add("open");
  garticText.classList.add("open");
}

function unityTheme()
{
  nextButton.style.backgroundColor = "var(--pagina-unity-background)";
  nextButton.style.border = "3px solid var(--pagina-unity)";
  nextButton.style.color = "var(--pagina-unity)";
  previousButton.style.backgroundColor = "var(--pagina-unity-background)";
  previousButton.style.border = "3px solid var(--pagina-unity)";
  previousButton.style.color = "var(--pagina-unity)";
  tecnologiesText.style.color = "var(--pagina-unity)";
  textContainer.style.backgroundColor = "var(--pagina-unity-background)";
  textContainer.style.border = "3px solid var(--pagina-unity)";
  imageA.setAttribute("href", "https://paulo-mikhael.github.io/pagina-unity-2024");
  imageContainer.setAttribute("src", "img/pagina-unity-poster-v1.png");
  imageContainer.setAttribute("alt", "pagina-unity-poster.png");
  imageContainer.addEventListener("mouseenter", () => {imageContainer.style.border = "3px solid var(--pagina-unity)"});
  imageContainer.addEventListener("mouseleave", () => {imageContainer.style.border = "3px solid var(--front-end-border)"});
  buttonSite.parentElement.setAttribute("href", "https://paulo-mikhael.github.io/pagina-unity-2024");
  buttonGithub.parentElement.setAttribute("href", "https://github.com/Paulo-Mikhael/pagina-unity-2024");
  buttonDesign.parentElement.setAttribute("href","https://unity.com/pages/unity-pro-buy-now?utm_source=google&utm_medium=cpc&utm_campaign=cc_dd_upr_amer_amer-t2_en_pu_sem-gg_acq_br-pr_2023-01_brand-at2_cc3022_ev-br_id:71700000105927803&utm_content=cc_dd_upr_amer_pu_sem_gg_ev-br_pros_x_npd_cpc_kw_sd_all_x_x_brand_id:58700008262791741&utm_term=unity&&&&&gad_source=1&gclid=Cj0KCQiA84CvBhCaARIsAMkAvkI2ixzlSyPBXVK_AWEly_Qv7z5Ha8boUhvPG9qHkCdl7v2hBftG1ZIaAszYEALw_wcB&gclsrc=aw.ds");
  javascriptIcon.classList.add("open");
  avfText.classList.add("open");
  fastaskText.classList.add("open");
  guiaText.classList.add("open");
  unityText.classList.remove("open");
  garticText.classList.add("open");
}

function garticTheme()
{
  nextButton.style.backgroundColor = "var(--gartic-background)";
  nextButton.style.border = "3px solid var(--gartic)";
  nextButton.style.color = "var(--gartic)";
  previousButton.style.backgroundColor = "var(--gartic-background)";
  previousButton.style.border = "3px solid var(--gartic)";
  previousButton.style.color = "var(--gartic)";
  tecnologiesText.style.color = "var(--gartic)";
  textContainer.style.backgroundColor = "var(--gartic-background)";
  textContainer.style.border = "3px solid var(--gartic)";
  imageA.setAttribute("href", "https://paulo-mikhael.github.io/pagina-gartic-2024");
  imageContainer.setAttribute("src", "img/gartic-poster.gif");
  imageContainer.setAttribute("alt", "gartic-poster.gif");
  imageContainer.addEventListener("mouseenter", () => {imageContainer.style.border = "3px solid var(--gartic)"});
  imageContainer.addEventListener("mouseleave", () => {imageContainer.style.border = "3px solid var(--front-end-border)"});
  buttonSite.parentElement.setAttribute("href", "https://paulo-mikhael.github.io/pagina-gartic-2024");
  buttonGithub.parentElement.setAttribute("href", "https://github.com/Paulo-Mikhael/pagina-gartic-2024");
  buttonDesign.parentElement.setAttribute("href","https://gartic.com.br/");
  javascriptIcon.classList.add("open");
  avfText.classList.add("open");
  fastaskText.classList.add("open");
  guiaText.classList.add("open");
  unityText.classList.add("open");
  garticText.classList.remove("open");
}

// avf - 1; fastask - 2; guia - 3; unity - 4; gartic - 5;
let posterNumber = 1;

nextButton.addEventListener("click", () => {
  if (posterNumber == 1)
  {
    fastaskTheme();
    posterNumber = 2;
  }
  else if (posterNumber == 2)
  {
    guiaTheme();
    posterNumber = 3;
  }
  else if (posterNumber == 3)
  {
    unityTheme();
    posterNumber = 4;
  }
  else if (posterNumber == 4)
  {
    garticTheme();
    posterNumber = 5;
  }
  else if (posterNumber == 5)
  {
    avfTheme();
    posterNumber = 1;
  }
});

previousButton.addEventListener("click", () => {
  if (posterNumber == 5)
  {
    unityTheme();
    posterNumber = 4;
  }
  else if (posterNumber == 4)
  {
    guiaTheme();
    posterNumber = 3;
  }
  else if (posterNumber == 3)
  {
    fastaskTheme();
    posterNumber = 2;
  }
  else if (posterNumber == 2)
  {
    avfTheme();
    posterNumber = 1;
  }
  else if (posterNumber == 1)
  {
    garticTheme();
    posterNumber = 5;
  }
});