function translateTexts() {
    const textsToTranslatePortuguese = {
        'header-home': 'Início',
        'header-about': 'Sobre mim',
        'header-services': 'Serviços',
        'header-projects': 'Projetos',
        'header-contacts': 'Contatos',
        'header-image': 'src/images/usa-flag.png',
        'main-title': 'Bem Vindo! Junte-se a Mim e Torne <b>Seu Projeto Realidade</b>',
        'main-subtitle': 'Melhore seus sites com meus conhecimentos de UX e APIs, e <br>crie softwares bonitos e funcionais com meus conhecimentos em UI e .NET!',
        'about-me-letter-spacing': 'Sobre mim',
        'about-me-title': 'Olá! Me chamo Paulo Miguel!',
        'services-title': 'Serviços',
        'services-subtitle': 'Veja alguns serviços que podem lhe ajudar com seu negócio<br>e veja por que nós devemos trabalhar juntos!',
        'projects-title': 'Projetos',
        'projects-subtitle': 'Alguns websites, APIs e softwares que eu fiz. Veja-os e decida se um desses projetos será útil para seu negócio ou lhe deu ideias.',
        'footer-letter-spacing': 'E então ? Qual a próxima etapa ?',
        'footer-message': 'Sem mais conversa! <span>Vamos Trabalhar!</span>',
        'about-me-text': 'Olá, me chamo Paulo Miguel Bentes do Nascimento, tenho 17 anos, e, durante a escola, eu sempre gostei da ideia de apresentar um trabalho em slide, pois é algo que requer lógica, comunicação e criatividade para se resolver problemas, eu sempre me dedico ao máximo para fazer uma interface que as elogiem e fiquem ansiosas para meu próximo trabalho. Por esse motivo, não me vejo em outra profissão se não programador, e assim sigo na minha jornada para evoluir como programador full-stack.<br><br>Acredito que saber escrever códigos não é o tudo, eu faço cursos de UI/UX Design porque, acho muito importante que a tela que o usuário irá usar seja intuitiva e fácil de usar, assim gerando uma ótima experiência.<br>Além do mais, posso fazer tanto um Front-End simples, utilizando HTML, CSS e JS ou Wordpress com Elementor, quanto um mais complexo como as interfaces administrativas usando Angular e React, e posso integra-las a banco de dados usando C# e suas bibliotecas e frameworks para construir o Back-End.',
        'services-front-end': '<span class="section-weight">Front-end</span><br>Meus conhecimentos em HTML, CSS e Javascript + UX Design, me permitem dar uma ótima experiência em um site<br>Para blogs, Wordpress é uma ótima opção, e eu tenho experiência em diversos templates e com Elementor.',
        'services-software': '<span class="section-weight">Softwares</span><br>Eu uso o Visual Studio como a minha IDE e usando Windows Forms, eu faço softwares de gestão para desktop, integrados com banco de dados, tais como o Sql Server e MySql, e ofereço uma interface simples e intuitiva.',
        'services-back-end': '<span class="section-weight">Back-end</span><br>Eu faço APIs para coleta e transferência de dados usando informações de um banco de dados como o SqlServer e MySql. E tenho experiência com deploy no Azure, tanto para banco quanto APIs.',
        'academia-p': 'Landing Page<br>Academia Vitalidade Fitness',
        'fastask-p': 'Aplicação Web<br>Fastask - Gerenciador de Tarefas',
        'unity-p': 'Landing Page<br>[Clone] Página da Unity',
        'modern-software-p': 'Software<br>Design Moderno para Software',
    };

    const textsToTranslateEnglish = {
        'header-home': 'Home',
        'header-about': 'About Me',
        'header-services': 'Services',
        'header-projects': 'Projects',
        'header-contacts': 'Contacts',
        'header-image': 'src/images/brazil.png',
        'main-title': 'Welcome! Join Me and Turn <b>Your Project a Reality</b>',
        'main-subtitle': 'Make your websites better with my UX and APIs knowlegde, and<br>do beautiful and functional softwares with my UI and .NET knowledge!',
        'about-me-letter-spacing': 'About Me',
        'about-me-title': 'Hello! My name is Paulo Miguel!',
        'services-title': 'Services',
        'services-subtitle': 'See some services that can help you with your business<br>and find out why we should work together!',
        'projects-title': 'Projects',
        'projects-subtitle': 'Some websites, APIs, and software that I have created. Check them out and decide if any of these projects will be useful for your business.',
        'footer-letter-spacing': 'So, what\'s next?',
        'footer-message': 'No more talk! <span>Let\'s Work!</span>',
        'about-me-text': 'Hello, my name is Paulo Miguel Bentes do Nascimento, I\'m 17 years old, and, during school, I always liked the idea of presenting a work on a slide, the idea of doing something that requires logic, communication and creativity to solve problems, I always do my best to create an interface that people praise and look forward to my next work. For this reason, I don\'t see myself in any other profession than programming, and so I continue on my journey to evolve as a full-stack programmer.<br><br>I believe that knowing how to write code is not everything, I take UI/UX Design courses because I think it is very important that the screen the user will use is intuitive and easy to use, thus generating a great experience.<br>Furthermore, I can create both a simple Front-End, using HTML, CSS and JS or Wordpress with Elementor, as well as a more complex one such as administrative interfaces using Angular and React, and I can integrate them with the database using C# and its libraries and frameworks to build the Back-End.',
        'services-front-end': '<span class="section-weight">Front-end</span><br>My HTML, CSS and Javascript + UX Design knowledge, allow me give a great experience in a website.<br>For blogs, Wordpress is a great option, and i have experience with many templates and the Elementor.',
        'services-software': '<span class="section-weight">Software</span><br>I use Visual Studio as my IDE and using Windows Forms projects, i can make softwares to management, integraded with databases, like SQL Server and MySql, and providing simple and intuitive interfaces.',
        'services-back-end': '<span class="section-weight">Back-end</span><br>I make APIs for data collection and transfer using databases like Sql Server and MySql. And I have experience with deploy in Azure, both databases and APIs.',
        'academia-p': 'Landing Page<br>Vitality Fitness Gym',
        'fastask-p': 'Web Application<br>Fastask - Task Manager',
        'unity-p': 'Landing Page<br>[Clone] Unity Page',
        'modern-software-p': 'Software<br>Modern Design for Software',
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