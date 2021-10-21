// Create a CLI app which would detect fake news. This app will take news as input and then source.

// If source is Facebook or whatsapp then it will output user saying, "Don't believe things on FB and Whatsapp". Can you extend this to include telegram as well?

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
