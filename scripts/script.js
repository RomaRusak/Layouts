const burgerMenu = document.querySelector('.burger-menu')

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('burger-active')
})

window.addEventListener('resize', () => {
    if (window.screen.width > 1200 && burgerMenu.classList.contains('burger-active')) burgerMenu.classList.remove('burger-active')
})