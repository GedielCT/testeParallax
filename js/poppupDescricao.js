const descricaoInput = document.getElementById('descricaoInput');
const descricaoModal = document.getElementById('descricaoModal');
const descricaoTextarea = document.getElementById('descricaoTextarea');
const confirmarDescricao = document.getElementById('confirmarDescricao');
const fecharModal = document.getElementById('fecharModal');

// Abrir o modal ao clicar no input
descricaoInput.addEventListener('click', () => {
    descricaoTextarea.value = descricaoInput.value; // Carrega o valor atual no textarea
    descricaoModal.style.display = 'flex';
});

// Confirmar a edição
confirmarDescricao.addEventListener('click', () => {
    descricaoInput.value = descricaoTextarea.value; // Atualiza o input
    descricaoModal.style.display = 'none';
});

// Fechar o modal sem salvar
fecharModal.addEventListener('click', () => {
    descricaoModal.style.display = 'none';
});