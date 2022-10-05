const menu = document.querySelector(".nav__menu-toggler");
const navLinks = document.querySelector(".nav__links")
const navLinksLink = navLinks.querySelectorAll("ul li");

// OPEN MENU WHEN MENU BUTTON IS CLICK
menu.addEventListener('click', () => {
    menu.classList.toggle('open')
    navLinks.classList.toggle("active-nav-links");
})

// CLOSE MENU AFTER A LINK IS CLICKED
const links = [...navLinksLink];
links.map(link => {
    link.addEventListener('click', () => {
        menu.classList.remove("open");
        navLinks.classList.remove("active-nav-links");
    })
})
