import "./styles.css";
import Btn from "./btn";
import Api from "./Api";
import Password from "./Password";
import Q1 from "./Q1";
import Q2 from "./Q2";

export default function App() {
  return (
    <div className="App">
      <h3>welcome to neog camp practice questions</h3>
      Create a web app with a button loded. Show a text loading... on a web app.
      However, hide it if I click on the button loaded.
      <Btn />
      Here's an API. Create a web app to call this API with your full name and
      print the response. This could be extended where we ask you to do
      something with the response. Like add a text, or capitalise etc.
      <br />
      <br />
      <Api />
      Create a password checker web app. If password is lesser than 10
      characters then show an error to user otherwise show success. Someone can
      ask to make the submit button disabled. Some can ask to make the input
      field green or red depending on input.
      <br />
      <br />
      <Password />
      <br />
      <br />
      Create a web app which would take two inputs.
      It would also have 4 buttons: +, -, x /.
      Based on the button clicked perform the operation on the two inputs.
      You can do this in React or vanillaJS based on your choice.
      Your time starts now.
      <Q1 />
      <br />
      <br />
      Create a web app where I can input a text. Now create two buttons + and -. On clicking + increase the fontSize by 2px and vice versa.
      <br />
      <br />
      <Q2 />
      <br />
      <br />
      
    </div>
  );
}
