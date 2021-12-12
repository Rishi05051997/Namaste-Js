//// Scope in Js is directly related to laxical environment. 
//// Scope is nothing but where you can access a specific variable inside entire program....
//// whenever excuation context is created then simoltaneously local laxical environment of its parent also created
///// Laxical environment is the local memory along with laxical environment of its parent 
//// Laxical is nothing but hieracrchical or sequencial as in below code we can say that function c is laxically fitted inside "a" function and function "a" is laxically inside global scope i.e.., Global Execution context but Global execution context is not having its parent laxical environment so it will be null.
///// Scope chain is nothing but chain of laxical environments 
function a() {
    console.log(b); ////// Here during excution context of function a here we see there was no any local b variable inside function a so then it will find global excution context whether there was any global b variable yes there was global b variable having 10 value then it will print 10 so here Scoping comes into picture, during scoping 1st preferrance always start from local then Global 
    c();
    function c(){
        console.log(b);
    }
    
}

var b = 10;
a();


//// Laxical Environment --->>>> Local memory + Laxical Envrironnment of its parent 
///// Scope chain can find whether a specific variable is present inside whole program or not 