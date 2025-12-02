//--------------------------------------------------------------------------------------//
//                                                                                      //
//                                    ARROW FUNCTION                                    //
//                                                                                      //
//--------------------------------------------------------------------------------------//

const add = (a,b)=>{
    console.log(a+b);
    
}

add(50,500);


const isEven = (a)=>{
    console.log(a%2==0?"Number is even":"Number is odd.");
}
isEven(25);


const checkPalindrome = (a)=>{
    let num=0;
    let b=a;
    while(b>=1){
        b=parseInt(b);
        let c=b%10;
        num=num*10+c;
        b/=10;
    }
    console.log(num==a?"The number is a palindrome":"The number is not a palindrome.");
    
}

const checkArmstrong = (a)=>{
    let num=0;
    let b=a;
    while(b>=1){
        b=parseInt(b);
        let c=b%10;
        num+=c**3;
        b/=10;
    }
    console.log(num==a?"The number is an Armstrong number":"The number is not an armstrong numbet.");
    
}

checkPalindrome(121);
checkArmstrong(153);



//--------------------------------------------------------------------------------------//
//                                                                                      //
//                                   STRING FUNCTION                                    //
//                                                                                      //
//--------------------------------------------------------------------------------------//




// ---- INDEXING -------------------------------------------------------------------------

let s="Hello";
console.log(typeof(s));
console.log(s);
console.log(s[0]);
console.log(s[1]);
console.log(s[2]);
console.log(s[3]);
console.log(s[4]);



// ---- CONCATNATION ---------------------------------------------------------------------

s1 = s + " World";
console.log(s1 + "!!!");
console.log(s);



// ---- BUILT-IN STRING METHODS ----------------------------------------------------------


    // 1 - toUpperCase()
        console.log("\n\n\n\n\n 1 - toUpperCase()");
        
    let names = "Bhushan";
    console.log(names.toUpperCase());       //Can use new variable too.
    
    // 2 - toLowerCase()
    console.log("\n\n\n\n\n 2 - toLowerCase()");
    
    console.log(names.toLowerCase());

    // 3 - length
    console.log("\n\n\n\n\n 3 - length");
    
    console.log(names.length);
    
    // 4 - charAt()
    console.log("\n\n\n\n\n 4 - charAt()");
    
    console.log(names.charAt(5));
    console.log(names.charAt(50));      //returns empty string for non existing indices
    
    // 5 - startsWith()
    console.log("\n\n\n\n\n 5 - startsWith()");
    
    console.log(names.startsWith("B"));
    console.log(names.startsWith("L"));

    // 6 - endsWith()
    console.log("\n\n\n\n\n 6 - endsWith()");
    
    console.log(names.endsWith("n"));
    console.log(names.endsWith("N"));
    
    // 7 - replace()
    console.log("\n\n\n\n\n 7 - replace()");

    let str2 = "Hello";
    console.log(str2.replace("H","Z"));
    console.log(str2);
    
    // 8 - replaceAll()
    console.log("\n\n\n\n\n 8 - replaceAll()");

    console.log(str2.replaceAll("l","r"));
    console.log(str2);

    // 9 - split()
    console.log("\n\n\n\n\n 9 - split()");

    let string1 = "JavaScript Is Scripting Language";
    let arr = string1.split(" ");
    let arr2 = string1.split("r")
    console.log(string1);
    console.log(arr);
    console.log(arr2);
    
    
    
    

// ---- Accessing String using for Loop --------------------------------------------------
console.log("\n\n\n\n\n Accessing String using for Loop");


for (let i = 0; i < names.length; i++) {
    console.log(names[i]);    
}

// ---- Accessing String using while Loop --------------------------------------------------
console.log("\n\n\n\n\n Accessing String using while Loop");

let j=0;
while (j < names.length) {
    console.log(names[j]);    
    j++;
}







//                    WAP to reverse a String without reverse method                    //
console.log("\n\n\n\nWAP to reverse a String without reverse method");

let given = "Hello";
let output = "";
for(let i = given.length-1;i >= 0;i--){
    output += given[i];
}
console.log(output);


//                       WAP to print reverse the words of string                       //

        //(string1 ="JavaScript Is Scripting Language")

let temp = string1.split(" ");        
let reverseString1 = "";
for(let i = temp.length-1;i >= 0;i--){
    reverseString1 += temp[i]+" ";
}
console.log(reverseString1);



    
