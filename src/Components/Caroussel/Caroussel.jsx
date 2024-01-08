import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import UseGetproducts from "../../Hooks/UseGetproducts.js";
import { Pagination, Navigation, A11y, Scrollbar } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const Caroussel = () => {
  const [loader, error, products] = UseGetproducts();
  const limitedProducts = products.slice(0, 10);

  const swiperParams = {
    slidesPerView: 5,
    spaceBetween: 40,
    pagination: {
      clickable: true,
    },
    breakpoints: {
      1300: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      350: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
    },
  };

  return (
    <section className="most-selling py-5">
      <h2 className="text-center font-details-b pb-4 mt-3 text-dark p-2">
        Most selling Products
      </h2>
      <div className="container">
        <div className="MOstSelling"></div>
        <Swiper
          {...swiperParams}
          modules={[Pagination, Navigation, A11y, Scrollbar]}
          className="mySwiper p-lg-5 p-md-4 p-sm-1"
        >
          {limitedProducts.map((product, index) => {
            return (
              <SwiperSlide key={index} className="p-lg-3 p-md-2 p-sm-4">
                <figure>
                  <img
                    src={product.image}
                    alt={product.title}
                    style={{ width: "90%", height: "15rem" }}
                  ></img>
                </figure>
                <div className="flex flex-column justify-content-end">
                  <p
                    className="fw-semibold text-center"
                    style={{
                      backgroundColor: "pink",
                      borderRadius: "5rem",
                      width: "80%",
                      margin: "auto",
                    }}
                  >
                    {product.category}
                  </p>
                  <p className="fw-semibold text-center">
                    {product.title.slice(0, 30)}
                  </p>
                  <Link
                    to={`/shop/${product.id}`}
                    className="d-flex justify-content-center text-decoration-none mb-5"
                  >
                    View product
                  </Link>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Caroussel;
