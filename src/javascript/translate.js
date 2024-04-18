const contactButton = document.querySelectorAll('.contact-button');
const flag = document.getElementById('header-image');

function translateTexts() {
    const textsToTranslatePortuguese = {
        'header-home': 'Início',
        'header-about': 'Sobre mim',
        'header-services': 'Serviços',
        'header-projects': 'Projetos',
        'header-contacts': 'Contatos',
        'header-image': '../src/images/usa-flag.png',
        'main-title': 'Bem Vindo! Junte-se a Mim e Torne <b>Seu Projeto Realidade</b>',
        'main-subtitle': 'Melhore seus sites com meus conhecimentos de UX e API\'s, e <br>crie softwares bonitos e funcionais com meus conhecimentos em UI e .NET!',
        'about-me-letter-spacing': 'Sobre mim',
        'about-me-title': 'Olá! Me chamo Paulo Miguel!',
        'services-title': 'Serviços',
        'services-subtitle': 'Veja alguns serviços que podem lhe ajudar com seu negócio<br>e veja por que nós devemos trabalhar juntos!',
        'projects-title': 'Projetos',
        'projects-subtitle': 'Alguns websites, API\'s e softwares que eu fiz. Veja-os e decida se um desses projetos será útil para seu negócio ou lhe deu ideias.',
        'footer-letter-spacing': 'E então ? Qual a próxima etapa ?',
        'footer-message': 'Sem mais conversa! <span>Vamos Trabalhar!</span>',
        'about-me-text': 'Me chamo Paulo Miguel Bentes do Nascimento, 17 anos, nascido no Brasil. Eu escolhi trabalhar com programação porque é uma área que requer lógica e comunicação para se resolver problemas, e eu adoro e sou muito competente nisso.<br><br>Eu trabalho fazendo websites com HTML, CSS e Javascript para o Front-end e C#/.NET para o Back-end. Eu uso o Visual Studio como a minha IDE e usando Windows Forms, eu faço softwares de gestão para desktop.',
        'services-front-end': '<span class="section-weight">Front-end</span><br>Meus conhecimentos em HTML, CSS e Javascript + UX Design, me permitem dar uma ótima experiência em um site<br>Para blog\'s, Wordpress é uma ótima opção, e eu tenho experiência em diversos templates e com Elementor.',
        'services-software': '<span class="section-weight">Softwares</span><br>Eu uso o Visual Studio como a minha IDE e usando Windows Forms, eu faço softwares de gestão para desktop, integrados com banco de dados, tais como o Sql Server e MySql, e ofereço uma interface simples e intuitiva.',
        'services-back-end': '<span class="section-weight">Back-end</span><br>Eu faço APi\'s para coleta e transferência de dados usando informações de um banco de dados como o SqlServer e MySql. E tenho experiência com deploy no Azure, tanto para banco quanto API\'s.',
    };

    const textsToTranslateEnglish = {
        'header-home': 'Home',
        'header-about': 'About Me',
        'header-services': 'Services',
        'header-projects': 'Projects',
        'header-contacts': 'Contacts',
        'header-image': '../src/images/brazil.png',
        'main-title': 'Welcome! Join Me and Make <b>Your Project Reality</b>',
        'main-subtitle': 'Make your websites better with my UX and API\'s knowlegde, and<br>do beautiful and functional softwares with my UI and .NET knowledge!',
        'about-me-letter-spacing': 'About Me',
        'about-me-title': 'Hello! My name is Paulo Miguel!',
        'services-title': 'Services',
        'services-subtitle': 'See some services that can help you with your business<br>and find out why we should work together!',
        'projects-title': 'Projects',
        'projects-subtitle': 'Some websites, APIs, and software that I have created. Check them out and decide if any of these projects will be useful for your business or give you ideas.',
        'footer-letter-spacing': 'So, what\'s next?',
        'footer-message': 'No more talk! <span>Let\'s Work!</span>',
        'about-me-text': 'My name is Paulo Miguel Bentes do Nascimento, 17 years old, from Brazil. I chose work in programmation because it a area that require logic and communication to resolve problems, and i love and i\'m very competent in this.<br><br>I work making web sites with HTML, CSS and Javascript to Front-end, and C#/.NET to do API\'s to Back-end. I use Visual Studio as my IDE and using Windows Form projetcs, i make softwares to management for desktop.',
        'services-front-end': '<span class="section-weight">Front-end</span><br>My HTML, CSS and Javascript + UX Design knowledge, allow me give a great experience in a website.<br>For blog\'s, Wordpress is a great option, and i have experience with many templates and the Elementor.',
        'services-software': '<span class="section-weight">Software</span><br>I use Visual Studio as my IDE and using Windows Forms projects, i can make softwares to management, integraded with databases, like SQL Server and MySql, and providing simple and intuitive interfaces.',
        'services-back-end': '<span class="section-weight">Back-end</span><br>I make API\'s for data collection and transfer using databases like Sql Server and MySql. And I have experience with deploy in Azure, both databases and API\'s.',
    };

    ChangeContactButton();

    let language;

    if (flag.src.endsWith('brazil.png')){
        language = textsToTranslatePortuguese;
        flag.parentElement.title = 'Change language to english';
    }else if (flag.src.endsWith('usa-flag.png')){
        language = textsToTranslateEnglish;
        flag.parentElement.title = 'Mudar o idioma para português';
    }
    
    for (const id in language) {
        if (language.hasOwnProperty(id)) {
            const element = document.getElementById(id);
            if (element) {
                if (id === 'header-image') {
                    element.src = language[id];
                } else {
                    element.innerHTML = language[id];
                }
            }
        }
    }
}

flag.addEventListener('click', function() {
    translateTexts();
});

function ChangeContactButton(){
    const actualStyle = document.head.querySelector('style');
    
    if (actualStyle != null){
        actualStyle.remove();
    }

    contactButton.forEach(element => {
        if (flag.src.endsWith('brazil.png')){
            element.innerHTML = 'Contatar-me';
        }else if (flag.src.endsWith('usa-flag.png')){
            element.innerHTML = 'Contact me';
        }
    });
    
    const style = document.createElement('style');
    
    if (flag.src.endsWith('brazil.png')){
        style.textContent = `.contact-button:hover:after{content:'Contatar-me'}`;
    }else if (flag.src.endsWith('usa-flag.png')){
        style.textContent = `.contact-button:hover:after{content:'Contact me'}`;
    }

    document.head.appendChild(style);
}