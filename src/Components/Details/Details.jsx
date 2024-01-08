import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Badge, Card } from "react-bootstrap";
import styles from "./styles.module.css";
import { useDispatch } from "react-redux";
import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { HiShoppingCart } from "react-icons/hi";
import { useSelector } from "react-redux";
import { addtoCart } from "../../Redux/Slices/CartSlice";

const Details = () => {
  const param = useParams();
  const dispatch = useDispatch();
  const [product, setproduct] = useState({});
  const Counterproducts = useSelector((store) => store.cart.cart);
  const handleAddtoCart = (product) => {
    dispatch(addtoCart(product));
  };
  const fetchproduct = () => {
    fetch(`https://fakestoreapi.com/products/${param.id}`)
      .then((res) => res.json())
      .then((json) => {
        setproduct(json);
      });
  };
  const fullStar = (
    <FontAwesomeIcon
      icon={faStar}
      style={{ color: "#FFFF00", fontSize: "0.7rem" }}
    />
  );
  const emptystar = (
    <FontAwesomeIcon
      icon={faStar}
      style={{ color: "black", fontSize: "0.7rem" }}
    />
  );
  useEffect(() => {
    fetchproduct();
  }, []);
  return (
    <div className="row mt-4 p-md-5 p-sm-0  d-flex flex-row justify-content-center align-items-center">
      <div className="col-lg-4 mt-4 p-md-3 p-lg-5">
        <div className="p-5">
          <Card.Img variant="top" src={product.image} />
        </div>
      </div>
      <div className="col-lg-8 p-4">
        <h3>{product.title}</h3>
        <p className={styles.description}>{product.description}</p>
        <div>
          <p className={styles.price}>
            <span className="me-2">Price :</span>
            {product.price}$
          </p>
          <span className={styles.rating}>Rating:</span>
          <Rating
            initialRating={product?.rating?.rate}
            emptySymbol={emptystar}
            fullSymbol={fullStar}
            readonly
          />

          <HiShoppingCart
            size={30}
            style={{ cursor: "pointer" }}
            onClick={() => {
              handleAddtoCart(product);
            }}
          />
          <Badge bg="primary">Add to the cart</Badge>
        </div>
      </div>
    </div>
  );
};

export default Details;
