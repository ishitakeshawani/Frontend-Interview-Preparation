// Create a CLI app which takes name, unit test marks, pre final marks, final marks of 5 students. And then print who has the highest marks.


var readlineSync = require("readline-sync");

//store information of students in it
var con = [];

//function for taking input values of students
function takevalue(){

var name = readlineSync.question("enter your name \n");

var unitTestMark = readlineSync.question("enter test mark \n");

var preFinalMarks = readlineSync.question("enter pre final marks \n");

var finalMarks = readlineSync.question("enter final marks \n");

con.push({
  name:name,
  unitTestMark:unitTestMark,
  preFinalMarks:preFinalMarks,
  finalMarks:finalMarks});

}

for(let i=0;i<2;i++){
  takevalue(); //calling function
}

const TotalValues = []; // storing total marks of every students

//function for adding total of students mark in s
function sum(){

for(let i=0;i<2;i++){
  let total=0;
  total = total+Number(con[i].unitTestMark)+Number(con[i].preFinalMarks)+Number(con[i].finalMarks);
  TotalValues.push({name:con[i].name,
  marks:total});
}

}

sum();
console.log(TotalValues);
//sorting TotalValues to get the name of student who have highest marks 

const res = TotalValues.sort(function (a, b) {
  return Number(b.marks) - Number(a.marks);
});
console.log(res[0].name)
