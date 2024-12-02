var array = [0, 1, 2, 3, 4, 5];
var newArray = array.map((item) => {
  return item;
});
console.log(newArray);

var array = [0, 1, 2, 3, 4, 5];
var newArray = array.map((item) => {
  return item + 2;
});
console.log(newArray);

var array = ["a", "b", "c", "d", "e", "f"];
var newArray = array.map((item) => {
  return item.toUpperCase();
});
console.log(newArray);

var array = ["abdvf", "bhhhwdh", "cwhj", "ddnje"];
var newArray = array.map((item) => {
  return item.length;
});
console.log(newArray);

var array = ["jasi", "cenoy", "avinash", "surya", "siyan", "anitha"];
var newArray = array.map((item) => {
  return "Hello" + " " + item;
});
console.log(newArray);
