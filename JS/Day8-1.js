// Math function

console.log(Math.floor(123.09));

// Math.floor() is used to return greatest integer number less than or equal to that of the number. 


console.log(Math.random());

// Math.random() is used to return a random number between 0 and 1.

console.log(Math.round(5.1));


// Math.round() is used to return round values


console.log(Math.sqrt(16));


// Math.SQRT2() is used to return sq. root of the Number 

console.log(Math.ceil(15.3));

// Math.ceil is used to convert float number to its next integer number. 

console.log(Math.pow(15,3));

// Math.pow() is used to use power operator. 



//--------------------------------------------------------------------------------------//
//                                                                                      //
//                                    Date Functions                                    //
//                                                                                      //
//--------------------------------------------------------------------------------------//

let d = new Date;
console.log(d);
console.log(d.getDay());
console.log(d.getDate());
console.log(d.getFullYear());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getTime());
console.log(d.getMonth());
console.log(d.toDateString());
console.log(d.toLocaleTimeString());




//--------------------------------------------------------------------------------------//
//                                                                                      //
//                                      Functions                                       //
//                                                                                      //
//--------------------------------------------------------------------------------------//


function show(){
    return "\n\n\n\nHello Show Function\n\n\n\n";
}

// TO call a Function: -

console.log(show());

function add(a,b){

    return a+b;
}

console.log(add(12,89));


//                     WAP to check even numbers by using function                      //

function isEven(num) {

    if(num%2==0){
        return true;
    }
    else{
        return false;
    }
    
}

console.log(isEven(18));
