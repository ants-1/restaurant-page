function createHome() {
    const home = createDiv('home');
    const leftContainer = createDiv('left');
    const rightContainer = createDiv('right');
    const container = createDiv('container');
    const logo = createDiv('logo');
    const hr = document.createElement('hr');
    const hr2 = document.createElement('hr');
    const h3 = document.createElement('h3');
    const btn = document.createElement('button');
    const img = document.createElement('img');

    btn.classList.add('order');

    logo.textContent = 'Food bits'
    h3.textContent = 'Dig in and eat healthy delicious food';
    btn.textContent = 'Order';
    img.src = 'img/hero-food-img-1.png';

    leftContainer.appendChild(hr);
    leftContainer.appendChild(container);
    container.appendChild(logo);
    container.appendChild(h3);
    container.appendChild(btn);
    leftContainer.appendChild(hr2);
    rightContainer.appendChild(img);
    home.appendChild(leftContainer);
    home.appendChild(rightContainer);

    return home;
}

function createDiv(className) {
    const div = document.createElement('div');
    div.classList.add(className);

    return div;
}

function loadHome() {
    const main = document.getElementById('main');
    main.textContent = "";
    main.appendChild(createHome());
}

export default loadHome;