class tabelaFicha extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback(){
        var nivel = Number(0);
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
                <div class="teste2">    
                    <div class="nivel">
                        <label>Nível:</label>
                        <input type="text" class="input" id="nivel" value=${nivel} readonly/>
                    </div>
                    <div>
                        <button class="maisNivel">🔺</button>
                        <button class="menosNivel">🔻</button>
                    </div>
                </div>

                <!-- EXPERIENCIA -->
                <div class="xp">
                    <label>Experiência</label>
                    <input type="text" class="input"/>
                </div>

                <!-- STATUS -->
                <div class="status">
                    <label>STATUS</label>
                    <div><label class="labelStatus">Vida:</label><input type="text" class="vida" value=${vida} readonly></div>
                    <div><label class="labelStatus">Anima:</label><input type="text" id="anima" value=${anima} readonly></div>
                    <div><label class="labelStatus">Ímpeto:</label><input type="text" id="impeto" value=${impeto} readonly></div>
                    <div><label class="labelStatus">Ultimato:</label><input type="text" id="ultimato" value=${ultimato} readonly></div>
                    <div><label class="labelStatus">Cansado:</label><select><option>SIM</option><option>NÃO</option></select></div>
                </div>

                <!-- ATRIBUTOS -->
                <div class="status">
                    <label>ATRIBUTOS</label>
                    <div>
                        <label class="labelStatus">Força:</label>
                        <div class="teste">
                            <input type="text" class="forca" value=${forca} readonly>
                            <div>
                                <button class="maisForca">🔺</button>
                                <button class="menosForca">🔻</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label class="labelStatus">Agilidade:</label>
                        <div class="teste">
                            <input type="text" class="agilidade" value=${agilidade} readonly>
                            <div>
                                <button class="maisAgilidade">🔺</button>
                                <button class="menosAgilidade">🔻</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label class="labelStatus">Foco:</label>
                        <div class="teste">
                            <input type="text" class="foco" value=${foco} readonly>
                            <div>
                                <button class="maisFoco">🔺</button>
                                <button class="menosFoco">🔻</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label class="labelStatus">Sabedoria:</label>
                        <div class="teste">
                            <input type="text" class="sabedoria" value=${sabedoria} readonly>
                            <div>
                                <button class="maisSabedoria">🔺</button>
                                <button class="menosSabedoria">🔻</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label class="labelStatus">Consti.:</label>
                        <div class="teste">
                            <input type="text" class="consti" value=${consti} readonly>
                            <div>
                                <button class="maisConsti">🔺</button>
                                <button class="menosConsti">🔻</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label class="labelStatus">Carisma:</label>
                        <div class="teste">
                            <input type="text" class="carisma" value=${carisma} readonly>
                            <div>
                                <button class="maisCarisma">🔺</button>
                                <button class="menosCarisma">🔻</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- N D -->
                <div class="status">
                    <label>N° D</label>
                    <div><label>Força:</label><input type="text" value=${forca} readonly></div>
                    <div><label>Agilidade:</label><input type="text" value=${agilidade} readonly></div>
                    <div><label>Foco:</label><input type="text" value=${foco} readonly></div>
                    <div><label>Sabedoria:</label><input type="text" value=${sabedoria} readonly></div>
                    <div><label>Consti.:</label><input type="text" value=${consti} readonly></div>
                    <div><label>Carisma:</label><input type="text" value=${carisma} readonly></div>
                </div>

                <!-- DANO / FERIDA -->
                <div class="status">
                    <label>DANO</label>
                        <div><label>Recebido:</label><input type="text" value=${recebido} readonly></div>
                        <div><label>Total:</label><input type="text" value=${total} readonly></div>
                    <label>FERIDA</label>
                        <div><label>Simples:</label><input type="text" value=${simples} readonly></div>
                        <div><label>Profunda:</label><input type="text" value=${profunda} readonly></div>
                        <div><label>Fatal:</label><input type="text" value=${fatal} readonly></div>
                </div>

                <!-- RODADA / OUTROS -->
                <div class="status">
                    <label>RODADA</label>
                        <div><label>Rodada:</label><input type="text" value=${rodada} readonly></div>
                        <div><label>Ferida:</label><input type="text" value=${ferida} readonly></div>
                    <label>OUTROS</label>
                        <div><label>Cura:</label><input type="text" value=${cura} readonly></div>
                        <div><button>Aplicar</button></div>
                </div>
            </div>
        `;

        this.shadowRoot.querySelector('.maisNivel').addEventListener('click', () => {
            nivel += 1;
            vida += 10;
            anima += 2;
            impeto += 2;
            if(nivel==3)
                ultimato += 1;
            this.shadowRoot.querySelector('#nivel').value = nivel;
            this.shadowRoot.querySelector('.vida').value = vida;
            this.shadowRoot.querySelector('#anima').value = anima;
            this.shadowRoot.querySelector('#impeto').value = impeto;
            this.shadowRoot.querySelector('#ultimato').value = ultimato;
        });
        this.shadowRoot.querySelector('.menosNivel').addEventListener('click', () => {
            if(nivel > 0){
                nivel -= 1;
                vida -= 10;
                anima -= 2;
                impeto -= 2;
                if(nivel == 2){
                    ultimato -= 1;
                }
            }
            this.shadowRoot.querySelector('#nivel').value = nivel;
            this.shadowRoot.querySelector('.vida').value = vida;
            this.shadowRoot.querySelector('#anima').value = anima;
            this.shadowRoot.querySelector('#impeto').value = impeto;
            this.shadowRoot.querySelector('#ultimato').value = ultimato;
        });

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
            vida += 5;
            this.shadowRoot.querySelector('.consti').value = consti;
            this.shadowRoot.querySelector('.vida').value = vida;
        });
        this.shadowRoot.querySelector('.menosConsti').addEventListener('click', () => {
            if(consti > 0) {
                consti -= 1;
                vida -= 5;
            }
            this.shadowRoot.querySelector('.consti').value = consti;
            this.shadowRoot.querySelector('.vida').value = vida;
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