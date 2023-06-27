function createHome() {
    const home = createDiv('home');
    const leftContainer = createDiv('left');
    const rightContainer = document.createElement('div');
    const container = document.createElement('div');
    const logo = document.createElement('div');
    const hr = document.createElement('hr');
    const hr2 = document.createElement('hr');
    const h3 = document.createElement('h3');
    const btn = document.createElement('button');
    const img = document.createElement('img');

    rightContainer.classList.add('right');
    container.classList.add('container');
    logo.classList.add('logo');
    btn.classList.add('order');

    logo.textContent = 'Food bits'
    h3.textContent = 'Dig in and eat healthy delicious food';
    btn.textContent = 'Order';
    img.src = '../src/img/hero-food-img-1.png';

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

function createDiv(text) {
    const div = document.createElement('div');
    div.classList.add(text);

    return div;
}

function loadHome() {
    const main = document.getElementById('main');
    main.appendChild(createHome());
}

export default loadHome;