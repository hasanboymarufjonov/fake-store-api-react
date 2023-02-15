import React from "react";
import Categories from "./Categories";
import Navbar from "./Navbar";
import Product from "./Product";
import Products from "./Products";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Products />
      {/* <Categories /> */}
      <Product />
    </div>
  );
};

export default Home;
