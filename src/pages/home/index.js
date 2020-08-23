import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="handle">
    <div className="display">Lorem ipsum dolor sit amet, consecteteuer adpsim elit</div>
    <div className ="buttons">
      <div className="btn-container bottom">
        <button className="btn-floor" data-set-floor="0">T</button>
      </div>
      <div className="btn-container floor">
        <button className="btn-floor floor" data-set-floor="1">1</button>
      </div>
      <div className="btn-container floor">
        <button className="btn-floor floor" data-set-floor="2">2</button>
      </div>
      <div className="btn-container floor">
        <button className="btn-floor floor" data-set-floor="3">3</button>
      </div>
      <div className="btn-container floor">
        <button className="btn-floor floor" data-set-floor="4">4</button>
      </div>
      <div class="btn-container floor">
        <button className="btn-floor floor" data-set-floor="5">5</button>
      </div>
      <div className="btn-container floor">
        <button className="btn-floor floor" data-set-floor="6">6</button>
      </div>
    </div>
  </div>
  
  <div className="building">
    <div className="elevator-container">
      <div className="elevator">
        <div className="elevator-door"></div>
        <div className="elevator-light"></div>
      </div>
  </div>
  
 
    <div className="floors">
      <div className="floor" data-floor="0">
        <div className="floor-door"></div>
      </div>
      <div className="floor" data-floor="1">
        <div className="floor-window"></div>
      </div>
      <div className="floor" data-floor="2">
        <div className="floor-window"></div>
      </div>
      <div className="floor" data-floor="3">
        <div className="floor-window"></div>
      </div>
      <div className="floor" data-floor="4">
        <div className="floor-window"></div>
      </div>
      <div className="floor" data-floor="5">
        <div className="floor-window"></div>
      </div>
      <div className="floor" data-floor="6">
        <div className="floor-window"></div>
      </div>
    </div>
  </div>

  );
}
