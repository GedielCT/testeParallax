class menuCadastro extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback(){
        this.shadowRoot.innerHTML = `
            <!-- CSS da tabela da ficha -->
            <link rel="stylesheet" href="../../css/cssEspecifico/barraNavegacao.css">

                <!-- Div da barra de menu -->
                <div class="topnav">         
                    <!-- Botões da esquerda -->
                    <div class="navegacao">
                        <a href="ficha.html" class="botaoNav">Ficha</a>
                        <a href="habilidade.html" class="botaoNav">Habilidade</a>
                        <a href="caracteristica.html" class="botaoNav">Caracteristica Secundaria</a>
                        <a href="ficha.html" class="botaoNav">Salvar</a>
                        <a href="ficha.html" class="botaoNav">Cancelar</a>
                    </div>
                </div>

        `;

    }
}
customElements.define("menu-cadastro", menuCadastro);