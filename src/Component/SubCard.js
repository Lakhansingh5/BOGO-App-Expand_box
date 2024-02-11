import React, { useState } from "react";
import CardBoxes from "./CardBoxes";

const SubCard = (props) => {
  const white = "#fff";
  const [bg, setBg] = useState(white);
  const [show, setShow] = useState(false);

  const bgChange = () => {
    let newBg = bg === "#fff3f7" ? "#fff" : "#fff3f7";
    setBg(newBg);
  };

  return (
    <div>
      <div
        className="body"
        style={{ backgroundColor: bg }}
        onClick={() => {
          setShow(!show);
          bgChange();
        }}
      >
        {show && <fieldset>Most Popular </fieldset>}

        <div className="content">
          <div className="radio1">
            <input type="radio" />
            <h2>{props.unit}</h2>
          </div>
          <p>Standard Rate</p>
          <p2>{props.off}</p2>

          <div className="dollar">
            <p3>{props.USD}</p3>
            <p4>{props.usd}</p4>
          </div>
        </div>
        {show && <CardBoxes />}
      </div>
    </div>
  );
};

export default SubCard;
