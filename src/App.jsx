import { useState } from "react";
import "./App.css";
import Header from "./components/Header/header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Qualification from "./components/Qualification/Qualification";
function App() {
  return (
    <div className="App">
      <Header />

      <main className="main">
        <Home />
        <About />
        <Skills />
        <Qualification />
      </main>
    </div>
  );
}

export default App;
