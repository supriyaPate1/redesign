import React from "react";
import { Link } from "react-router-dom";
export default function Proceed() {
  return (
    <>
      <center>
        <div style={{ marginTop: "10%" }} className="finalpg">
          <div className="thanku">
            <h2 style={{ color: "blue", paddingBottom: "2%" }}>
              Thank you for shopping with us :)
            </h2>
          </div>
          <div className="shopMore">
            <Link to="/">
              <button
                style={{
                  color: "black",
                  backgroundColor: "yellow",
                  width: "15%",
                  border: "1px solid yellow ",
                  borderRadius: "5px",
                  padding: ".5%",
                }}
              >
                Shop More
              </button>
            </Link>
          </div>
        </div>
      </center>
    </>
  );
}
