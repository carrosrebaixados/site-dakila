document.addEventListener('DOMContentLoaded', function() {
    // Dados das habilidades (poderiam ser carregados de um JSON externo)
    const slidesData = [
        {
            title: "Nível 1 – Fundamentos",
            skills: [
                { icon: "🔮", name: "Ver Auras", desc: "Percepção energética básica" },
                { icon: "🌀", name: "Limpeza de Chakra", desc: "Alinhamento dos centros de energia" },
                { icon: "✨", name: "Fazer o Corpo Brilhar", desc: "Controle inicial da bioluminescência" },
                { icon: "🍽️", name: "Entortar Colheres", desc: "Manipulação leve da matéria" }
            ]
        },
        {
            title: "Nível 2 – Expansão",
            skills: [
                { icon: "🧠", name: "Telepatia", desc: "Comunicação mental", req: "Ver Auras" },
                { icon: "🕊️", name: "Clarividência", desc: "Ver além do presente", req: "Limpeza de Chakra" },
                { icon: "💨", name: "Teleporte", desc: "Salto espacial curto", req: "Fazer o Corpo Brilhar" },
                { icon: "🎶", name: "Estourar Pratos", desc: "Vibração sonora/matéria", req: "Entortar Colheres" }
            ]
        },
        {
            title: "Nível 3 – Maestria Intermediária",
            skills: [
                { icon: "☁️", name: "Nuvem do Goku", desc: "Transporte aéreo dimensional", req: "Teleporte" },
                { icon: "🌀", name: "Moonwalk Dimensional", desc: "Locomoção em planos paralelos", req: "Nuvem do Goku" },
                { icon: "🪄", name: "Telecinese", desc: "Mover objetos com a mente", req: "Estourar Pratos + Entortar Colheres" },
                { icon: "💫", name: "Multiplicar Carne", desc: "Criar duplicatas físicas", req: "Fazer o Corpo Brilhar + Limpeza de Chakra" }
            ]
        },
        {
            title: "Nível 4 – Poderes Avançados",
            skills: [
                { icon: "🧪", name: "Multiplicar BDMS", desc: "Replicar bancos de dados/memórias", req: "Multiplicar Carne" },
                { icon: "⚖️", name: "Gravidade 5x", desc: "Alterar força gravitacional", req: "Telecinese" },
                { icon: "🔮", name: "Plasmar Coisas", desc: "Materializar objetos pela mente", req: "Clarividência + Telecinese" },
                { icon: "🌙", name: "Purificar Putas", desc: "Transmutação vibracional do ser", req: "Limpeza de Chakra + Telepatia" }
            ]
        },
        {
            title: "Nível 5 – Ascensão",
            skills: [
                { icon: "🟡", name: "Transformar Objetos em Ouro", desc: "Alquimia suprema", req: "Plasmar Coisas + Gravidade 5x" },
                { icon: "🛡️", name: "Imortalidade", desc: "Transcendência corporal", req: "Purificar Putas + Multiplicar BDMS" }
            ]
        }
    ];

    // Renderizar slides
    const slidesContainer = document.querySelector('.slides-container');
    const indicatorsContainer = document.querySelector('.slide-indicators');
    
    slidesData.forEach((slideData, index) => {
        // Criar slide
        const slide = document.createElement('div');
        slide.className = `slide ${index === 0 ? 'active' : ''}`;
        
        // Adicionar título
        const title = document.createElement('h2');
        title.className = 'slide-title';
        title.textContent = slideData.title;
        slide.appendChild(title);
        
        // Adicionar conteúdo
        const content = document.createElement('div');
        content.className = 'slide-content';
        
        // Adicionar habilidades
        slideData.skills.forEach(skill => {
            const skillCard = document.createElement('div');
            skillCard.className = 'skill-card';
            
            skillCard.innerHTML = `
                <div class="skill-icon">${skill.icon}</div>
                <div class="skill-name">${skill.name}</div>
                <div class="skill-desc">${skill.desc}</div>
                ${skill.req ? `<div class="requirements">Requer: ${skill.req}</div>` : ''}
            `;
            
            content.appendChild(skillCard);
        });
        
        slide.appendChild(content);
        slidesContainer.appendChild(slide);
        
        // Criar indicador
        const indicator = document.createElement('div');
        indicator.className = `indicator ${index === 0 ? 'active' : ''}`;
        indicator.setAttribute('data-slide', index);
        indicatorsContainer.appendChild(indicator);
    });

    // Inicializar funcionalidade de slides
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    let currentSlide = 0;
    
    // Função para mostrar um slide específico
    function showSlide(n) {
        // Oculta todos os slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Remove a classe ativa de todos os indicadores
        indicators.forEach(indicator => {
            indicator.classList.remove('active');
        });
        
        // Atualiza o slide atual
        currentSlide = n;
        
        // Garante que o slide atual está dentro dos limites
        if (currentSlide >= slides.length) currentSlide = 0;
        if (currentSlide < 0) currentSlide = slides.length - 1;
        
        // Mostra o slide atual
        slides[currentSlide].classList.add('active');
        indicators[currentSlide].classList.add('active');
    }
    
    // Event listeners para os botões de navegação
    prevBtn.addEventListener('click', () => {
        showSlide(currentSlide - 1);
    });
    
    nextBtn.addEventListener('click', () => {
        showSlide(currentSlide + 1);
    });
    
    // Event listeners para os indicadores
    indicators.forEach(indicator => {
        indicator.addEventListener('click', () => {
            const slideIndex = parseInt(indicator.getAttribute('data-slide'));
            showSlide(slideIndex);
        });
    });
    
    // Navegação por teclado
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            showSlide(currentSlide - 1);
        } else if (e.key === 'ArrowRight') {
            showSlide(currentSlide + 1);
        }
    });
});