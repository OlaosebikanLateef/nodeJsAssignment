const fruits = ["Banana", "Orange", "Apple", "Mango"];
let lengthOfArray =  fruits.length;
console.log(lengthOfArray);

 

let myArray = [1, 2, 2, 3, 4, 4, 5];
let uniqueValues = [...new Set(myArray)];

 

for (let value of uniqueValues) {
    console.log(value);
}