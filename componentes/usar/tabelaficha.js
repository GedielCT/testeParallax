class tabelaFicha extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback(){
        const vida = 200;
        const anima = 23;
        const impeto = 10;
        const ultimato = 2;
        const cansado = false;
        const forca = 14;
        const agilidade = 8;
        const foco = 16;
        const sabedoria = 5;
        const consti = 14;
        const carisma = 0;

        this.shadowRoot.innerHTML = `
            <!-- CSS da tabela da ficha -->
            <link rel="stylesheet" href="../../css/usar/tabelaFicha.css">

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
                    <div class="teste"><label class="labelStatus">Vida:</label><input type="text" class="inputStatus"><label>/ ${vida}</label></div>
                    <div class="teste"><label class="labelStatus">Anima:</label><input type="text" class="inputStatus"><label>/ ${anima}</label></div>
                    <div class="teste"><label class="labelStatus">Ímpeto:</label><input type="text" class="inputStatus"><label>/ ${impeto}</label></div>
                    <div class="teste"><label class="labelStatus">Ultimato:</label><input type="text" class="inputStatus"><label>/ ${ultimato}</label></div>
                    <div class="teste"><label class="labelStatus">Cansado:</label><select><option>SIM</option><option>NÃO</option></select></div>
                </div>

                <!-- ATRIBUTOS -->
                <div class="status">
                    <label>ATRIBUTOS</label>
                    <div class="teste"><label class="labelOutros">Força:</label><input type="text" class="inputOutros" value=${forca}></div>
                    <div class="teste"><label class="labelOutros">Agilidade:</label><input type="text" class="inputOutros" value=${agilidade}></div>
                    <div class="teste"><label class="labelOutros">Foco:</label><input type="text" class="inputOutros" value=${foco}></div>
                    <div class="teste"><label class="labelOutros">Sabedoria:</label><input type="text" class="inputOutros" value=${sabedoria}></div>
                    <div class="teste"><label class="labelOutros">Consti.:</label><input type="text" class="inputOutros" value=${consti}></div>
                    <div class="teste"><label class="labelOutros">Carisma:</label><input type="text" class="inputOutros" value=${carisma}></div>
                </div>

                <!-- N D -->
                <div class="status">
                    <label>N° D</label>
                    <div class="teste"><label class="labelOutros">Força:</label><input type="text" class="inputOutros"></div>
                    <div class="teste"><label class="labelOutros">Agilidade:</label><input type="text" class="inputOutros"></div>
                    <div class="teste"><label class="labelOutros">Foco:</label><input type="text" class="inputOutros"></div>
                    <div class="teste"><label class="labelOutros">Sabedoria:</label><input type="text" class="inputOutros"></div>
                    <div class="teste"><label class="labelOutros">Consti.:</label><input type="text" class="inputOutros"></div>
                    <div class="teste"><label class="labelOutros">Carisma:</label><input type="text" class="inputOutros"></div>
                </div>

                <!-- DANO / FERIDA -->
                <div class="status">
                    <label>DANO</label>
                        <div class="teste"><label class="labelOutros">Recebido:</label><input type="text" class="inputOutros"></div>
                        <div class="teste"><label class="labelOutros">Total:</label><input type="text" class="inputOutros"></div>
                    <label>FERIDA</label>
                        <div class="teste"><label class="labelOutros">Simples:</label><input type="text" class="inputOutros"></div>
                        <div class="teste"><label class="labelOutros">Profunda:</label><input type="text" class="inputOutros"></div>
                        <div class="teste"><label class="labelOutros">Fatal:</label><input type="text" class="inputOutros"></div>
                </div>

                <!-- RODADA / OUTROS -->
                <div class="status">
                    <label>RODADA</label>
                        <div class="teste"><label class="labelOutros">Rodada:</label><input type="text" class="inputOutros"></div>
                        <div class="teste"><label class="labelOutros">Ferida:</label><input type="text" class="inputOutros"></div>
                    <label>OUTROS</label>
                        <div class="teste"><label class="labelOutros">Cura:</label><input type="text" class="inputOutros"></div>
                        <div class="teste"><button>Aplicar</button></div>
                </div>
            </div>
        `;

    }
}
customElements.define("tabela-ficha", tabelaFicha);