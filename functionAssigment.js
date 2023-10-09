//write a function that accept an array and return the highest number inside the array
function myArray(highNum) {
    let highest = highNum;
    let result = Math.max(...highest);
    return result;
  }
  console.log(myArray([23, 122, 1, 23, 4, 56]));


//write a function that accept a string (1)returns the unique alphabet (2) and returns the numbers of alphabet in it.

  function myArray1(alpha) {
    let alphaString = alpha[0];
    let charArray = alphaString.split('');
    let uniqueChars = new Set(charArray);
    let result = [...uniqueChars];
    return result;
}
let uniqueAlphabet = myArray1(['QQWEEDSFSDWERQV']);
console.log(uniqueAlphabet);
console.log(uniqueAlphabet.length);


