///// Hoisting in js --->>> So Hoisting in js is nothing but we can access both function as well as variable even before initialization of both variables as well as functions. we can access that without any error
///// Even before code start executing the memory is allocated to all variables and functions.
console.log(getname)
/// ƒ getname(){
//     console.log("Hello")
// }
console.log(getName) //// Undefined
console.log(x); //// undefined 
var x;
 //// undefined 
x = 7;

function getname(){
    console.log("Hello")
}
///// below one is flat arrow function but getName is consider as a variable so whenever we accessing getName before defined we will get undefined
var getName = () => {
    console.log("Hello")
}

getName();
console.log(x);



