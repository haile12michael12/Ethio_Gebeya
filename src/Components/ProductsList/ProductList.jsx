import Card from "react-bootstrap/Card";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { HiShoppingCart } from "react-icons/hi";
import { addtoCart } from "../../Redux/Slices/CartSlice";
import { useDispatch } from "react-redux";

const ProductsList = ({ products }) => {
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addtoCart(product));
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
  return (
    <div className="row mt-4 p-5 me-0">
      {products.length > 0 &&
        products.map((product) => {
          return (
            <div
              className="col-lg-3 mt-4 col-md-4 col-sm-6 col-xs-12"
              key={product.id}
            >
              <Card className="h-100 d-flex flex-column justify-content-between align-items-between p-2">
                <div className="d-flex p-3  h-100 justify-content-center align-items-cente ">
                  <Card.Img src={product.image} />
                </div>

                <div>
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{product.title.slice(0, 23)}</Card.Title>
                    <Card.Text className={styles.shop}>
                      {product.description.slice(-50)}
                    </Card.Text>
                    <Card.Text className={styles.price}>
                      <span className="text-primary me-2">Price:</span>
                      {product.price}$
                    </Card.Text>
                    <span className={styles.rate}>Rating:</span>
                    <Rating
                      initialRating={product.rating.rate}
                      emptySymbol={emptystar}
                      fullSymbol={fullStar}
                      readonly
                    />
                    <div className="d-flex justify-content-between align-items-center">
                      <Link
                        className={styles.view}
                        to={`/shop/${product.id}`}
                        variant="primary"
                      >
                        View Details
                      </Link>
                      <Link>
                        <HiShoppingCart
                          size={40}
                          onClick={() => handleAddToCart(product)}
                        />
                      </Link>
                    </div>
                  </Card.Body>
                </div>
              </Card>
            </div>
          );
        })}
    </div>
  );
};

export default ProductsList;
