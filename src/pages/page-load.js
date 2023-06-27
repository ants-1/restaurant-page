import loadHome from "./home";

function createHeader() {
    const header = document.createElement('header');
    const logo = document.createElement('h1');

    logo.textContent = 'Food bits';
    header.appendChild(logo);
    header.appendChild(createNav());

    return header;
}

function createBtn(text) {
    const btn = document.createElement('button');

    btn.classList.add('nav-btn');
    btn.textContent = text;

    return btn;
}

function createNav() {
    const nav = document.createElement('nav');

    const homeBtn = createBtn('Home');
    const menuBtn = createBtn('Menu');
    const contactBtn = createBtn('Contact us');

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);

    return nav;
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
    loadHome();
}

export default loadPage();