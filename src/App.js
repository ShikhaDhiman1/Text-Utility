import "./App.css";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");

  function handleMode() {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "khaki";
    }
  }
  return (
    <>
      <Navbar
        title="MyReactApp"
        head1="About"
        head2="Contact"
        dropdown="Activities"
        id="body"
        mode={mode}
      />
      <br />
      <div className="container" id="body">
        <center>
          <TextArea
            title="Enter the text"
            id="textArea"
            mode={mode}
            handleMode={handleMode}
          />
        </center>
      </div>
    </>
  );
}

export default App;
