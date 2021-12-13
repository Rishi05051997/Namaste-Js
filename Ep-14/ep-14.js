//// what is a callback function in JS ?
/// Javascript is synchronous single threaded language
/// Blocking the main thread
/// Power of callbacks ?
/// Deep about Event Listeners
/// Closure Demo with eventlisteners
/// Scope Demo with Event Listeners
/// Garbage Collector & Remove Event Listener


///// ******* Callback Functions ******
//// Functions are the first class citizens in JS, so we can take a function and pass it into a another function so this function is called as callback function. Callback function is very powerful in JS it converts whole synchronous single threaded language into Asynchronous as we know Javascript is synchronous single threaded language that means JS can do one thing at a time & in a specific order but due to callbacks we can do async things inside JS 

/// example 
/// in Case of setTimeout() the function which we defined as a 1st parameter is a callback function.... so setTimeout store that function into a saperate space with attach a timer of 2000ms, we already know that JS won't wait for setTimeout to finish over here that is why these Callback gives us power of asynchronity, it doesnot wait for 2000ms in order to expire and what is needs to be done after 2000ms that we can pass as a function (paramenter) to the setTimeout, it wii be later executed
//// JS waits for none similarlty it willbe move on and it will be move on to the next code for execution
//// Asynchronous nature only poassiblle due to callback function passed to setTimeout function as an argument
setTimeout(() => { console.log("timer") }, 2000);

function x(y) {
    console.log("X");
    y();
};

x(
    function y() {
        console.log('Y')
    });



/////// ******** Blocking the main thread ********
//// supposed we have one function which has very heavy operation which take 20-30s to complete that function by that time as JS has jus one call stack and Js has one main thread becoz of that JS won't be execute any other code that means everything will be blocked on the code that is why we are not blocked our main thread i.e.., this call stack. That is the never blocked main thread as well as call stack. So we should use async operations to the things which take some definite time just like we did in setTimeout function with timer. so setTimeout take a function as a callback will execute that callback function after some time with timer attach to the setTimeout function


/// Power of callbacks ?
///// Sumerize --->> As JS didn't have first class functions as well as Callback function we can't do asynchronous nature of Js with the help of these Web APIS i.e.., setTimeout as well as Callback we achieve asynchronous nature of Js


/// Deep about Event Listeners
//// In case of addeventlistener we pass two parameters to the add Eventlistener function 1st is event name that is click and 2nd one is simply a callback function so this event listener function store that callback function into saperate memory. so when that click event happen thenn that callback function automatically comes into our call stack 
function increCounter() {
    let counter = 0;
    document.getElementById("clickMe").addEventListener("click", () => {
        console.log("Button click", counter);
        counter++;
    })
}

//// In above increCounter() is used as a closure bcoz we don't want to use our data members throughout other function for Data hiding we implemented Closure here Closure is simply a function along with its laxical envrionment, when we call that increCounter() function i.e.., Closure, that should able to remember its parent laxical environment 

increCounter();

/// Garbage Collector & Remove Event Listener
///// First of all event listener are heavy it takes memory, suppose our web page contains 50 buttons that buttons should have so manny event listners then that event listerners have closures and Closures have so many data members along with callback functions so it definitely take huge memory which will result into decreasing performance of our web page for that we should implement remove event listenre once we add emove event listenre then all these things comes into garbage collector 
