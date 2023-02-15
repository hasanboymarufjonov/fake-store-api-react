import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "./Navbar";
import Categories from "./Categories";
import Footer from "./Footer";

const ProductInfo = () => {
  const { productID } = useParams();

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get("https://fakestoreapi.com/products/" + productID).then((res) => {
      setProduct(res.data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>Loading ..</div>;
  }

  return (
    <div>
      <Navbar />
      <Categories />
      <a
        href=""
        className="my-2 flex flex-col items-center justify-around bg-white border border-gray-200 shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="w-full h-96 md:height-auto md:w-96 md:rounded-lg bg-gray-300 px-20 py-10"
          src={product.image}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-left">
            {product.title}{" "}
          </h5>
          <div class="flex items-center my-4">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Rating star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <p class="ml-2 text-sm font-bold text-gray-900 dark:text-white">
              {product.rating.rate}
            </p>
            <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <a
              href="#"
              class="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
            >
              {product.rating.count} reviews
            </a>
          </div>
          <div className="text-left flex">
            <p className="pr-2 font-bold">Category: </p>

            <div className="text-center bg-white rounded w-fit px-2">
              <p>{product.category}</p>
            </div>
          </div>

          <h2 className="font-bold text-3xl text-left mt-4">Description</h2>

          <p className="mb-3 font-normal  text-left">{product.description}</p>
          {/* <p className="text-white text-left">$ {product.price}</p> */}
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              $ {product.price}
            </span>
            <a
              href="#"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to cart
            </a>
          </div>
        </div>
      </a>
      {/* <div className="px-5 py-3 bg-gray-300 rounded-lg m-10">
        <h2 className="font-bold text-3xl text-left">Description</h2>
        <p className="mb-3 font-normal  text-left">{product.description}</p>
      </div> */}
      <Footer />
    </div>
  );
};

export default ProductInfo;
