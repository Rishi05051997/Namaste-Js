let name = {
    firstName: "Vrushabh",
    lastName: "Dhatrak",
    
}

let printFullName= function (){
    console.log(this.firstName+" "+this.lastName)
}
//// Each n every function in js has access to a this keyword, so in above name object  printFullName is function and which can access both firstName and lastname using this keyword

printFullName.call(name);

let name_2 ={
    firstName:"Jayesh",
    lastName:"Kadam"
}

/// suppose we have another object which consist of both fisrtname and lastname also we need same printFullName function inside that in that case either we copy same function as it is or we can used call method i.e.., function borrowing 

//// call method i.e.., function borrowing  --->> We can borrow function from other objects here from name object and used it with the data of some other object

printFullName.call(name_2);


/// so in general, we would not put methods inside objects as key n value pairs rather than we have saperate method outside the object and according to need we can used call method and passing other objects as an argument.

//// supposed if we want to pass one more argument to the call() method then in that case so 1st argument in call() method is this.object i.e.., object and 2nd argument is other values that we need to passed to the function 

let car = {
    nameOfCar:"Swift",
    model: 2021
}

let displayCar = function (owner, passing) {
    console.log(this.nameOfCar+" made in "+this.model+" baught by "+owner+
    " district passed by "+passing)
}



displayCar.call(car, "Vrushabh", "Nashik");


//// ******* apply() method ******
//// The only difference between call() and apply() methods is the way we passed arguments 
//// So in case of of call method we passed arguments individually quama (",") saperated i.e.., displayCar.call(car, "Vrushabh", "Nashik");
//// So in case of apply() mrthod we passed 2nd arguments to the function as an array list displayCar.apply(car, ["Ganesh", "Nanded"])

displayCar.apply(car, ["Ganesh", "Nanded"]);

//// *****bind() method******

//// The bind() method is exactly same as the call() method but the only difference is instead of directly calling the method, the bind() method binds the method i.e.., displaCar() with a object and returns the copy of that method


let displayMyCar = displayCar.bind(car ,"Ganesh", "Nanded");
//// so bind method will return a function rather than immediately call the method which is happened in call method
console.log(displayMyCar);
// ƒ (owner, passing) {
//     console.log(this.nameOfCar+" made in "+this.model+" baught by "+owner+
//     " district passed by "+passing)
// }
/// so in above one bind method returns a another function 
displayMyCar(); //// here we invoke a function 
///// Swift made in 2021 baught by Ganesh district passed by Nanded


//// so it's only just bind a function and stored it into a varibale and used it later whenever is required

//// So only the difference is in case of bind method we bind a method stored it into a variable and used it whenever it required and in case of call method we immediately invoked our function 

