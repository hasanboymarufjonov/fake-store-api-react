import React from "react";
// import Categories from "./Categories";
import Navbar from "./Navbar";
import Product from "./Product";
import Products from "./Products";
import Carousel from "./Carousel";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Products />
      {/* <Categories /> */}
      <Product />
    </div>
  );
};

export default Home;
