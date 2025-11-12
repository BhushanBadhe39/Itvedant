//--------------------------------------------------------------------------------------//
//                                   IF-ELSEIF-ELSE                                    //
//--------------------------------------------------------------------------------------//

let num = 20;
console.log("Checking if the given number is positive, negative or zero...");

 if(num>0){
    console.log(num,"is positive.");
    
 }
 else if(num<0){
    console.log(num,"is negative.");
    
 }
 else{
    console.log(num,"is zero.");
    
 }



//                 WAP to find the greatest number from above variables                 //


console.log("Finding greatest number among given...");

let a=20;
let b=10;
let c=34;

if(a>=b && a>=c){
    console.log(a,"is the greatest.");
    
}
else if(b>=c){
    console.log(b,"is the greatest.");
    
}
else if(c>a){
    console.log(c,"is the greatest.");
    
}
else{
    console.log("All three numbers are equal.");
    
}


// if(a>=b){
//     if(a>=c){
//         console.log(a,"is the largest.");
        
//     }
//     else{
//         console.log(c,"is the largest.");
        
//     }
// }
// else{
//     if(b>=c){
//         console.log(b,"is the greatest.");
        
//     }
//     else{
//         console.log(c,"is the greatest.");
// }
// }


//                       WAP to assign markwise grade to student?                       //

let mark = 75;
console.log("Assigning grade based on marks...");

if(mark>=90){
    console.log("Grade : O");
    
}
else if(mark>=85){
    console.log("Grade : A+");
    
}
else if(mark>=75){
    console.log("Grade : A");
    
}
else if(mark>=65){
    console.log("Grade : B");
    
}
else if(mark>=55){
    console.log("Grade : C");
    
}
else if(mark>=45){
    console.log("Grade : D");
    
}
else if(mark>=35){
    console.log("Grade : E");
    
}
else{
    console.log("Grade : F");
}



//                         WAP for greeting depending upon time                         //

let time = 12;
console.log("Greeting based on time...");

if(time>=5 && time<12){
    console.log("GOOD MORNING ^_____^");
    
}
else if(time<16){
    console.log("GOOD AFTERNOON ^_____^");
    
}
else if(time<=20){
    console.log("GOOD EVENING ^_____^");
    
}
else if(time<=24 && time>=0){
    console.log("GOOD NIGHT ^_____^");
    
}
else{
    console.log("Invalid time");
    
}


// ---- How TO USE Prompt COMMAND IN JS --------------------------------------------------


// let var1 = parseInt(prompt("Enter any value"));
// console.log(var1);
// console.log(typeof(var1));



//      WAP to get a number from 1-7 and print the day of the week accordingly //       //



//  --------------------------------------------------------------------------------------
// let day = parseInt(prompt("Enter a number from 1 to 7 : -"));
// if(day==1){
//     console.log("Monday");
    
// }
// else if(day==2){
//     console.log("Tuesday");
    
// }
// else if(day==3){
//     console.log("Wednesday");
    
// }
// else if(day==4){
//     console.log("Thursday");
    
// }
// else if(day==5){
//     console.log("Friday");
    
// }
// else if(day==6){
//     console.log("Saturday");
    
// }
// else if(day==7){
//     console.log("Sunday");
    
// }
// else{
//     console.log("Invalid input ( DO you seriously don't understand what comes between 1 and 7?)");
    
// }
//  --------------------------------------------------------------------------------------





//--------------------------------------------------------------------------------------//
//                                                                                      //
//                                   SWITCH STATEMENT                                   //
//                                                                                      //
//--------------------------------------------------------------------------------------//

//  --------------------------------------------------------------------------------------
// let value = parseInt(prompt("Enter a number from 1 to 7 : -"));

// switch (value) {
//     case 1:
//         console.log("Its Monday");
//         break;
//     case 2:
//         console.log("Its Tuesday");
//         break;
//     case 3:
//         console.log("Its Wednesday");
//         break;
//     case 4:
//         console.log("Its Thursday");
//         break;
//     case 5:
//         console.log("Its Friday");
//         break;
//     case 6:
//         console.log("Its Saturday");
//         break;
//     case 7:
//         console.log("Its Sunday");
//         break;

//     default:
//         break;
// }
//  --------------------------------------------------------------------------------------


//                  WAP to print a month name based on month number //                  //

let month = parseInt(prompt("Enter month number (1-12) : -"));

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Invalid month number");
}