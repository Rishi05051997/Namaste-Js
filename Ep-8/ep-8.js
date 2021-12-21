//// let & Const declearations are Hoisted, because let & const are in Temporal Dead Zone for time being

console.log(b);
let a = 10; //// so during memory allocation phase let varible stored in saperate memory i.e.., script 
var b = 100; //// so during memory allocation phase var varible stored in window object 

//// Temporal Dead Zone is the time since when this let variable is hoisted and till the time that variable has initialize a definite value

//// Here we can say that let is little but strict than var if we declare a variable with let then we can't decleare same duplicate name 

// console.log(d) ///// Here we will get Referance error as d is in temporal dead zone
let d = 500;

// const e; //// Here we will get Syntaxerror as here there was no any asing value to const e;


//// Ways to declear a variable 
//// 1. let
//// 2. const
//// 3. var


//// What we need to used 
/// 1. Always first place used const -->> whenever the value which is assign to a variable dont change throughtout entire program then create that variable with const
/// 2. used let after const priority so that we will not faced undefine or not defined error
/// 3. keep var aside dont used it now 

//// Best way to avoid Temporal dead zone is that put decleartions as well as initialization on the top of program