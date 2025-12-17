//--------------------------------------------------------------------------------------//
//                                                                                      //
//                                     FETCH METHOD                                     //
//                                                                                      //
//--------------------------------------------------------------------------------------//

// fetch('https://jsonplaceholder.typicode.com/users/1').then(
//     res=>res.json().then(data=>console.log(data))
// ).catch(err=>console.log("Getting error",err.message))

//here fetch is a promise that runs then or catch depending on promise fulfillment----
//res.json() is a promise too. if fulfilled the data is displayed using 'data'--------


async function getData() {
    console.log("getting...");
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const data = await res.json();
    console.log(data);
}

getData()
