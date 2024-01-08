import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./styles.module.css";

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{
        background:
          "radial-gradient(circle, rgba(243,100,200,1) 0%, rgba(208,80,33,.9164915966386554) 89%)",
        padding: "3rem",
      }}
    >
      <Container>
        <Row>
          <Col md={4}>
            <h4 className="pb-2 text-white">About Us</h4>
            <p className="text-muted">We deliever fashion to your door</p>
          </Col>
          <Col md={4}>
            <h4 className="pb-2 text-white">Contact Us</h4>
            <p className="text-muted">
              <i className="fas fa-phone"></i> +1 (123) 456-7890
              <br />
              <i className="fas fa-envelope"></i> info@example.com
              <br />
              <i className="fas fa-map-marker-alt"></i> 123 Main Street,
              Anytown, CA 12345
            </p>
          </Col>
          <Col md={4}>
            <h4 className="text-white pb-1">Social Media</h4>
            <ul className="social-links d-flex flex-wrap">
              <li style={{ listStyleType: "none" }}>
                <a href="#">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    style={{ color: "white", paddingRight: "1rem" }}
                  />
                </a>
              </li>
              <li style={{ listStyleType: "none" }}>
                <a href="#">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    style={{ color: "white", paddingRight: "1rem" }}
                  />
                </a>
              </li>
              <li style={{ listStyleType: "none" }}>
                <a href="#">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    style={{ color: "white", paddingRight: "1rem" }}
                  />
                </a>
              </li>
              <li style={{ listStyleType: "none" }}>
                <a href="#">
                  <FontAwesomeIcon
                    icon={faPinterest}
                    style={{ color: "white", paddingRight: "1rem" }}
                  />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
