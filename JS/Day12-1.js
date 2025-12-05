//--------------------------------------------------------------------------------------//
//                                                                                      //
//                                       OBJECTS                                        //
//                                                                                      //
//--------------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------------//
//                       Object is a collection key-value pairs.                        //
//--------------------------------------------------------------------------------------//



//                            We can Define Object using...                             //

    // 1. Curly Bracket
    
    let student = {name:"Bhushan",age:20,roll:101};
    console.log(student);
    console.log(typeof(student));
    console.log(student.name);
    
    // 2. Object Constructor

    const person = new Object();
    person.name = "Prathamesh";
    person.mobile = [1234,7498600952];
    person.address = {city:"Pune",state: "Maharashtra"};
    console.log(person);

    person.sayHello = function (){      // WE CAN ALSO USE A FUNCTION AS A VALUE
        console.log("Hello World");
    }
    person.sayHello();
    console.log(person);            // BUT THE FUNCTION WON'T RUN THROUGH THIS UNLESS CALLED SPECIFICALLY LIKE ABOVE
    



//                                  Accessing Objects                                   //
console.log("\n\n\n\n\n\n\n\n\n\n");


    // i. Using Key name
    console.log(student.name);
    console.log(student.age);
    console.log(student.roll);
    
    // ii. Using Double or single quotes in sq. braces
    console.log(student["name"]);
    console.log(student['age']);
    
    // iii. For in Loop

    for (const key in person) {
        console.log(key);
        console.log(person[key]);
    }


//                        Built-in Methods/Commands for objects                        //
console.log("\n\n\n\n\n\n\n\n\n");


// Update values

student.name = "Shri"
student['roll'] = 12
console.log(student);


// Delete key-value pair

delete student.roll;
console.log(student);


// Delete Object

student = null;
console.log(student);


// Keys ---> Returns array of all keys in an object

console.log(Object.keys(person));


// Values ---> Returns array of all values in an object

console.log(Object.values(person));


// Entries ---> returns array of key-value pairs from an object

console.log(Object.entries(person));


// For of Loop

for (const element of Object.keys(person)) {
    console.log(element);
    
}





//--------------------------------------------------------------------------------------//
//                                                                                      //
//                                       Practice                                       //
//                                                                                      //
//--------------------------------------------------------------------------------------//
console.log("\n\n\n\n\n\n\n\n\n\n\n\n");



let l_details = new Object();
l_details.name = "Bhushan";
l_details.batch = "P-221";
l_details.html = 82;
l_details.css = 78;
l_details.javascript = 93;
console.log(l_details);

//                              WAP to print avg of marks                               //

l_details.total = l_details.html+l_details.css+l_details.javascript;
l_details.avg = parseInt(l_details.total/3);
console.log(l_details.avg+" is the Average marks attained by "+ l_details.name+" from batch "+l_details.batch);
console.log(l_details);

