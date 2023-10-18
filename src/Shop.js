import React, { useContext, useEffect } from "react";
import storedata from "./storedata.json";
import product from './Product'
import "./shop.css";
import StarRateIcon from "@mui/icons-material/StarRate";
import { myContext } from "./App";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

export default function Shop() {
  const {
    quan,
    setQuan,
    wish,
    countWish,
    categ,
    searchInp,
    sortData,
    getRate,
    setgrandP,
    setShow,
  } = useContext(myContext);

  useEffect(() => {
    setShow(true);
  }, []);

  // function when clicked on add to cart btn
  const AddToCart = (event) => {
    var count = quan;
    var click = event.target.name;
    let obj = storedata.find((a) => a.id === +click);
    if (obj.quantity === 0) {
      obj.quantity++;
      obj.totalPrice = obj.price;
      setQuan(++count);
    } else {
      obj.quantity++;
      obj.totalPrice = obj.price * obj.quantity;
    }
    var Gval = 0;
    var cnt = quan;
    storedata.map((val) => {
      if (cnt > 0) {
        Gval += val.totalPrice;
      }
    });
    setgrandP(Gval);
  };

  //func to move to top of the page
  const moveTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="shopMain">
        <div className="cardsDisp">
          {storedata
            .filter((val) => {
              return (
                val.imageName.toUpperCase().includes(searchInp) &&
                val.category.indexOf(categ) > -1 
              );
            })
            .sort((a, b) => {
              return sortData === "-1"
                ? ""
                : sortData === "0"
                ? a.price - b.price
                : b.price - a.price;
            })
            .map((val, i) => {
              return (
                <div className="toyDisp" key={i}>
                  <div className="toyimg">
                    <img src={val.imageToy} alt="cover" />
                  </div>
                  <div className="toyDetail">
                    <h6 className="details">{val.imageName}</h6>
                    {/* <p>
                      {val.rating}
                      <StarRateIcon sx={{ color: "black", fontSize: "20px" }} />
                    </p> */}
                    <p className="details">Price: <span className="reducedPrice"> Rs.{val.reducedPrice}  </span>{val.price}/{val.weigth}</p>
                    <p className="details">Category: {val.category}</p>
                  </div>
                  <div className="addCartbtn">
                    <button
                      className="addbtn"
                      onClick={AddToCart}
                      name={val.id}
                    >
                      Add to cart
                    </button>
                    {/* &emsp; &emsp; &emsp; &emsp;
                    <button className="wishbtn" id={val.id} onClick={AddToWish}>
                      <i
                        className="fa fa-heart"
                        aria-hidden="true"
                        id={val.id}
                        onClick={AddToWish}
                        style={{ color: val.wishVal > 1 ? "red" : "white" }}
                      ></i>
                    </button> */}
                  </div>
                </div>
              );
            })}
        </div>
        <div className="moveTop">
          <KeyboardDoubleArrowUpIcon onClick={moveTop} />
        </div>
      </div>
    </>
  );
}
