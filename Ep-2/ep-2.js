///// When Javascript code start running an execution context is created 

let n = 2;

const square = (num) => {
    var ans = num * num;
    return ans;
}

let square2 = squares(n); ////// Invocation -->> here we passed argument n=2;
let square4 = squares(4);


/// execution context is again divided into two phase 
//// 1. Memory creation phase --->> in this phase js will store values for all variables and functions. so initially js store value of varibales as undefined and in case function js store whole function inside memory as it is.
//// 2. Code Execution Phase --->> as during memory allocation phase, all variables are as undefined, so in this phase the code run line by line and stores the definite value for ex. n=2; 


//// 3. Invocation --->>> as we see on line no 10 -->> squares(n) here we invoked a function and passed argument to the function if required.
//// during function defination we passed parameters to the function here num passed to the square(num) function after this function invocation again a new execution context is created and again steps from 1 start repeating. Once function invocation during squares(n) is done then all the Execution context deleted

///// Once all execution phase of square(n) run then return ans value will get stored into square2 variable which is undefined during memory allocation phase.

//// function is heart of js. while function invocation,  a new execution context is created

//// Once all the code executed then the whole execution including golbal as well as local will get deleted  


//// Creation of nested Execution context is difficult for Js so that purpose there is call stack facility inside js
/// so what is call stack in js ?
/// Sp in call stack, at bottomost golbal execution context is created and then nested execution context is created over bottomost golbal execution context one by one.
//// So for managing Execution context , call stack is there in Js


///// MOST IMP --->>> Call Stack maintains thr order of execution of execution contexts
//// Call Stack is also called as 
//// 1. Execution context stack
//// 2. Program Stack
//// 3. Control Stack
//// 4. Runtime Stack
//// 5. Machine Stack
