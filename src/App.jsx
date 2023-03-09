import { useState } from "react";
import "./App.css";
import Header from "./components/Header/header"
import Home from "./components/Home/Home"
function App() {
  return <div className="App">

   <Header/>

   <main className="main">
    <Home></Home>
   </main>

    </div>;
}

export default App;
