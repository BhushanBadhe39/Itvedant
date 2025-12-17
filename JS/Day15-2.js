const dataArr = [];

let dataTable = document.getElementById("data-table");

function displayForm() {
    let fName = document.getElementById("fName");
    let email = document.getElementById("email");
    let pass = document.getElementById("pass");
    let dob = document.getElementById("dob");

    dataArr.push([fName,email,dob]);
    console.log(fName.value);
    console.log(email.value);
    console.log(pass.value);
    console.log(dob.value);
    
    docum
    for(let i=0;i<dataArr.length;i++){
        document.append("")
    }
}

function formFunc(event) {
    event.preventDefault();
    console.log("Form Submitted...");
    
}