//Question (i)
const numArray = [1,1,1,2,2,3,2,2,4,9,3,2,6,8,4,7,0,1,0,5,0];
let lengthOfArray =  numArray.length;
console.log(lengthOfArray);

//Question (ii)
let uniqueValues = [...new Set(numArray)];
for (let value of uniqueValues) {
     console.log(value);
}

 //print multiplication table 2
// let sum = 0;
// for(let i = 1; i<13; i++){
//      let mult = 2*i;
//      sum = sum + mult;  
// }
// console.log(sum);








