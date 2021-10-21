var readlineSync = require("readline-sync");

var news = readlineSync.question("what is the news? \n");
var source = readlineSync.question("what is the source of the news?  \n");

if (
  source.toUpperCase() === "facebook".toUpperCase() ||
  source.toUpperCase() === "whatsapp".toUpperCase() ||
  source.toUpperCase() === "telegram".toUpperCase()
) {
  console.log(`this ${news} is fake`);
} else {
  console.log("you can read it.. tada");
}
