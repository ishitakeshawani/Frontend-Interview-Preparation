import "./styles.css";
import Q6 from "./Q6";
import Q7Q8Q9 from "./Q7-Q8-Q9";
import Q11 from "./Q11";
import Q1 from "./Q1";
import Q2 from "./Q2";
import Q3 from "./Q3";
import Q4 from "./Q4";
import Q14 from "./Q14";
import Q16 from "./Q16";
import Q17 from "./Q17";

export default function App() {
  return (
    <div className="App">
      <h3>welcome to neog camp practice questions</h3>
      Create a web app with a button loded. Show a text loading... on a web app.
      However, hide it if I click on the button loaded.
      <Q6 />
      Here's an API. Create a web app to call this API with your full name and
      print the response. This could be extended where we ask you to do
      something with the response. Like add a text, or capitalise etc.
      <br />
      <br />
      <Q7Q8Q9 />
      Create a password checker web app. If password is lesser than 10
      characters then show an error to user otherwise show success. Someone can
      ask to make the submit button disabled. Some can ask to make the input
      field green or red depending on input.
      <br />
      <br />
      <Q11 />
      <br />
      <br />
      Create two objects with name, age, and yuga as Ram, 25, Treta. Krishna, 31, Dwapar. Write a function which takes two objects and return the person with more age.
      <Q14 />
      <br />
      <br />
      Create two objects with name, age, and power as Ram, 2500, Treta. Krishna, 2325, Dwapar. Say if every character in name is worth 35 power points.
      Write a function which takes two objects and return the person with more power based on their name and power both.
      <Q16 />
      <br />
      <br />
      Create a web app which would take two inputs.
      It would also have 4 buttons: +, -, x /.
      Based on the button clicked perform the operation on the two inputs.
      You can do this in React or vanillaJS based on your choice.
      Your time starts now.
      <br />
      <br />
      <Q1 />
      <br />
      <br />
      Create a CLI app which would detect fake news. This app will take news as input and then source.If source is Facebook or whatsapp then it will output user saying, "Don't believe things on FB and Whatsapp". Can you extend this to include telegram as well?
      <br />
      <br />
      <Q17 />
      <br />
      <br />
      Create a web app where I can input a text. Now create two buttons + and -. On clicking + increase the fontSize by 2px and vice versa.
      <br />
      <br />
      <Q2 />
      <br />
      <br />
      Create a web app where I can input a text. Now, create three buttons h1, h2, h3. When I click on any of the button, the text should become h1, h2, or h3.
      <br /><br />
      <Q3 />
      <br /><br />
      Create a web app where I can input a text. Now, create three buttons: red, green, blue. Clicking on the button should change the text color.
      <br /><br />
      <Q4 />
      <br /><br />
      Create a CLI app which takes name, unit test marks, pre final marks, final marks of 5 students. And then print who has the highest marks. What if I ask you to print the average as well?
    </div>
  );
}
