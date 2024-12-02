var array = [1, 2,3,4,5,6,7,8,9];
var newArray = array.filter((item) => {
  return item % 2 == 0;
});
console.log(newArray);

//write a program that filters out string containing 'a' from an array using filter()
var array = ["surya", "cenoy", "avinash", "jesni"];
var newArray = array.filter((item) => {
  return item.includes("a")
});
console.log(newArray);
