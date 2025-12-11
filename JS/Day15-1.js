//--------------------------------------------------------------------------------------//
//                                   ONCLICK/ONKEYUP                                    //
//--------------------------------------------------------------------------------------//


function myFun() {
    let fname = document.getElementById("fullName");
    let email = document.getElementById("email");
    let pass = document.getElementById("pass");
    console.log(fname);
    console.log(fname.value);
    console.log(email.value);
    console.log(pass.value);
    
}


//--------------------------------------------------------------------------------------//
//                                   AddEventListener                                   //
//--------------------------------------------------------------------------------------//


let btn1 = document.getElementById("btn1");
btn1.addEventListener("click",()=>{
    alert("Button Clicked");
});



//--------------------------------------------------------------------------------------//
//                                      CSS EDITS                                       //
//--------------------------------------------------------------------------------------//


let head1 = document.getElementById("head1");
head1.textContent = "Event Handling";

let head2 = document.getElementById("head2");
head2.textContent = "WELCOME";

let btn2 = document.getElementById("btn2");
btn2.addEventListener("click",()=>{
    head1.style.color = "blue";
});