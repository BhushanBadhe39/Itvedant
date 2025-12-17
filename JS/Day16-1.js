//--------------------------------------------------------------------------------------//
//                                                                                      //
//                                 Array Destructuring                                  //
//                                                                                      //
//--------------------------------------------------------------------------------------//

//unpacks values from arrays or objects into variables.
console.log("\n\n\n\n\nArray destructuring\n\n\n\n\n");

const arr1 = [10,20,30,40,50];
const [a,b,c,d,e] = arr1;       //Destructuring
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);


//--------------------------------------------------------------------------------------//
//                                                                                      //
//                                   Spread Operator                                    //
//                                                                                      //
//--------------------------------------------------------------------------------------//
console.log("\n\n\n\n\nSpread Operator\n\n\n\n\n");

const arr2 = [60,70,80,90,100];
const arr = [...arr1,...arr2];
console.log(arr);

console.log("Without Spread Opeartor:-\n",[arr1,arr2]);


//--------------------------------------------------------------------------------------//
//                                                                                      //
//                                    Rest Operator                                     //
//                                                                                      //
//--------------------------------------------------------------------------------------//
console.log("\n\n\n\n\nRest Operator\n\n\n\n\n");

const arr3 = [10,20,30,40,50,60,70,80,90,100];
const [x,y,...myArray] = arr3;
console.log("x =",x);
console.log("y =",y);
console.log("myArray =",myArray);



//--------------------------------------------------------------------------------------//
//                                       Practice                                       //
//--------------------------------------------------------------------------------------//


//                       Find the sum of all elements in an array                       //
function addition(...arr) {
    return arr.reduce((a,b)=>a+b)
}
console.log(addition(10,20,30));

//This is very Important as it lets us take any number of parameters.
//  --------------------------------------------------------------------------------------
