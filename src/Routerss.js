import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home";
import Productsdata from "../src/pages/Productsdata";
import About from "../src/pages/About";
import Contact from "../src/pages/Contact";

export default function Routerss() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productebi" element={<Productsdata />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
