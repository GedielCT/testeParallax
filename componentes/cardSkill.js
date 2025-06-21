class cardSkillUtilizado extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <!-- CSS da tabela da ficha -->
            <link rel="stylesheet" href="../../css/cssEspecifico/cardSkill.css">

            <!-- Card -->
            <div class="card">
            
                <!-- Futuramente ira vir uma imagem -->
                <div class="imagemPadrao" id="imagemPreview"><label>Imagem</label></div>
                <input type="file" id="imagemInput" accept="image/*" style="display: none;">
            
                <!-- Separa os inputs do restante -->
                <div class="habilidade"> 
                
                    <div class="informacoes">
                        <!-- Campo NOME -->
                        <div class="campo">         
                            <!-- Mostra o nome que foi passado -->
                            <input type="text" class="inputHabilidade" />
                        </div>
                        <div class="informacoes">
                            <label>Custo:</label>
                            <input type="text" class="inputInfo"/>
                            <label>Util:</label>
                            <input type="text" class="inputInfo"/>
                        </div>
                    </div>
                    
                    <!-- Campo HABILIDADE -->
                    <div class="campo">
                        <!-- Mostra a habilidade que foi passado -->
                        <input type="text" class="inputHabilidade" id="descricaoInput" readonly/>
                    </div>

                    <!-- Modal -->
                    <div id="descricaoModal" class="modal" style="display: none;">
                        <div class="modal-content">
                            <textarea id="descricaoTextarea" class="inputCampo" rows="10" cols="50"></textarea>
                            <div class="modal-buttons">
                                <button id="confirmarDescricao" class="poppup">Ok</button>
                            </div>
                        </div>
                    </div>                   
                </div>

            </div>
        `;

        // Elementos
        const descricaoInput = this.shadowRoot.querySelector('#descricaoInput');
        const descricaoModal = this.shadowRoot.querySelector('#descricaoModal');
        const descricaoTextarea = this.shadowRoot.querySelector('#descricaoTextarea');
        const confirmarDescricao = this.shadowRoot.querySelector('#confirmarDescricao');

        // Abrir o modal
        descricaoInput.addEventListener('click', () => {
            descricaoTextarea.value = descricaoInput.value;
            descricaoModal.style.display = 'flex';
        });

        // Confirmar a edição
        confirmarDescricao.addEventListener('click', () => {
            descricaoInput.value = descricaoTextarea.value;
            descricaoModal.style.display = 'none';
        });
    }
}
customElements.define("card-skill-utilizado", cardSkillUtilizado);