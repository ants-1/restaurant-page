function contact() {
    const contact = document.createElement('div');
    const h2 = document.createElement('h2');
    const infoConatiner = createDiv('info-container');
    const info = createDiv('info');
    const address = createPara('address');
    const openingTime = createPara('open');
    const location = createDiv('location');

    h2.textContent = 'Contact us';
    address.textContent = 'Address';
    openingTime.textContent = 'Opening Time';

    contact.appendChild(h2);
    info.appendChild(address);
    info.appendChild(openingTime);
    info.appendChild(location)
    infoConatiner.appendChild(info);
    contact.appendChild(infoConatiner);

    return contact;
}

function createDiv(className) {
    const div = document.createElement('div');
    div.classList.add(className);

    return div;
}

function createPara(className) {
    const para = document.createElement('p');
    para.classList.add(className);

    return para;
}

function loadContact() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(contact());
}

export default loadContact;