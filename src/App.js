import { Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Products from "./components/Products";
import ProductInfo from "./components/ProductInfo";
import { Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/product:" element={<ProductInfo />} />
      </Routes>
      <Navbar />
      <Products />
      <Product />
    </div>
  );
}

export default App;
