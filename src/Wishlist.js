import React from "react";
import storedata from "./storedata.json";
import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import { myContext } from "./App";
import "./wishlist.css";
export default function Wishlist(props) {
  const { countWish, setQuan, quan, wish } = useContext(myContext);
  var [temp, setTemp] = useState(0);

  //function to empty wishlist
  const emptyWish = () => {
    if (window.confirm("Do you really want to empty wishlist?") === true) {
      storedata.forEach((val) => {
        val.wishVal = 0;
        setTemp(++temp);
        countWish(0);
      });
    }
  };

  // function when clicked on add to cart btn
  const AddToCart = (event) => {
    var count = quan;
    var cnt = wish;
    var click = event.target.name;
    let obj = storedata.find((a) => a.id === +click);
    if (obj.quantity === 0) {
      obj.quantity++;
      obj.totalPrice = obj.price;
      setQuan(++count);
    }
    obj.wishVal = 0;
    --cnt;
    countWish(cnt);
  };

  //when clicked on remove
  const deleteWish = (event) => {
    var cnt = wish;
    var click = event.target.name;
    let obj = storedata.find((a) => a.id === +click);
    obj.wishVal = 0;
    obj.totalPrice = 0;
    --cnt;
    setTemp(++temp);
    countWish(cnt);
  };

  return (
    <>
      <div className="dispWish">
        {wish > 0 ? (
          <div className="cardsDisp">
            <div className="emptyWish">
              <button onClick={emptyWish}>Empty Wishlist</button>
            </div>
            {storedata.map((val, i) => {
              if (val.wishVal > 0) {
                return (
                  <div className="WishlistDis" key={i}>
                    <div className="DispImg">
                      <img src={val.imageToy} alt="cover" />
                    </div>
                    <div className="sweetDetail">
                      <h4 className="details">{val.name}</h4>
                      <p className="details">Price: Rs. {val.price}</p>
                      <p className="details">Made of: {val.category}</p>
                    </div>
                    <div className="btns">
                      <br></br>
                      <div>
                        <button name={val.id} onClick={AddToCart}>
                          Move To Cart
                        </button>
                      </div>
                      <br></br>
                      <div>
                        <button name={val.id} onClick={deleteWish}>
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        ) : (
          <div className="ShopNow">
            <img
              id="wishnow"
              src="https://uxwing.com/wp-content/themes/uxwing/download/e-commerce-currency-shopping/add-to-wishlist-icon.png"
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
      <Outlet />
    </>
  );
}
