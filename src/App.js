// import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  function handleMode() {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.title = "Text-Util-Dark Mode";
      setAlert({
        mssg: "  Dark   Mode   Enabled!",
        type: "danger",
      });
    } else {
      setMode("light");
      document.body.style.backgroundColor = "khaki";
      document.title = "Text-Util-Light Mode";
      setAlert({
        mssg: "  Light   Mode   Enabled!",
        type: "success",
      });
    }
  }
  return (
    <>
      <Router>
        <Navbar
          title="MyReactApp"
          head1="About"
          head2="Contact"
          dropdown="Activities"
          id="body"
          mode={mode}
          handleMode={handleMode}
          alert={alert}
        />
        <br />
        <div className="container-fluid">
          <Alert alert={alert}></Alert>
        </div>
        <br />
        <Routes>
          <Route exact path="/about" element={<About />}></Route>
          <Route
            exact
            path="/"
            element={
              <TextArea title="Enter the text" id="textArea" mode={mode} />
            }
          ></Route>
        </Routes>
        {/* <div className="container" id="body">
          <center>
            <TextArea title="Enter the text" id="textArea" mode={mode} />
          </center>
        </div>
        <div className="container">
          <center>
            <About />
          </center>
        </div> */}
      </Router>
    </>
  );
}

export default App;
