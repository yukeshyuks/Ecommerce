import { useState, useEffect } from "react";
import axios from "axios";

function ProductsAPI() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await axios.get(
      "http://127.0.0.1:8000/api/v1/latest-products/"
    );
    setProducts(res.data);
  };
  useEffect(() => {
    getProducts();
  }, []);

  return {
    products: [products, setProducts],
  };
}

export default ProductsAPI;
