/* ==========================================================================
   BASE DE DADOS DOS ITENS (Expansível)
   ========================================================================== */
const itemsDatabase = [
    // Países
    { id: "jp", name: "Japão", category: "paises", categoryLabel: "🌍 Países", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800", description: "Um arquipélago insular no Leste Asiático, conhecido por sua mistura única de templos antigos e ultra tecnologia.", country: "Japão", year: "660 a.C.", curiosity: "As máquinas de vendas automáticas no Japão vendem desde sopas quentes até guarda-chuvas.", rarity: "Raro" },
    { id: "br", name: "Brasil", category: "paises", categoryLabel: "🌍 Países", image: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=800", description: "O maior país da América do Sul, famoso por sua vibrante biodiversidade, o Carnaval e suas florestas tropicais exuberantes.", country: "Brasil", year: "1822", curiosity: "O Brasil compartilha fronteira com quase todos os países da América do Sul, exceto Chile e Equador.", rarity: "Comum" },
    { id: "is", name: "Islândia", category: "paises", categoryLabel: "🌍 Países", image: "https://images.unsplash.com/photo-1504829857797-ddff28127792?q=80&w=800", description: "Uma nação insular nórdica definida por suas paisagens vulcânicas espetaculares, gêiseres, fontes termais e geleiras colossais.", country: "Islândia", year: "930", curiosity: "A Islândia não tem mosquitos graças às suas rápidas mudanças climáticas que quebram seu ciclo de vida.", rarity: "Épico" },

    // Cidades
    { id: "tok", name: "Tóquio", category: "cidades", categoryLabel: "🏙️ Cidades", image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=800", description: "A movimentada capital do Japão, misturando arranha-céus iluminados por neon com templos históricos preservados.", country: "Japão", year: "1457", curiosity: "A estação ferroviária de Shinjuku em Tóquio é a mais movimentada do mundo, com mais de 3.5 milhões de pessoas por dia.", rarity: "Incomum" },
    { id: "par", name: "Paris", category: "cidades", categoryLabel: "🏙️ Cidades", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800", description: "Conhecida globalmente como a cidade do amor e do design, famosa pela gastronomia refinada e seus monumentos.", country: "França", year: "250 a.C.", curiosity: "Paris tem apenas uma única placa de 'PARE' (Stop) de trânsito em toda a sua área urbana.", rarity: "Comum" },

    // Lugares Históricos
    { id: "mp", name: "Machu Picchu", category: "historicos", categoryLabel: "🏰 Lugares Históricos", image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=800", description: "Uma cidadela inca construída no século XV, situada no topo de uma cordilheira na cordilheira dos Andes.", country: "Peru", year: "1450", curiosity: "As pedras de Machu Picchu foram encaixadas tão precisamente sem argamassa que nem uma lâmina de faca passa entre elas.", rarity: "Épico" },
    { id: "col", name: "Coliseu", category: "historicos", categoryLabel: "🏰 Lugares Históricos", image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=800", description: "O maior anfiteatro já construído, símbolo icônico do poder imperial da Roma Antiga.", country: "Itália", year: "80 d.C.", curiosity: "O Coliseu conseguia ser evacuado em apenas 5 minutos devido ao seu engenhoso sistema de corredores.", rarity: "Raro" },

    // Ilhas
    { id: "bb", name: "Bora Bora", category: "ilhas", categoryLabel: "🏝️ Ilhas", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800", description: "Uma pequena ilha do Pacífico Sul na Polinésia Francesa, cercada por uma lagoa azul turquesa brilhante protegida por recifes.", country: "Polinésia Francesa", year: "N/A", curiosity: "Não existem cobras nativas em Bora Bora; as pessoas andam tranquilamente descalças.", rarity: "Lendário" },

    // Paisagens Naturais
    { id: "cl", name: "Aurora Boreal", category: "paisagens", categoryLabel: "🏞️ Paisagens Naturais", image: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?q=80&w=800", description: "Um espetáculo cósmico de luzes brilhantes no céu noturno polar, gerado pelo impacto de partículas solares na atmosfera terrestre.", country: "Regiões Polares", year: "N/A", curiosity: "Outros planetas com atmosfera e campos magnéticos fortes, como Júpiter e Saturno, também têm auroras.", rarity: "Lendário" },

    // Animais
    { id: "tg", name: "Tigre-de-Bengala", category: "animais", categoryLabel: "🐅 Animais", image: "https://images.unsplash.com/photo-1602491453979-02654b3a896a?q=80&w=800", description: "O maior felino selvagem do mundo, mestre lendário da camuflagem nas florestas tropicais da Ásia.", country: "Índia", year: "N/A", curiosity: "A pele de um tigre também é listrada, não apenas o pelo. Cada padrão de listras é 100% exclusivo.", rarity: "Raro" },

    // Dinossauros
    { id: "trex", name: "Tiranossauro Rex", category: "dinossauros", categoryLabel: "🦖 Dinossauros", image: "https://images.unsplash.com/photo-1532187863486-abf9d39d66e8?q=80&w=800", description: "Um dos maiores carnívoros terrestres que já existiram, dominando as paisagens do Cretáceo.", country: "América do Norte", year: "-66 Milhões", curiosity: "Apesar do tamanho massivo, os dentes do T-Rex eram serrilhados como facas de carne e podiam triturar ossos.", rarity: "Épico" },

    // Espaço
    { id: "bur", name: "Buraco Negro", category: "espaco", categoryLabel: "🚀 Espaço", image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=800", description: "Uma região do espaço-tempo com campo gravitacional tão extremo que absolutamente nada, nem a luz, consegue escapar.", country: "Cosmo", year: "1916", curiosity: "Se você entrasse em um buraco negro, ocorreria o processo de espaguetização: você seria esticado como espaguete.", rarity: "Mítico" },

    // Planetas
    { id: "sat", name: "Saturno", category: "planetas", categoryLabel: "🌌 Planetas", image: "https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?q=80&w=800", description: "O segundo maior planeta do Sistema Solar, famoso pelo seu espetacular e complexo sistema de anéis feitos de gelo e rocha.", country: "Sistema Solar", year: "N/A", curiosity: "Saturno é tão pouco denso que, se houvesse uma banheira gigante o suficiente cheia de água, ele flutuaria.", rarity: "Raro" },

    // Monumentos
    { id: "taj", name: "Taj Mahal", category: "monumentos", categoryLabel: "🗿 Monumentos", image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=800", description: "Um deslumbrante mausoléu de mármore branco construído pelo imperador Shah Jahan em memória de sua esposa favorita.", country: "Índia", year: "1648", curiosity: "O monumento muda sutilmente de cor dependendo da hora do dia, assumindo tons rosa ao amanhecer e dourado à noite.", rarity: "Lendário" },

    // Jogos
    { id: "mc", name: "Minecraft", category: "jogos", categoryLabel: "🎮 Jogos", image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800", description: "O videogame de mundo aberto mais vendido da história, onde a imaginação dos jogadores constrói impérios através de blocos.", country: "Suécia", year: "2011", curiosity: "Um dia no Minecraft dura exatamente 20 minutos de tempo no mundo real.", rarity: "Incomum" },

    // Filmes
    { id: "int", name: "Interestelar", category: "filmes", categoryLabel: "🎬 Filmes", image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800", description: "Uma obra-prima cinematográfica de ficção científica sobre viagens espaciais de ficção através de um buraco de minhoca.", country: "EUA", year: "2014", curiosity: "Os físicos teóricos trabalharam de verdade no desenvolvimento dos efeitos visuais para garantir que a física de buracos negros fosse precisa.", rarity: "Épico" },

    // Séries
    { id: "bb_show", name: "Breaking Bad", category: "series", categoryLabel: "📺 Séries", image: "https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?q=80&w=800", description: "Uma aclamada série dramática sobre um professor de química brilhante de ensino médio que se torna um barão de substâncias ilícitas.", country: "EUA", year: "2008", curiosity: "A série impulsionou o turismo local em Albuquerque, Novo México, onde os fãs comem pizzas no telhado de casas locais.", rarity: "Raro" },

    // Músicas
    { id: "bohr", name: "Bohemian Rhapsody", category: "musicas", categoryLabel: "🎵 Músicas", image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800", description: "A icônica balada do Queen, famosa por sua estrutura musical inovadora de seis minutos sem refrão tradicional.", country: "Reino Unido", year: "1975", curiosity: "O vocalista Freddie Mercury tocou o mesmo piano que Paul McCartney usou na gravação de 'Hey Jude' dos Beatles.", rarity: "Lendário" },

    // Comidas
    { id: "pz", name: "Pizza Napoletana", category: "comidas", categoryLabel: "🍕 Comidas", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800", description: "A pizza mais tradicional do planeta, feita com tomates San Marzano colhidos na encosta do Vesúvio.", country: "Itália", year: "1889", curiosity: "A verdadeira arte napolitana do pizzaiolo é considerada Patrimônio Imaterial da Humanidade pela UNESCO.", rarity: "Comum" },

    // Bebidas
    { id: "matcha", name: "Chá Matcha", category: "bebidas", categoryLabel: "🍹 Bebidas", image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?q=80&w=800", description: "Chá verde japonês em pó finamente moído, central na icônica Cerimônia do Chá japonesa tradicional.", country: "Japão", year: "Sec. XII", curiosity: "As folhas do chá de matcha são protegidas da luz solar direta semanas antes da colheita para aumentar o sabor.", rarity: "Incomum" },

    // Carros
    { id: "chiron", name: "Bugatti Chiron", category: "carros", categoryLabel: "🚗 Carros", image: "https://images.unsplash.com/photo-1600706432502-75a0e2b34445?q=80&w=800", description: "Um dos carros de rua de produção em série mais velozes e opulentos do mundo, ultrapassando os 400 km/h.", country: "França", year: "2016", curiosity: "A velocidade máxima do Chiron é limitada eletronicamente para evitar que os pneus literalmente se desfaçam pela força centrífuga.", rarity: "Mítico" },

    // Aviões
    { id: "concorde", name: "Concorde", category: "avioes", categoryLabel: "✈️ Aviões", image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800", description: "O lendário avião comercial supersônico de passageiros que cruzava o Oceano Atlântico em menos de 3 horas.", country: "França / Reino Unido", year: "1969", curiosity: "Devido ao calor provocado pelo voo supersônico, a fuselagem do avião se esticava cerca de 30 cm durante o trajeto.", rarity: "Lendário" },

    // Trens
    { id: "shink", name: "Shinkansen", category: "trens", categoryLabel: "🚂 Trens", image: "https://images.unsplash.com/photo-1542640244-7e672d6cef21?q=80&w=800", description: "O trem-bala de alta velocidade japonês pioneiro mundial, famoso por seu design de ponta e pontualidade cirúrgica.", country: "Japão", year: "1964", curiosity: "O atraso médio acumulado anual do Shinkansen é de apenas cerca de 24 segundos por viagem.", rarity: "Raro" },

    // Esportes
    { id: "fc", name: "Fórmula 1", category: "esportes", categoryLabel: "⚽ Esportes", image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=800", description: "A categoria máxima do automobilismo internacional, unindo pilotos habilidosos e tecnologia aerodinâmica de ponta.", country: "Global", year: "1950", curiosity: "Um carro de F1 gera tanta sustentação negativa que teoricamente poderia rodar de cabeça para baixo no teto de um túnel.", rarity: "Incomum" },

    // Curiosidades
    { id: "efe_m", name: "Efeito Mandela", category: "curiosidades", categoryLabel: "💡 Curiosidades", image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800", description: "Um intrigante fenômeno psicológico em que um grande grupo de pessoas compartilha uma memória falsa idêntica.", country: "Mundo", year: "2010", curiosity: "Muitos acreditavam falsamente que Nelson Mandela havia morrido na prisão nos anos 80, embora ele tenha saído livre nos anos 90.", rarity: "Raro" }
];

// Mapeamento Completo de Categorias da Interface
const categoriesConfig = {
    "paises": { icon: "🌍", label: "Países" },
    "cidades": { icon: "🏙️", label: "Cidades" },
    "historicos": { icon: "🏰", label: "Lugares Históricos" },
    "ilhas": { icon: "🏝️", label: "Ilhas" },
    "paisagens": { icon: "🏞️", label: "Paisagens Naturais" },
    "animais": { icon: "🐅", label: "Animais" },
    "dinossauros": { icon: "🦖", label: "Dinossauros" },
    "espaco": { icon: "🚀", label: "Espaço" },
    "planetas": { icon: "🌌", label: "Planetas" },
    "monumentos": { icon: "🗿", label: "Monumentos" },
    "jogos": { icon: "🎮", label: "Jogos" },
    "filmes": { icon: "🎬", label: "Filmes" },
    "series": { icon: "📺", label: "Séries" },
    "musicas": { icon: "🎵", label: "Músicas" },
    "comidas": { icon: "🍕", label: "Comidas" },
    "bebidas": { icon: "🍹", label: "Bebidas" },
    "carros": { icon: "🚗", label: "Carros" },
    "avioes": { icon: "✈️", label: "Aviões" },
    "trens": { icon: "🚂", label: "Trens" },
    "esportes": { icon: "⚽", label: "Esportes" },
    "curiosidades": { icon: "💡", label: "Curiosidades" },
    "all": { icon: "🎲", label: "Tudo Misturado" }
};

/* ==========================================================================
   ESTADO DO USUÁRIO (PERSISTENTE VIA LOCALSTORAGE)
   ========================================================================== */
let userState = {
    unlockedItems: [],
    history: [],
    favorites: [],
    totalExplorations: 0,
    startTime: Date.now(),
    accTime: 0,
    categoryHits: {},
    soundsOn: true,
    theme: 'dark'
};

// Carregar progresso salvo no localStorage
function loadState() {
    const saved = localStorage.getItem('random_explorer_state_v1');
    if (saved) {
        try {
            userState = { ...userState, ...JSON.parse(saved) };
            // Atualizar o tempo de sessão inicial para somar ao tempo acumulado
            userState.startTime = Date.now();
        } catch (e) {
            console.error("Erro ao ler estado salvo.", e);
        }
    }
}

// Salvar progresso
function saveState() {
    localStorage.setItem('random_explorer_state_v1', JSON.stringify(userState));
}

/* ==========================================================================
   GERADOR DE EFEITOS SONOROS (WEB AUDIO API - TOTALMENTE OFFLINE)
   ========================================================================== */
function playSynthSound(type) {
    if (!userState.soundsOn) return;
    try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) return;
        const ctx = new AudioCtx();
        
        const playTone = (freq, type, duration, delay = 0) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            
            osc.type = type;
            osc.frequency.setValueAtTime(freq, ctx.currentTime + delay);
            
            gain.gain.setValueAtTime(0.15, ctx.currentTime + delay);
            gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + delay + duration);
            
            osc.start(ctx.currentTime + delay);
            osc.stop(ctx.currentTime + delay + duration);
        };

        if (type === 'click') {
            playTone(400, 'sine', 0.1);
        } else if (type === 'explore') {
            playTone(261.63, 'triangle', 0.2); // C4
            playTone(329.63, 'triangle', 0.2, 0.1); // E4
            playTone(392.00, 'triangle', 0.3, 0.2); // G4
        } else if (type === 'rare') {
            playTone(523.25, 'sine', 0.2); // C5
            playTone(659.25, 'sine', 0.2, 0.1); // E5
            playTone(783.99, 'sine', 0.2, 0.2); // G5
            playTone(1046.50, 'sawtooth', 0.5, 0.3); // C6
        } else if (type === 'favorite') {
            playTone(698.46, 'sine', 0.1); // F5
            playTone(880.00, 'sine', 0.3, 0.1); // A5
        }
    } catch (e) {
        console.warn("Bloqueio de reprodução de áudio pelo navegador.", e);
    }
}

/* ==========================================================================
   SISTEMA DE PARTÍCULAS DO FUNDO (HTML5 CANVAS)
   ========================================================================== */
const bgCanvas = document.getElementById('bg-particles');
const bgCtx = bgCanvas.getContext('2d');
let particles = [];

function resizeBgCanvas() {
    bgCanvas.width = window.innerWidth;
    bgCanvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeBgCanvas);
resizeBgCanvas();

class Particle {
    constructor() {
        this.reset();
    }
    reset() {
        this.x = Math.random() * bgCanvas.width;
        this.y = Math.random() * bgCanvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.speedY = (Math.random() - 0.5) * 0.4;
        this.alpha = Math.random() * 0.5 + 0.1;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > bgCanvas.width || this.y < 0 || this.y > bgCanvas.height) {
            this.reset();
        }
    }
    draw() {
        bgCtx.save();
        bgCtx.globalAlpha = this.alpha;
        bgCtx.fillStyle = userState.theme === 'dark' ? '#7158e2' : '#5f27cd';
        bgCtx.beginPath();
        bgCtx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        bgCtx.fill();
        bgCtx.restore();
    }
}

for (let i = 0; i < 45; i++) {
    particles.push(new Particle());
}

function animateParticles() {
    bgCtx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
    particles.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animateParticles);
}
animateParticles();

/* ==========================================================================
   SISTEMA DE CONFETES INTERNOS (HTML5 CANVAS)
   ========================================================================== */
const confCanvas = document.getElementById('confetti-canvas');
const confCtx = confCanvas.getContext('2d');
let confettiList = [];
let confettiActive = false;

function resizeConfetti() {
    confCanvas.width = window.innerWidth;
    confCanvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeConfetti);
resizeConfetti();

class Confetti {
    constructor() {
        this.x = Math.random() * confCanvas.width;
        this.y = Math.random() * -confCanvas.height - 20;
        this.size = Math.random() * 8 + 5;
        this.color = `hsl(${Math.random() * 360}, 100%, 60%)`;
        this.speedY = Math.random() * 3 + 2;
        this.speedX = (Math.random() - 0.5) * 2;
        this.rotation = Math.random() * Math.PI;
        this.rotationSpeed = (Math.random() - 0.5) * 0.1;
    }
    update() {
        this.y += this.speedY;
        this.x += this.speedX;
        this.rotation += this.rotationSpeed;
    }
    draw() {
        confCtx.save();
        confCtx.translate(this.x, this.y);
        confCtx.rotate(this.rotation);
        confCtx.fillStyle = this.color;
        confCtx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
        confCtx.restore();
    }
}

function launchConfetti() {
    confettiList = [];
    for (let i = 0; i < 100; i++) {
        confettiList.push(new Confetti());
    }
    if (!confettiActive) {
        confettiActive = true;
        animateConfetti();
    }
}

function animateConfetti() {
    if (confettiList.length === 0) {
        confettiActive = false;
        confCtx.clearRect(0, 0, confCanvas.width, confCanvas.height);
        return;
    }
    confCtx.clearRect(0, 0, confCanvas.width, confCanvas.height);
    confettiList.forEach((c, idx) => {
        c.update();
        c.draw();
        if (c.y > confCanvas.height) {
            confettiList.splice(idx, 1);
        }
    });
    requestAnimationFrame(animateConfetti);
}

/* ==========================================================================
   CÁLCULOS DE SISTEMAS (RARIDADE, CONQUISTAS E ESTATÍSTICAS)
   ========================================================================== */
const rarityMapping = {
    "Comum": { weight: 50, class: "rarity-comum", icon: "⚪" },
    "Incomum": { weight: 25, class: "rarity-incomum", icon: "🟢" },
    "Raro": { weight: 13, class: "rarity-raro", icon: "🔵" },
    "Épico": { weight: 7, class: "rarity-epico", icon: "🟣" },
    "Lendário": { weight: 4, class: "rarity-lendario", icon: "🟠" },
    "Mítico": { weight: 1, class: "rarity-mitico", icon: "🔴" }
};

const achievementsConfig = [
    { id: "ach_first", title: "Primeiro Descobrimento", desc: "Sorteou o seu primeiro item no explorer.", check: () => userState.totalExplorations >= 1, icon: "🏆" },
    { id: "ach_50", title: "Mestre Explorador", desc: "Efetuou 50 explorações completas.", check: () => userState.totalExplorations >= 50, icon: "🛡️" },
    { id: "ach_all_paises", title: "Geógrafo do Sofá", desc: "Desbloqueou todos os itens da categoria Países.", check: () => hasUnlockedAllFromCategory("paises"), icon: "🌍" },
    { id: "ach_all_animais", title: "Zoólogo Curioso", desc: "Desbloqueou todos os itens da categoria Animais.", check: () => hasUnlockedAllFromCategory("animais"), icon: "🦁" }
];

function hasUnlockedAllFromCategory(cat) {
    const itemsOfCat = itemsDatabase.filter(i => i.category === cat);
    if (itemsOfCat.length === 0) return false;
    return itemsOfCat.every(i => userState.unlockedItems.includes(i.id));
}

// Retorna os milissegundos convertidos em tempo formatado
function getSessionTimeFormatted() {
    const currentSession = Date.now() - userState.startTime;
    const totalMs = userState.accTime + currentSession;
    const totalSec = Math.floor(totalMs / 1000);
    const min = Math.floor(totalSec / 60);
    return `${min}m`;
}

// Procura a categoria mais acessada
function getFavoriteCategory() {
    let bestCat = "Nenhum";
    let max = 0;
    for (let key in userState.categoryHits) {
        if (userState.categoryHits[key] > max) {
            max = userState.categoryHits[key];
            bestCat = categoriesConfig[key] ? categoriesConfig[key].label : key;
        }
    }
    return bestCat;
}

/* ==========================================================================
   ELEMENTOS DE INTERFACE E EVENTOS PRINCIPAIS
   ========================================================================== */
const categoriesContainer = document.getElementById('categories-container');
const categorySearchInput = document.getElementById('category-search');
const btnExplore = document.getElementById('btn-explore');
const resultPlaceholder = document.getElementById('result-placeholder');
const resultCard = document.getElementById('result-card');
const explorerLoader = document.getElementById('explorer-loader');

// Gerar lista visual de categorias
let selectedCategory = "all";

function buildCategoriesGrid(filter = "") {
    categoriesContainer.innerHTML = "";
    Object.keys(categoriesConfig).forEach(key => {
        const cat = categoriesConfig[key];
        if (cat.label.toLowerCase().includes(filter.toLowerCase())) {
            const card = document.createElement('div');
            card.classList.add('category-card');
            if (selectedCategory === key) card.classList.add('selected');
            card.dataset.id = key;
            card.innerHTML = `
                <span class="category-icon">${cat.icon}</span>
                <span>${cat.label}</span>
            `;
            card.addEventListener('click', () => {
                playSynthSound('click');
                selectedCategory = key;
                document.querySelectorAll('.category-card').forEach(c => c.classList.remove('selected'));
                card.classList.add('selected');
            });
            categoriesContainer.appendChild(card);
        }
    });
}

categorySearchInput.addEventListener('input', (e) => {
    buildCategoriesGrid(e.target.value);
});

/* ==========================================================================
   ALGO ALEATÓRIO COM PONDERAMENTO DE RARIDADE
   ========================================================================== */
function getRandomItemWeighted(pool) {
    // Organiza a probabilidade baseada nos pesos definidos no mapeamento de raridade
    let totalWeight = 0;
    pool.forEach(item => {
        const rDetails = rarityMapping[item.rarity] || { weight: 50 };
        totalWeight += rDetails.weight;
    });

    let randomNum = Math.random() * totalWeight;
    for (let i = 0; i < pool.length; i++) {
        const rDetails = rarityMapping[pool[i].rarity] || { weight: 50 };
        if (randomNum < rDetails.weight) {
            return pool[i];
        }
        randomNum -= rDetails.weight;
    }
    return pool[Math.floor(Math.random() * pool.length)]; // Fallback
}

// Algoritmo principal de Exploração
let currentDiscoveredItem = null;

function performExploration() {
    playSynthSound('explore');
    
    // Preparar UI do Loader
    resultPlaceholder.style.display = 'none';
    resultCard.classList.add('hidden');
    explorerLoader.style.display = 'block';

    // Obter itens disponíveis baseado na categoria selecionada
    let pool = [];
    if (selectedCategory === "all") {
        pool = [...itemsDatabase];
    } else {
        pool = itemsDatabase.filter(item => item.category === selectedCategory);
    }

    if (pool.length === 0) {
        showToast("Nenhum item cadastrado para esta categoria ainda!", "error");
        explorerLoader.style.display = 'none';
        resultPlaceholder.style.display = 'flex';
        return;
    }

    // Delay visual simulando processamento cósmico
    setTimeout(() => {
        const selectedItem = getRandomItemWeighted(pool);
        currentDiscoveredItem = selectedItem;

        // Atualizar Métricas e Estatísticas
        userState.totalExplorations++;
        if (!userState.unlockedItems.includes(selectedItem.id)) {
            userState.unlockedItems.push(selectedItem.id);
        }
        
        // Histórico de explorações (manter últimos 15)
        userState.history = userState.history.filter(id => id !== selectedItem.id);
        userState.history.unshift(selectedItem.id);
        if (userState.history.length > 15) userState.history.pop();

        // Incrementa acertos da categoria
        userState.categoryHits[selectedItem.category] = (userState.categoryHits[selectedItem.category] || 0) + 1;
        saveState();

        // Renderização dos dados no card
        renderResultItem(selectedItem);

        // Feedback sonoro e confete baseado em raridade
        const isHighlyRare = ["Épico", "Lendário", "Mítico"].includes(selectedItem.rarity);
        if (isHighlyRare) {
            playSynthSound('rare');
            launchConfetti();
            showToast(`✨ Extraordinário! Encontrou um item ${selectedItem.rarity.toUpperCase()}!`, 'success');
        } else {
            playSynthSound('explore');
        }

        explorerLoader.style.display = 'none';
        resultCard.classList.remove('hidden');
    }, 1200);
}

btnExplore.addEventListener('click', performExploration);

// Renderiza os dados no Card de Resultado
function renderResultItem(item) {
    const rarityDetails = rarityMapping[item.rarity];
    const rarityBadge = document.getElementById('item-rarity');
    
    // Definir classe de raridade e conteúdo do badge
    rarityBadge.className = `rarity-badge ${rarityDetails.class}`;
    rarityBadge.innerHTML = `<span>${rarityDetails.icon}</span> ${item.rarity}`;

    document.getElementById('item-image').src = item.image;
    document.getElementById('item-name').innerText = item.name;
    document.getElementById('item-desc').innerText = item.description;
    document.getElementById('item-curiosity').innerText = item.curiosity;

    // Metadados condicionais
    const metaCountry = document.getElementById('meta-country');
    const metaYear = document.getElementById('meta-year');

    if (item.country && item.country !== "N/A") {
        metaCountry.classList.remove('hidden');
        metaCountry.querySelector('.val').innerText = item.country;
    } else {
        metaCountry.classList.add('hidden');
    }

    if (item.year && item.year !== "N/A") {
        metaYear.classList.remove('hidden');
        metaYear.querySelector('.val').innerText = item.year;
    } else {
        metaYear.classList.add('hidden');
    }

    // Configurar estado do botão favorito na UI do Card
    const btnFav = document.getElementById('btn-fav-toggle');
    if (userState.favorites.includes(item.id)) {
        btnFav.className = "action-btn active";
        btnFav.innerHTML = `<i class="fa-solid fa-heart"></i>`;
    } else {
        btnFav.className = "action-btn";
        btnFav.innerHTML = `<i class="fa-regular fa-heart"></i>`;
    }
}

// Clique no Explorar Novamente
document.getElementById('btn-explore-again').addEventListener('click', () => {
    performExploration();
});

/* ==========================================================================
   AÇÕES DO RESULTADO (FAVORITAR, COMPARTILHAR, COPIAR)
   ========================================================================== */
document.getElementById('btn-fav-toggle').addEventListener('click', () => {
    if (!currentDiscoveredItem) return;
    const id = currentDiscoveredItem.id;
    const idx = userState.favorites.indexOf(id);
    const btnFav = document.getElementById('btn-fav-toggle');

    if (idx > -1) {
        userState.favorites.splice(idx, 1);
        btnFav.className = "action-btn";
        btnFav.innerHTML = `<i class="fa-regular fa-heart"></i>`;
        showToast("Removido dos favoritos.", "info");
    } else {
        userState.favorites.push(id);
        btnFav.className = "action-btn active";
        btnFav.innerHTML = `<i class="fa-solid fa-heart"></i>`;
        playSynthSound('favorite');
        showToast("Adicionado aos favoritos!", "success");
    }
    saveState();
    buildFavoritesList();
});

// Copiar informações para a área de transferência
document.getElementById('btn-copy').addEventListener('click', () => {
    if (!currentDiscoveredItem) return;
    const item = currentDiscoveredItem;
    const shareText = `🔍 Fato Descoberto no Random Explorer!\n\n🔹 Nome: ${item.name} (${item.rarity})\n🔹 Descrição: ${item.description}\n🔹 Curiosidade: ${item.curiosity}`;
    
    navigator.clipboard.writeText(shareText).then(() => {
        showToast("Informações copiadas!", "success");
    }).catch(err => {
        showToast("Erro ao copiar informações.", "error");
    });
});

// Compartilhar conteúdo usando API nativa de compartilhamento se disponível
document.getElementById('btn-share').addEventListener('click', () => {
    if (!currentDiscoveredItem) return;
    const item = currentDiscoveredItem;
    
    if (navigator.share) {
        navigator.share({
            title: `Descobri ${item.name}!`,
            text: `Encontrei este item na categoria ${item.categoryLabel} no Random Explorer!`,
            url: window.location.href
        }).then(() => {
            showToast("Compartilhado com sucesso!", "success");
        }).catch(err => {
            console.log("Compartilhamento cancelado", err);
        });
    } else {
        showToast("Compartilhamento não suportado pelo navegador. Tente Copiar!", "info");
    }
});

/* ==========================================================================
   SISTEMAS DE NOTIFICAÇÃO (TOAST)
   ========================================================================== */
function showToast(message, type = "info") {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    let icon = `<i class="fa-solid fa-circle-info"></i>`;
    if (type === "success") icon = `<i class="fa-solid fa-circle-check text-cyan"></i>`;
    if (type === "error") icon = `<i class="fa-solid fa-circle-exclamation text-red"></i>`;

    toast.innerHTML = `${icon} <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('fadeOut');
        toast.addEventListener('animationend', () => {
            toast.remove();
        });
    }, 3000);
}

/* ==========================================================================
   GERENCIAMENTO DE MODAIS E DRAWERS
   ========================================================================== */
// Configura fechamentos gerais
document.querySelectorAll('.close-modal').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
    });
});
document.querySelectorAll('.close-drawer').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.drawer-overlay').forEach(d => d.classList.remove('active'));
    });
});

// Configuração de Cliques em Botões do Navegador
document.getElementById('btn-stats').addEventListener('click', () => {
    playSynthSound('click');
    openStatsModal();
});
document.getElementById('btn-collection').addEventListener('click', () => {
    playSynthSound('click');
    openCollectionModal();
});
document.getElementById('btn-favorites').addEventListener('click', () => {
    playSynthSound('click');
    buildFavoritesList();
    document.getElementById('drawer-favorites').classList.add('active');
});
document.getElementById('btn-history').addEventListener('click', () => {
    playSynthSound('click');
    buildHistoryList();
    document.getElementById('drawer-history').classList.add('active');
});

// Atualizar e abrir Modal de Estatísticas
function openStatsModal() {
    document.getElementById('stat-total').innerText = userState.totalExplorations;
    document.getElementById('stat-unique').innerText = userState.unlockedItems.length;
    document.getElementById('stat-favorite').innerText = getFavoriteCategory();
    document.getElementById('stat-time').innerText = getSessionTimeFormatted();
    document.getElementById('modal-stats').classList.add('active');
}

// Atualizar e abrir Modal de Coleções
function openCollectionModal() {
    const pct = Math.round((userState.unlockedItems.length / itemsDatabase.length) * 100) || 0;
    document.getElementById('progress-percent').innerText = `${pct}% (${userState.unlockedItems.length}/${itemsDatabase.length})`;
    document.getElementById('progress-bar').style.width = `${pct}%`;

    buildCollectionGallery();
    buildAchievementsList();
    document.getElementById('modal-collection').classList.add('active');
}

/* ==========================================================================
   CONSTRUÇÃO E ATUALIZAÇÃO DE INTERFACE DOS MODAIS
   ========================================================================== */
// Controladores de abas da Coleção
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(`tab-${btn.dataset.tab}`).classList.add('active');
    });
});

// Construir Galeria de Descobertas
function buildCollectionGallery() {
    const grid = document.getElementById('unlocked-grid');
    grid.innerHTML = "";
    itemsDatabase.forEach(item => {
        const isUnlocked = userState.unlockedItems.includes(item.id);
        const card = document.createElement('div');
        card.className = `item-badge-card ${isUnlocked ? 'unlocked' : ''}`;
        
        const img = isUnlocked ? item.image : "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=200";
        const label = isUnlocked ? item.name : "Bloqueado";
        const rarity = isUnlocked ? item.rarity : "";

        card.innerHTML = `
            <img class="badge-img" src="${img}" alt="${label}">
            <strong>${label}</strong>
            <span style="font-size:0.7rem; color:var(--text-muted)">${rarity}</span>
        `;
        if (isUnlocked) {
            card.style.cursor = 'pointer';
            card.addEventListener('click', () => {
                document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
                renderResultItem(item);
                currentDiscoveredItem = item;
                resultPlaceholder.style.display = 'none';
                explorerLoader.style.display = 'none';
                resultCard.classList.remove('hidden');
                playSynthSound('click');
            });
        }
        grid.appendChild(card);
    });
}

// Construir Galeria de Conquistas
function buildAchievementsList() {
    const container = document.getElementById('achievements-list');
    container.innerHTML = "";
    achievementsConfig.forEach(ach => {
        const isUnlocked = ach.check();
        const card = document.createElement('div');
        card.className = `achievement-card ${isUnlocked ? 'unlocked' : ''}`;
        card.innerHTML = `
            <div class="ach-icon">${ach.icon}</div>
            <div class="ach-details">
                <h4>${ach.title}</h4>
                <p>${ach.desc}</p>
            </div>
        `;
        container.appendChild(card);
    });
}

// Construir Lista do Drawer de Favoritos
function buildFavoritesList() {
    const container = document.getElementById('favorites-list');
    container.innerHTML = "";
    if (userState.favorites.length === 0) {
        container.innerHTML = `<p style="text-align:center; margin-top: 2rem; color:var(--text-muted)">Nenhum item favoritado ainda.</p>`;
        return;
    }
    userState.favorites.forEach(id => {
        const item = itemsDatabase.find(i => i.id === id);
        if (!item) return;
        const div = document.createElement('div');
        div.className = 'compact-item';
        div.innerHTML = `
            <img class="compact-img" src="${item.image}">
            <div class="compact-details">
                <h4>${item.name}</h4>
                <span>${item.rarity}</span>
            </div>
            <button class="delete-item-btn" title="Remover"><i class="fa-solid fa-trash-can"></i></button>
        `;
        div.querySelector('.delete-item-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            userState.favorites = userState.favorites.filter(fid => fid !== id);
            saveState();
            buildFavoritesList();
            showToast("Removido dos favoritos.", "info");
        });
        div.addEventListener('click', () => {
            document.querySelectorAll('.drawer-overlay').forEach(d => d.classList.remove('active'));
            renderResultItem(item);
            currentDiscoveredItem = item;
            resultPlaceholder.style.display = 'none';
            explorerLoader.style.display = 'none';
            resultCard.classList.remove('hidden');
            playSynthSound('click');
        });
        container.appendChild(div);
    });
}

// Construir Lista do Drawer de Histórico
function buildHistoryList() {
    const container = document.getElementById('history-list');
    container.innerHTML = "";
    if (userState.history.length === 0) {
        container.innerHTML = `<p style="text-align:center; margin-top: 2rem; color:var(--text-muted)">Nenhuma descoberta efetuada nesta sessão.</p>`;
        return;
    }
    userState.history.forEach(id => {
        const item = itemsDatabase.find(i => i.id === id);
        if (!item) return;
        const div = document.createElement('div');
        div.className = 'compact-item';
        div.innerHTML = `
            <img class="compact-img" src="${item.image}">
            <div class="compact-details">
                <h4>${item.name}</h4>
                <span>${item.rarity}</span>
            </div>
        `;
        div.addEventListener('click', () => {
            document.querySelectorAll('.drawer-overlay').forEach(d => d.classList.remove('active'));
            renderResultItem(item);
            currentDiscoveredItem = item;
            resultPlaceholder.style.display = 'none';
            explorerLoader.style.display = 'none';
            resultCard.classList.remove('hidden');
            playSynthSound('click');
        });
        container.appendChild(div);
    });
}

/* ==========================================================================
   SISTEMAS EXTRAS (SOMS, MODO CLARO/ESCURO, PERSISTÊNCIA DE TEMPO)
   ========================================================================= */
// Gerenciador de Áudio (Mutar / Desmutar)
const btnSound = document.getElementById('btn-sound');
btnSound.addEventListener('click', () => {
    userState.soundsOn = !userState.soundsOn;
    updateSoundBtnUI();
    saveState();
});

function updateSoundBtnUI() {
    if (userState.soundsOn) {
        btnSound.innerHTML = `<i class="fa-solid fa-volume-high"></i>`;
        btnSound.setAttribute('title', 'Sons Ativados');
    } else {
        btnSound.innerHTML = `<i class="fa-solid fa-volume-xmark"></i>`;
        btnSound.setAttribute('title', 'Sons Mutados');
    }
}

// Gerenciador de Temas (Claro / Escuro)
const btnTheme = document.getElementById('btn-theme');
btnTheme.addEventListener('click', () => {
    userState.theme = userState.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', userState.theme);
    updateThemeBtnUI();
    saveState();
    playSynthSound('click');
});

function updateThemeBtnUI() {
    if (userState.theme === 'dark') {
        btnTheme.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    } else {
        btnTheme.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    }
}

// Persistir tempo gasto acumulado antes de fechar a aba
window.addEventListener('beforeunload', () => {
    const elapsed = Date.now() - userState.startTime;
    userState.accTime += elapsed;
    saveState();
});

/* ==========================================================================
   INICIALIZAÇÃO DO APLICATIVO
   ========================================================================== */
function init() {
    loadState();
    buildCategoriesGrid();
    updateSoundBtnUI();
    updateThemeBtnUI();
    document.documentElement.setAttribute('data-theme', userState.theme);
}

init();