import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import Brands from "../Brands/Brands";
import Caroussel from "../Caroussel/Caroussel";
import Footer from "../Footer/Footer";
import BlogSection from "../Blogcomponent/Blog";

const Home = () => {
  return (
    <div>
      <Container className={styles.home}>
        <p>Summer 2023</p>
        <h1>New collection</h1>
        <p>We know how large objects will act, but things on a small scale.</p>
        <Button variant="primary" className="bg-white mt-4">
          <Link to="./shop" className={styles.link}>
            Shop Now
          </Link>
        </Button>
      </Container>

      <BlogSection />
      <div className="parallax">
        <Brands />
      </div>
      <Caroussel />
      <Footer />
    </div>
  );
};
export default Home;
