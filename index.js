function receivesAFunction(callback) {
    //Call the callback function without worrying what it returns
    callback();
}
function stareCallback() {
    console.log("callback function has been called.");
}
receivesAFunction(stareCallback)
function returnsANamedFunction() {
    //Define a named function to return
    function namedFunction() {
        console.log('This is a namedFunction.');
    }
    //Return the named function;
    return namedFunction
}
const myFunction =
returnedNameFunction();
myFunction();

function returnsAnAnonymousFunction(){
    //Return an anonymous function
    return function() {
        console.log('This is an anonymous function.');
    };
}
//Get the Anonymous Function returned by returnsAnAnonymousFunction
const myAnonymousFunction =
returnsAnAnonymousFunction();
//call the returned anonymous function
myAnonymousFunction();