import ProductsList from "../ProductsList/ProductList";
import LoaderComponent from "../Loader/Loader";

import UseGetproducts from "../../Hooks/UseGetproducts.js";

const Shop = () => {
  const [isloading, error, products] = UseGetproducts();

  return (
    <>
      <LoaderComponent isloading={isloading} error={error} />
      <ProductsList products={products} />
    </>
  );
};
export default Shop;
