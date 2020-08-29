import React from "react";
import "./styles.css";
import capaImage from "./Image/arrow-circle-right-solid.svg";
export default function EstoquePlate() {
  return (
    <div className="basePlate">
      Inicio
      <p id="" className="topoPilha">
        <img src={capaImage} alt="seta" />
        for you !
      </p>
      <p className="basePilhaUm">Edinei</p>
      <p className="basePilhaDois">Ed</p>
      <p className="basePilhaTres">For You</p>
    </div>
  );
}
