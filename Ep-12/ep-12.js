//// What is closure ?
/// Closure is a function with its laxical environemt form bunddles together. So each n every function in JS has access to its parent laxical environment.if the function executed in some other scope then that function still remember its parent laxical environment where that function originally present inside a code
/// Give little example of Closure ?
function x(b){
    var a = 15;
    /// let a = 15; //// if we declared let inside this then let as we know block scope variable whcih is not accessible outside the function x but still accessible by function y as function y is having its parent laxical environment
    function y(){
        console.log(a,b);
    }
    /// var a = 15; //// in case of closure the seqence of defining a variable is not affect 
    return y;
}

// let n = x();

x('Hello')(); //// if we pass argument innside a function then still it will not affect Closures 
 
// n();



function outest(){
    var a = 10;
    function outer(c){
        var b = 20;
        function inner(){
            console.log(a, b, c)
        }
        return inner;   
    }
    return outer;

}

var l = (outest)('Hellow world')
l();


//// Advantages Of Closures 
///// Closures are the most beutifull part of Js, it is usefull in Module Design Pattern, currying, high order function


