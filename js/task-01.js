const listCategoriesItem = document.querySelectorAll('.item');

console.log(`Number of categories: ${listCategoriesItem.length}`);

listCategoriesItem.forEach(item => {
   
 console.log('Category:', item.firstElementChild.textContent);

 console.log('Elements:', item.lastElementChild.children.length);
})



