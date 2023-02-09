import React, { useState, useEffect } from "react";
import "./home.scss";
import { Link } from "react-router-dom";
import heroImg from "../../assets/images/hero-img.png";
import { motion } from "framer-motion";
import Helmet from "../../components/helmet/Helmet";
import Service from "../../service/Service";
import { Container, Row, Col } from "reactstrap";
import ProductList from "../../components/UI/ProductList";
import products from "../../assets/data/products";
import counterImg from "../../assets/images/counter-timer-img.png";
import Clock from "../../components/UI/Clock";

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);
  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => item.category === "chair"
    );
    const filteredBestSalesProducts = products.filter(
      (item) => item.category === "sofa"
    );
    const filteredMobileProducts = products.filter(
      (item) => item.category === "mobile"
    );
    const filteredWirelessProducts = products.filter(
      (item) => item.category === "wireless"
    );
    const filteredPopularProducts = products.filter(
      (item) => item.category === "watch"
    );
    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
    setMobileProducts(filteredMobileProducts);
    setWirelessProducts(filteredWirelessProducts);
    setPopularProducts(filteredPopularProducts);
  }, []);

  const year = new Date().getFullYear();

  return (
    <Helmet title={"Home"}>
      <section className="hero">
        <div className="container hero__container">
          <div className="hero__left">
            <p className="hero__subtitle">Trending product in {year}</p>
            <h2 className="hero__title">
              Make Your Interior More Minimalist & Modern
            </h2>
            <p className="hero__info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              voluptate quisquam saepe adipisci dignissimos, ad aliquam earum
              exercitationem perferendis sunt cumque, enim voluptas nostrum
              repudiandae. Reiciendis voluptatum nihil a eius! exercitationem
            </p>
            <motion.button whileTap={{ scale: "1.1" }} className="buy__btn">
              shop now
            </motion.button>
          </div>

          <div className="hero__right">
            <img src={heroImg} alt="" />
          </div>
        </div>
      </section>

      <Service />

      <section className="trending__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center pb-5">
              <h2 className="section__title">Trending Products</h2>
            </Col>
            <ProductList data={trendingProducts} />
          </Row>
        </Container>
      </section>

      <section className="best__sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center pb-5">
              <h2 className="section__title">Best Sales</h2>
            </Col>
            <ProductList data={bestSalesProducts} />
          </Row>
        </Container>
      </section>

      <section className="timer">
        <Container>
          <Row>
            <Col lg="6" md="12" className="timer__down-col">
              <div className="timer__top">
                <h4 className="text-white fs-6 pb-2">Limited Offers</h4>
                <h3 className="text-white fs-5 pb-3">Quality Armchairs</h3>
              </div>
              <Clock />
              <button className="buy__btn store__btn mt-4">
                <Link to="/shop">Visit Store</Link>
              </button>
            </Col>

            <Col lg="6" md="12" className="text-end counter__img">
              <img src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="new__arrivals">
        <Container>
          <Row>
            <Col lg="12" className="text-center pb-5">
              <h2 className="section__title">New Arrivals</h2>
            </Col>
            <ProductList data={mobileProducts} />
            <ProductList data={wirelessProducts} />
          </Row>
        </Container>
      </section>

      <section className="popular__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center pb-5">
              <h2 className="section__title">Popular in Category</h2>
            </Col>
            <ProductList data={popularProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
