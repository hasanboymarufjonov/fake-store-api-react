import { Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Products from "./components/Products";
import ProductInfo from "./components/ProductInfo";
import { Routes } from "react-router-dom";
import Customer from "./components/Customer";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/customer" element={<Customer />}></Route>
        <Route
          exact
          path="/product/:productID"
          element={<ProductInfo />}
        ></Route>
        <Route exact path="/sign-in" element={<SignIn />}></Route>
        <Route exact path="/sign-up" element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
