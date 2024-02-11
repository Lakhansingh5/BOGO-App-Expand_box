import React from "react";
import "./CardBoxes.css";

const CardBoxes = () => {

  
  return (
    <div className="std_div">
      <div className="size_div">
        <h3>Size</h3>
        <span className="text">#1</span>
        <select className="box1">
          <option value="0"> S</option>
          <option value="1">M</option>
          <option value="2">L</option>
        </select>

        <br />
        <span className="text">#2</span>
        <select className="box1">
          <option value="0"> S</option>
          <option value="1">M</option>
          <option value="2">L</option>
        </select>
      </div>
      <div className="color_div">
        <h3>Color</h3>

        <select className="box2">
          <option value="0"> Color</option>
          <option value="1">Black</option>
          <option value="2">White</option>
        </select>
        <br />
        <select className="box2">
          <option value="0"> Color</option>
          <option value="1">Black</option>
          <option value="2">White</option>
        </select>
      </div>
    </div>
  );
};

export default CardBoxes;
