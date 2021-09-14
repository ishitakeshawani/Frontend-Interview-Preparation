import "./styles.css";
import Btn from "./btn";
import Api from "./Api";
import Password from "./Password";

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
    </div>
  );
}
