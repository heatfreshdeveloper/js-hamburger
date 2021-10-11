const menu = document.querySelector("div.hamburger-menu ul");
const menuItems = document.querySelectorAll("div.hamburger-menu ul li");
const menuButton = document.querySelector("div.header-right a i");
const menuClose = document.querySelector("div.hamburger-menu a.close");

menuButton.addEventListener('click', 
    function displayMenu() {
        menu.style.display = "block";
        menuClose.style.display = "block";
    }
    
)

menuClose.addEventListener('click', 
    function hideMenu() {
        menu.style.display = "none";
        menuButton.style.display = "block";
    }
    
)