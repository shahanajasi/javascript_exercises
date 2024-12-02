// setTimeout(() => {
//   console.log("hello");
// }, 5000); //it will execute after 5 seconds

var a = setInterval(() => {
  console.log("hai");
}, 2000);   //it will execute continuosly at given intervel of time -here it take 2 seconds

setTimeout(() => {
  clearInterval(a);
  console.log("stopped execution");    //it is used to stop the execution of the setInterval function ,here the timeout and setIntervel start at same time so 10000 reached the setTimeout function execute ,setInterval function terminate 
}, 10000);
