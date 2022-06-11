// Implement debounce function
// CSB link: https://codesandbox.io/s/infallible-night-iq35em?file=/src/index.js
import "./styles.css";

let text = document.querySelector("#text");

let getValue = (text) => {
  console.log(text);
};

let debounce = (cb) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => cb.apply(this, args), 1000);
  };
};

let func = debounce(getValue);
text.addEventListener("keyup", (e) => func(e.target.value));
