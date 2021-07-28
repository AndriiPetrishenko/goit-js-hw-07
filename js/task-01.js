const categoriesEl = document.querySelectorAll('.item');
console.log(`В списке ${categoriesEl.length} категории.`);

const categoriesListEl = document.querySelectorAll('li.item')
const titleEl = categoriesListEl.forEach(el => {
    console.log(`Категория: ${el.firstElementChild.textContent}`);
    console.log(`Количество элементов: ${el.firstElementChild.nextElementSibling.childElementCount}`);
})