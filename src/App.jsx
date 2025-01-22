import { useState } from "react";
import Principal from "./Principal";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Estudio } from "./Estudio";
import { Repaso } from "./assets/Repaso";
import { SimulaApi } from "./assets/SimulaApi";
function App() {
  return (
    
  <BrowserRouter>
    <Routes>
      <Route path="/principal" element={<Principal />} />
      <Route path="/estudio" element={<Estudio />} />
      <Route path="/repaso" element={<Repaso />} />
      <Route path="/" element={<SimulaApi />} />
    </Routes>
  </BrowserRouter>
     
  );
}

export default App;
