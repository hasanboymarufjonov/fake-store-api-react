import React from "react";
import Categories from "./Categories";
import Navbar from "./Navbar";
import Product from "./Product";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Categories />
      <Product />
    </div>
  );
};

export default Home;
