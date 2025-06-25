class tabelaFicha extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback(){
        var vida = Number(100);
        var anima = Number(10);
        var impeto = Number(5);
        var ultimato = Number(1);
        var cansado = false;
        var forca = Number(0);
        var agilidade = Number(0);
        var foco = Number(0);
        var sabedoria = Number(0);
        var consti = Number(0);
        var carisma = Number(0);
        const recebido = 0;
        const total = 0;
        const simples = 0;
        const profunda = 0;
        const fatal = 0;
        const rodada = 0;
        const ferida = 0;
        const cura = 0;

        this.shadowRoot.innerHTML = `
            <!-- CSS da tabela da ficha -->
            <link rel="stylesheet" href="../../css/cadastro/tabelaFicha.css">

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
                    <div><label>Vida:</label><input type="text" value=${vida}></div>
                    <div><label>Anima:</label><input type="text" value=${anima}></div>
                    <div><label>Ímpeto:</label><input type="text" value=${impeto}></div>
                    <div><label>Ultimato:</label><input type="text" value=${ultimato}></div>
                    <div><label>Cansado:</label><select><option>SIM</option><option>NÃO</option></select></div>
                </div>

                <!-- ATRIBUTOS -->
                <div class="status">
                    <label>ATRIBUTOS</label>
                    <div><label>Força:</label><input type="text" class="forca" value=${forca}><button class="maisForca">🔺</button><button class="menosForca">🔻</button></div>
                    <div><label>Agilidade:</label><input type="text" class="agilidade" value=${agilidade}><button class="maisAgilidade">🔺</button><button class="menosAgilidade">🔻</button></div>
                    <div><label>Foco:</label><input type="text" class="foco" value=${foco}><button class="maisFoco">🔺</button><button class="menosFoco">🔻</button></div>
                    <div><label>Sabedoria:</label><input type="text" class="sabedoria" value=${sabedoria}><button class="maisSabedoria">🔺</button><button class="menosSabedoria">🔻</button></div>
                    <div><label>Consti.:</label><input type="text" class="consti" value=${consti}><button class="maisConsti">🔺</button><button class="menosConsti">🔻</button></div>
                    <div><label>Carisma:</label><input type="text" class="carisma" value=${carisma}><button class="maisCarisma">🔺</button><button class="menosCarisma">🔻</button></div>
                </div>

                <!-- N D -->
                <div class="status">
                    <label>N° D</label>
                    <div><label>Força:</label><input type="text" value=${forca}></div>
                    <div><label>Agilidade:</label><input type="text" value=${agilidade}></div>
                    <div><label>Foco:</label><input type="text" value=${foco}></div>
                    <div><label>Sabedoria:</label><input type="text" value=${sabedoria}></div>
                    <div><label>Consti.:</label><input type="text" value=${consti}></div>
                    <div><label>Carisma:</label><input type="text" value=${carisma}></div>
                </div>

                <!-- DANO / FERIDA -->
                <div class="status">
                    <label>DANO</label>
                        <div><label>Recebido:</label><input type="text" value=${recebido}></div>
                        <div><label>Total:</label><input type="text" value=${total}></div>
                    <label>FERIDA</label>
                        <div><label>Simples:</label><input type="text" value=${simples}></div>
                        <div><label>Profunda:</label><input type="text" value=${profunda}></div>
                        <div><label>Fatal:</label><input type="text" value=${fatal}></div>
                </div>

                <!-- RODADA / OUTROS -->
                <div class="status">
                    <label>RODADA</label>
                        <div><label>Rodada:</label><input type="text" value=${rodada}></div>
                        <div><label>Ferida:</label><input type="text" value=${ferida}></div>
                    <label>OUTROS</label>
                        <div><label>Cura:</label><input type="text" value=${cura}></div>
                        <div><button>Aplicar</button></div>
                </div>
            </div>
        `;

        this.shadowRoot.querySelector('.maisForca').addEventListener('click', () => {
            forca += 1;
            this.shadowRoot.querySelector('.forca').value = forca;
        });
        this.shadowRoot.querySelector('.menosForca').addEventListener('click', () => {
            if(forca > 0) 
                forca -= 1;
            this.shadowRoot.querySelector('.forca').value = forca;
        });


        this.shadowRoot.querySelector('.maisAgilidade').addEventListener('click', () => {
            agilidade += 1;
            this.shadowRoot.querySelector('.agilidade').value = agilidade;
        });
        this.shadowRoot.querySelector('.menosAgilidade').addEventListener('click', () => {
            if(agilidade > 0) 
                agilidade -= 1;
            this.shadowRoot.querySelector('.agilidade').value = agilidade;
        });


        this.shadowRoot.querySelector('.maisFoco').addEventListener('click', () => {
            foco += 1;
            this.shadowRoot.querySelector('.foco').value = foco;
        });
        this.shadowRoot.querySelector('.menosFoco').addEventListener('click', () => {
            if(foco > 0) 
                foco -= 1;
            this.shadowRoot.querySelector('.foco').value = foco;
        });


        this.shadowRoot.querySelector('.maisSabedoria').addEventListener('click', () => {
            sabedoria += 1;
            this.shadowRoot.querySelector('.sabedoria').value = sabedoria;
        });
        this.shadowRoot.querySelector('.menosSabedoria').addEventListener('click', () => {
            if(sabedoria > 0) 
                sabedoria -= 1;
            this.shadowRoot.querySelector('.sabedoria').value = sabedoria;
        });


        this.shadowRoot.querySelector('.maisConsti').addEventListener('click', () => {
            consti += 1;
            this.shadowRoot.querySelector('.consti').value = consti;
        });
        this.shadowRoot.querySelector('.menosConsti').addEventListener('click', () => {
            if(consti > 0) 
                consti -= 1;
            this.shadowRoot.querySelector('.consti').value = consti;
        });


        this.shadowRoot.querySelector('.maisCarisma').addEventListener('click', () => {
            carisma += 1;
            this.shadowRoot.querySelector('.carisma').value = carisma;
        });
        this.shadowRoot.querySelector('.menosCarisma').addEventListener('click', () => {
            if(carisma > 0) 
                carisma -= 1;
            this.shadowRoot.querySelector('.carisma').value = carisma;
        });

    }
}
customElements.define("tabela-ficha", tabelaFicha);