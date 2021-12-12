///// Closures --->>> it's a function bind together along with its laxical environment
///// Uses of Closures
// - Module design Pattern
// - Currying
// - Function like once
// - memoize
// - maintaining state in async world
// - setTimeout
// - Iterators


function x(){
    var a = 5;
    function y() {
        console.log(a);
    }
    return y;

}

let p = x();
console.log(p);
// ƒ y() {
//     console.log(a);
// }

p(); //// 5


//// Another example 

function z() {
    let name = 700;
    function x() {
        let game = 900;
        console.log(name, game)
        function y() {
            console.log(game)
        }
        y();
    }
    x();
}

z();

