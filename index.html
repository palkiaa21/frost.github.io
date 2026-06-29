<!DOCTYPE html>
<html lang="pt-BR" data-theme="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Random Explorer - Descubra o Extraordinário</title>
    <link rel="stylesheet" href="style.css">
    <!-- FontAwesome para ícones modernos -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
</head>
<body>
    <!-- Canvas para partículas de fundo animadas -->
    <canvas id="bg-particles"></canvas>
    <!-- Canvas para efeito de confete -->
    <canvas id="confetti-canvas"></canvas>

    <!-- Header Principal -->
    <header class="glass-nav">
        <div class="logo">
            <i class="fa-solid fa-compass logo-icon"></i>
            <span>Random <span class="gradient-text">Explorer</span></span>
        </div>
        
        <div class="nav-controls">
            <button id="btn-stats" class="nav-btn" title="Estatísticas">
                <i class="fa-solid fa-chart-simple"></i>
            </button>
            <button id="btn-collection" class="nav-btn" title="Minha Coleção">
                <i class="fa-solid fa-trophy"></i>
            </button>
            <button id="btn-history" class="nav-btn" title="Histórico">
                <i class="fa-solid fa-history"></i>
            </button>
            <button id="btn-favorites" class="nav-btn" title="Favoritos">
                <i class="fa-solid fa-heart"></i>
            </button>
            <button id="btn-sound" class="nav-btn" title="Ativar/Mudar Som">
                <i class="fa-solid fa-volume-high"></i>
            </button>
            <button id="btn-theme" class="nav-btn" title="Alternar Tema">
                <i class="fa-solid fa-moon"></i>
            </button>
        </div>
    </header>

    <!-- Layout Principal -->
    <main class="main-container">
        
        <!-- Painel de Exploração -->
        <section class="explorer-panel glass-card">
            <h2>Escolha uma Categoria</h2>
            <p class="subtitle">Selecione para onde deseja viajar e clique em Explorar</p>
            
            <div class="search-bar glass-input">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type="text" id="category-search" placeholder="Buscar categoria...">
            </div>

            <div class="categories-grid" id="categories-container">
                <!-- Inserido dinamicamente via JS -->
            </div>

            <button id="btn-explore" class="btn-primary ripple">
                <i class="fa-solid fa-wand-magic-sparkles"></i>
                <span>Explorar Agora</span>
            </button>
        </section>

        <!-- Painel de Resultados -->
        <section class="result-panel">
            <div class="result-placeholder glass-card" id="result-placeholder">
                <div class="placeholder-content">
                    <i class="fa-solid fa-globe-americas floating-globe"></i>
                    <h3>Pronto para Descobrir?</h3>
                    <p>Selecione uma categoria ao lado e clique em "Explorar Agora" para começar a sua jornada.</p>
                </div>
            </div>

            <div class="loader" id="explorer-loader" style="display: none;">
                <div class="spinner"></div>
                <p>Mapeando o universo...</p>
            </div>

            <div class="result-card glass-card hidden" id="result-card">
                <!-- Tag de Raridade Dinâmica -->
                <div class="rarity-badge" id="item-rarity"></div>
                
                <div class="image-container">
                    <img id="item-image" src="" alt="Resultado">
                    <div class="gradient-overlay"></div>
                    <div class="action-overlay">
                        <button id="btn-fav-toggle" class="action-btn" title="Favoritar">
                            <i class="fa-regular fa-heart"></i>
                        </button>
                        <button id="btn-share" class="action-btn" title="Compartilhar">
                            <i class="fa-solid fa-share-nodes"></i>
                        </button>
                        <button id="btn-copy" class="action-btn" title="Copiar Detalhes">
                            <i class="fa-solid fa-copy"></i>
                        </button>
                    </div>
                </div>

                <div class="card-details">
                    <h2 id="item-name"></h2>
                    
                    <div class="meta-info">
                        <span id="meta-country" class="meta-tag hidden">
                            <i class="fa-solid fa-earth-americas"></i> <span class="val"></span>
                        </span>
                        <span id="meta-year" class="meta-tag hidden">
                            <i class="fa-solid fa-calendar-days"></i> <span class="val"></span>
                        </span>
                    </div>

                    <p id="item-desc" class="item-description"></p>
                    
                    <div class="curiosity-box">
                        <h4><i class="fa-solid fa-lightbulb"></i> Sabia que?</h4>
                        <p id="item-curiosity"></p>
                    </div>

                    <button id="btn-explore-again" class="btn-secondary">
                        <i class="fa-solid fa-rotate-right"></i>
                        Explorar Novamente
                    </button>
                </div>
            </div>
        </section>
    </main>

    <!-- Modal: Estatísticas -->
    <div class="modal-overlay" id="modal-stats">
        <div class="modal-content glass-card">
            <div class="modal-header">
                <h3><i class="fa-solid fa-chart-line"></i> Estatísticas Globais</h3>
                <button class="close-modal"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="stats-grid">
                <div class="stat-box">
                    <span class="stat-num" id="stat-total">0</span>
                    <span class="stat-label">Explorações Totais</span>
                </div>
                <div class="stat-box">
                    <span class="stat-num" id="stat-unique">0</span>
                    <span class="stat-label">Descobertas Únicas</span>
                </div>
                <div class="stat-box">
                    <span class="stat-num" id="stat-favorite">Nenhum</span>
                    <span class="stat-label">Categoria Favorita</span>
                </div>
                <div class="stat-box">
                    <span class="stat-num" id="stat-time">0m</span>
                    <span class="stat-label">Tempo Navegando</span>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal: Minha Coleção e Conquistas -->
    <div class="modal-overlay" id="modal-collection">
        <div class="modal-content glass-card collection-modal">
            <div class="modal-header">
                <h3><i class="fa-solid fa-trophy"></i> Coleção & Conquistas</h3>
                <button class="close-modal"><i class="fa-solid fa-xmark"></i></button>
            </div>
            
            <div class="collection-progress">
                <div class="progress-labels">
                    <span>Progresso de Descoberta</span>
                    <span id="progress-percent">0% (0/0)</span>
                </div>
                <div class="progress-bar-bg">
                    <div class="progress-bar-fill" id="progress-bar" style="width: 0%;"></div>
                </div>
            </div>

            <div class="collection-tabs">
                <button class="tab-btn active" data-tab="items">Galeria de Descobertas</button>
                <button class="tab-btn" data-tab="achievements">Conquistas (🏆)</button>
            </div>

            <!-- Aba de Itens -->
            <div class="tab-content active" id="tab-items">
                <div class="unlocked-grid" id="unlocked-grid">
                    <!-- Gerado dinamicamente via JS -->
                </div>
            </div>

            <!-- Aba de Conquistas -->
            <div class="tab-content" id="tab-achievements">
                <div class="achievements-list" id="achievements-list">
                    <!-- Gerado dinamicamente via JS -->
                </div>
            </div>
        </div>
    </div>

    <!-- Drawer Lateral: Favoritos -->
    <div class="drawer-overlay" id="drawer-favorites">
        <div class="drawer glass-card">
            <div class="drawer-header">
                <h3><i class="fa-solid fa-heart text-red"></i> Meus Favoritos</h3>
                <button class="close-drawer"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="drawer-content" id="favorites-list">
                <!-- Gerado dinamicamente -->
            </div>
        </div>
    </div>

    <!-- Drawer Lateral: Histórico -->
    <div class="drawer-overlay" id="drawer-history">
        <div class="drawer glass-card">
            <div class="drawer-header">
                <h3><i class="fa-solid fa-history text-cyan"></i> Últimas Descobertas</h3>
                <button class="close-drawer"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="drawer-content" id="history-list">
                <!-- Gerado dinamicamente -->
            </div>
        </div>
    </div>

    <!-- Alertas Customizados (Notificação) -->
    <div id="toast-container"></div>

    <script src="script.js"></script>
</body>
</html>
