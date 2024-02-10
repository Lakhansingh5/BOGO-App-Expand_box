import React, { useState } from "react";
import CardBoxes from "./CardBoxes";

const SubCard = (props) => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <div className="body">
        {show && <fieldset>Most Popular</fieldset>}

        <div className="content" onClick={() => setShow(!show)}>
          <input type="radio" />
          <h2>{props.unit}</h2>
          <br />
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
