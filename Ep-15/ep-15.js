///// Event Loop
//// Callback Queue
//// Microtask Queue
//// Js is synchronous single threaded language,it have one call stack. it can only do one thing at a time. All the codes should be excutes in call stack 
/// suppose in some situations we need some timer functionality as we know call stack quickly execute the code, so we need to execute one code with certain delay we need some super power 


///// Event Loop -->> Monitores both Callback queue as well as Microtask queue
/// Callback Queue -->> All callback comes into callback queue & event loop take each function one by one & put that function into call stack
/// Mircrotask Queue -->> All Promises & mutation observars (On DOM some changes happened ) comes into microtak queue
/// Suppose both Callback as well as Mircrotask Queue contain function in such situation priority is given to microtask queue
/// Suppose if microtask queue generatation functions continously then it will not give chance to the callback queue for execution so this is nothing but Starvation