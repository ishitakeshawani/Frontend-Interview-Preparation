var read = require("readline-sync");

var box = [];

function takeinput() {
  var username = read.question("What is your name?   \n");

  var testmark = read.question("Enter unit test mark:  \n");

  var prefinalmark = read.question("Enter prefinalmark:  \n");

  var finalmark = read.question("Enter final marks:  \n");

  box.push({
    username: username,
    testmark: testmark,
    prefinalmark: prefinalmark,
    finalmark: finalmark,
  });
}

for (var i = 0; i < 2; i++) {
  takeinput();
}

const ans = sum() / 2;
function sum() {
  let s = 0;
  for (let i = 0; i < 2; i++) {
    s = s + Number(box[i].finalmark);
  }
  return s;
}

const post = box.sort(function (a, b) {
  return a.finalmark - b.finalmark;
});

console.log(post[0].username);
