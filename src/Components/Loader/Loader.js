import React from "react";

import { BallTriangle } from "react-loader-spinner";

const LoaderComponent = ({ children, isloading, error }) => {
  if (isloading) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12 d-flex align-items-center justify-content-center">
            <BallTriangle
              type="BallTriangle"
              color="#00BFFF"
              height={300}
              width={300}
              timeout={2000} //3 secs
            />
          </div>
        </div>
      </div>
    );
  }
  if (error) {
    return <p>{error}</p>;
  }
  return <div>{children}</div>;
};

export default LoaderComponent;
