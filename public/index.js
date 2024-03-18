const menuicon = document.querySelector('#menuicon');
const menu = document.querySelector('#menu');

menuicon.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    }
    else
    {
        menu.classList.add('hidden');
    }
})