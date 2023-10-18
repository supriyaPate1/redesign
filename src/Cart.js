import React, { useContext, useState } from "react";
import storedata from "./storedata.json";
import { myContext } from "./App";
import { Link } from "react-router-dom";
import "./cart.css";

export default function Cart() {
  const { quan, setQuan, setProCount, grandP, setgrandP, logedin } =
    useContext(myContext);
  var [temp, setTemp] = useState(0);
  var [count3, setCount3] = useState(0);

  //function when clicked on empty cart
  const emptyCart = () => {
    if (window.confirm("Do you really want to empty cart?") === true) {
      storedata.forEach((val) => {
        val.quantity = 0;
        setTemp(++temp);
        setQuan(0);
      });
    }
  };
  //function when clicked on delete btn
  const deleteRow = (event) => {
    if (window.confirm("Do you really want to delete this item?") === true) {
      var cnt = quan;
      var click = event.target.name;
      let obj = storedata.find((a) => a.id === +click);
      obj.quantity = 0;
      obj.totalPrice = 0;
      --cnt;
      setTemp(++temp);
      setQuan(cnt);
    }
    grandPrice();
  };

  //function when clicked on + btn
  const PlusPro = (event) => {
    var count1 = quan;
    var click = event.target.name;
    let obj = storedata.find((a) => a.id === +click);
    obj.quantity++;
    obj.totalPrice += obj.price;
    setProCount(++count1);
    setTemp(++temp);
    grandPrice();
  };

  //function when clicked on - btn
  const minusPro = (event) => {
    var count1 = quan;
    var cnt = quan;
    var click = event.target.name;
    let obj = storedata.find((a) => a.id === +click);
    if (obj.quantity > 1) {
      obj.quantity--;
      obj.totalPrice -= obj.price;
      setProCount(--count1);
      setTemp(--temp);
      if (obj.quantity < 1) --cnt;
      setQuan(cnt);
    }
    grandPrice();
  };

  //function to calculate total cart value
  const grandPrice = () => {
    var Gval = 0;
    var cnt = quan;
    storedata.map((val) => {
      if (cnt > 0) {
        Gval += val.totalPrice;
      }
    });
    setgrandP(Gval);
    setCount3(+count3 + 1);
  };

  return (
    <>
      <div className="cartmain">
        {quan > 0 ? (
          <div className="sweetsDisp">
            <div className="emptyCrt">
              <button onClick={emptyCart}>Empty Cart</button>
            </div>
            <h6 style={{ textAlign: "center", color: "rgb(136, 57, 11)" }}>
              Total Items:{quan} Total Price:({grandP})
            </h6>
            {storedata
              .filter((val) => {
                return val.quantity > 0;
              })
              .map((val, i) => {
                return (
                  <div className="cartDisplay" key={i}>
                    <div className="prodimg">
                      <img src={val.imageToy} alt="cover" />
                    </div>
                    <div className="prod_details">
                      <h5>{val.imageName}</h5>
                      <p>Price: Rs. {val.price}</p>
                      <p>Made of: {val.category}</p>
                    </div>
                    <div className="quantitymanage">
                      <div>
                        {" "}
                        <button id="minus" name={val.id} onClick={minusPro}>
                          -
                        </button>
                        {val.quantity}
                        <button id="plus" name={val.id} onClick={PlusPro}>
                          +
                        </button>
                      </div>
                      <br></br>
                      <div className="toPrice">Total Price:</div>
                    </div>
                    <div className="removebtn">
                      <button
                        type="button"
                        id="delPro"
                        className="delete"
                        name={val.id}
                        onClick={deleteRow}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })}
            <center>
              {logedin === true ? (
                <Link to="/proceed">
                  <button id="chkoutBtn">Proceed to Checkout</button>
                </Link>
              ) : (
                <Link to="/login">
                  <button id="chkoutBtn">Proceed to Checkout</button>
                </Link>
              )}
            </center>
          </div>
        ) : (
          <div className="emptyCartImg">
            <img
              src="https://static.thenounproject.com/png/538404-200.png"
              alt="cover"
            />
            <center>
              <Link to="/shop">
                <button>Shop Now</button>
              </Link>
            </center>
          </div>
        )}
      </div>
    </>
  );
}
