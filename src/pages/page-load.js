import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

function createHeader() {
    const header = document.createElement('header');
    const logo = document.createElement('h1');

    logo.textContent = 'Food bits';
    header.appendChild(logo);
    header.appendChild(createNav());

    return header;
}

function createBtn(text, id) {
    const btn = document.createElement('button');

    btn.classList.add('nav-btn');
    btn.setAttribute('id', id);
    btn.textContent = text;

    return btn;
}

function createNav() {
    const nav = document.createElement('nav');

    const homeBtn = createBtn('Home', 'home');
    const menuBtn = createBtn('Menu', 'menu');
    const contactBtn = createBtn('Contact us', 'contact');

    homeBtn.addEventListener('click', () => {
        if (homeBtn.classList.contains('active')) return;
        setActiveBtn(homeBtn);
        loadHome();
    });

    menuBtn.addEventListener('click', () => {
        if (menuBtn.classList.contains('active')) return;
        setActiveBtn(menuBtn);
        loadMenu();
    });

    contactBtn.addEventListener('click', () => {
        if (contactBtn.classList.contains('active')) return;
        setActiveBtn(contactBtn);
        loadContact();
    });

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);

    return nav;
}

function setActiveBtn(button) {
    const buttons = document.querySelectorAll(".nav-btn");

    buttons.forEach((btn) => {
        if (btn !== button) {
            btn.classList.remove("active");
        }
    });

    button.classList.add("active");
}

function createMain() {
    const main = document.createElement('main');
    main.setAttribute('id', 'main');
    return main;
}

function loadPage() {
    const content = document.getElementById('content');

    content.appendChild(createHeader());
    content.appendChild(createMain());
    setActiveBtn(document.querySelector('.nav-btn'));
    loadHome();
}

export default loadPage;
