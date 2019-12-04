//LДекларуємо змінні
//var - старе, не використовуємо
//let - звичайна змінна
//const - стала змінна

//alert ('Hello'); 
//= - це константа
//const bestGreetings = 'Hello';

//Primitive Data Types
//Number
//String
//Boolen - true, false
//null - пусто
//undefined - не визначено
//Object - об'єкт
//Symbol унікальний незмінний ідентифікатор  
let bestGreetings = 'Hello';
alert(bestGreetings);
bestGreetings = 'Java Script';
alert(bestGreetings);

const age = prompt('Enter your age');
alert('Your age is: ' + age);

const nextAge = addOne(age);
alert('Next year you will be: ' + nextAge);

//Логічні оператори
// > < >= <= != !== == === || &&

if(age >= 18) {
    alert('You are adult');
} else{
    alert('You are underged');
}

function addOne(num) {
    const incremented = num + 1;
    return incremented;
}