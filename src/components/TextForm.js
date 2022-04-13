import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handClClClick = () => {
    console.log("Lowercase was clicked" + text);
    let newText = "";
    setText(newText);
  };
  // const handleCapClick = (newText) => {
  //   console.log("Lowercase was clicked" + text);
  //   // let newText = text.toLowerCase();
  //   return text.charAt(0).toUpperCase() + newText.slice(1);
  // };
  const handleOnChange = (event) => {
    console.log("HandleOnChange was clicked");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            id="Mybox"
            rows="8"
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>{" "}
        <button className="btn btn-primary mx-1" onClick={handClClClick}>
          Clear
        </button>
        {/* <button className="btn btn-primary mx-3" onClick={handleCapClick}>
          Convert to Capitalize
        </button> */}
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Content Summary</h2>
        <p>
          {text.split(" ").length} Words and {text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2> Preview Text</h2>
        <p>{text.length > 0 ? text : "Please enter text in above text area"}</p>
      </div>
    </>
  );
}
