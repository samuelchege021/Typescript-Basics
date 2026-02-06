// Declare Type and Value in a Single Statement



let sname:string = "Alice";
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





// 3. const
// Similar to let in terms of scoping,
//  const is used for variables that should not be reassigned after their initial value.
//  Attempting to reassign 
// a const variable results in a compile-time error.
const country= "kenya";   

console.log(country);


let jina :string="ann karimi";
let myage:number=22;

let active:boolean=true;

function displayinfo(name:string,age:number):string {


    return `my name is ${name} and my age is ${age}`;
}




let greeting =displayinfo(jina,myage);

console.log(greeting);




// local scodpe




function localScopeExample() {
    let localVar = "I am local";
    console.log(localVar); // Accessible here
  }

  localScopeExample();



  let globalVar = "I am global";



function accessibleglobal(){

    console.log("i am global var "+ globalVar);
}

accessibleglobal();




// 3. Class Scope
// Variables declared within a class are accessible to all members (methods) of that class.



// class employee{

// salary:number=6000;

      
// }


function sayHi(): void {
    console.log("Hi");
}
let result=sayHi();
sayHi()
console.log(result); // undefined because the function does not return anything





let username:string="adjan";
let age:number=3;
let isactive:Boolean=true;




function greetuser(name:string,age:number):string{


return (` hello ${name} my age is ${age}`);





}
  let greetingd= greetuser(username,age)
  console.log(greetingd)









  class employee{


    salary:number=5000


    printsalary():void{


        console.log(`salary is ${this.salary}`)


    }







  }




const empp=new employee()
empp.printsalary()






let Globalvar:number=10


class Geeks{


private classvar:number=12


assignnum():void{


let localvar:number=13;

console.log('local variable'+localvar)



}





}




console.log('global var'+globalVar)


const obj=new Geeks();
obj.assignnum();