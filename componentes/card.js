class FichaCard extends HTMLElement {
  connectedCallback() {
    const nome = this.getAttribute("nome") || "";
    const habilidade = this.getAttribute("habilidade") || "";
    const checked = this.hasAttribute("ativo");

    this.innerHTML = `
      <div class="card">
        <div class="row flex-container">
          <div class="fakeimg inputs">Image</div>

          <div class="right-content">
            <div class="inputs">
              <label>Nome:</label>
              <input type="text" class="input-text" value="${nome}" />
            </div>
            <div class="inputs">
              <label>Habilidade:</label>
              <input type="text" class="input-text" value="${habilidade}" />
            </div>
          </div>

          <div class="checkbox-container">
            <input type="checkbox" ${checked ? "checked" : ""} />
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define("ficha-card", FichaCard);