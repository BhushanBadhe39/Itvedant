//--------------------------------------------------------------------------------------//
//                                                                                      //
//                                  ANONYMOUS FUNCTION                                  //
//                                                                                      //
//--------------------------------------------------------------------------------------//


const sum = function (a,b){
    return a+b;
}

console.log(sum(10,20));


const isEven = function (a){
    if(a%2==0){
        return true;
    }
    else{
        return false;
    }
}

console.log(isEven(21)?"Number is Even":"Number is Odd");


const checkArmstrong = function (c){
    let num =0
    let a=c;
    let count = c.toString().length;
    while(a>=1){
        a=parseInt(a);
        let b = a%10;
        num += b**count;
        a/=10;
    }
    return num==c;
}

console.log(checkArmstrong(1634)?"This Nmmber is an Armstrong Number":"This Number is not Armstrong Number.");


// Write a function to check if the given number is palindrome or Not. 

const checkPalindrome = function (a){
    let num =0;
    let b=a;
    while(b>=1){
        b=parseInt(b);
        let c = b%10;
        num=num*10+c;
        b/=10;
    }
    return num==a;
}

console.log(checkPalindrome(16261)?"This Number is a Palindrome":"This Number is not Palindrome.");




