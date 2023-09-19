// Variables needed
const hamburgermenu = document.getElementById('mobile-menu-toggle');
const menuIcon = document.getElementById('hamburgerIcon');
const mobileMenu = document.getElementById('mobile-menu');
const overlay = document.getElementById('overlay');
const dropdownBtn1 = document.getElementById('dropdown-btn1');
const desktopdropdownBtn1 = document.getElementById('desktop-dropdown-btn1');
const dropdownBtn2 = document.getElementById('dropdown-btn2');
const desktopdropdownBtn2 = document.getElementById('desktop-dropdown-btn2');
const dropdownMenu1 = document.getElementById('dropdown-menu-1');
const desktopdropdownMenu1 = document.getElementById('desktop-dropdown-menu-1');
const dropdownMenu2 = document.getElementById('dropdown-menu-2');
const desktopdropdownMenu2 = document.getElementById('desktop-dropdown-menu-2');
const arrowicon1 = document.getElementById('arrow1');
const arrowicon2 = document.getElementById('arrow2');

// Event Listener for the menuicon
hamburgermenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('translate-x-full');
    overlay.classList.toggle('hidden');

    // Toggling the hamburger icon image
    if (menuIcon.classList.contains('open-icon')) {
        menuIcon.classList.remove('open-icon');
        menuIcon.classList.add('close-icon');
        menuIcon.src = "../images/icon-menu.svg";
    } else {
        menuIcon.classList.remove('close-icon');
        menuIcon.classList.add('open-icon');
        menuIcon.src = "../images/icon-close-menu.svg";
    }
});

// Dropdown event listener for both dropdown menus (Mobile)
dropdownBtn1.addEventListener('click', () => {
    dropdownMenu1.classList.toggle('scale-0');
    dropdownMenu1.classList.toggle('hidden');
    if (arrowicon1.classList.contains('arrow-down')) {
        arrowicon1.classList.remove('arrow-down');
        arrowicon1.classList.add('arrow-up');
        arrowicon1.src = "../images/icon-arrow-down.svg";
    } else {
        arrowicon1.classList.remove('arrow-up');
        arrowicon1.classList.add('arrow-down');
        arrowicon1.src = "../images/icon-arrow-up.svg";
    }
});

dropdownBtn2.addEventListener('click', () => {
    dropdownMenu2.classList.toggle('scale-0');
    dropdownMenu2.classList.toggle('hidden');
    if (arrowicon2.classList.contains('arrow-down')) {
        arrowicon2.classList.remove('arrow-down');
        arrowicon2.classList.add('arrow-up');
        arrowicon2.src = "../images/icon-arrow-down.svg";
    } else {
        arrowicon2.classList.remove('arrow-up');
        arrowicon2.classList.add('arrow-down');
        arrowicon2.src = "../images/icon-arrow-up.svg";
    }
});

// Dropdown event listener for both dropdown menus (Desktop)

desktopdropdownBtn1.addEventListener('click', () => {
    desktopdropdownMenu1.classList.toggle('scale-0');
    desktopdropdownMenu1.classList.toggle('hidden');
});

desktopdropdownBtn2.addEventListener('click', () => {
    desktopdropdownMenu2.classList.toggle('scale-0');
    desktopdropdownMenu2.classList.toggle('hidden');
});

document.addEventListener('click', (event) => {
    if (!desktopdropdownBtn1.contains(event.target) && !desktopdropdownBtn1.contains(event.target)) {
        desktopdropdownMenu1.classList.add('scale-0');
        desktopdropdownMenu1.classList.add('hidden');
    }
    if (!desktopdropdownBtn2.contains(event.target) && !desktopdropdownBtn2.contains(event.target)) {
        desktopdropdownMenu2.classList.add('scale-0');
        desktopdropdownMenu2.classList.add('hidden');
    }
});


