class cardSkill extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <!-- CSS da tabela da ficha -->
            <link rel="stylesheet" href="css/cssEspecifico/cardSkill.css">

            <!-- Card -->
            <div class="card">
            
                <!-- Futuramente ira vir uma imagem -->
                <div class="fakeimg">Image</div>
            
                <!-- Separa os inputs do restante -->
                <div class="habilidade">                
                    <!-- Campo NOME -->
                    <div class="campo">
                        <label>Nome:</label>                   
                        <!-- Mostra o nome que foi passado -->
                        <input type="text" class="inputHabilidade" />
                    </div>
                    <!-- Campo HABILIDADE -->
                    <div class="campo">
                        <label>Descrição:</label>
                        <!-- Mostra a habilidade que foi passado -->
                        <input type="text" class="inputHabilidade"/>
                    </div>

                    <!-- Botão de remover -->
                    <button class="remover">🗑️</button>
                </div>

                <div class="informacoes">
                    <div class="campo">
                        <label>Custo:</label>
                        <input type="text" class="inputHabilidade"/>
                    </div>
                    <div class="campo">
                        <label>Tipo:</label>
                        <select class="input">
                            <option>N</option>
                            <option>U</option>
                        </select>
                    </div>
                </div>
            </div>
        `;

        // Evento para remover o componente ao clicar no botão
        this.shadowRoot.querySelector('.remover').addEventListener('click', () => {
            this.remove();
        });

    }
}
customElements.define("card-skill", cardSkill);