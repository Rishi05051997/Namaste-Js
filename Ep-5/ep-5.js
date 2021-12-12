//// In Javascript if we run our program without writing a single code then Js will create a Global Window object, "this" object as well as 
//// Global memory object

let x = 10;

function a(){
    let x = 15;
    console.log(x);
}

console.log(window.a);///// 10
console.log(this.a)////// 10
console.log(a)///////