import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import Shop from "./Shop";
import { createContext, useState } from "react";
import Cart from "./Cart";
import Signup from "./Signup";
import Login from "./Login";
import { Alert, Snackbar } from "@mui/material";
import Wishlist from "./Wishlist";
import Proceed from "./Proceed";
import { Reviews } from "@mui/icons-material";
export const myContext = createContext();

function App() {
  const [show, setShow] = useState(false);
  const [quan, setQuan] = useState(0);
  // const [wish, countWish] = useState(0);
  const [logedin, setLogin] = useState(false);
  const [logOut, setlogOut] = useState(false);
  const [User, setUser] = useState("");
  const [categ, setcateg] = useState("");
  const [getRate, setRate] = useState("");
  const [sortData, setSortData] = useState("-1");
  const [searchInp, setsearch] = useState("");
  const [grandP, setgrandP] = useState("");
  const [snack, setSnack] = useState({
    open: false,
    msg: "",
    severity: "info",
  });
  const [proCount, setProCount] = useState(0);
  return (
    <>
      <myContext.Provider
        value={{
          show,
          setShow,
          grandP,
          setgrandP,
          sortData,
          setSortData,
          getRate,
          setRate,
          categ,
          setcateg,
          searchInp,
          setsearch,
          // wish,
          // countWish,
          quan,
          setQuan,
          proCount,
          setProCount,
          logedin,
          setLogin,
          logOut,
          setlogOut,
          User,
          setUser,
          snack,
          setSnack,
        }}
      >
        <Routes>
          <Route>
            <Route path="/" element={<Navbar />} />
            <Route path="/cart" element={<Cart />} />
            {/* <Route path="/wishlist" element={<Wishlist />} /> */}
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/proceed" element={<Proceed />} />
          </Route>
        </Routes>
      </myContext.Provider>
      <Snackbar
        open={snack.open}
        onClose={() => {
          setSnack({ open: false, msg: "", severity: "info" });
        }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={3000}
      >
        <Alert
          variant="filled"
          onClose={() => {
            setSnack({ open: false, msg: "", severity: "info" });
          }}
          severity={snack.severity}
        >
          {snack.msg}
        </Alert>
      </Snackbar>
    </>
  );
}

export default App;
