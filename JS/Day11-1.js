//--------------------------------------------------------------------------------------//
//                                                                                      //
//                                        ARRAY                                         //
//                                                                                      //
//--------------------------------------------------------------------------------------//

//Array is collection of heterogenous types of data

const arr1 = [10,20,30,40,50,"Hello",[100,200,300]];
console.log(typeof(arr1));
console.log(arr1);

for (let index = 0; index < arr1.length; index++) {
    console.log(arr1[index]);
    
}
let index_arr1=0;
while(index_arr1!=arr1.length){
    console.log(arr1[index_arr1]);
    index_arr1++;
}

// ---- Built in methods of array Objects ------------------------------------------------

    // 1 - length
    // --


    // 2 - push()

    arr1.push(60);
    console.log(arr1);
    
    // 3 - pop()  --> remove and return last element of the array

    console.log(arr1.pop());
    console.log(arr1);          //if array is empty,undefined is returned

    // 4 - unshift()  --> used to add element at the beginning

    arr1.unshift(70);
    console.log(arr1);
    
    // 5 - shift()  -->Removes the first element from an array and returns it.

    console.log(arr1.shift());
    console.log(arr1);

    // 6 - At() --> used to return element at specific position.

    console.log(arr1.at(3));
    
    // 7 - concat() 

    const arr2 = [101,202,303];
    arr1.concat(arr2);
    console.log(arr1);
    
    // 8 - slice(start,end)

    console.log(arr1.slice(0,3));
    
    // 9 - splice() -->  Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

    arr1.splice(1,1,101);
    console.log(arr1);
    // OR 
    arr1.splice(1,2,101,102);
    console.log(arr1);
    
    // 10 - join() -->  used to join given list by using seperator and generate new string

    const strArr = ["JavaScript","is","Programming","Language"];
    let strArr2 = strArr.join(" ");
    console.log(strArr2);

    // 11 - map() --> Calls a defined callback function on each element of an array, and returns an array that contains the results.

    const arr3 = [10,20,30,40,50];
    const arr4 = arr3.map((n)=>n*n);
    console.log(arr4);
    
    // 12 - filter() --> used to filter out values from array based on condition and henerate new array.

    const arr7 = arr3.filter((n)=> n % 20 == 0);
    console.log(arr7);
    
    // 13 - reduce() --> used to perform operations on array elements in pairs till a single value is achieved.

    const sum = arr3.reduce((a,b)=>a+b);
    console.log(sum);

    // 14 - For of Loop

    for (const element of arr3) {
        console.log(element);
        
    }
    
    
//--------------------------------------------------------------------------------------//
//                                       PRACTICE                                       //
//--------------------------------------------------------------------------------------//


//                   Create an array of even numbers from 0 to 100                    //
console.log("\n\n\n\nCreate an array of even numbers from 0 to 100");

const evenArr = [];
for(let i=0;i<=100;i+=2){
    evenArr.push(i);
}
console.log(evenArr);

//                  WAP to print array of prime numbers from 1 to 100                   //
console.log("\n\n\n\nWAP to print array of prime numbers from 1 to 100");

const primeArr = [];
for(let i=2;i<=100;i++){
    let count=0;
    for(let j =1;j<=i;j++){
        if(i%j==0){
            count++;
        }
    }
    if(count==2){
        primeArr.push(i);
    }
}
console.log(primeArr);



//                      WAP to remove duplicate values from array.                      //
console.log("\n\n\n\nWAP to remove duplicate values from array.");



const givenArr = [1,2,3,4,5,1,4,12];
let checkArr = [];

// for(let i=0;i<givenArr.length;i++){
//     if(checkArr.includes(givenArr[i])){
//         continue;
//     }
//     else{
//         checkArr.push(givenArr[i]);
//     }
// }
// console.log(checkArr);


for(let i=0;i<givenArr.length;i++){
    if(!checkArr.includes(givenArr[i])){
        checkArr.push(givenArr[i]);
    }
}
console.log(checkArr);


//                          WAP to print count of 10 in array                           //
console.log("\n\n\n\nWAP to print count of 10 in array");


const sampleArr = [10,20,1,15,30,10];
let sampleNum = 10;
// let sampleNum = prompt("enter");
let count =0;
for(let i = 0;i<sampleArr.length;i++){
    if(sampleArr[i]==sampleNum){
        count++;
    }
}
console.log(count);

//                      WAP to find the largest number in an array                      //
console.log("\n\n\n\nWAP to find the largest number in an array");

const sampleArr2 = [10,5,30,7,22];
let largest = sampleArr2[0];
for(let i=1;i<sampleArr2.length;i++){
    if(sampleArr2[i]>largest){
        largest=sampleArr2[i];
    }
}
console.log(largest);



//                 WAP to print Square of even Numbers from given array                 //
console.log("\n\n\n\nWAP to print Square of even Numbers from given array");


const arr5 = [1,2,3,4,5,6,7,8,9,10];
const arr6 =[];
for(let i=0;i<arr5.length;i++){
    if(arr5[i]%2==0){
        arr6.push(arr5[i]*arr5[i]);
        console.log(arr5[i]**2);
    }
}
console.log(arr6);

//OR

const arr8 = arr5.filter((n)=>n%2==0).map((n)=>n**2);
console.log(arr8);
