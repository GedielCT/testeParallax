// comentario
let botao = document.querySelector(".botao");
let estaQuebrado = false;
let contaCliques = 0;

botao.style.background="blue";

botao.addEventListener("mouseover",e =>{
    if(estaQuebrado===false)
        botao.style.background="green";
});

botao.addEventListener("mouseout",trocaAzul);

function trocaAzul(){
    if(!estaQuebrado){
        botao.style.background="blue";
    }
}

botao.addEventListener("click",botaoQuebra);

function botaoQuebra(){
    contaCliques++; // contaCliques=contaCliques+1;

    if(contaCliques>=10){
        botao.style.background="red";
        botao.innerHTML="quebrei";
        estaQuebrado=true;
    }
}
