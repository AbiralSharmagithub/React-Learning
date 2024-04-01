import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("Enter text here");
  const handleChange = (event) => {
    setText(event.target.value);
  };
  const handleClick = () => {
    setText(text.toUpperCase());
  };
  return (
    <>
      <h1> {props.heading}</h1>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          Example textarea
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="10"
          value={text}
          onChange={handleChange}
        ></textarea>
        <button className="convert" onClick={handleClick}>
          Convert To UpperCase
        </button>
      </div>
    </>
  );
}
