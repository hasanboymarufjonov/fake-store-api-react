import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "./Navbar";

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

      <a
        href=""
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={product.image}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-left">
            {product.title}{" "}
          </h5>
          <p className="text-white text-left">$ {product.price}</p>
          <p className="text-left bg-white rounded">{product.category}</p>
        </div>
      </a>
      <div className="px-5">
        <h2 className="font-bold text-3xl text-left">Description</h2>
        <p className="mb-3 font-normal  text-left">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductInfo;
