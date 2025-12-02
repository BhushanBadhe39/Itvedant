//--------------------------------------------------------------------------------------//
//                                                                                      //
//                                   break statement                                    //
//                                                                                      //
//--------------------------------------------------------------------------------------//

let i=1;
while(i<=10){
    if(i==5){
        break;
    }
    console.log(i);
    
    i++;
}


//--------------------------------------------------------------------------------------//
//                                                                                      //
//                                  continue statement                                  //
//                                                                                      //
//--------------------------------------------------------------------------------------//



console.log("Continue Statement Example\n\n\n");

let j=1;
while(j<=10){
    if(j==5){
        j++;            //To increase j from 5 to 6 so that it doesn't infinite loop at 5.
        continue;
    }
    console.log(j);
    j++;
}




//                   Wap to check if the given number is prime or not                   //

console.log("\n\n\nCheck for Prime\n\n\n");

// let primeNum=parseInt(prompt("Enter the Number to check for prime."));
let primeNum=15;
let isPrime=true;
if(primeNum>1){
    for(let i=2;i<primeNum;i++){
    if(primeNum%i==0){
        isPrime=false;
        break;
    }
}
isPrime?console.log(primeNum,"is a Prime Number."):console.log(primeNum,"is not a Prime Number.");


}
else{
    console.log(primeNum,"is Invalid.");
    
}



// WAP to check if the given number is armstrong or not
console.log("\n\n\nCheck for Armstrong\n\n\n");

// let checkArmstrong = parseInt(prompt("Enter the Number:-"));
let checkArmstrong = 1634;
let sum = 0;
console.log("Number to check: ",checkArmstrong);


let count=checkArmstrong.toString().length;
console.log("Length of Number is",count);

for(let i = checkArmstrong;i>=1;i/=10){
    i = parseInt(i);
    let num = i%10;
    sum+= num**count;
}

if(checkArmstrong==sum){
    console.log("Is Armstrong");
    
}
else{
    console.log("Not Armstrong");
    
}


//                               WAP to reverse a number                                //

let givenNum = 123456789;
let output = 0;

for(let i=givenNum;i>=1;i/=10){
    i=parseInt(i);
    let j=i%10;
    output=output*10 + j

}

console.log(output);


//                             WAP to print square of stars                             //

for(let i=0;i<4;i++){
    for(let j=0;j<4;j++){
        document.write("*");
    }
    document.write("<br>");
}



//                             WAP to print left right triangle of stars                             //
document.write("<br><br>")
for(let i=1;i<=5;i++){
    for(let j=1;j<=i;j++){
        document.write("* &nbsp;&nbsp;");
    }
    document.write("<br>");
}


//                             WAP to print upside down left right triangle of stars                             //
document.write("<br><br>")
for(let i=5;i>=1;i--){
    for(let j=1;j<=i;j++){
        document.write("* &nbsp;&nbsp;");
    }
    document.write("<br>");
}

//                             WAP to print right right triangle of stars                             //
document.write("<br><br>")
for(let i=1;i<=5;i++){
    let k=5-i;
    while(k!=0){
        document.write("&nbsp;&nbsp;&nbsp;&nbsp;")
        k--;
    }
    for(let j=1;j<=i;j++){
        
        document.write("*&nbsp;&nbsp;");
    }
    document.write("<br>");
}

//                             WAP to print upside down right right triangle of stars                             //
document.write("<br><br>")
for(let i=5;i>=1;i--){
    let k=5-i;
    while(k!=0){
        document.write("&nbsp;&nbsp;&nbsp;&nbsp;")
        k--;
    }
    for(let j=1;j<=i;j++){
        
        document.write("*&nbsp;&nbsp;");
    }
    document.write("<br>");
}

// WAP to print a right triangle of numbers

document.write("<br><br>");

let counting=1;
for(let i=1;i<=10;i++){
    for(let j=1;j<=i;j++){
        if(counting<10){
            document.write("&nbsp;&nbsp;",counting,"&nbsp;&nbsp;&nbsp;");
        }
        else{
            document.write(counting,"&nbsp;&nbsp;&nbsp;");

        }
        counting++;
    }
    document.write("<br>");
}



// WAP to print a right triangle of horizontally parallel numbers

document.write("<br><br>");

for(let i=1;i<=10;i++){
    for(let j=1;j<=i;j++){
        if(j<10){
            document.write("&nbsp;&nbsp;",j,"&nbsp;&nbsp;&nbsp;");
        }
        else{
            document.write(j,"&nbsp;&nbsp;&nbsp;");

        }
    }
    document.write("<br>");
}



// WAP to print a right triangle of horizontally parallel numbers

document.write("<br><br>");

for(let i=1;i<=10;i++){
    for(let j=1;j<=i;j++){
        if(j<10){
            document.write("&nbsp;&nbsp;",i-j+1,"&nbsp;&nbsp;&nbsp;");
        }
        else{
            document.write(i-j+1,"&nbsp;&nbsp;&nbsp;");

        }
    }
    document.write("<br>");
}



//                             WAP to print left right triangle of stars                             //
// document.write("<br><br>")
// let letter='a';
// for(let i=1;i<=4;i++){
//     for(let j=1;j<=i;j++){
//         document.write(letter);
//         letter++;
//     }
//     document.write("<br>");
// }