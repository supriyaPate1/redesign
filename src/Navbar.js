import React, { useContext, useEffect, useState } from "react";
import "./navbar.css";
import { Link, Outlet } from "react-router-dom";
import { myContext } from "./App";
import { Drawer } from "@mui/material";
import Shop from "./Shop";
import Cart from "./Cart";

export default function Navbar() {
  const {
    quan,
    logedin,
    setLogin,
    User,
    wish,
    setSortData,
    setRate,
    setcateg,
    setsearch,
    setSnack,
    show,
    setShow,
  } = useContext(myContext);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setShow(false);
  }, []);

  //function for manual search in search bar
  const search = () => {
    var inpVal = document.getElementById("serachVal").value.toUpperCase();
    setsearch(inpVal);
  };

  //func to filter by category
  const category = (event) => {
    var categVal = event.target.value;
    setcateg(categVal);
  };

  // function for enter key
  const EnterKey = (event) => {
    if (event.key === "Enter") {
      search();
    }
  };

  // func to filter by rating
  const rateFilter = (event) => {
    var rateVal = event.target.value;
    setRate(rateVal);
  };

  //func to search by price
  const sortBy = (event) => {
    var sortVal = event.target.value;
    setSortData(sortVal);
  };

  //func to switch themes
  var chooseTheme = () => {
    var element = document.body;
    element.classList.toggle("darktheme");
  };

  //funct to clear filters
  var clearFilters = () => {
    setRate("");
    setSortData("-1");
    setcateg("");
  };
  return (
    <>
      <div className="greenNav">
        <div className="leftText">
          <a>
            <span>Download WAY2DOOR APP</span>&emsp;<span>Click Here</span>
          </a>
        </div>
        <div className="divSpace"></div>
        <div className="rightText">
          {/* <Link> */}
          <i className="fa fa-map-marker" aria-hidden="true"></i>
          <span>Selected Delivery Location : Lucknow (226010)</span>
          {/* </Link> */}
          {!logedin && (
            <div>
              <Link to="login">
                {" "}
                <i className="fa fa-sign-in" aria-hidden="true"></i>Login
              </Link>
              <Link to="signup">
                {" "}
                <i className="fa fa-paper-plane" aria-hidden="true"></i>Signup
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="Nav2">
        <div className="NavLogo">
          <div className="divImg">
            <img
              src="http://www.way2door.com/images/way2door-min.png"
              alt="logo"
            />
          </div>
          <div className="midtext">
            <p>
              Today's order will be delivered tomorrow. सबसे सस्ता और सबसे
              अच्छा.
            </p>
          </div>
          <div className="carticon">
            <div>
              <Link to="/cart">
                <i className="fa fa-opencart" aria-hidden="true"></i>
                {quan}
              </Link>
            </div>
          </div>
        </div>
        <hr />
        <div className="storebtn">
          <button>Fruits And Vegetables Store</button>
        </div>
      </div>
      {/* ........................................ */}
      <div className="navbars2">
        <div className="NavMain">
          <div className="DivOthers">
            {/* {logedin && (
              <div id="wish">
                <Link to="/wishlist">wishlist{wish}</Link>
              </div>
            )} */}
            {logedin && <div id="name">Welcome {User.userName}</div>}
            {logedin && (
              <div id="logoutLink">
                <Link
                  to="/"
                  onClick={() => {
                    setLogin(false);
                    setSnack({
                      open: true,
                      msg: "Logout Successfully!.",
                      severity: "success",
                    });
                  }}
                >
                  Logout
                </Link>{" "}
              </div>
            )}

            {/* <div id="navbar2">
              <MenuIcon
                onClick={() => {
                  setOpen(true);
                }}
                sx={{ fontSize: "30px", color: "white" }}
              />
            </div> */}
          </div>
        </div>
      </div>
      <div className="productAndFilters">
        {/* <div className="leftCont"> */}
          <div className="rigthdivFiltrs">
            <div className="upperDiv">
              <h4>Lucknow Veg Express</h4>
              <p>Average: 3.5/5</p>
              <button id="reviews">View Reviews</button>&emsp;
              <button id="contact">Contact Info</button>
            </div>
            <hr />
            <div className="filters">
              <div className="DivSearch">
                <input
                  placeholder="serach for products...."
                  id="serachVal"
                  autoFocus
                  onKeyPress={EnterKey}
                ></input>
                <button id="searchbtn">Search</button>
              </div>
              <div>
                <select onChange={sortBy}>
                  <option value={-1}>Sort By</option>
                  <option value={0}>Low to High</option>
                  <option value={1}>High to low</option>
                </select>
              </div>
              <div>
                <select onChange={category}>
                  <option value={""}>Filter by categories</option>
                  <option>Vegetable</option>
                  <option>Fruit</option>
                  <option>Dryfruit</option>
                </select>
              </div>
              <div>
                <select onChange={rateFilter}>
                  <option value={""}>Filter by rating</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div>
                <button className="clearbtn" onClick={clearFilters}>
                  Clear Filters
                </button>
              </div>
            </div>
          {/* </div> */}
        </div>

        <div className="productVeg">
          <div className="ProductsDisplay">
            <div className="timeOFStore">
              <div className="divTime">
                <p>
                  Order Timing:<span className="time"> 8:00 am</span>To
                  <span className="time"> 6:00 am</span>
                  <span>
                    &emsp;<button disabled>Store Open</button>
                  </span>
                </p>
              </div>
              <div className="divSpace"></div>
              <div className="divoffersbtn">
                <button>My Offers</button>
                <button>Page Like 12</button>
              </div>
            </div>
            <hr />
            <div className="imageBanner">
              <img
                src="http://www.way2door.com/images/stores/banner_1574312382banner-lucknow-veg-express-min.png"
                alt="banner"
              />
            </div>
          </div>
          <Shop />
        </div>
        <div className="footer"></div>
      </div>
      <Drawer
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        anchor="right"
        PaperProps={{
          sx: { width: "28%", backgroundColor: "rgba(230, 224, 238)" },
        }}
      >
        {/* <Cart /> */}
        {/* <div className="paperNav">
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <select onChange={sortBy}>
              <option value={-1}>Sort By</option>
              <option value={0}>Low to High</option>
              <option value={1}>High to low</option>
            </select>
          </div>
          <div>
            <select onChange={category}>
              <option value={""}>Categories</option>
              <option>Vegetable</option>
              <option>Fruit</option>
              <option>Dryfruit</option>
            </select>
          </div>
          <div>
            <select onChange={rateFilter}>
              <option value={""}>Filter by rating</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="clearbtn">
            <button onClick={clearFilters}>Clear Filters</button>
          </div>
          <div>
            <LightModeIcon onClick={chooseTheme} />
            <DarkModeIcon onClick={chooseTheme} />
          </div>
        </div> */}
      </Drawer>
      <Outlet />
    </>
  );
}
