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
  

//--------------------------------------------------------------------------------------//
//                                       PRACTICE                                       //
//--------------------------------------------------------------------------------------//

arr1.unshift("hii!");
console.log(arr1);


//                   Create an array of even numbers from 0 to 100                    //
console.log("\n\n\n\nCreate an array of even numbers from 0 to 100");

let evenArr = [];
for(let i=0;i<=100;i+=2){
    evenArr.push(i);
}
console.log(evenArr);

//                  WAP to print array of prime numbers from 1 to 100                   //
console.log("\n\n\n\nWAP to print array of prime numbers from 1 to 100");

let primeArr = [];
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





let primeArr2 = [];

for(let i = 2;i<=100;i++){
    let count = 0;
    for(let j =0;j<=i;j++){
        if(i%j==0){
            count++;
        }
    }
    if(count==2){
        primeArr2.push(i);
    }
}
console.log(primeArr2);