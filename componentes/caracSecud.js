class caracSecund extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <!-- CSS da tabela da ficha -->
            <link rel="stylesheet" href="../../css/cssEspecifico/ficha.css">
        
                <label class="tipo">- Características Corporais<label>

                <div class="option">
                    <input type="checkbox"/>
                    <div class="descricao">
                        <label class="titulo">Ápice da condição física:</label>
                        <label class="conteudo">Um corpo capaz de suportar adversidades maiores do que subir o Everest sem equipamentos.</label>
                        <label class="observacao">Valores adicionados: +10 pontos em Constituição.</label>
                    </div>
                    <div>    
                        <label class="requerimento">Requer:</label>
                        <label class="requerimento">4 pontos.</label>
                    </div>
                </div>

                <div class="option">
                    <input type="checkbox"/>
                    <div class="descricao">
                        <label class="titulo">Saúde Inabalável:</label>
                        <label class="conteudo">A incapacidade de pegar doenças virais, a dificuldade de ter infecções e de ser morto por envenenamento. Ficar bêbado é opcional.</label>
                        <label class="observacao">Valores adicionados:+5 pontos em Constituição.</label>
                    </div>
                    <div>    
                        <label class="requerimento">Requer:</label>
                        <label class="requerimento">3 pontos.</label>
                    </div>
                </div>

                <div class="option">
                    <input type="checkbox"/>
                    <div class="descricao">
                        <label class="titulo">Corpo em forma:</label>
                        <label class="conteudo">Você sempre mantém um corpo forte e resistente contra os obstáculos da vida urbana, mesmo se você levar uma vida desregrada.</label>
                        <label class="observacao">Valores adicionados:+2 pontos adicionais fixos em testes de constituição e força.</label>
                    </div>
                    <div>    
                        <label class="requerimento">Requer:</label>
                        <label class="requerimento">3 pontos.</label>
                    </div>
                </div>

                <div class="option">
                    <input type="checkbox"/>
                    <div class="descricao">
                        <label class="titulo">Regeneração Superior:</label>
                        <label class="conteudo">Seu corpo nunca para de se regenerar. Apesar da velocidade ser muito acima do limite da biologia, você não pode regenerar membros perdidos.</label>
                        <label class="observacao">Valores adicionados:+2 pontos em constituição, Efeitos passivos: Dobro de cura em descansos, Recuperação de 4% da máxima por rodada em combate.</label>
                    </div>
                    <div>    
                        <label class="requerimento">Requer:</label>
                        <label class="requerimento">2 pontos.</label>
                    </div>
                </div>

                <div class="option">
                    <input type="checkbox"/>
                    <div class="descricao">
                        <label class="titulo">Regeneração Incansável:</label>
                        <label class="conteudo">Seu corpo nunca para de regenerar, mesmo membros removidos do seu corpo podem ser reintroduzidos ao contato.</label>
                        <label class="observacao">Valores Adicionados:+ 5 pontos em constituição. Dobro de cura em descansos, Efeitos Passivos: Recupera 8% da vida máxima por rodada.</label>
                    </div>
                    <div>    
                        <label class="requerimento">Requer:</label>
                        <label class="requerimento">5 pontos.</label>
                    </div>
                </div>

                <div class="option">
                    <input type="checkbox"/>
                    <div class="descricao">
                        <label class="titulo">Resposta Rápida:</label>
                        <label class="conteudo">Um tempo de resposta acima do biológico, que permite perceber e reagir as coisas na última hora possível.</label>
                        <label class="observacao">Valores adicionados:+10 pontos em agilidade.</label>
                    </div>
                    <div>    
                        <label class="requerimento">Requer:</label>
                        <label class="requerimento">5 pontos.</label>
                    </div>
                </div>

                <div class="option">
                    <input type="checkbox"/>
                    <div class="descricao">
                        <label class="titulo">Eu sangro?:</label>
                        <label class="conteudo">Seu personagem perde muito menos sangue do que qualquer pessoa, negando qualquer dano de sangramento que seja proveniente de feridas. Você ainda está suscetível a coisas como agulhas, sanguessugas, vampiros, hemomantes, etc.</label>
                        <label class="observacao">Efeitos Passivos: Não sangrar.</label>
                    </div>
                    <div>    
                        <label class="requerimento">Requer:</label>
                        <label class="requerimento">1 pontos.</label>
                    </div>
                </div>

                <div class="option">
                    <input type="checkbox"/>
                    <div class="descricao">
                        <label class="titulo">Crawl Out:</label>
                        <label class="conteudo">Algumas pessoas acreditam que a água é a melhor rota de fuga de todas. Apenas torça para que o seu mestre não decida adicionar super piratas na sua campanha.</label>
                        <label class="observacao">Valores adicionados: +2 de Constituição e Agilidade, +8 em testes que envolvam natação.</label>
                    </div>
                    <div>    
                        <label class="requerimento">Requer:</label>
                        <label class="requerimento">1 pontos.</label>
                    </div>
                </div>

                <div class="option">
                    <input type="checkbox"/>
                    <div class="descricao">
                        <label class="titulo">Plasticidade Deliberada:</label>
                        <label class="conteudo">Você pode escolher um dos 5 sentidos básicos do ser humano para receber um aprimoramento. Farejar como um cão? Enxergar como um falcão? Você que sabe, meu irmão.</label>
                        <label class="observacao">Valores adicionados: +5 em testes de sabedoria que envolvam o sentido escolhido. Efeitos passivos: Você pode escolher esse poder mais de uma vez.</label>
                    </div>
                    <div>    
                        <label class="requerimento">Requer:</label>
                        <label class="requerimento">1 pontos.</label>
                    </div>
                </div>

                <div class="option">
                    <input type="checkbox"/>
                    <div class="descricao">
                        <label class="titulo">Ritmo Veloz:</label>
                        <label class="conteudo">Seus reflexos naturais perderam o atraso biológico. Às vezes, parece que você previu o que ia acontecer.</label>
                        <label class="observacao">Valores Adicionados: +12 pontos em Agilidade.</label>
                    </div>
                    <div>    
                        <label class="requerimento">Requer:</label>
                        <label class="requerimento">5 pontos e não ter escolhido Resposta Rápida.</label>
                    </div>
                </div>

                <label class="tipo">- Características Mentais<label>

                <div class="option">
                    <input type="checkbox"/>
                    <div class="descricao">
                        <label class="titulo">Conhecimentos Super Triviais:</label>
                        <label class="conteudo">Você se torna um banco de informações inúteis, acreditando que um dia elas possam ter um uso. O lado bom é nunca ficar sem assunto para conversar.</label>
                        <label class="observacao">Valores adicionados: +5 pontos de Sabedoria.</label>
                    </div>
                    <div>    
                        <label class="requerimento">Requer:</label>
                        <label class="requerimento">3 pontos.</label>
                    </div>
                </div>

                <div class="option">
                    <input type="checkbox"/>
                    <div class="descricao">
                        <label class="titulo">Conhecimentos Super Profundos:</label>
                        <label class="conteudo">Uma portentosa argúcia que te enseja a atinar coisas que você, quando defesso de sua sapiência, elegia serem contemptíveis.</label>
                        <label class="observacao">Valores adicionados: +10 pontos de Sabedoria.</label>
                    </div>
                    <div>    
                        <label class="requerimento">Requer:</label>
                        <label class="requerimento">5 pontos.</label>
                    </div>
                </div>

                <div class="option">
                    <input type="checkbox"/>
                    <div class="descricao">
                        <label class="titulo">Automanipulação:</label>
                        <label class="conteudo">Quando se tem uma memória curta, nada é melhor do que inventar informações, achando que lembrou de algo. Boa sorte!</label>
                        <label class="observacao">Valores adicionados: +2 pontos de Carisma. Efeitos passivos: Você pode adicionar bônus em rolagens de Sabedoria com seus pontos de carisma.</label>
                    </div>
                    <div>    
                        <label class="requerimento">Requer:</label>
                        <label class="requerimento">2 pontos.</label>
                    </div>
                </div>

                <div class="option">
                    <input type="checkbox"/>
                    <div class="descricao">
                        <label class="titulo">Bússola Humana:</label>
                        <label class="conteudo">Você é incapaz de se perder ao caminhar por locais onde é possível determinar as direções de uma bússola.</label>
                        <label class="observacao"></label>
                    </div>
                    <div>    
                        <label class="requerimento">Requer:</label>
                        <label class="requerimento">2 pontos.</label>
                    </div>
                </div>

                <div class="option">
                    <input type="checkbox"/>
                    <div class="descricao">
                        <label class="titulo">Paranoico do Tempo:</label>
                        <label class="conteudo">Você estranhamente sabe precisamente a hora em segundos, minutos e horas.</label>
                        <label class="observacao"></label>
                    </div>
                    <div>    
                        <label class="requerimento">Requer:</label>
                        <label class="requerimento">2 pontos.</label>
                    </div>
                </div>

                <div class="option">
                    <input type="checkbox"/>
                    <div class="descricao">
                        <label class="titulo">Nerd:</label>
                        <label class="conteudo">Você é um clássico que consegue entender ao menos o básico da maioria das tecnologias atuais e é capaz de ensinar para sua vó.</label>
                        <label class="observacao"></label>
                    </div>
                    <div>    
                        <label class="requerimento">Requer:</label>
                        <label class="requerimento">2 pontos.</label>
                    </div>
                </div>

                <div class="option">
                    <input type="checkbox"/>
                    <div class="descricao">
                        <label class="titulo">Metaforar:</label>
                        <label class="conteudo">Uma mente que esquadrinha todos os detalhes de situações diversas.</label>
                        <label class="observacao">Valores adicionados: +10 em carisma, +2 para detectar mentiras.</label>
                    </div>
                    <div>    
                        <label class="requerimento">Requer:</label>
                        <label class="requerimento">4 pontos.</label>
                    </div>
                </div>

                <div class="option">
                    <input type="checkbox"/>
                    <div class="descricao">
                        <label class="titulo">Memória Infinita:</label>
                        <label class="conteudo">Uma memória fotográfica que pode lembrar de absolutamente qualquer coisa. Não vamos nos esquecer que isso não te impede de esquecer nada.</label>
                        <label class="observacao">Efeitos passivos: Em condições normais, seu personagem pode lembrar da maioria das coisas apresentadas para ele.</label>
                    </div>
                    <div>    
                        <label class="requerimento">Requer:</label>
                        <label class="requerimento">4 pontos.</label>
                    </div>
                </div>

                <div class="option">
                    <input type="checkbox"/>
                    <div class="descricao">
                        <label class="titulo">Escola do Morcego:</label>
                        <label class="conteudo">Com o treinamento certo, qualquer coisa pode se tornar uma arma. Contudo, todos temos as nossas preferências.</label>
                        <label class="observacao">Valores adicionados: +3 pontos em Foco. Efeitos passivos: Você não precisa atender aos requisitos de nenhuma arma. Qualquer objeto, que se pareça com uma arma sua, pode ser usada como se fosse ela.</label>
                    </div>
                    <div>    
                        <label class="requerimento">Requer:</label>
                        <label class="requerimento">3 pontos.</label>
                    </div>
                </div>

                <div class="option">
                    <input type="checkbox"/>
                    <div class="descricao">
                        <label class="titulo">Sorria e Acene:</label>
                        <label class="conteudo">Você pode até ser cativante, mas o seu jeito acaba sendo ofuscado por dancinhas do TikTok e pinguins de zoológico. É o tipo de coisa que não dá pra competir.</label>
                        <label class="observacao">Valores adicionados: +5 pontos em Carisma.</label>
                    </div>
                    <div>    
                        <label class="requerimento">Requer:</label>
                        <label class="requerimento">2 pontos.</label>
                    </div>
                </div>

                <div class="option">
                    <input type="checkbox"/>
                    <div class="descricao">
                        <label class="titulo">Vamos, Carpeado!:</label>
                        <label class="conteudo">O volante não é nada mais do que as rédeas de um corcel sem alma. Sua habilidade com carros, barcos e cavalos é notável.</label>
                        <label class="observacao">Valores adicionados: +1 ponto em Foco, +5 pontos em testes para dirigir, pilotar ou montar. Efeitos passivos: Você não precisa de habilitação para saber dirigir veículos simples.</label>
                    </div>
                    <div>    
                        <label class="requerimento">Requer:</label>
                        <label class="requerimento">2 pontos.</label>
                    </div>
                </div>

                <div class="option">
                    <input type="checkbox"/>
                    <div class="descricao">
                        <label class="titulo">O Gato e a Cobra:</label>
                        <label class="conteudo">Altas noções de furtividade, para poder se esconder debaixo do nariz de todos. Entretanto, você já sabe o básico do combate corpo-a-corpo?</label>
                        <label class="observacao">Valores adicionados: +7 em testes de furtividade, +3 pontos em Sabedoria e Foco.</label>
                    </div>
                    <div>    
                        <label class="requerimento">Requer:</label>
                        <label class="requerimento">4 pontos.</label>
                    </div>
                </div>

                <div class="option">
                    <input type="checkbox"/>
                    <div class="descricao">
                        <label class="titulo">Eles estão muito mortos:</label>
                        <label class="conteudo">Um talento natural com armas de longo alcance. Vale lembrar que não adianta nada ser muito bom em algo e não ter nenhum estilo.</label>
                        <label class="observacao">Valores adicionados: +5 pontos em Foco e +5 em testes para mirar e atirar. Efeitos passivos: Requisitos de armas de longo alcance são anulados.</label>
                    </div>
                    <div>    
                        <label class="requerimento">Requer:</label>
                        <label class="requerimento">4 pontos.</label>
                    </div>
                </div>

                <label class="tipo">- Características Espirituais<label>

                <div class="option">
                    <input type="checkbox"/>
                    <div class="descricao">
                        <label class="titulo">A Gente Já Chegou?:</label>
                        <label class="conteudo">Dormir no banco duro de um carro como se fosse uma cama de luxo é uma rara habilidade. Sério mesmo.</label>
                        <label class="observacao">Efeitos passivos: Você pode descansar durante viagens em veículos sem cama.</label>
                    </div>
                    <div>    
                        <label class="requerimento">Requer:</label>
                        <label class="requerimento">1 pontos.</label>
                    </div>
                </div>

                <div class="option">
                    <input type="checkbox"/>
                    <div class="descricao">
                        <label class="titulo">Dom Natural:</label>
                        <label class="conteudo">Eu acho muito legal que você sabe tocar um teremim. É uma pena que ninguém sabe que é um teremim.</label>
                        <label class="observacao">Valores adicionados: +2 pontos em Carisma, +5 em testes que envolvam música. Efeitos passivos: Você sabe tocar a maioria dos instrumentos musicais.</label>
                    </div>
                    <div>    
                        <label class="requerimento">Requer:</label>
                        <label class="requerimento">1 pontos.</label>
                    </div>
                </div>

                <div class="option">
                    <input type="checkbox"/>
                    <div class="descricao">
                        <label class="titulo">Item da sorte:</label>
                        <label class="conteudo">Um objeto está diretamente conectado com a sua alma. Sempre  que você estiver com ele, você pode zerar um gasto de Anima por mesa.</label>
                        <label class="observacao">Efeito: Uma vez por mesa não gasta Anima para a ação.</label>
                    </div>
                    <div>    
                        <label class="requerimento">Requer:</label>
                        <label class="requerimento">4 pontos.</label>
                    </div>
                </div>

                <div class="option">
                    <input type="checkbox"/>
                    <div class="descricao">
                        <label class="titulo">CEO da Procrastinação:</label>
                        <label class="conteudo">Enquanto eles trabalham, você dorme.</label>
                        <label class="observacao">Efeito: Você não perde Anima e Ímpeto por trabalhar e dificilmente ficará cansado.</label>
                    </div>
                    <div>    
                        <label class="requerimento">Requer:</label>
                        <label class="requerimento">1 pontos.</label>
                    </div>
                </div>

                <div class="option">
                    <input type="checkbox"/>
                    <div class="descricao">
                        <label class="titulo">Mal Presságio:</label>
                        <label class="conteudo">Você sempre pode rolar um teste de carisma para pressentir a sua reação a uma ação.</label>
                        <label class="observacao">Efeito: Sempre pode-se rolar um dado de carisma em relação a próxima ação.</label>
                    </div>
                    <div>    
                        <label class="requerimento">Requer:</label>
                        <label class="requerimento">2 pontos.</label>
                    </div>
                </div>

                <div class="option">
                    <input type="checkbox"/>
                    <div class="descricao">
                        <label class="titulo">Só eles entendem o que eu falo:</label>
                        <label class="conteudo">Você não precisa rodar testes de carisma, quando os alvos são seus amigos. Desde que eles concordem.</label>
                        <label class="observacao">Efeito: Dados de carisma em amigos são sempre um sucesso.</label>
                    </div>
                    <div>    
                        <label class="requerimento">Requer:</label>
                        <label class="requerimento">2 pontos.</label>
                    </div>
                </div>

                <div class="option">
                    <input type="checkbox"/>
                    <div class="descricao">
                        <label class="titulo">Espírito Livre:</label>
                        <label class="conteudo">Você é capaz de expandir seus usos de habilidades para que se torne qualquer personagem com Bastão das Eras.</label>
                        <label class="observacao">Efeito: Você começa com mais 3 de Anima e recebe mais 1 por nível.</label>
                    </div>
                    <div>    
                        <label class="requerimento">Requer:</label>
                        <label class="requerimento">3 pontos.</label>
                    </div>
                </div>

                <div class="option">
                    <input type="checkbox"/>
                    <div class="descricao">
                        <label class="titulo">Oportunista compulsório:</label>
                        <label class="conteudo">A sorte sempre acha um jeito de te achar. (foco maior em jogos de azar e pequenos achados).</label>
                        <label class="observacao">Efeito: Recebe +2 fixo para jogos de azar e encontrar itens irrelevantes.</label>
                    </div>
                    <div>    
                        <label class="requerimento">Requer:</label>
                        <label class="requerimento">2 pontos.</label>
                    </div>
                </div>

                <div class="option">
                    <input type="checkbox"/>
                    <div class="descricao">
                        <label class="titulo">Moda de todo dia:</label>
                        <label class="conteudo">Você sempre está na moda, tendo completa noção de como gostos para roupas funcionam.</label>
                        <label class="observacao">Efeito: Você recebe +5 de carisma fixo em testes relacionados a moda.</label>
                    </div>
                    <div>    
                        <label class="requerimento">Requer:</label>
                        <label class="requerimento">2 pontos.</label>
                    </div>
                </div>

                <div class="option">
                    <input type="checkbox"/>
                    <div class="descricao">
                        <label class="titulo">Arte é vida:</label>
                        <label class="conteudo">Você têm um dom natural para pinturas e consegue expressar de maneiras mais exóticas.</label>
                        <label class="observacao">Efeito: Você recebe +5 de foco fixo para o próximo teste, quando tiver interagido com algum tipo de arte.</label>
                    </div>
                    <div>    
                        <label class="requerimento">Requer:</label>
                        <label class="requerimento">2 pontos.</label>
                    </div>
                </div>

                <div class="option">
                    <input type="checkbox"/>
                    <div class="descricao">
                        <label class="titulo">Animalia:</label>
                        <label class="conteudo">Se seres humanos também são animais, falar com eles não é nenhum super poder.</label>
                        <label class="observacao">Valores adicionados: +5 em testes de Carisma ao falar com Animais. Efeitos passivos: Você é capaz de se comunicar com quase todo tipo de Animal.</label>
                    </div>
                    <div>    
                        <label class="requerimento">Requer:</label>
                        <label class="requerimento">2 pontos.</label>
                    </div>
                </div>

                <div class="option">
                    <input type="checkbox"/>
                    <div class="descricao">
                        <label class="titulo">Digital Influencer:</label>
                        <label class="conteudo">No fim das contas, não dá mais pra ser famoso só com um papel principal em uma série de TV. Todo famoso precisa de uma rede social ativa.</label>
                        <label class="observacao">Efeitos passivos: Você é famoso e reconhecido pelo seu trabalho. Não manter suas redes ativas pode ter retornos negativos.</label>
                    </div>
                    <div>    
                        <label class="requerimento">Requer:</label>
                        <label class="requerimento">2 pontos.</label>
                    </div>
                </div>

                <div class="option">
                    <input type="checkbox"/>
                    <div class="descricao">
                        <label class="titulo">Policial Mau:</label>
                        <label class="conteudo">Desde que o óculos não seja redondo, você consegue transformá-lo em uma arma para intimidar pessoas.</label>
                        <label class="observacao">Valores adicionados: +5 em testes de intimidação.</label>
                    </div>
                    <div>    
                        <label class="requerimento">Requer:</label>
                        <label class="requerimento">1 ponto. Estar usando um óculos escuro.</label>
                    </div>
                </div>
        `;

    }
}
customElements.define("carac-secund", caracSecund);

class caracSecundUtilizado extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <!-- CSS da tabela da ficha -->
            <link rel="stylesheet" href="../../css/cssEspecifico/ficha.css">
        
                <label class="tipo">- Características Corporais<label>

                <div class="option">
                    <input type="checkbox"/>
                    <div>
                        <label class="titulo">Ápice da condição física:</label>
                        <label class="conteudo">Um corpo capaz de suportar adversidades maiores do que subir o Everest sem equipamentos.</label>
                        <label class="observacao">Valores adicionados: +10 pontos em Constituição.</label>
                    </div>
                </div>

                <div class="option">
                    <input type="checkbox"/>
                    <div>
                        <label class="titulo">Saúde Inabalável:</label>
                        <label class="conteudo">A incapacidade de pegar doenças virais, a dificuldade de ter infecções e de ser morto por envenenamento. Ficar bêbado é opcional.</label>
                        <label class="observacao">Valores adicionados:+5 pontos em Constituição.</label>
                    </div>
                </div>

                <div class="option">
                    <input type="checkbox"/>
                    <div>
                        <label class="titulo">Corpo em forma:</label>
                        <label class="conteudo">Você sempre mantém um corpo forte e resistente contra os obstáculos da vida urbana, mesmo se você levar uma vida desregrada.</label>
                        <label class="observacao">Valores adicionados:+2 pontos adicionais fixos em testes de constituição e força.</label>
                    </div>
                </div>

                <div class="option">
                    <input type="checkbox"/>
                    <div>
                        <label class="titulo">Regeneração Superior:</label>
                        <label class="conteudo">Seu corpo nunca para de se regenerar. Apesar da velocidade ser muito acima do limite da biologia, você não pode regenerar membros perdidos.</label>
                        <label class="observacao">Valores adicionados:+2 pontos em constituição, Efeitos passivos: Dobro de cura em descansos, Recuperação de 4% da máxima por rodada em combate.</label>
                    </div>
                </div>

                <div class="option">
                    <input type="checkbox"/>
                    <div>
                        <label class="titulo">Regeneração Incansável:</label>
                        <label class="conteudo">Seu corpo nunca para de regenerar, mesmo membros removidos do seu corpo podem ser reintroduzidos ao contato.</label>
                        <label class="observacao">Valores Adicionados:+ 5 pontos em constituição. Dobro de cura em descansos, Efeitos Passivos: Recupera 8% da vida máxima por rodada.</label>
                    </div>
                </div>

                <div class="option">
                    <input type="checkbox"/>
                    <div>
                        <label class="titulo">Resposta Rápida:</label>
                        <label class="conteudo">Um tempo de resposta acima do biológico, que permite perceber e reagir as coisas na última hora possível.</label>
                        <label class="observacao">Valores adicionados:+10 pontos em agilidade.</label>
                    </div>
                </div>

                <div class="option">
                    <input type="checkbox"/>
                    <div>
                        <label class="titulo">Eu sangro?:</label>
                        <label class="conteudo">Seu personagem perde muito menos sangue do que qualquer pessoa, negando qualquer dano de sangramento que seja proveniente de feridas. Você ainda está suscetível a coisas como agulhas, sanguessugas, vampiros, hemomantes, etc.</label>
                        <label class="observacao">Efeitos Passivos: Não sangrar.</label>
                    </div>
                </div>

                <div class="option">
                    <input type="checkbox"/>
                    <div>
                        <label class="titulo">Crawl Out:</label>
                        <label class="conteudo">Algumas pessoas acreditam que a água é a melhor rota de fuga de todas. Apenas torça para que o seu mestre não decida adicionar super piratas na sua campanha.</label>
                        <label class="observacao">Valores adicionados: +2 de Constituição e Agilidade, +8 em testes que envolvam natação.</label>
                    </div>
                </div>

                <div class="option">
                    <input type="checkbox"/>
                    <div>
                        <label class="titulo">Plasticidade Deliberada:</label>
                        <label class="conteudo">Você pode escolher um dos 5 sentidos básicos do ser humano para receber um aprimoramento. Farejar como um cão? Enxergar como um falcão? Você que sabe, meu irmão.</label>
                        <label class="observacao">Valores adicionados: +5 em testes de sabedoria que envolvam o sentido escolhido. Efeitos passivos: Você pode escolher esse poder mais de uma vez.</label>
                    </div>
                </div>

                <div class="option">
                    <input type="checkbox"/>
                    <div>
                        <label class="titulo">Ritmo Veloz:</label>
                        <label class="conteudo">Seus reflexos naturais perderam o atraso biológico. Às vezes, parece que você previu o que ia acontecer.</label>
                        <label class="observacao">Valores Adicionados: +12 pontos em Agilidade.</label>
                    </div>
                </div>

                <label class="tipo">- Características Mentais<label>

                <div class="option">
                    <input type="checkbox"/>
                    <div>
                        <label class="titulo">Conhecimentos Super Triviais:</label>
                        <label class="conteudo">Você se torna um banco de informações inúteis, acreditando que um dia elas possam ter um uso. O lado bom é nunca ficar sem assunto para conversar.</label>
                        <label class="observacao">Valores adicionados: +5 pontos de Sabedoria.</label>
                    </div>
                </div>

                <div class="option">
                    <input type="checkbox"/>
                    <div>
                        <label class="titulo">Conhecimentos Super Profundos:</label>
                        <label class="conteudo">Uma portentosa argúcia que te enseja a atinar coisas que você, quando defesso de sua sapiência, elegia serem contemptíveis.</label>
                        <label class="observacao">Valores adicionados: +10 pontos de Sabedoria.</label>
                    </div>
                </div>

                <div class="option">
                    <input type="checkbox"/>
                    <div class="">
                        <label class="titulo">Automanipulação:</label>
                        <label class="conteudo">Quando se tem uma memória curta, nada é melhor do que inventar informações, achando que lembrou de algo. Boa sorte!</label>
                        <label class="observacao">Valores adicionados: +2 pontos de Carisma. Efeitos passivos: Você pode adicionar bônus em rolagens de Sabedoria com seus pontos de carisma.</label>
                    </div>
                </div>

                <div class="option">
                    <input type="checkbox"/>
                    <div class="">
                        <label class="titulo">Bússola Humana:</label>
                        <label class="conteudo">Você é incapaz de se perder ao caminhar por locais onde é possível determinar as direções de uma bússola.</label>
                        <label class="observacao"></label>
                    </div>
                </div>

                <div class="option">
                    <input type="checkbox"/>
                    <div class="">
                        <label class="titulo">Paranoico do Tempo:</label>
                        <label class="conteudo">Você estranhamente sabe precisamente a hora em segundos, minutos e horas.</label>
                        <label class="observacao"></label>
                    </div>
                </div>

                <div class="option">
                    <input type="checkbox"/>
                    <div class="">
                        <label class="titulo">Nerd:</label>
                        <label class="conteudo">Você é um clássico que consegue entender ao menos o básico da maioria das tecnologias atuais e é capaz de ensinar para sua vó.</label>
                        <label class="observacao"></label>
                    </div>
                </div>

                <div class="option">
                    <input type="checkbox"/>
                    <div class="">
                        <label class="titulo">Metaforar:</label>
                        <label class="conteudo">Uma mente que esquadrinha todos os detalhes de situações diversas.</label>
                        <label class="observacao">Valores adicionados: +10 em carisma, +2 para detectar mentiras.</label>
                    </div>
                </div>

                <div class="option">
                    <input type="checkbox"/>
                    <div class="">
                        <label class="titulo">Memória Infinita:</label>
                        <label class="conteudo">Uma memória fotográfica que pode lembrar de absolutamente qualquer coisa. Não vamos nos esquecer que isso não te impede de esquecer nada.</label>
                        <label class="observacao">Efeitos passivos: Em condições normais, seu personagem pode lembrar da maioria das coisas apresentadas para ele.</label>
                    </div>
                </div>

                <div class="option">
                    <input type="checkbox"/>
                    <div class="">
                        <label class="titulo">Escola do Morcego:</label>
                        <label class="conteudo">Com o treinamento certo, qualquer coisa pode se tornar uma arma. Contudo, todos temos as nossas preferências.</label>
                        <label class="observacao">Valores adicionados: +3 pontos em Foco. Efeitos passivos: Você não precisa atender aos requisitos de nenhuma arma. Qualquer objeto, que se pareça com uma arma sua, pode ser usada como se fosse ela.</label>
                    </div>
                </div>

                <div class="option">
                    <input type="checkbox"/>
                    <div class="">
                        <label class="titulo">Sorria e Acene:</label>
                        <label class="conteudo">Você pode até ser cativante, mas o seu jeito acaba sendo ofuscado por dancinhas do TikTok e pinguins de zoológico. É o tipo de coisa que não dá pra competir.</label>
                        <label class="observacao">Valores adicionados: +5 pontos em Carisma.</label>
                    </div>
                </div>

                <div class="option">
                    <input type="checkbox"/>
                    <div class="">
                        <label class="titulo">Vamos, Carpeado!:</label>
                        <label class="conteudo">O volante não é nada mais do que as rédeas de um corcel sem alma. Sua habilidade com carros, barcos e cavalos é notável.</label>
                        <label class="observacao">Valores adicionados: +1 ponto em Foco, +5 pontos em testes para dirigir, pilotar ou montar. Efeitos passivos: Você não precisa de habilitação para saber dirigir veículos simples.</label>
                    </div>
                </div>

                <div class="option">
                    <input type="checkbox"/>
                    <div class="">
                        <label class="titulo">O Gato e a Cobra:</label>
                        <label class="conteudo">Altas noções de furtividade, para poder se esconder debaixo do nariz de todos. Entretanto, você já sabe o básico do combate corpo-a-corpo?</label>
                        <label class="observacao">Valores adicionados: +7 em testes de furtividade, +3 pontos em Sabedoria e Foco.</label>
                    </div>
                </div>

                <div class="option">
                    <input type="checkbox"/>
                    <div class="">
                        <label class="titulo">Eles estão muito mortos:</label>
                        <label class="conteudo">Um talento natural com armas de longo alcance. Vale lembrar que não adianta nada ser muito bom em algo e não ter nenhum estilo.</label>
                        <label class="observacao">Valores adicionados: +5 pontos em Foco e +5 em testes para mirar e atirar. Efeitos passivos: Requisitos de armas de longo alcance são anulados.</label>
                    </div>
                </div>

                <label class="tipo">- Características Espirituais<label>

                <div class="option">
                    <input type="checkbox"/>
                    <div class="">
                        <label class="titulo">A Gente Já Chegou?:</label>
                        <label class="conteudo">Dormir no banco duro de um carro como se fosse uma cama de luxo é uma rara habilidade. Sério mesmo.</label>
                        <label class="observacao">Efeitos passivos: Você pode descansar durante viagens em veículos sem cama.</label>
                    </div>
                </div>

                <div class="option">
                    <input type="checkbox"/>
                    <div class="">
                        <label class="titulo">Dom Natural:</label>
                        <label class="conteudo">Eu acho muito legal que você sabe tocar um teremim. É uma pena que ninguém sabe que é um teremim.</label>
                        <label class="observacao">Valores adicionados: +2 pontos em Carisma, +5 em testes que envolvam música. Efeitos passivos: Você sabe tocar a maioria dos instrumentos musicais.</label>
                    </div>
                </div>

                <div class="option">
                    <input type="checkbox"/>
                    <div class="">
                        <label class="titulo">Item da sorte:</label>
                        <label class="conteudo">Um objeto está diretamente conectado com a sua alma. Sempre  que você estiver com ele, você pode zerar um gasto de Anima por mesa.</label>
                        <label class="observacao">Efeito: Uma vez por mesa não gasta Anima para a ação.</label>
                    </div>
                </div>

                <div class="option">
                    <input type="checkbox"/>
                    <div class="">
                        <label class="titulo">CEO da Procrastinação:</label>
                        <label class="conteudo">Enquanto eles trabalham, você dorme.</label>
                        <label class="observacao">Efeito: Você não perde Anima e Ímpeto por trabalhar e dificilmente ficará cansado.</label>
                    </div>
                </div>

                <div class="option">
                    <input type="checkbox"/>
                    <div class="">
                        <label class="titulo">Mal Presságio:</label>
                        <label class="conteudo">Você sempre pode rolar um teste de carisma para pressentir a sua reação a uma ação.</label>
                        <label class="observacao">Efeito: Sempre pode-se rolar um dado de carisma em relação a próxima ação.</label>
                    </div>
                </div>

                <div class="option">
                    <input type="checkbox"/>
                    <div class="">
                        <label class="titulo">Só eles entendem o que eu falo:</label>
                        <label class="conteudo">Você não precisa rodar testes de carisma, quando os alvos são seus amigos. Desde que eles concordem.</label>
                        <label class="observacao">Efeito: Dados de carisma em amigos são sempre um sucesso.</label>
                    </div>
                </div>

                <div class="option">
                    <input type="checkbox"/>
                    <div class="">
                        <label class="titulo">Espírito Livre:</label>
                        <label class="conteudo">Você é capaz de expandir seus usos de habilidades para que se torne qualquer personagem com Bastão das Eras.</label>
                        <label class="observacao">Efeito: Você começa com mais 3 de Anima e recebe mais 1 por nível.</label>
                    </div>
                </div>

                <div class="option">
                    <input type="checkbox"/>
                    <div class="">
                        <label class="titulo">Oportunista compulsório:</label>
                        <label class="conteudo">A sorte sempre acha um jeito de te achar. (foco maior em jogos de azar e pequenos achados).</label>
                        <label class="observacao">Efeito: Recebe +2 fixo para jogos de azar e encontrar itens irrelevantes.</label>
                    </div>
                </div>

                <div class="option">
                    <input type="checkbox"/>
                    <div class="">
                        <label class="titulo">Moda de todo dia:</label>
                        <label class="conteudo">Você sempre está na moda, tendo completa noção de como gostos para roupas funcionam.</label>
                        <label class="observacao">Efeito: Você recebe +5 de carisma fixo em testes relacionados a moda.</label>
                    </div>
                </div>

                <div class="option">
                    <input type="checkbox"/>
                    <div class="">
                        <label class="titulo">Arte é vida:</label>
                        <label class="conteudo">Você têm um dom natural para pinturas e consegue expressar de maneiras mais exóticas.</label>
                        <label class="observacao">Efeito: Você recebe +5 de foco fixo para o próximo teste, quando tiver interagido com algum tipo de arte.</label>
                    </div>
                </div>

                <div class="option">
                    <input type="checkbox"/>
                    <div class="">
                        <label class="titulo">Animalia:</label>
                        <label class="conteudo">Se seres humanos também são animais, falar com eles não é nenhum super poder.</label>
                        <label class="observacao">Valores adicionados: +5 em testes de Carisma ao falar com Animais. Efeitos passivos: Você é capaz de se comunicar com quase todo tipo de Animal.</label>
                    </div>
                </div>

                <div class="option">
                    <input type="checkbox"/>
                    <div class="">
                        <label class="titulo">Digital Influencer:</label>
                        <label class="conteudo">No fim das contas, não dá mais pra ser famoso só com um papel principal em uma série de TV. Todo famoso precisa de uma rede social ativa.</label>
                        <label class="observacao">Efeitos passivos: Você é famoso e reconhecido pelo seu trabalho. Não manter suas redes ativas pode ter retornos negativos.</label>
                    </div>
                </div>

                <div class="option">
                    <input type="checkbox"/>
                    <div class="">
                        <label class="titulo">Policial Mau:</label>
                        <label class="conteudo">Desde que o óculos não seja redondo, você consegue transformá-lo em uma arma para intimidar pessoas.</label>
                        <label class="observacao">Valores adicionados: +5 em testes de intimidação.</label>
                    </div>
                </div>
        `;

    }
}
customElements.define("carac-secund-utilizado", caracSecundUtilizado);