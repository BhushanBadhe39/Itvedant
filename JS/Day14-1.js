//--------------------------------------------------------------------------------------//
//                                                                                      //
//                                         DOM                                          //
//                                                                                      //
//--------------------------------------------------------------------------------------//


//--------------------------------------------------------------------------------------//
//                                ACESSING ELEMENTS....                                 //
//--------------------------------------------------------------------------------------//

//                                        By ID                                         //
let head1 = document.getElementById("head1");
console.log(head1);
console.log(head1.textContent);

//                                        By Tag                                        //
let para1 = document.getElementsByTagName("p");
console.log(para1);
console.log(para1[0].textContent);

//                                       By Class                                       //
let paragraph = document.getElementsByClassName("paragraph");
console.log(paragraph);
console.log(paragraph[0].textContent);

//                                       By selection                                   //

function displaySelection(){
    let selected = document.getSelection();
    console.log(selected.toString());
}

