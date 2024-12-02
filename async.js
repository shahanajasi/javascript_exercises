//line by line execution -synchrous
//API-application program interface,will be done by using function called fetch--fakestore api
//promise have 3 states ,fullfilled,reject,pending
// .then(()=>{}) method .the data entered into the internet that will change into jason format until the server,text like structure .when that arrived into the server format which will converted into normal format.the data will get in .then method,in the parameter which included in the arrow function

// METHOD 1 -- (fetch.then)
// fetch("https://fakestoreapi.com/products")
//   .then((res) => {
//     return res.json();   //used to convert the data from jason into normal format
//   })
//   .then((result) => {
//     console.log(result);
//   });

//MTHOD 2 (async await)
const fetchData = async()=>{
    const data= await fetch("https://fakestoreapi.com/products")
    const response = await data.json()
    console.log(response)
}
fetchData();
