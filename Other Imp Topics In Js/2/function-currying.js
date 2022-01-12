///// Ways to Curry our function 
/// 1. bind function
/// 2. using concept of clousures

//// ***** Currying with bind method ****
let multiply = function (x, y) {
    console.log(x*y);
}

// let multiplyByTwo = function ( y) {
//     let x = 2;
//     console.log(x*y);
// }

let multiplyByTwo =multiply.bind(this, 2);

multiplyByTwo(5);

let multiplyByThree =multiply.bind(this, 3);

multiplyByThree(10);

/// Here we can used basic multiply function in multiplyByTwo & multiplyByThree as copy so in case of function currying we use basic function as a copy into another function using bind method as we can passed arguments to the bind function , 1st arguments by default "this" object and rest arguments as per the number of parameters passed to the base copy function i.e.., multiply function


///// **** Currying with Clousres ****
let multiply_closure = function (x) {
    return function (y) {
        console.log(x*y)
    }
}

//// As we already know Clousres is simply a function which bind together along with it's laxical environment, so whenver we invoked that function then that function can able to remember its laxical environment here inside multiply_closure() function an anonymous function where we are passing y as a parameter then this anonymous function have an access of it's parent laxical environment i.e.., parameter x which is passed to the multiply_closure function, so whenever we call that multiply_closure(x) function then its nested function can able to return the operation which is wriiten inside it so this is nothing but Function Currying 

let multiplyByTwo_closure =multiply_closure(2);

multiplyByTwo_closure(8);

let multiplyByThree_closure =multiply_closure(3);

multiplyByThree_closure(7);
