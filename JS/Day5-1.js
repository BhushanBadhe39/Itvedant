//--------------------------------------------------------------------------------------//
//                                                                                      //
//                                       FOR LOOP                                       //
//                                                                                      //
//--------------------------------------------------------------------------------------//

console.log("\n\n\n\n\n\n\n\n\n\n\n FOR LOOP\n\n\n\n\n\n\n\n\n");


for(let i=1;i<=10;i++){
    console.log(i);
    
}
console.log(" FOR LOOP EXITED \n\n\n\n\n");


//                         WAP to print 'hello world ' 10 times                         //

for(let i=1;i<=10;i++){
    console.log("Hello World!! ");
    
}

//                  WAP to print numbers in reverse order from 10 to 1                  //

console.log("Numbers 10 to 1 ------------\n\n\n\n");


for(let i=10;i>=1;i--){
    console.log(i);
    
}

//                       WAP to print even numbers from 1 to 100                        //

console.log("Even numbers between 1 and 100---------- \n\n\n\n");


for(let i=0;i<=50;i++){
    console.log(i*2);
    
}


//                          WAP to print table of given number                          //


console.log("Print the table of given number:  \n\n\n\n");

// let num= parseInt(prompt("Enter a number to print its table:"));
let num=27;

for(let i=1;i<=10;i++){
    console.log(i*num);
    
}


//--------------------------------------------------------------------------------------//
//                                                                                      //
//                                      WHILE LOOP                                      //
//                                                                                      //
//--------------------------------------------------------------------------------------//


console.log("\n\n\n\n\n\n\n\n\n\n\n WHILE LOOP\n\n\n\n\n\n\n\n\n");


console.log("Example:----");

let count=1;

while(count<=10){
    console.log("while",count);
    count++;
    
}

// WAP to print even numbers till 100


console.log("\n\n\n WAP to print even numbers till 100\n\n\n");

let num1 = 0;
while(num1<=100){
    console.log(num1);
    num1+=2;
    
}

//WAP to print count of even numbers from 0 to hundred
console.log("\n\n\nWAP to print count of even numbers from 0 to hundred\n\n\n");

let numcount=0;
for(let i=0;i<=100;i+=2){
    numcount++;
}
console.log(numcount);
