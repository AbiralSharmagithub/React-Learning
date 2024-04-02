import React, { useState } from "react";
export default function Textform(props) {
  const [text, setText] = useState("Enter text here");
  const handleChange = (event) => {
    setText(event.target.value);
  };
  const handleupClick = () => {
    setText(text.toUpperCase());
  };
  const handleloClick = () => {
    setText(text.toLowerCase());
  };
  const handleclearClick = () => {
    setText("");
  };
  const handlecopyClick = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const handleextraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(""));
  };
  return (
    <>
      <h1> {props.heading}</h1>
      <div className="container">
        <label for="exampleFormControlTextarea1" class="form-label">
          Example textarea
        </label>
        <textarea
          class="form-control"
          id="myBox"
          rows="10"
          value={text}
          onChange={handleChange}
        ></textarea>
        <button className="convert" onClick={handleupClick}>
          Convert To UpperCase
        </button>
        <button className="convert" onClick={handleloClick}>
          Convert To LowerCase
        </button>
        <button className="convert" onClick={handleclearClick}>
          Clear Text
        </button>
        <button className="convert" onClick={handlecopyClick}>
          Copy Text
        </button>
        <button className="convert" onClick={handleextraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container">
        <p>
          There are {text.split(" ").length} words and {text.length} characters
          in above paragraph.
        </p>
        <p>
          Time taken to read above paragraph is {0.008 * text.split(" ").length}{" "}
          minutes.
        </p>
      </div>
    </>
  );
}
