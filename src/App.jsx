import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import SignIn from "./pages/SignIn";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/SignIn" element={<SignIn/>} />
    </Routes> 
  )
}

export default App;