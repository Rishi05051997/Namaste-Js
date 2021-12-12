//// SetTimeout

function x() {
    let i = 0;
    setTimeout(() => {
        console.log(i)
    }, 3000);
    console.log("Namaste Js");

    //// Here how js code is running ? let me explain first js program start excuting from top to bottom while code come on setTimeout so setTimeout store a function into saprate memory with timer attach to it then next console function start executing once the timer of setTimeout ends then the function associated with setTimeout come into call stack then that function start running
}

x();

let counter = 0;

function y() {
    setInterval(()=> {
        console.log(counter);
        counter++;
    }, 1000)
}

// y();


function count() {
    // for(let i=0;i<=5;i++){
    //     setTimeout(() => {
    //         console.log(i)
    //     }, i*1000)
    // }
    
        for(var i=0;i<=5;i++){
            function close(i){
                setTimeout(() => {
                    console.log(i)
                }, i*1000)
            };
            close(i);
        }
    
    
}

count();


