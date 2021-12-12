//// Block,Scoped, shadowing

//// Block is nothing but {} so block is combiniting multiple JS statements into a group


//// in case of if conndition if our condition stop same only then we dont need to used {} but we need group statements then we use block i.e.., {}
var main = "Vrushabh";
let game = "Cricket";
if(true){
    let a = 50;
    console.log(a);
}

{   
    var main = "Ganesh"; ///// here we see that main variable is decleared globally as well as locally so it is nothing but showdowing in jS in this if we access main variable then it will print Ganesh instead of Vrushabh
    let game = "Hokky";
    console.log(game); ///// Here we see that game is decleared globally as well as locally but in case of let variable game can't shadown global game variable as we know let block scope variable so local game variable is limited to this perticular local block scope it can;t accessible outside this block
    var m = 10;
    let n = 20;
    const d = 50;

    //// in above case let & const variables are hoisted in Block scope 
    ///// var is hoisted in Global Execution context i/e.., windwon object
    //// But let & const both varibles are not accessible outside scope as it's block scope variables
    //// but var variable can accessible outside scope as it's stored in a window object
    console.log(m);
    console.log(n);
    console.log(d);
}


console.log(m);

// console.log(n); ////  Uncaught ReferenceError: n is not defined
// at ep-9.js:28 /// as n is block scope variable so which is not accessible outside the block scope
// console.log(d); ////  Uncaught ReferenceError: d is not defined
// at ep-9.js:28 /// as d is block scope variable so which is not accessible outside the block scope


console.log(main);
console.log(game);


///// ****** Illegal Shadowing ****** //////
let a  = 20;

{
    // var a = 20; //// This is nothing but Illegal Shadowing here we can see that let a variable is decleared again we are creating with same variable name but with var this is nothing illegal shadowing 
}


/// we can shadow a variable by
//// let --->> let 
let a = 30;
{
    let a = 20;
}

///// var -->>> var 
var l = 70;
{
    var l = 90;
}

//// const --->> const 
const y = 60;
{
    const y = 50;
}


///// var --->>> let 
var r = 40;
{
    let t = 30;
}