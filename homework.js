// // to check if a number is positive or negative
// var num = 0;
// if (num > 0) {
//   console.log("number is positive");
// } else if (num < 0) {
//   console.log("number is negative");
// } else {
//   console.log("number is zero");
// }

// // to check if a number is even or odd
// var num1 = 11;
// if (num1 % 2 == 0) {
//   console.log("number is even");
// } else {
//   console.log("number is odd");
// }

// // to check if a number is a multiple of 5
// var num2 = 6;
// if (num2 % 5 == 0) {
//   console.log("number is multiple of 5");
// } else {
//   console.log("number is not a multiple of 5");
// }

// // to check if a number is between 50 and 100
// var num3 = 55;
// if (num3 > 50 && num3 < 100) {
//   console.log(`the number ${num3} is between 50 and 100`);
// }

// //sum of 2 numbers
// var a = 10;
// var b = 30;
// var sum = a + b;
// console.log(sum);

// //difference of two numbers
// var a = 50;
// var b = 30;
// var sub = a - b;
// console.log(sub);

// //product of two numbers
// var a = 50;
// var b = 30;
// var mul = a * b;
// console.log(mul);

// //avg of three numbers
// var a = 10;
// var b = 20;
// var c = 30;
// var avg = (a + b + c) / 3;
// console.log(avg);

// //to find the smallest of two numbers
// var num1 = 30;
// var num2 = 10;
// if (num1 < num2) {
//   console.log(`the ${num1} is  smaller than ${num2}`);
// } else {
//   console.log(`the ${num2} is  smaller than ${num1}`);
// }

// //to find the largest of two numbers
// var num1 = 30;
// var num2 = 56;
// if (num1 > num2) {
//   console.log(`the ${num1} is  greater than ${num2}`);
// } else {
//   console.log(`the ${num2} is  greater than ${num1}`);
// }

// //to check if a string is empty
// var str = " ";
// if ((str = "")) {
//   console.log("the string is empty");
// } else {
//   console.log("the string is not empty");
// }

// //to check if a string has more than 10 characters
// var strlen = "shahanajasni";
// var condition = strlen.length;
// if (condition > 10) {
//   console.log("the string has more than 10 characters");
// } else {
//   console.log("the string has less than or equal to 10 characters");
// }

// //to check if two strings are equal
// var str1 = "jasni";
// var str2 = "codeme";
// console.log(str1 == str2);

// //to concatenate two strings
// var str1 = "shahana";
// var str2 = "jasni";
// console.log(str1 + " " + str2);

// //to convert a string to uppercase
// var str1 = "bhjjhsvxsxjhnm";
// console.log(str1.toUpperCase());

//write a program that prints numbers from 10 to 1 in descending order
// var number = 10;
// while (number >= 1) {
//   console.log(number);
//   number--;
// }

// //write a program that prints all even numbers between 1 and 20
// var number = 1;
// while (number <= 20) {
//   if (number % 2 == 0) {
//     console.log(number);
//   }
//   number++;
// }

//write a program to find the sum of n numbers
// var number = 0;
// var sum = 0;
// while (number <= 20) {
//   sum += number;
//   number++;
// }
// console.log(sum);

//write a program that calculates the factorial of a given number
// var number = 1;
// var fact = 1;
// while (number <= 6) {
//   fact *= number;
//   number++;
// }
// console.log(fact);

//to find the sum of elements in  an array
// var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var sum = 0;
// for (let i = 0; i <= 9; i++) {
//   sum += array[i];
// }
// console.log(sum);

//to find the elemt and their index number
// var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for(let i=0;i<=9;i++){
//     console.log("the index of" ,array[i] ,"is" ,+ i )
// }

//to create a right angle triagle * pattern
// var star = "*";
// for (var i = 0; i <= 80; i++) {
//   console.log(star);
//   star += "*" ;
// }

//to check the number is prime or not
// var number = 11;
// if (number <= 1) {
//   console.log(`${number} is not a prime number`);
// } else {
//   var check = true;
//   for (var i = 2; i < number; i++) {
//     if (number % i == 0) {
//       check = false;
//     }
//   }
//   if (check) {
//     console.log(`${number} is prime number`);
//   } else {
//     console.log(`${number} is not a prime number`);
//   }
// }

// var number = 1;
// if (number <= 1) {
//   console.log(`${number} is not a prime number`);
// } else {
//   var check = true;
//   for (var i = 2; i < number; i++) {
//     if (number % i == 0) {
//       check = false;
//     }
//   }
//   if (check) {
//     console.log(`${number} is prime number`);
//   } else {
//     console.log(`${number} is not a prime number`);
//   }
// }

// var number = 56;
// for (var num = 2; num <= number; num++) {
//   var check = true;
//   for (var j = 2; j < num; j++) {
//     if (num % j== 0) {
//       check = false;
//     }
//   }
//   if (check) {
//     console.log(num);
//   }
// }

// function sayHello(name){
//     console.log("Hello" ,name)
// }
// sayHello("shahana")

// function calculateArea(width,height){
//     console.log(width*height)
// }
// calculateArea(10,30)

// function getFullName(firstname,lastname){
//     console.log(firstname+lastname)
// }
// getFullName("shahana","jasni")

// function checkEvenOdd(number){
//     if(number%2==0){
//         console.log("even")
//     }else{
//         console.log("odd")
//     }
// }
// checkEvenOdd(3)

// function concatenateStrings(string1,string2){
//     console.log(string1+string2)
// }
// concatenateStrings("codeme","hilite")

// var calculateSum = (a, b, c) => {
//     var sum = a + b;
//     c(sum);
//   };
//   var callback = (result) => {
//     console.log(result);
//   };
//   calculateSum(1, 6, callback);

// let largest;
// var findLargestNumber = (arr) => {
//   largest = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       largest = arr[i];
//     }
//   }
// };
// var numbers = [10, 24, 3, 78, 45, 92];
// findLargestNumber(numbers);
// console.log(largest);

// let vowelCount = 0;
// var countVowels = (str) => {
//     var vowels = 'aeiouAEIOU';
//     for (var char of str) {
//         if (vowels.includes(char)) vowelCount++;
//     }
// };
// countVowels("shahanajasni");
// console.log(vowelCount);

// let str1="bot"
// let str2="bor"
// if(str1.length==str2.length){
//   console.log(`equal length`)
// }else{
//   console.log(`not same length`)
// }

// let num;
// for (num = 0; num <= 100; num++) {
//   if(num%2==0){
//   console.log(num);
//   }
// }

// let num;
// let sum =0;
// for (num = 0; num <= 100; num++) {
//   sum+=num
// }
// console.log(sum);

// let num = 1;
// let fact = 1;
// for (num = 1; num <= 9; num++) {
//   fact *= num;
// }
// console.log(fact);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sum = 0;
// for (let num = 0; num < arr.length; num++) {
//   sum += arr[num];
// }
// console.log(sum);

// var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var sum = 0;
// for (let i = 0; i <= 9; i++) {
//   sum += array[i];
// }
// console.log(sum);

// var array = [1,2,3,4,5,6,7,8,9]
// for(let num = 0;num<array.length;num++){
//   console.log("the index of", array[num] , "is" ,num)
// }

// var star= "*"
// for(let i=0;i<=10;i++)
// {
//   console.log(star)
//   star+="*"
// }

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 1) {  // Check if `i` is odd
//     console.log("*".repeat(i));
//   }
// }

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {  // Check if `i` is even
//     console.log("*".repeat(i));
//   }
// }

// var num=10
// for(let i=2;i<=10;i++){
//  if(num==2){
//     console.log(`2 is a prime number`)
//   }else if(num%i==0){{
//   }
//   console.log(`${num} is not a prime `)
//  } else{
//   console.log(`${num} is a prime`)
// }}

// const ispallindrome = (str) => {
//   str = str.toLowerCase();
//  return str == str.split("").reverse().join("");
// };
// console.log(ispallindrome("madam"))

// function reverseString(str) {
//   str=str.trim()
//   return str.split("").reverse().join("")
// }
// console.log(reverseString("JavaScript")); // Expected output: "tpircSavaJ"


