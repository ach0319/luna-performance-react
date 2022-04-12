import React from "react";
import image3 from "../Images/image3.png";
import "../Price/Price.css";

function Price() {
  return (
    <div
      className="price-body"
      style={{
        backgroundImage: `url(${image3})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center 50px",
        backgroundColor: "black",
      }}
    >
      <div className="price-info">
        <div className="price">
          <h2>PRICE LIST</h2>
          <br></br>
        </div>
        <p className="price-bottom">
          * All jobs require 1/2 down before starting.
          <br />
          * Prices have a small discount if items are already sandblasted.
          <br />
          * All items that need to be sandblasted that have be previously powdered
          add a $35 charge to each item.
          <br />
          * Full teardown, blasting, powder and re-assembly prices vary due to year, make, model, color etc.
          <br />
          * Package deals can be made at customer request
          <br />
          * Sandblasting rates vary due to difficulty and size of part
          <br />
          * Parts can be purchased by customer or Luna Performance. Depending on quality recommendations will be made and waiver will be signed.
          <br />
          * These are round about prices...they can vary a little.
        </p>
        <h3>Powder Cost:</h3>
        <p>Minimum $85 on any small part</p>
        <h3>Motorcycle Wheels (pair):</h3>
        <p>
          1 stage $225
          <br />
          2-3 stage +$325
        </p>
        <h3>Car wheels up to 19" per wheel:</h3>
        <p>
          1 stage $120
          <br />
          2-3 stage $200
        </p>
        <h3>Car wheels 20"+ per wheel:</h3>
        <p>
          1 stage $220
          <br />
          2-3 stage $300
        </p>
        <h3>Frames:</h3>
        <p>
          1 stage $175
          <br />
          2-3 stage $275
        </p>
        <h3>Swingarms:</h3>
        <p>
          1 stage $175
          <br />
          2-3 stage $250
        </p>
        <h3>Pegs:</h3>
        <p>
          1 stage $125
          <br />
          2-3 stage $200
        </p>
        <h3>Lift Kits:</h3>
        <h4>4-piece</h4>
        <p>
          1 stage $400
          <br />
          2-3 stage $500
        </p>
        <h4>6+ pieces</h4>
        <p>
          1 stage $600
          <br />
          2-3 stage $800
        </p>
        <h3>Labor Rates</h3>
        <p>
          $70/hour
        </p>
        <h3>Engine Removal:</h3>
        <h4>with Plastics</h4>
        <p>
          $500
        </p>
        <h4>without Plastics</h4>
        <p>
          $400
        </p>
        <br></br>
        <h5>
          Attention all current and future clients. Please read this carefully.
          North Carolina is hot. Very very very hot My powder distributor has a
          new heat advisory protocol which affect my business and timelines
          also. All powder orders must be in by Tuesday, the latest to have the
          powder to arrive in timely manner during the week in order to have the
          jobs done. Powders get damaged in excessive heat and we will not be
          compensated for anything that sat in a hot delivery truck over the
          weekend. Any orders made after Tuesday will push the project to the
          following week. Thank you everyone for your support and understanding.
        </h5>
      </div>
    </div>
  );
}

export default Price;
