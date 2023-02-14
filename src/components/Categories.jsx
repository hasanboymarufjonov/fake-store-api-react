import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Category from "./Category";

const Categories = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://fakestoreapi.com/products/category/jewelery")
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      });
  }, []);

  //   fetch("https://fakestoreapi.com/products/categories")
  //     .then((res) => res.json())
  //     .then((json) => console.log(json));

  if (loading) {
    return <div>Loading ..</div>;
  }

  return (
    <div>
      <nav class="bg-gray-50 dark:bg-gray-700">
        <div class="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
          <div class="flex items-center">
            <ul class="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
              <li>
                <a
                  href="/category/jewelry"
                  class="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Jewelry
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-900 dark:text-white hover:underline"
                >
                  Electronics
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-900 dark:text-white hover:underline"
                >
                  Men's Clothes
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-900 dark:text-white hover:underline"
                >
                  Women's Clothes
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Categories;
