import React, { useState } from "react";
// import $ from 'jquery';

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

  const changeColor = () => {
    const textCol = document.getElementsByClassName("text-color");
    for (let i = 0; i < textCol.length; i++) {
      textCol[i].addEventListener("click", () => {
        document.getElementById("textHere").style.color = ""+
          textCol[i].textContent.toLowerCase() + "";
      });
    }
  };
  
//   const colors = document.querySelectorAll("[id = 'text-colr']");
//   for (let i = 0; i < colors.length; i++) {
//       colors[i].addEventListener("click", () => {
//         console.log("clicked")
//         document.getElementById("textHere").style.color = ""+
//           colors[i].textContent.toLowerCase() + "";
//   });
// }

  // const changeColr = ()=>{
  //   // console.log("Color");
  //   // console.log($(this));
  //   // const colr = $(this).textContent.toLowerCase();
  //   // document.getElementById("textHere").style.color = colr;
  //   const colors = document.querySelectorAll("[id = 'text-colr']");
  //   console.log(colors);
  // //   for (let i = 0; i < textCol.length; i++) {
  // //     textCol[i].addEventListener("click", () => {
  // //       document.getElementById("textHere").style.color = ""+
  // //         textCol[i].textContent.toLowerCase() + "";
  // //   });
  // // }
  // };

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
      <div className="container">
        <center>
          <div style={{ color: props.mode === "light" ? "black" : "white" }}>
            <label htmlFor="textHere" id="label" className={`form-label `}>
              <h1>Enter your text here</h1>
            </label>
            <textarea
              className={`form-control mb-5 bg-${props.mode} 
          }`}
              style={{ color: props.mode === "light" ? "black" : "white" }}
              id="textHere"
              rows="8"
              value={text}
              onChange={textAreaChange}
            ></textarea>
            <div className="d-flex  flex-wrap justify-content-center">
              <button
                className={`btn btn-primary mx-4 my-3 px-5 py-2 ${
                  props.mode === "light" ? "" : "btn-primary-light"
                }`}
                id="btn-upper"
                onClick={upper}
              >
                To Upper Case
              </button>
              <button
                className={`btn btn-primary mx-4 my-3 px-5 py-2 ${
                  props.mode === "light" ? "" : "btn-primary-light"
                }`}
                id="btn-lower"
                onClick={lower}
              >
                To Lower Case
              </button>
            </div>
            <div className="d-flex  flex-wrap justify-content-center">
              <button
                className={`btn btn-primary mx-4 my-3 px-5 py-2 ${
                  props.mode === "light" ? "" : "btn-primary-light"
                } text-color`}
                // id="text-colr"
                onMouseOver={changeColor}
              >
                Red
              </button>
              <button
                className={`btn btn-primary mx-4 my-3 px-5 py-2 ${
                  props.mode === "light" ? "" : "btn-primary-light"
                } text-color`}
                onMouseOver={changeColor}
                // id="text-colr"
                // onClick={document.getElementById("textHere").style.color = this.textContent.toLowerCase()}
              >
                Green
              </button>
              <button
                className={`btn btn-primary mx-4 my-3 px-5 py-2 ${
                  props.mode === "light" ? "" : "btn-primary-light"
                } text-color`}
                // id="text-colr"
                onMouseOver={changeColor}
              >
                Blue
              </button>
            </div>
            <div className="d-flex flex-wrap justify-content-center">
              <button
                className={`btn btn-primary mx-4 my-3 px-5 py-2 ${
                  props.mode === "light" ? "" : "btn-primary-light"
                } font-family`}
                onMouseOver={fontFamily}
              >
                Monospace
              </button>
              <button
                className={`btn btn-primary mx-4 my-3 px-5 py-2 ${
                  props.mode === "light" ? "" : "btn-primary-light"
                } font-family`}
                onMouseOver={fontFamily}
              >
                Fantasy
              </button>
              <button
                className={`btn btn-primary mx-4 my-3 px-5 py-2 ${
                  props.mode === "light" ? "" : "btn-primary-light"
                } font-family`}
                onMouseOver={fontFamily}
              >
                Cursive
              </button>
            </div>
            <div className="d-flex flex-wrap justify-content-center">
              <button
                className={`btn btn-primary mx-4 my-3 px-5 py-2 ${
                  props.mode === "light" ? "" : "btn-primary-light"
                } font-size`}
                onMouseOver={fontSize}
              >
                15px
              </button>
              <button
                className={`btn btn-primary mx-4 my-3 px-5 py-2 ${
                  props.mode === "light" ? "" : "btn-primary-light"
                } font-size`}
                onMouseOver={fontSize}
              >
                20px
              </button>
              <button
                className={`btn btn-primary mx-4 my-3 px-5 py-2 ${
                  props.mode === "light" ? "" : "btn-primary-light"
                } font-size`}
                onMouseOver={fontSize}
              >
                25px
              </button>
            </div>
            <div className="d-flex flex-wrap justify-content-center">
              <button
                className={`btn btn-primary mx-4 my-3 px-5 py-2 ${
                  props.mode === "light" ? "" : "btn-primary-light"
                }`}
                id="copy"
                onClick={copyText}
              >
                Copy Text
              </button>
              <button
                className={`btn btn-primary mx-4 my-3 px-5 py-2 ${
                  props.mode === "light" ? "" : "btn-primary-light"
                }`}
                id="paste"
                onClick={pasteText}
              >
                Paste Text
              </button>
              <button
                className={`btn btn-primary mx-4 my-3 px-5 py-2 ${
                  props.mode === "light" ? "" : "btn-primary-light"
                }`}
                id="clrText"
                onClick={clearText}
              >
                Clear Text
              </button>
            </div>
            <div className="d-flex flex-wrap justify-content-center">
              <button
                className={`btn btn-primary mx-4 my-3 px-5 py-2 ${
                  props.mode === "light" ? "" : "btn-primary-light"
                }`}
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
                  <b>{text.length - (text.split(" ").length - 1)}</b>{" "}
                  characters( excluding white spaces). <br />
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
                  &nbsp;&nbsp;&nbsp;&nbsp; -&gt; Time taken to read given{" "}
                  {words(text)} word(s) is/are
                  {(0.4 / 125) * text.split(" ").length} minute(s).
                </li>
                <li>
                  <b>Preview :</b>
                  <br />
                  <p className="previewText mt-4">
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    {text === "" ? "Enter text to preview it" : text}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </center>
      </div>
    </>
  );
}
