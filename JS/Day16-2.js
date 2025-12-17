//--------------------------------------------------------------------------------------//
//                                                                                      //
//                                  CallBack Function                                   //
//                                                                                      //
//--------------------------------------------------------------------------------------//

//A callback function is a function that is passed as an argument to another function and is invoked or called by that function at a certain point in time.

function greeting(name,callback) {
    console.log("Hello",name);
    callback();
    
}

greeting("Bhushan",hello);

function hello() {
    console.log("Good Evening...");
    
}


// ---- Here the hello function is callback function in greeting function. ---------------
// ---- greeting is an ASYNCRONOUS function ----------------------------------------------
// ---- Because while the code is being ran line by line, the callback in greeting searches the entire file for hello function parallely. ----



//--------------------------------------------------------------------------------------//
//                                                                                      //
//                                 setTimeout Function                                  //
//                                                                                      //
//--------------------------------------------------------------------------------------//

// ---- It is used to run some code/function after some specific delay. ------------------------

//  SYNTAX: setTimeout(func,timer) ----> timer in ms (1000 = 1sec)

console.log("Start...");
setTimeout(hello,5000);
setInterval(() => console.log("This was seTimeout Function."), 10000);
console.log("End...");      //While the settimeout makes hello wait, the code will continue running meanwhile.

