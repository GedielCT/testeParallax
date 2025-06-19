class MenuPrincipal extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    handleOutsideClick(e) {
        // Se o clique não foi dentro do shadowRoot
        if (!e.composedPath().includes(this.shadowRoot.querySelector('#menu')) &&
            !e.composedPath().includes(this.shadowRoot.querySelector('#menu-toggle')) &&
            !e.composedPath().includes(this.shadowRoot.querySelector('#menu-infor')) &&
            !e.composedPath().includes(this.shadowRoot.querySelector('#menu-info'))) {

            // Fecha ambos os menus
            this.shadowRoot.querySelector('#menu').classList.remove('show');
            this.shadowRoot.querySelector('#menu-infor').classList.remove('show');
        }
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
                <!-- CSS menu principal -->
                <link rel="stylesheet" href="../../css/cssEspecifico/barraNavegacao.css">
                
                <!-- Div da barra de menu -->
                <div class="topnav">
                
                    <!-- Botões da esquerda -->
                    <div class="navegacao">
                        <a href="../../index.html" class="botaoNav">Home</a>
                        <a href="../../pagina/usar/escolher.html" class="botaoNav">Usar</a>
                        <a href="../../pagina/cadastro/ficha.html" class="botaoNav">Cadastrar</a>

                        <!-- Botão do menu hamburguer -->
                        <button class="menu-info" id="menu-info">Informações</button>
                        
                        <!-- Botões -->
                        <div class="menu-infor" id="menu-infor">
                            <a href="../../login.html" class="botaoNav">Login</a>
                            <a href="../../singUp.html" class="botaoNav">Sing Up</a>
                            <a class="botaoNav">Perfil</a>
                        </div>
                    </div>

                    <!-- Botões da direita -->
                    <div class="menu-container">

                        <!-- Botão do menu hamburguer -->
                        <button class="menu-toggle" id="menu-toggle">☰</button>

                        <!-- Botões -->
                        <div class="menu" id="menu">
                            <a href="../../login.html" class="botaoNav">Login</a>
                            <a href="../../singUp.html" class="botaoNav">Sing Up</a>
                            <a class="botaoNav">Perfil</a>
                        </div>    
                    </div>
                </div>

                   
        `;

        const toggleMenu = this.shadowRoot.querySelector('#menu-toggle'); /* Defini a class menu-toggle */
        const menu = this.shadowRoot.querySelector('#menu'); /* Defini a class menu */
        const InfoMenu = this.shadowRoot.querySelector('#menu-info'); /* Defini a class menu-toggle */
        const MenuInfor = this.shadowRoot.querySelector('#menu-infor'); /* Defini a class menu */


        /* Quando menu-toggle por clicado vai mostrar menu */
        if (toggleMenu) {
            toggleMenu.addEventListener('click', () => {
                menu.classList.toggle('show');
                // Fecha o outro menu caso esteja aberto
                MenuInfor.classList.remove('show');
            });
        }

        /* Quando menu-toggle por clicado vai mostrar menu */
        if (InfoMenu) {
            InfoMenu.addEventListener('click', () => {
                MenuInfor.classList.toggle('show');
                // Fecha o outro menu caso esteja aberto
                menu.classList.remove('show');
            });
        } 

        window.addEventListener('click', this.handleOutsideClick.bind(this));

    }
}

customElements.define("menu-principal", MenuPrincipal);