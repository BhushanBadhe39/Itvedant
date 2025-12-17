
const userForm = document.getElementById('user-form');
const subBtn = document.getElementById('submit-btn');

userForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const firstName = document.getElementById("firstName").value
    console.log(firstName);
    const age = document.getElementById("age").value
    console.log(age);
    const email = document.getElementById("Email").value
    console.log(email);
    const tableBody = document.getElementById('table-body');
    const row = document.createElement('tr')
    row.innerHTML = `
    <td>${firstName}</td>
    <td>${age}</td>
    <td>${email}</td>
    `
    tableBody.appendChild(row);
    userForm.reset();
})