// Знаходимо кількість елементів з класом item в списку <ul id="categories">
const categorie = document.querySelectorAll('#categories .items');
console.log(`Number of categories: ${categorie.length}`);

// Звертаємося до елементів з класом item в списку categories
const categories = document.querySelectorAll('#categories .items');

categories.forEach(category=> {
    const categoryTitle = category.querySelector('h2').textContent;
    // Знаходимо елементи з селектором h2 і за допомогою властивості textContent виводимо текс в консоль
    
    const categoryItems = category.querySelectorAll('li');
// Знаходимо всі елементи за допомогою All і в консоль лог додаємо length щоб отримати кількість елеменнтів li в классі item
    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${categoryItems.length}`);
});






