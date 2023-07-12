import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./routes/Home";
import WorkPage from "./routes/Work";
import AboutPage from "./routes/About";
import ContactPage from "./routes/Contact";


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/work" element={<WorkPage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
    </Routes>
  );
}

export default App;

