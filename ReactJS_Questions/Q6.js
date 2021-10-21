// Here's an API. Create a web app to call this API with your full name and print the response. This could be extended where we ask you to do something with the response. Like add a text, or capitalise etc.
import { React, useState } from "react";

const Q6 = () => {
  const [text, settext] = useState("");
  const [out, setout] = useState("");

  const erhandler = (error) => {
    alert(error.status);
    if (error.status === 404) {
      console.log("page not found");
    }
    if (error.status === 401) {
      console.log("not loged in");
    }
    console.log(error.status);
  };

  const URL = "https://api.funtranslations.com/translate/ferb-latin.json";

  const getTranslationUrl = () => {
    let ans = `${URL}?text=${text}`;
    return ans;
  };

  const fetchApi = () => {
    console.log("hi");
    fetch(getTranslationUrl(URL))
      .then((res) => res.json())
      .then((json) => {
        setout(json.contents.translated);
        console.log(json);
      })
      .catch(erhandler);
  };

  return (
    <div>
      <input onChange={(e) => settext(e.target.value)} />
      <p>{out}</p>
      <button onClick={fetchApi}>fetch</button>
      <br />
      <br />
    </div>
  );
};

export default Q6;
