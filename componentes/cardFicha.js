class FichaCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
        
  connectedCallback() {
    const nome = this.getAttribute("nome") || ""; /* Pega o nome que foi passado */
    const habilidade = this.getAttribute("habilidade") || ""; /* Pega a habilidade que foi passado */
    const checked = this.hasAttribute("ativo"); /* Pega o status do checkbox que foi passado */

    this.shadowRoot.innerHTML = `
      <!-- CSS cars -->
      <link rel="stylesheet" href="css/cssEspecifico/cardFicha.css">

      <!-- Card -->
      <div class="card">

        <!-- Futuramente ira vir uma imagem -->
        <div class="imagem "><label>Image</label></div>

        <!-- Separa os inputs do restante -->
        <div class="informacoes">

          <!-- Campo NOME -->
          <div class="campo">
            <label>Nome:</label>

            <!-- Mostra o nome que foi passado -->
            <div class="input"><span>${nome}</span></div>            
          </div>

          <!-- Campo HABILIDADE -->
          <div class="campo">
            <label>Habilidade:</label>

            <!-- Mostra a habilidade que foi passado -->
            <div class="input"><span>${habilidade}</span></div> 
          </div>
        </div>

          <!-- Mostra o status do checkbox que foi passado -->
          <input type="checkbox" class="checkbox-container" ${checked ? "checked" : ""} />
      </div>

    `;
    // Redirecionar ao clicar no card
    this.shadowRoot.querySelector('.informacoes').addEventListener('click', () => {
      // Aqui você pode passar parâmetros na URL
      window.location.href = "cadastrarFicha.html";
    });
  }
}
customElements.define("card-ficha", FichaCard);