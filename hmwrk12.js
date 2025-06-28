// Завдання 1



// Напиши скрипт, який, для об'єкта user, послідовно:



// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user в форматі ключ:значення використовуючи Object.keys() і for...of


// Завдання 2



// Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті. Функція повертає число — кількість властивостей.



// Завдання 3



// Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників і повертає ім'я найпродуктивнішого (який виконав більше всіх задач). Співробітники і кількість виконаних завдань містяться як властивості об'єкта в форматі "ім'я":"кількість задач".



// Завдання 4



// Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат. Функція рахує загальну суму зарплати працівників і повертає її. Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".



// Завдання 5



// Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів і ім'я властивості. Повертає масив значень певної властивості prop з кожного об'єкта в масиві.



// Завдання 6



// Напиши функцію calculateTotalPrice(allProdcuts, productName), яка отримує масив об'єктів та ім'я продукту (значення властивості name). Повертає загальну вартість продукту (ціна * кількість).



// Викличи функції для перевірки працездатності твоєї реалізації.  


const user = {
    name: "mykola",
    age: "14",
    hobby: "football",
    premium: true,
};
user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;
const userKeys = Object.keys(user);
for (const key of userKeys) {
    const { [key]: value } = user;
    console.log(`${key}: ${value}`);
}

function countProps(obj) {
    const keys = Object.keys(obj);
    return keys.length;
}
const userA = {
    name: "Mykola",
    age: 12,
    hobby: "basketball"
};
console.log(countProps(userA));

const team = {
    Mykola: 67,
    Lev: 34,
    Max: 29,
    Anna: 90,
};
function findBestEmployee(employees) {
    let bestName = "";
    let maxTasks = 0;
    for (const [name, tasks] of Object.entries(employees)) {
        if (tasks > maxTasks) {
            maxTasks = tasks;
            bestName = name;
        }
    }
    return `${bestName}: ${maxTasks}`;
}
console.log(findBestEmployee(team));

const sallary = {
    oleksandr: 3288,
    dmytro: 2745,
    andriy: 3012,
    yuriy: 3590,
    vasyl: 2877,
}
function countTotalSalary(employees) {
    const value = Object.values(employees);
    let total = 0;
    for (const price of value) {
        total += price
    }
    return total;
}
console.log(countTotalSalary(sallary));

function getAllPropValues(arr, prop) {
    const newArr = [];
    for (const item of arr) {
        const { [prop]: value } = item;
        if (value !== undefined) {
            newArr.push(value);
        }
    }
    return newArr;
}
const products = [
    { name: "Apple", price: 50, category: "Fruits" },
    { name: "Carrot", price: 20, category: "Vegetables" },
    { name: "Banana", price: 30, category: "Fruits" },
    { name: "Potato", price: 15, category: "Vegetables" },
];
console.log(getAllPropValues(products, "name"));
console.log(getAllPropValues(products, "price"));
console.log(getAllPropValues(products, "category"));

function calculateTotalPrice(allProducts, productName) {
    let totalPrice = 0;
    for (const { name, price, quantity } of allProducts) {
        if (name === productName) {
            totalPrice += price * quantity;
        }
    }
    return totalPrice;
}
const product2 = [
    { name: "Apple", price: 50, quantity: 5 },
    { name: "Carrot", price: 20, quantity: 10 },
    { name: "Banana", price: 30, quantity: 7 },
    { name: "Potato", price: 15, quantity: 20 }
];
console.log(calculateTotalPrice(product2, "Apple"));
console.log(calculateTotalPrice(product2, "Potato"));
console.log(calculateTotalPrice(product2, "Orange"));