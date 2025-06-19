class tabelaFicha extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback(){
        this.shadowRoot.innerHTML = `
            <!-- CSS da tabela da ficha -->
            <link rel="stylesheet" href="../../css/cssEspecifico/tabelaFicha.css">

            <!-- TABELA DA FICHA -->
            <div class="ficha">

                <!-- NOME -->
                <div class="nome">
                    <label>Nome:</label>
                    <input type="text" class="input"/>
                </div>

                <!-- DATA -->
                <div class="data">
                    <label>Data:</label>
                    <input type="date" class="input"/>
                </div>

                <!-- HORA -->
                <div class="hora">
                    <label>Hora:</label>
                    <input type="time" class="input"/>                
                </div>

                <!-- DINHEIRO -->
                <div class="dinheiro">
                    <label>Dinheiro:</label>
                    <input type="text" class="input"/>
                </div>

                <!-- CLASSE -->
                <div class="classe">
                    <label>Classe</label>
                    <select class="input">
                        <option>Singularidade</option>
                        <option>Energia</option>
                        <option>Regular</option>
                    </select>
                </div>

                <!-- GRAU -->
                <div class="grau">
                    <label>Grau:</label>
                    <select class="input">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                </div>

                <!-- NIVEL -->
                <div class="nivel">    
                    <label>Nível:</label>
                    <input type="text" class="input"/>
                </div>

                <!-- EXPERIENCIA -->
                <div class="xp">
                    <label>Experiência</label>
                    <input type="text" class="input"/>
                </div>

                <!-- STATUS -->
                <div class="status">
                    <label>STATUS</label>
                    <div><label>Vida:</label><input type="text"></div>
                    <div><label>Anima:</label><input type="text"></div>
                    <div><label>Ímpeto:</label><input type="text"></div>
                    <div><label>Ultimato:</label><input type="text"></div>
                    <div><label>Cansado:</label><select><option>SIM</option><option>NÃO</option></select></div>
                </div>

                <!-- ATRIBUTOS -->
                <div class="status">
                    <label>ATRIBUTOS</label>
                    <div><label>Força:</label><input type="text"></div>
                    <div><label>Agilidade:</label><input type="text"></div>
                    <div><label>Foco:</label><input type="text"></div>
                    <div><label>Sabedoria:</label><input type="text"></div>
                    <div><label>Consti.:</label><input type="text"></div>
                    <div><label>Carisma:</label><input type="text"></div>
                </div>

                <!-- N D -->
                <div class="status">
                    <label>N° D</label>
                    <div><label>Força:</label><input type="text"></div>
                    <div><label>Agilidade:</label><input type="text"></div>
                    <div><label>Foco:</label><input type="text"></div>
                    <div><label>Sabedoria:</label><input type="text"></div>
                    <div><label>Consti.:</label><input type="text"></div>
                    <div><label>Carisma:</label><input type="text"></div>
                </div>

                <!-- DANO / FERIDA -->
                <div class="status">
                    <label>DANO</label>
                        <div><label>Recebido:</label><input type="text" ></div>
                        <div><label>Total:</label><input type="text" ></div>
                    <label>FERIDA</label>
                        <div><label>Simples:</label><input type="text" ></div>
                        <div><label>Profunda:</label><input type="text" ></div>
                        <div><label>Fatal:</label><input type="text" ></div>
                </div>

                <!-- RODADA / OUTROS -->
                <div class="status">
                    <label>RODADA</label>
                        <div><label>Rodada:</label><input type="text" ></div>
                        <div><label>Ferida:</label><input type="text" ></div>
                    <label>OUTROS</label>
                        <div><label>Cura:</label><input type="text" ></div>
                        <div><button>Aplicar</button></div>
                </div>
            </div>
        `;

    }
}
customElements.define("tabela-ficha", tabelaFicha);