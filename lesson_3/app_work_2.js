// 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины.
// Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров. 
// Товары в корзине хранятся в массиве. Задачи:
// a) Организовать такой массив для хранения товаров в корзине;
// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

let total = 0
let basket = [['Яблоки', 100, 4], ['Груши', 50, 5], ['Сливы', 30, 2]];


function countBasketPrice() {
    for (var i = 0; i < basket.length; i++) {
        total += basket[i][1] * basket[i][2]

    }
}

countBasketPrice()
console.log(total)