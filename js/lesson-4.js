// // Створити список
// // Створити кнопки Add, Remove, які будуть змінювати склад списку
// // Створити input, з якого отримаємо значення, що буде передано в li
// // Парним лі вказати жовтий фон, непарним синій
// // Використовуй createElement

// const list = document.createElement('ol');
// const btnAdd = document.createElement('button');
// const btnRemove = document.createElement('button');
// const input = document.createElement('input');

// btnAdd.textContent = 'Add';
// btnRemove.textContent = 'Remove';

// document.body.append(input, btnAdd, btnRemove, list);
// btnAdd.addEventListener('click', addItem);
// btnRemove.addEventListener('click', removeItem);

// function addItem() {
//   const value = input.value.trim();
//   if(value === '') {
//     iziToast.warning({
//       title: 'Caution',
//       message: 'You forgot important data',
//       overlayColor: 'rgba(0, 0, 0, 1)',
//   });
//     return;
//   }

//   const item = document.createElement('li');
//   item.textContent = value;
//   input.value = '';

//   list.appendChild(item);

//   if(list.children.length % 2 === 0) {
//     item.style.background = 'yellow';
//   } else {
//     item.style.background = 'blue';
//   }
// };

// function removeItem() {
//   if(list.lastChild) {
//     list.lastChild.remove();
//   };

// }

// Створити невелику гру
// Спочатку на екрані з'являється якась фігура рандомного коліру в рандомному місті
// Натискаючі на фігуру, вона змінює свою форму, колір, місце розташування

// const forms = [
//   "width: 100px; height: 100px; border-width: 1px;",
//   "width: 100px; height: 100px; border-radius: 50%;",
//   "width: 150px; height: 100px; border-width: 1px;",
//   "width: 200px; height: 100px; border-radius: 100px / 50px; ",
//   "width: 150px; height: 100px; transform: skew(20deg)",
// ];
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
// function randomither(max) {
//   return Math.floor(Math.random() * max);
// }

// const box = document.createElement("div");

// createBoxStylesPosition();
// document.body.append(box);

// box.addEventListener("click", createBoxStylesPosition);

// function createBoxStylesPosition() {
//   box.style.cssText = forms[randomither(forms.length)];
//   box.style.background = getRandomHexColor();

//   box.style.position = "absolute";
//   box.style.top = `${randomither(95)}%`;
//   box.style.left = `${randomither(95)}%`;
// }

/*
Завдання 6
Натиснувши кнопку "Подвоювати", збільшити значення
у кожному елементі списку у 2 рази
*/

// const items = document.querySelectorAll(".listItem");
// const btn = document.querySelector("#double");

// btn.addEventListener("click", double);

// function double() {
//   items.forEach((item) => (item.textContent *= 2));
// }

// Завдання 16
//  При натисканні на будь-який рядок у табличці відобразіть
//  повідомлення з назвою продукту та його ціною.
//  "Ви вибрали <product> за <price>".

// const table = document.getElementById('productTable');

// const text = document.getElementById('productDetails');

// table.addEventListener('click', showText);

// function showText(event) {
//     if (event.target.nodeName !== 'TD') {
//         return
//     }
//     const parent = event.target.parentNode;
//     const product = parent.firstElementChild.textContent;
//     const price = parent.lastElementChild.textContent;
//     text.insertAdjacentHTML('afterbegin', `<p>Ви вибрали ${product} за ${price}</p>`);
// }

/*
Завдання 8
При натисканні на кожну з кнопок підсумовуються значення з data-атрибутів.
За натисканням на кнопку "Вивести результат" виводиться сума значення, а також статистика з
інформацією про те, яка кнопка була натиснута скільки разів.
*/
const list = document.querySelector(".statList");
const result = document.getElementById("resultButton");
const resultMessage = document.getElementById("resultSection");
let resultData = 0;
list.addEventListener("click", oneBtnClick);
function oneBtnClick(event) {
  if (event.target.nodeName !== "BUTTON") {
    return;
  }
  const value = Number(event.target.dataset.number);
  resultData += value;
  console.log(resultData);
}
result.addEventListener("click", showResult);
function showResult() {
  resultMessage.textContent = `Загальна кількість ${resultData}`;
  resultData = 0;
}
//  **************** HOMEWORK *************

// / Створити червоний квадрат розміром 50 на 50 рх
// Додати кнопку "Зменшити", яка робить квадрат менше на 10 пікселів
// Додати кнопку "Збільшити", яка робить його більше на 10 пікселів.
//     <!-- ЗАДАЧА 3 -->
//     <!-- <div>
//       <p class="taskTitle">ЗАДАЧА 3</p>
//       <input id="passwordInput" type="text" />
//       <button id="passwordButton">Приховати</button>
//     </div> -->
/*
Завдання 3
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
*/
// <!-- ЗАДАЧА 11 -->
//     <!-- <p class="taskTitle">ЗАДАЧА 11</p>
//     <input class="contactsFilter" type="text" />
//     <ul class="contacts">
//       <li class="contact">Peter Miller</li>
//       <li class="contact">John Carter</li>
//       <li class="contact">Amanda Diaz</li>
//       <li class="contact">Brad Sanders</li>
//       <li class="contact">Devis Brooks</li>
//       <li class="contact">Robert Morgan</li>
//     </ul> -->
/*
Завдання 11
Наведено список людей. Зроби фільтр на ім'я.
*/
