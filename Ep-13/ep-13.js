
//// Anonymous Function -->> The function which is not having name 
//// what is First Class Function ? whats is Function Statement ? What is Function Expression ? What is Function Declearation ?

/// Function Statement 
function a(){
    console.log("A called");
};

a();

/// So above one is a function statement, so it is nothing but a way of defining a function that is nothing but function statement

/// Function Expression is also knows as Function Declearation 

var b = function (){
    console.log("b called");
}

b();
//// so function expression is nothing but we can store a function inside a variable itself

/// Anonymous Function -->> Function without a name, Anonymous Function doen't have its own identity, They are useful in placed where we store function as a value
let func = function(){
    console.log('Anonymous function is called')
}

func();

//// Named Function Expression  -->> it simply a function with a valid name

var name_ = function displayName(name){
    console.log(name,"  is your name");
    function displaySuraname(suranme){
        console.log("Full name is ", name+suranme)
    }
    displaySuraname(surname)
};

// name_("Vrushabh")("Dhatrak");


//// Difference between Parameter & Arguments ?
//// parameter are nothing but when we define a function then we passed paramenters to the function

let parameterised = function square(num){
    let result = num * num;
    console.log(result);
};

/////// Arguments to the function is nothing but when we call a function then we pass arguments to the function
let sq = parameterised(2);


///// First Class Functions --->>>it is an ability to used a function as value.
// In JS, we can pass function inside a function as a argument
/// it is an ability to pass function as argument to the function and also return function from a function this is nothing but 
/// functions are also First Class Citizens

function functionNested(func){
    console.log(func)
}


functionNested(()=> {
    
});

///// Arrow Functions -->>> it is part of ES6













