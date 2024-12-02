// 1-- a)Brendan Eich
// 2-- c)[30,40]
// 3-- a)//
// 4-- b)Anonymous function
// 5-- b) Removes leading and trailing whitespace from aa string
// 6-- c)arr.length
// 7-- c)5,10 then 10,5
// 8-- a)concate
// 9-- c)number
// 10-- a) arr.pop()
// 11-- b) false
// 12-- d)Both b and c
// 13-- b)str.charAt(3)
// 14-- a)const variables cannot be reassigned or redeclared
// 15-- a)it marks a function that always runs asynchrously

// 16-- check if a number is prime
// const isPrime = (num) => {
//     if (num <= 1) {
//         return `The number ${num} is not a prime number.`;
//     }
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             return `The number ${num} is not a prime number.`;
//         }
//     }
//     return `The number ${num} is prime.`;
// };
// console.log(isPrime(4));

// 26-- arrow function to filter out even numbers from an array
// let number = [1,2,3,4,5,6,7,8]
// let newArray=number.filter((item)=>{
//      return item%2==0
// })
// console.log(newArray)

// 28-- returns the factorial of a number
// let fact = 1;
// for (let number = 1; number <= 6; number++) {
//     fact *= number;
// }
// console.log(fact);

// 29-- a function to count the occurances of each word in a given string
// var array = ["avinash", "shahana", "surya", "shifla"];
// var newArray = array.map((item) => {
//   return item.length;
// });
// console.log(newArray);

// 30-- a function to check if a string is a palindrome
// const ispallindrome = (str) => {
//   str = str.toLowerCase();
//  return str == str.split("").reverse().join("");
// };
// console.log(ispallindrome("shahana"))

// 27-- a function to count the number of vowels in a string
// let vowelCount = 0;
// var countVowels = (str) => {
//     var vowels = 'aeiouAEIOU';
//     for (var char of str) {
//         if (vowels.includes(char)) vowelCount++;
//     }
// };
// countVowels("shahanajasni");
// console.log(vowelCount);

// 23-- a function that takes an array of numbers and returns a new array with each number squared
// let number = [1,2,3,4,5,6,7,8]
// let newArray=number.map((item)=>{
//      return item*item
// })
// console.log(newArray)

// 17-- a function that takes a string and returns the longest word in it
// let string = ["shahana","fabi","codemehilite"]
// let maxLength = Math.max(...string.map(item => item.length));
// let longString =string.filter((item)=>{
//     return item.length == maxLength
// })
// console.log(longString)

// 18-- a function that takes a string and returns a new string with all vowels removed
//  const removeVowels = (str) => {
//   return str.split('').filter(char => !'aeiouAEIOU'.includes(char)).join('');
// };
// console.log(removeVowels("hello world"));

// 20-- fizzbuzz
// function fizzbuzz() {
//   for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }
// }
// fizzbuzz();

// 19-- fibnocci
// function fibonacci(n) {
//   let a = 0, b = 1;
//   for (let i = 0; i < n; i++) {
//       console.log(a);
//       [a, b] = [b, a + b];
//   }
// }
// fibonacci(10);

// 22-- a function to check if a given string is an anagram of another
// function Anagram(str1, str2) {
//   str1 = str1.trim().toLowerCase();
//   str2 = str2.trim().toLowerCase();
//   const sortedStr1 = str1.split('').sort().join('');
//   const sortedStr2 = str2.split('').sort().join('');
//   return sortedStr1 === sortedStr2;
// }
// console.log(Anagram("listen", "silent"));
// console.log(Anagram("hello", "world"));

// 21-- write a function to merge two sorted arrays into one sorted array
// function mergeSortedArrays(array1, array2) {
//   return array1.concat(array2).sort();
// }
// let array1 = [1, 3, 5];
// let array2 = [2, 4, 6];
// let result = mergeSortedArrays(array1, array2);
// console.log(result);
