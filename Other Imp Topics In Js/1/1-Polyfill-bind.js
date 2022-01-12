////// Polyfills for binds method
//// Polyfills is sort of a browser fallback what if suppose your browser doestn't have a bind function and you have to write your own bind function

let name = {
    firstName:"Vrushabh",
    lastName:"Dhatrak"
}

let printName = function (hometown, state, country){
    console.log(this.firstName+" "+this.lastName+" , "+hometown+" , "+state+" , "+country);
}

//// so below we are creating a traditional bind method i.e.., we passed name object as an argument to bind method 
let printMyName = printName.bind(name, "Nashik");

printMyName("Maharashtra", "India");


// let printName = function (){
//     console.log(this.firstName+" "+this.lastName);
// }

//// Function Prototype -->> if we keep any method in function.prototype then each and every method that we write has acceess to those method

Function.prototype.mybind = function (...args){
    // this -> printMyName
    let obj = this;
    params = args.slice(1);
    return function (...args2){

        obj.apply(args[0], [...params, ...args2])
    }
}
//// so we wanted to invoked printName function when printMyName2 invoked, so if we wanted to access printName to access that is possible by global "this" keyword and then we stored this keyword inside obj variable and then obj.call() method passed args[0] as a reference which is the name , but if in case if we have more than 1 arguments then args[0] will not work in case of mybind function prototype so for that purpose we args.slice(1) method remove given element and return one element out of it and stored it into array format then again we passed one more argument of printMyName() as well as printMyName2() function then in that case we need to passed args2  paramtere as an array format to the returning function in mybind function and with the help of obj.apply(object, [array]) method here we concatinates two objects using ES6 syntax [...obj_1, ...obj_2] -->> obj_1 + obj_2
let printMyName2 = printName.mybind(name, "Nashik");

printMyName2("Maharashtra", "India");



