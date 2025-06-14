class MenuPrincipal extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
                <!-- CSS menu principal -->
                <link rel="stylesheet" href="css/cssEspecifico/barraNavegacao.css">
                
                <!-- Div da barra de menu -->
                <div class="topnav">
                
                    <!-- Botões da esquerda -->
                    <div class="navegacao">
                        <a href="index.html">Home</a>
                        <a href="usarFicha.html">Usar Ficha</a>
                        <a href="cadastrarFicha.html">Cadastrar Ficha</a>
                    </div>

                    <!-- Botões da direita -->
                    <div class="menu-container">

                        <!-- Botão do menu hamburguer -->
                        <button class="menu-toggle" id="menu-toggle">☰</button>

                        <!-- Botões -->
                        <div class="menu" id="menu">
                            <a href="login.html">Login</a>
                            <a href="singUp.html">Sing Up</a>
                            <a>Perfil</a>
                        </div>    
                    </div>
                </div>
        `;

        const toggleMenu = this.querySelector('#menu-toggle'); /* Defini a class menu-toggle */
        const menu = this.querySelector('#menu'); /* Defini a class menu */

        /* Quando menu-toggle por clicado vai mostrar menu */
        if (toggleMenu) {
            toggleMenu.addEventListener('click', () => {
                menu.classList.toggle('show');
            });
        }
    }
}
customElements.define("menu-principal", MenuPrincipal);