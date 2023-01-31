import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./productCart.scss";

const ProductCart = ({ item }) => {
  return (
    <Col className="mb-5" lg="3" md="4">
      <div className="product">
        <div className="product__item">
          <div className="product__img">
            <motion.img whileHover={{ scale: 1.1 }} src={item.imgUrl} alt="" />
          </div>
          <div className="product__info">
            <h3 className="product__name">
              <Link to="/shop/id">{item.productName}</Link>
            </h3>
            <span>{item.category}</span>
          </div>
          <div className="product__cart-buttom">
            <span className="product__cart-price">${item.price}</span>
            <motion.span whileTap={{ scale: 1.2 }}>
              <i class="ri-add-line"></i>
            </motion.span>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ProductCart;
