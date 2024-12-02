function add(a,b){
    const c = a+b
    return c
}
function main (){
    const ref = add(3,5)
    console.log(ref)
}
main()

// closure = A function defined inside of another function, 
//                  the inner function has access to the variables 
//                  and scope of the outer function.
//                  Allow for private variables and state maintenance
//                  Used frequently in JS frameworks: React, Vue, Angular

//<------EXAMPLE-1------->//

//<------METHOD ONE------>//
function outerfn(){
    const message="hello world"
    
        function innerfn(){
            console.log(message)
        }

        innerfn()
}
outerfn()

//<----METHOD 2------>

function outer (){
    const message= "Hello world"
    
        function inner () {
            console.log(message)
        }
        return inner;
}
const outerfunction=outer()
outerfunction()

//<------EXAMPLE-2---------->//

// function createCounter() {

//     let count = 0;

//     function increment() {
//         count++;
//         console.log(`Count increased to ${count}`);
//     }

//     function getCount() {
//         return count;
//     }

//     return {increment, getCount};
// }
 
// const counter = createCounter();

// counter.increment();
// counter.increment();
// counter.increment();

// console.log(`Current count: ${counter.getCount()}`);
