// var array = [1, "string", true, "boolean", 1.45];
// console.log(array); //returns [ 1, 'string', true, 'boolean', 1.45 ] --array can hold every type of datatypes and the data includes in a array is called elements

//ARRAY METHODS//

// var array = ["a", "b", 122, "codeme"];
// console.log(array[2]); //returns third element bcz it have index number 2 =122
// console.log(array.length); //returns number of elements =4

//push method
// var array = [1, 2, 3, 4, 5, 6];
// array.push(7);
// console.log(array);    //returns [1,2,3,4,5,6,7]

// var array = [1, 2, 3, 4, 5, 6];
// array.push(7,8,9,10);
// console.log(array);  //returns [1,2,3,4,5,6,7,8,9,10]

//pop method
// var array = [1, 2, 3, 4, 5, 6];
// array.pop()
// console.log(array);   //returns [1,2,3,4,5]

// splice-splice(starting index,limit(how many elements we have to remove),elements u have to insert)
// var array = [1, 2, 3, 4, 5];
// array.splice(2,2)
// console.log(array);   //returns [ 1, 2, 5 ] including index number 2 to 2 elements removed

// var array = [1, 2, 3, 4, 5];
// array.splice(2,0)
// console.log(array);  //returns [1, 2, 3, 4, 5]

// var array = [1, 2, 3, 4, 5];
// array.splice(2,0,2.5,2.7)
// console.log(array);  //returns [1,2,2.5,2.7,3,4,5]

// var array = [1, 2, 3, 4, 5];
// array.splice(2,1,2.5,2.7)
// console.log(array);   //returns [ 1, 2, 2.5, 2.7, 4, 5 ]

//SORT
// var array = [6, 3, 9, 4, 0, 2, 8];
// array.sort();
// console.log(array);

//INCLUDES returns true or false
// var array = [6, 3, 9, 4, 0, 2, 8];
// var check =array.includes(6)
// console.log(check); //returns true

// var array = [6, 3, 9, 4, 0, 2, 8];
// var check =array.includes(1)
// console.log(check);  //returns f

// REFERENCE
// var array = [1, 2, 3, 4, 5];
// var newArray = array;
// newArray.push(6);
// console.log(newArray);
// console.log(array);

//LOOPS USED IN ARRAY
// var array = [1, 2, 3, 4, 5];
// for(var i=0;i<=4;i++){
//     console.log(array[i])
// }

//FOR-OF-LOOP -which is used to print each element without using index
// var arr=[1,2,3,4,5,6]
// for(var element of arr){
//     console.log(element)
// }

