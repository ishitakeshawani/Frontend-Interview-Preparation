import { React, useState } from "react";

// Create a web app with a button loded. Show a text loading... on a web app. However, hide it if I click on the button loaded.

const Btn = () => {
  const [show, setshow] = useState(true);
  return (
    <div>
      {show && <p>Loading text</p>}
      <button onClick={() => setshow(!show)}>Loaded</button>
      <br />
      <br />
    </div>
  );
};

export default Btn;
