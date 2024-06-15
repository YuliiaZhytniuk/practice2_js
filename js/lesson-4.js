// Створити список
// Створити кнопки Add, Remove, які будуть змінювати склад списку
// Створити input, з якого отримаємо значення, що буде передано в li
// Парним лі вказати жовтий фон, непарним синій
// Використовуй createElement

const list = document.createElement('ol');
const btnAdd = document.createElement('button');
const btnRemove = document.createElement('button');
const input = document.createElement('input');

btnAdd.textContent = 'Add';
btnRemove.textContent = 'Remove';

document.body.append(input, btnAdd, btnRemove, list);
btnAdd.addEventListener('click', addItem);
btnRemove.addEventListener('click', removeItem);

function addItem() {
  const value = input.value.trim();
  if(value === '') {
    iziToast.warning({
      title: 'Caution',
      message: 'You forgot important data',
      overlayColor: 'rgba(0, 0, 0, 1)',
  });
    return;
  }

  const item = document.createElement('li');
  item.textContent = value;
  input.value = '';

  list.appendChild(item);

  if(list.children.length % 2 === 0) {
    item.style.background = 'yellow';
  } else {
    item.style.background = 'blue';
  }
};

function removeItem() {
  if(list.lastChild) {
    list.lastChild.remove();
  };
  
}
