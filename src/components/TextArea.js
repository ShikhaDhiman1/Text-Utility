import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextArea(props) {
  const [text, setText] = useState("Enter text");
  // const [mystyle, setStyle] = useState({
  //   color: "black",
  //   backgroundColor:"white"
  // });
  console.log(text);

  const textAreaChange = (event) => {
    console.log("On Change!");
    setText(event.target.value);
  };

  const upper = () => {
    setText(text.toUpperCase());
  };
  const lower = () => {
    setText(text.toLowerCase());
  };

  const color = () => {
    const textCol = document.getElementsByClassName("text-color");
    for (let i = 0; i < textCol.length; i++) {
      textCol[i].addEventListener("click", () => {
        document.getElementById("textHere").style.color =
          textCol[i].textContent.toLowerCase() + "";
      });
    }
  };
  const fontFamily = () => {
    const fontFam = document.getElementsByClassName("font-family");
    for (let i = 0; i < fontFam.length; i++) {
      fontFam[i].addEventListener("click", () => {
        document.getElementById("textHere").style.fontFamily =
          fontFam[i].textContent.toLowerCase() + "";
      });
    }
  };
  const fontSize = () => {
    const font = document.getElementsByClassName("font-size");
    for (let i = 0; i < font.length; i++) {
      font[i].addEventListener("click", () => {
        document.getElementById("textHere").style.fontSize =
          font[i].textContent.toLowerCase() + "";
      });
    }
  };

  const clearText = () => {
    setText("");
  };

  const copyText = () => {
    const tfieldText = document.getElementById("textHere");
    tfieldText.select();
    navigator.clipboard.writeText(tfieldText.value);
    alert(`Copied Text is : ${tfieldText.value}`);
  };

  const pasteText = () => {
    navigator.clipboard.readText().then((copiedText) => {
      setText(text + " " + copiedText);
    });
  };

  const removeExtraSpace = () => {
    let newText = "";
    let arr = text.split(" ");
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "") {
        newText += arr[i];
      } else {
        newText += arr[i] + " ";
      }
    }
    newText = newText.trim();
    setText(newText);
  };

  const words = (text) => {
    if (text.split(" ")[text.split(" ").length - 1] === "") {
      return text.split(" ").length - 1;
    } else if (text.split(" ")[text.split(" ").length - 1] !== "") {
      console.log("Else!");
      return text.split(" ").length;
    }
  };
  return (
    <>
      <div>
        <label
          htmlFor="textHere"
          id="label"
          className={`form-label text-${
            props.mode === "light" ? "dark" : "white"
          }`}
        >
          <h1>Enter your text here</h1>
        </label>
        <textarea
          className={`form-control mb-5 bg-${props.mode} text-${
            props.mode === "light" ? "dark" : "white"
          }`}
          id="textHere"
          rows="8"
          value={text}
          onChange={textAreaChange}
        ></textarea>
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-primary mx-4 my-3 px-5 py-2"
            id="btn-upper"
            onClick={upper}
          >
            To Upper Case
          </button>
          <button
            className="btn btn-primary mx-4 my-3 px-5 py-2"
            id="btn-lower"
            onClick={lower}
          >
            To Lower Case
          </button>
        </div>
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-primary mx-3 my-3 px-5 py-2 text-color"
            id="colr"
            onMouseOver={color}
          >
            Red
          </button>
          <button
            className="btn btn-primary mx-3 my-3 px-5 py-2 text-color"
            id="colr"
            onMouseOver={color}
          >
            Green
          </button>
          <button
            className="btn btn-primary mx-3 my-3 px-5 py-2 text-color"
            id="colr"
            onMouseOver={color}
          >
            Blue
          </button>
        </div>
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-primary mx-3 my-3 px-5 py-2 font-family"
            onMouseOver={fontFamily}
          >
            Monospace
          </button>
          <button
            className="btn btn-primary mx-3 my-3 px-5 py-2 font-family"
            onMouseOver={fontFamily}
          >
            Fantasy
          </button>
          <button
            className="btn btn-primary mx-3 my-3 px-5 py-2 font-family"
            onMouseOver={fontFamily}
          >
            Cursive
          </button>
        </div>
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-primary mx-3 my-3 px-5 py-2 font-size"
            onMouseOver={fontSize}
          >
            15px
          </button>
          <button
            className="btn btn-primary mx-3 my-3 px-5 py-2 font-size"
            onMouseOver={fontSize}
          >
            20px
          </button>
          <button
            className="btn btn-primary mx-3 my-3 px-5 py-2 font-size"
            onMouseOver={fontSize}
          >
            25px
          </button>
        </div>
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-primary py-2 mx-3 my-3 px-5"
            id="dmode"
            onClick={props.handleMode}
          >
            Dark Mode
          </button>
          <button
            className="btn btn-primary py-2 mx-3 my-3 px-5"
            id="lmode"
            onClick={props.handleMode}
          >
            Light Mode
          </button>
        </div>
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-primary mx-3 px-5 my-3 py-2"
            id="copy"
            onClick={copyText}
          >
            Copy Text
          </button>
          <button
            className="btn btn-primary mx-3 px-5 my-3 py-2"
            id="paste"
            onClick={pasteText}
          >
            Paste Text
          </button>
          <button
            className="btn btn-primary py-2 mx-3 my-3 px-5"
            id="clrText"
            onClick={clearText}
          >
            Clear Text
          </button>
        </div>
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-primary mx-3 px-5 my-3 py-2"
            onClick={removeExtraSpace}
          >
            Remove Extra Spaces
          </button>
        </div>
      </div>
      <hr />
      <div className="container my-5">
        <h1 className={`text-${props.mode === "light" ? "dark" : "white"}`}>
          Your text Summary:
        </h1>
        <br />
        <br />
        <div>
          <ul className="summary">
            <li>
              <b>{words(text)}</b> words. <br />
            </li>
            <li>
              <b>{text.length - (text.split(" ").length - 1)}</b> characters(
              excluding white spaces). <br />
            </li>
            <li>
              <b>{text.length}</b> characters( including white spaces).
            </li>
            <li>
              <b>{text.split(". ").length}</b> sentence(s).
            </li>
            <li>
              <b>
                Time taken to read 125 words on an average is approx. 0.4
                minutes.<i> Thus, </i> <br />
              </b>
              &nbsp;&nbsp;&nbsp;&nbsp; Time taken to read given {words(text)}{" "}
              word(s) is/are
              {(0.4 / 125) * text.split(" ").length} minute(s).
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
