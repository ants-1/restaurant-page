function contact() {
    const contact = document.createElement('div');
    const h2 = document.createElement('h2');
    const infoConatiner = createDiv('info-container');
    const info = createDiv('info');
    const phoneNum = createPara('phone-num');
    const openingTime = createPara('opening-time');
    const location = document.createElement('img');

    h2.textContent = 'Contact us';
    phoneNum.textContent = '☎️  12345 123 3212';
    openingTime.textContent = 'Opening Time:  Mon - Sat, 9:00 - 18:00';
    location.classList.add('location');
    location.src = 'img/address.png';

    contact.appendChild(h2);
    info.appendChild(phoneNum);
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