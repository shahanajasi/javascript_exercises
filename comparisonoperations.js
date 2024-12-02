//== operators used to compare values to find out the values are equal or not
var num1 = 50;
var num2 = 80;
console.log(num1 == num2);

//=== operators used to compare the values and their type .when the value and type is same true returns
var num1 = 80;  //same type and value
var num2 = 80;
console.log(num1 === num2); //returns true

var num1 = "80";   //same datatype and value
var num2 = "80";
console.log(num1 === num2); //returns true

var num1 = 80; //same value but not same datatypes
var num2 = "80";
console.log(num1 === num2); //returns false

var num1 = "80";  //different value and different datatype
var num2 = 90;
console.log(num1 === num2); //returns false

//!=
var num1=10
var num2=90
console.log(num1!=num2)

//>
var num1=10
var num2=90
console.log(num1>num2)

//<
var num1=10
var num2=90
console.log(num1<num2)

//<=
var num1=10
var num2=90
console.log(num1<=num2)

//>=
var num1=10
var num2=90
console.log(num1>=num2)