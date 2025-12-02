//--------------------------------------------------------------------------------------//
//                                                                                      //
//                                    DO-WHILE LOOP                                     //
//                                                                                      //
//--------------------------------------------------------------------------------------//

let i=1;
do{
    console.log(i);
    i++;
}while(i<=10);


//                       WAP to print even numbers from 1 to 100                        //

console.log("\n\n\n\nEVEN NUMBERS BETWEEN 1 to 100\n\n\n\n")

let evenNum=0;
do{
    console.log(evenNum);
    evenNum+=2;
}while(evenNum<=100);




//                     WAP to print the sum of numbers from 1 to 10                     //

console.log("\n\n\n\nSUM OF NUMBERS FROM 1 TO n \n\n\n\n");

let n=1;
let sum=0;
do{
    sum=sum+n;
    n++;
}while (n<=10) 
console.log("Sum = ",sum);


//                 WAP to print the count of odd numbers from 1 to 100                  //

console.log("\n\n\n\nCount of Odd Numbers from 1 to 100\n\n\n\n ");

let countOdd=0;
let num1=1;

do{
    countOdd++;
    num1+=2;
}while(num1<=100)
console.log("Count = ",countOdd);


//                      WAP to print the table of the given number                      //



// let num2=parseInt(prompt("Enter a number to see its table:"))
let num2=15;
console.log("\n\n\n\nTable of",num2,"is\n\n\n\n");

let muult=1;
do{
    console.log(num2*muult);
    muult++;
}while(muult<=10);




//--------------------------------------------------------------------------------------//
//                                                                                      //
//                                   Ternary Operator                                   //
//                                                                                      //
//--------------------------------------------------------------------------------------//


console.log("\n\n\n\n\n\n\nTERNARY OPERATOR\n\n\n\n\n\n\n");

let a=20;
let b=10;

let greatest = a>b ? a:b;
console.log("\n\n\n\nThe greatest Out of both numbers is ",greatest,"\n\n\n\n");




//                      WAP to find greatest of the three numbers                       //

let x=30;
let y=50;
let z=40;

//FIRST METHOD//  --------------------------------------------------------------------------------------
let greatest2 = x>y ? (x>z ? x:z):(y>z ? y:z);

console.log("\n\n\n\nThe greatest Number is",greatest2,"\n\n\n\n");

//SECOND METHOD//  --------------------------------------------------------------------------------------
greatest2 = x>y && x>z ? x : y>z ? y:z;

console.log("\n\n\n\nThe greatest number is",greatest2,"\n\n\n\n");



//                         WAP to find the voting Eligibiltity                          //

let age=25;

let eligibility=age>=18 ? "Eligilible to Vote":"Not Eligible to Vote";

console.log("\n\n\nThe age of the Person is",age,"\nHe is",eligibility,"\n\n\n");



//         WAP to find if the number is Positive,negative or zero          //

let num3 = 0;

let checkInt = num3>0 ? "Positive" : num3<0 ? "Negative" : "Zero";

console.log("\n\n\nThe number is",checkInt,"\n\n\n");