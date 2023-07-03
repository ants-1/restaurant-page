function menu() {
  const menuItems = {
    item1: [
      "Smoked salmon & spinach gratin",
      "Enjoy a Swedish-inspired smoked salmon and spinach gratin. Served with potatoes and roasted beets.",
      "7.00",
      "img/salmon.png"
    ],
    item2: [
      "Shortbread biscuits",
      "Take a break and relax with a crumbly and wonderful shortbread biscuit.",
      "1.00",
      "img/biscuits.png",
    ],
    item3: [
      "Banana muffins",
      "Savour a delicious banana muffin any time of the day.",
      "3.30",
      "img/banana-muffin.png",
    ],
    item4: [
      "Chicken and Rice",
      "Relish a tasty and healthy meal.",
      "6.00",
      "img/chicken-rice.png",
    ],
  };

  const menu = document.createElement("div");
  const h2 = document.createElement("h2");
  const menuContainer = createDiv("menu");

  h2.textContent = "Menu";
  menu.appendChild(h2);
  Object.values(menuItems).forEach((item) => {
    menuContainer.appendChild(createMenuItem(item));
  });
  menu.appendChild(menuContainer);

  return menu;
}

function createMenuItem(items) {
  const item = createDiv("item");
  const foodImg = document.createElement('img');
  const food = createDiv("food");
  const foodTitle = createDiv("food-title");
  const foodInfo = createDiv("food-info");
  const foodPrice = createDiv("food-price");

  foodTitle.textContent = items[0];
  foodInfo.textContent = items[1];
  foodPrice.textContent = `£${items[2]}`;
  foodImg.classList.add('food-img');
  foodImg.src = items[3];

  food.appendChild(foodTitle);
  food.appendChild(foodInfo);
  food.appendChild(foodPrice);

  item.appendChild(foodImg);
  item.appendChild(food);

  return item;
}

function createDiv(className) {
  const div = document.createElement("div");
  div.classList.add(className);

  return div;
}

function loadMenu() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(menu());
}

export default loadMenu;
