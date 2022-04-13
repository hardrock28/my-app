import About from "./components/About";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Textform from "./components/TextForm";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#113037";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      {/* <Navbar title="HarishUtils" /> */}
      {/* <Navbar title="HarishUtils" aboutText="About Us" /> */}

      <BrowserRouter>
        <Navbar mode={mode} toggleMode={toggleMode} />

        <Routes>
          <Route exact path="/about" element={<About />} />
        </Routes>
        <Routes>
          <Route
            exact
            path="/"
            element={<Textform heading="Enter the text below" mode={mode} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
