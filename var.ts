// Declare Type and Value in a Single Statement



let sname: string = "Alice";
console.log(sname);



let sage: number = 30;
console.log(sage);


// Declare Type Without Value


let schoolname="Greenwood High";
console.log(schoolname)

// 1. var
// var is function-scoped and can lead
//  to unexpected behavior due to hoisting. 
//  It’s accessible throughout the function in which it’s declared but has function-level scoping.


function varexample(){

var   mynam= "my name is samuel chege wangudu"

console.log(mynam);



}
varexample();





// 2. let
// let is block-scoped, meaning it’s only accessible within the block it’s declared in. 
// It helps prevent issues related to variable hoisting and is generally preferred for variable declarations.   



let  count = 5;
if (count>0) {

    let message = "Count is positive";  
    console.log(message);
}





