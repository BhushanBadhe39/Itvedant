//--------------------------------------------------------------------------------------//
//                                        ASYNC                                         //
//--------------------------------------------------------------------------------------//

// ---- SYNTAX ---------------------------------------------------------------------------
async function myFunc() {
    //code
}

async function func1() {            //Directly returns a promise
    console.log("Hello !");
}
// func1();                            //That means I can Use func1().then().catch() directly


//--------------------------------------------------------------------------------------//
//                                       PRACTICE                                       //
//--------------------------------------------------------------------------------------//
function delay(){
    return new Promise((resolve)=>{
        setTimeout(()=>{resolve(" 5 sec ")},2000)
    }
        
    )
}

async function dataRecieve() {
    console.log("Getting Data...");
    const res = await delay()
    return res;
    
}

dataRecieve().then((res)=>console.log(res)
).catch((err)=>console.log(err)
)