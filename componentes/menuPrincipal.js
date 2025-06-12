class MenuPrincipal extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
                <div class="topnav">        
                    <div class="navegacao">
                        <a href="index.html">Home</a>
                        <a href="usarFicha.html">Usar Ficha</a>
                        <a href="cadastrarFicha.html">Cadastrar Ficha</a>
                    </div>
                    <div class="menu-container">
                        <button class="menu-toggle" id="menu-toggle">☰</button>
                        <div class="menu" id="menu">
                            <a href="login.html">Login</a>
                            <a href="singUp.html">Sing Up</a>
                            <a>Perfil</a>
                        </div>    
                    </div>
                </div>
        `;
        const toggleMenu = this.querySelector('#menu-toggle');
        const menu = this.querySelector('#menu');

        if (toggleMenu) {
            toggleMenu.addEventListener('click', () => {
                menu.classList.toggle('show');
            });
        }
    }
}
customElements.define("menu-principal", MenuPrincipal);