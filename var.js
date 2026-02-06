// Declare Type and Value in a Single Statement
var sname = "Alice";
console.log(sname);
var sage = 30;
console.log(sage);
// Declare Type Without Value
var schoolname = "Greenwood High";
console.log(schoolname);
// 1. var
// var is function-scoped and can lead
//  to unexpected behavior due to hoisting. 
//  It’s accessible throughout the function in which it’s declared but has function-level scoping.
function varexample() {
    var mynam = "my name is samuel chege wangudu";
    console.log(mynam);
}
varexample();
// 2. let
// let is block-scoped, meaning it’s only accessible within the block it’s declared in. 
// It helps prevent issues related to variable hoisting and is generally preferred for variable declarations.   
var count = 5;
if (count > 0) {
    var message = "Count is positive";
    console.log(message);
}
// 3. const
// Similar to let in terms of scoping,
//  const is used for variables that should not be reassigned after their initial value.
//  Attempting to reassign 
// a const variable results in a compile-time error.
var country = "kenya";
console.log(country);
var jina = "ann karimi";
var myage = 22;
var active = true;
function displayinfo(name, age) {
    return "my name is ".concat(name, " and my age is ").concat(age);
}
var greeting = displayinfo(jina, myage);
console.log(greeting);
// local scodpe
function localScopeExample() {
    var localVar = "I am local";
    console.log(localVar); // Accessible here
}
localScopeExample();
var globalVar = "I am global";
function accessibleglobal() {
    console.log("i am global var " + globalVar);
}
accessibleglobal();
// 3. Class Scope
// Variables declared within a class are accessible to all members (methods) of that class.
// class employee{
// salary:number=6000;
// }
function sayHi() {
    console.log("Hi");
}
var result = sayHi();
sayHi();
console.log(result); // undefined because the function does not return anything
var username = "adjan";
var age = 3;
var isactive = true;
function greetuser(name, age) {
    return (" hello ".concat(name, " my age is ").concat(age));
}
var greetingd = greetuser(username, age);
console.log(greetingd);
var employee = /** @class */ (function () {
    function employee() {
        this.salary = 5000;
    }
    employee.prototype.printsalary = function () {
        console.log("salary is ".concat(this.salary));
    };
    return employee;
}());
var empp = new employee();
empp.printsalary();
var Globalvar = 10;
var Geeks = /** @class */ (function () {
    function Geeks() {
        this.classvar = 12;
    }
    Geeks.prototype.assignnum = function () {
        var localvar = 13;
        console.log('local variable' + localvar);
    };
    return Geeks;
}());
console.log('global var' + globalVar);
var obj = new Geeks();
obj.assignnum();
