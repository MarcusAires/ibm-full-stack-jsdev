const breakfastMenu = ['Pancakes- R$ 10', 'Eggs Benedict - R$20', 'Oatmeal-- R$5', 'Frittata--R$30'];
const mainCourseMenu = ['Steak --R$10', 'Pasta--R$15', 'Burger--R$20', 'Salmon--R$10'];
const dessertMenu = ['Cake--R$30', 'Ice Cream--R$12', 'Pudding--R$30', 'Fruit Salad--R$10'];

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;