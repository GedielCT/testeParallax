class caracSecund extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <!-- CSS da tabela da ficha -->
            <link rel="stylesheet" href="css/cssEspecifico/ficha.css">
    
                <div class="option">
                    <input type="checkbox"/>
                    <label>Teste</label>
                </div>
                <div class="option">
                    <input type="checkbox"/>
                    <label>Teste</label>
                </div>
                <div class="option">
                    <input type="checkbox"/>
                    <label>Teste</label>
                </div>
                <div class="option">
                    <input type="checkbox"/>
                    <label>Teste</label>
                </div>
                <div class="option">
                    <input type="checkbox"/>
                    <label>Teste</label>
                </div>
                <div class="option">
                    <input type="checkbox"/>
                    <label>Teste</label>
                </div>
                <div class="option">
                    <input type="checkbox"/>
                    <label>Teste</label>
                </div>
                <div class="option">
                    <input type="checkbox"/>
                    <label>Teste</label>
                </div>
                <div class="option">
                    <input type="checkbox"/>
                    <label>Teste</label>
                </div>
                <div class="option">
                    <input type="checkbox"/>
                    <label>Teste</label>
                </div>
                <div class="option">
                    <input type="checkbox"/>
                    <label>Teste</label>
                </div>
                <div class="option">
                    <input type="checkbox"/>
                    <label>Teste</label>
                </div>
                <div class="option">
                    <input type="checkbox"/>
                    <label>Teste</label>
                </div>
                <div class="option">
                    <input type="checkbox"/>
                    <label>Teste</label>
                </div>
                <div class="option">
                    <input type="checkbox"/>
                    <label>Teste</label>
                </div>
                <div class="option">
                    <input type="checkbox"/>
                    <label>Teste</label>
                </div>
                <div class="option">
                    <input type="checkbox"/>
                    <label>Teste</label>
                </div>
        `;

    }
}
customElements.define("carac-secund", caracSecund);