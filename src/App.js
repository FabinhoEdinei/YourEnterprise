import React from "react";
import "./styles.css";
import EstoquePlate from "../src/Components";
import HeaderFixo from "../src/Components/Header";

export default function App() {
  return (
    <div className="App">
      <HeaderFixo></HeaderFixo>
      <a href="./src/pages/home">proxima page</a>
      <EstoquePlate>
        <h2>ola</h2>
      </EstoquePlate>
    </div>
  );
}
