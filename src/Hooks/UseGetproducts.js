import { useState, useEffect } from "react";
import axios from "axios";

const UseGetproducts = () => {
  const [products, setproducts] = useState([]);
  const [isloading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadproducts = async () => {
      try {
        setLoading(true);
        const productslist = await axios.get(
          "https://fakestoreapi.com/products"
        );
        setproducts((prev) => [...prev, ...productslist.data]);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError("error");
      }
    };
    loadproducts();
  }, []);

  return [isloading, error, products];
};

export default UseGetproducts;
