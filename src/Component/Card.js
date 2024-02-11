import React from "react";
import "./Card.css";
import SubCard from "./SubCard";
import Api from "./Api";

const Card = () => {
  return (
    <>
      {" "}
      <div className="main_div">
        <div className="main_divi">
          <div className="head_body">
            <h1> YAY! It's BOGO</h1>
            {Api.map((val) => {
              return (
                <SubCard
                  key={val.id}
                  unit={val.unit}
                  off={val.off}
                  USD={val.USD}
                  usd={val.usd}
                />
              );
            })}
            <div className="footer">
              <p>Free Delivery</p>
              <p2>Total: $18.00 USD</p2>
            </div>
            <div className="footer2">
              <button>+ Add to Cart</button>
              <p4>@Powered by Pumper</p4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
