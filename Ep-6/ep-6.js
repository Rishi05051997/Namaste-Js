///// Difference between undefined and not defined 
/// While memory allocation, js will allocate memory to a variable as undefined if the variable is not already defined then we will faced an error i.e.., not defined
console.log(x) //// here we will get undefined 
// console.log(y) //// here we will get an error saying variable y is not defined so we can see y as a varibale is not defined throughout the entire program
var x = 9;



/// Note -->> Undefined never an empty so we can say that undefined is a placeholder where it allocates some memory to a variable until n unless some value is assign to that variable.

let a;
console.log(typeof(a));

//// Js is loosly typed language
let b;
console.log(b);
b=10;
console.log(b);
b="vrushbbh";
console.log(b);

//// Note --->> Never assign a value to a variable as undefined because undefined has its advantage. Undefined assigned to a variable only just saying that any value not assign to that specific variable throughtout the entire programm.
//// b = undefined ///// bad practice 

let testing = () => {
    console.log('this is for testing purpose')
}