var teacher = "Kyle";

function otherClass() {
  var teacher = "suzy"; // in seperate scope than global scope, hence different than var teacher in global scope
  console.log("Welcome!");
}

function ask() {
  var question = "Why?";
  console.log(question);
}

otherClass();
ask();

//lexical scopes are decided at compile time, not run time (it is used in run time).


function teacher() { return }

var myTeacher = function anotherTeacher() {
  console.log(anotherTeacher)
}

console.log(teacher)
console.log(myTeacher)
// console.log(anotherTeacher) //Reference Error

var Ateacher = 'Kyle';
otherTeacher();
console.log(Ateacher)

function otherTeacher(){
  console.log(Ateacher) // becase of the two pass system, var Ateacher is declared in the first pass, hence it is undefined on first console.log ****
  var Ateacher = "Suzy";
  console.log(Ateacher)
}