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
                <div class="imagem" id="imagemPreview"><label>Imagem</label></div>
                <input type="file" id="imagemInput" accept="image/*" style="display: none;">
            
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
                        <input type="text" class="inputHabilidade" id="descricaoInput" readonly/>
                    </div>

                    <!-- Modal -->
                    <div id="descricaoModal" class="modal" style="display: none;">
                        <div class="modal-content">
                            <textarea id="descricaoTextarea" class="inputCampo" rows="10" cols="50"></textarea>
                            <div class="modal-buttons">
                                <button id="confirmarDescricao" class="poppup">Confirmar</button>
                                <button id="fecharModal" class="poppup">Cancelar</button>
                            </div>
                        </div>
                    </div>                   
                </div>

                <div class="informacoes">
                    <div class="campo">
                        <label>Custo:</label>
                        <input type="text" class="inputHabilidade"/>
                    </div>
                    <div class="campo">
                        <label>Tipo:</label>
                        <select class="inputHabilidade">
                            <option>Normal</option>
                            <option>Ultimato</option>
                        </select>
                    </div>
                </div>
                    
                <!-- Botão de remover -->
                <button class="remover">🗑️</button>
            </div>
        `;

        // Elementos
        const descricaoInput = this.shadowRoot.querySelector('#descricaoInput');
        const descricaoModal = this.shadowRoot.querySelector('#descricaoModal');
        const descricaoTextarea = this.shadowRoot.querySelector('#descricaoTextarea');
        const confirmarDescricao = this.shadowRoot.querySelector('#confirmarDescricao');
        const fecharModal = this.shadowRoot.querySelector('#fecharModal');

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

        // Cancelar a edição
        fecharModal.addEventListener('click', () => {
            descricaoModal.style.display = 'none';
        });


        // Evento para remover o componente ao clicar no botão
        this.shadowRoot.querySelector('.remover').addEventListener('click', () => {
            this.remove();
        });

        const fakeimg = this.shadowRoot.getElementById("imagemPreview");
        const input = this.shadowRoot.getElementById("imagemInput");

        fakeimg.addEventListener("click", () => {
          input.click(); // Dispara o input file
        });

        input.addEventListener("change", function () {
          const file = this.files[0];
          if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
              fakeimg.innerHTML = `<img src="${e.target.result}" style="max-width: 100%; max-height: 100%;">`;
            };
            reader.readAsDataURL(file);
          }
        });

    }
}
customElements.define("card-skill", cardSkill);