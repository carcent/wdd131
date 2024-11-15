function toggleMenu(){
    const navMenu = document.getElementById('navMenu');
    const hamburger = document.querySelector('.hamburger');
    navMenu.classList.toggle('open');
    hamburger.classList.toggle('open');
}