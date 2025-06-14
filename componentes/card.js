class FichaCard extends HTMLElement {
  connectedCallback() {
    const nome = this.getAttribute("nome") || ""; /* Pega o nome que foi passado */
    const habilidade = this.getAttribute("habilidade") || ""; /* Pega a habilidade que foi passado */
    const checked = this.hasAttribute("ativo"); /* Pega o status do checkbox que foi passado */

    this.innerHTML = `
      <!-- CSS cars -->
      <link rel="stylesheet" href="css/cssEspecifico/card.css">

      <!-- Card -->
      <div class="card">

        <!-- Futuramente ira vir uma imagem -->
        <div class="fakeimg inputs">Image</div>

        <!-- Separa os inputs do restante -->
        <div class="informacoes">

          <!-- Campo NOME -->
          <div class="campo">
            <label>Nome:</label>

            <!-- Mostra o nome que foi passado -->
            <input type="text" class="input" value="${nome}" />
          </div>

          <!-- Campo HABILIDADE -->
          <div class="campo">
            <label>Habilidade:</label>

            <!-- Mostra a habilidade que foi passado -->
            <input type="text" class="input" value="${habilidade}" />
          </div>
        </div>

          <!-- Mostra o status do checkbox que foi passado -->
          <input type="checkbox" class="checkbox-container" ${checked ? "checked" : ""} />
      </div>

    `;
  }
}
customElements.define("ficha-card", FichaCard);