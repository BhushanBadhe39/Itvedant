//--------------------------------------------------------------------------------------//
//                                                                                      //
//                                       Promises                                       //
//                                                                                      //
//--------------------------------------------------------------------------------------//

//       SYNTAX      //
const promise_name = new Promise((resolve,reject)=>{
    //code
})



//  Example  //
const myPromise  =new Promise((resolve, reject) => {
    let name = true;
    if(name){
        resolve("This is Resolved");            //Sends the result to then (result in the bracket)
    }
    else{
        reject("Getting Error");                //Sends the result to catch (result in the bracket)
    }
})

myPromise.then((msg)=>console.log(msg)).catch((err)=>console.log(err)).finally(()=>console.log("Promise Worked."));
// ---- Then is used whenPromise is fulfilled. -------------------------------------------
// ---- Catch is used when promise is rejected. ------------------------------------------
// ---- Finally will run regardless whether promise is fulfilled or not ------------------


//--------------------------------------------------------------------------------------//
//                                       Practice                                       //
//--------------------------------------------------------------------------------------//

const myPromise2 = new Promise((resolve, reject) => {
    // let sum = parseInt(prompt("What is 2+2?"));
    let sum = 4;
    if(sum==4){
        resolve("You are smart.");
    }else{
        reject("Dumb....Might be dumber.Try Again.");
    }
})

myPromise2.then((msg)=>console.log(msg)).catch((err)=>console.log(err));