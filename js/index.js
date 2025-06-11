const toggleMenu = document.getElementById('menu-toggle');
const Menu = document.getElementById('menu');

toggleMenu.addEventListener('click', () => {
    Menu.classList.toggle('show');
});
