console.log('working');


let personOne = {
    name: 'Munna',
    age: 30,
    isStudent: false,
    favouriteLang: 'Python'
}

console.log(personOne)


let personTwo = {

    name: 'Sumon',
    age: 32,
    isStudent: false,
    favouriteLang: 'C++'

}

console.log(personTwo);

personOne = personTwo // refering to the personTwo Heap

console.log(personOne)

/* const info = null;
info = personOne ; can't be reassigned
console.log(info)
*/

let numbersArray = [2, 6, 7, 8, 10]

let digits = 10 

numbersArray = digits

console.log(numbersArray)