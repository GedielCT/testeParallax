const togglePerfil = document.getElementById('perfil-toggle');
const perfilMenu = document.getElementById('perfil-menu');

togglePerfil.addEventListener('click', () => {
    perfilMenu.classList.toggle('show');
});
