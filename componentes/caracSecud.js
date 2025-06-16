class caracSecund extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
            <!-- CSS da tabela da ficha -->
            <link rel="stylesheet" href="css/cssEspecifico/ficha.css">
    
                <div class="option">
                    <input type="radio"/>
                    <label>Teste</label>
                </div>
                <div class="option">
                    <input type="radio"/>
                    <label>Teste</label>
                </div>
                <div class="option">
                    <input type="radio"/>
                    <label>Teste</label>
                </div>
                <div class="option">
                    <input type="radio"/>
                    <label>Teste</label>
                </div>
                <div class="option">
                    <input type="radio"/>
                    <label>Teste</label>
                </div>
                <div class="option">
                    <input type="radio"/>
                    <label>Teste</label>
                </div>
                <div class="option">
                    <input type="radio"/>
                    <label>Teste</label>
                </div>
                <div class="option">
                    <input type="radio"/>
                    <label>Teste</label>
                </div>
                <div class="option">
                    <input type="radio"/>
                    <label>Teste</label>
                </div>
                <div class="option">
                    <input type="radio"/>
                    <label>Teste</label>
                </div>
                <div class="option">
                    <input type="radio"/>
                    <label>Teste</label>
                </div>
                <div class="option">
                    <input type="radio"/>
                    <label>Teste</label>
                </div>
                <div class="option">
                    <input type="radio"/>
                    <label>Teste</label>
                </div>
                <div class="option">
                    <input type="radio"/>
                    <label>Teste</label>
                </div>
                <div class="option">
                    <input type="radio"/>
                    <label>Teste</label>
                </div>
                <div class="option">
                    <input type="radio"/>
                    <label>Teste</label>
                </div>
                <div class="option">
                    <input type="radio"/>
                    <label>Teste</label>
                </div>
        `;

    }
}
customElements.define("carac-secund", caracSecund);