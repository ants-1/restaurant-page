function menu() {
    const menuItems = {
      item1: ["Salad", "", "3.00"],
      item2: ["Steak and Chips", "", "9.00"],
      item3: ["Mac and Cheese", "", "5.30"],
      item4: ["Chicken and Rice", "", "6.00"],
    };
  
    const menu = document.createElement("div");
    const h2 = document.createElement("h2");
    const m = createDiv('menu');
  
    h2.textContent = "Menu";
    menu.appendChild(h2);
    Object.values(menuItems).forEach((item) => {
      m.appendChild(createMenuItem(item));
    });
    menu.appendChild(m);
  
    return menu;
  }
  
  function createMenuItem(items) {
    const item = createDiv("item");
    const foodImg = createDiv("food-img");
    const food = createDiv("food");
    const foodTitle = createDiv("food-title");
    const foodInfo = createDiv("food-des");
    const foodPrice = createDiv("food-price");
  
    foodTitle.textContent = items[0];
    foodInfo.textContent = items[1];
    foodPrice.textContent = `£${items[2]}`;
  
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
  
