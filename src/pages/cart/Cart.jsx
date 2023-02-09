import React from "react";
import "./cart.scss";
import Helmet from "../../components/helmet/Helmet";
import CommonSection from "../../components/UI/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import { cartAction } from "../../redux/slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <Helmet title="Cart">
      <CommonSection title="Shopping Cart" />
      <Container>
        <Row>
          <Col lg="9">
            {cartItems.length === 0 ? (
              <h2 className=" fs-4 text-center">No Items in Cart!</h2>
            ) : (
              <table className="table bordered">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Delate</th>
                  </tr>
                </thead>

                <tbody>
                  {cartItems.map((item, index) => (
                    <Tr item={item} key={index} />
                  ))}
                </tbody>
              </table>
            )}
          </Col>

          <Col className="mt-5" lg="3">
            <div>
              <h6 className="d-flex align-items-center justify-content-between">
                Subtotal
                <span className="fs-4 fw-bold">${totalAmount}</span>
              </h6>

              <p className="fs-6 pt-2 pb-4">
                taxes and shipping will calculate in checkout
              </p>
              <div>
                <button className="buy__btn w-100">
                  <Link to="/checkout">Checkout</Link>
                </button>
                <button className="buy__btn w-100 mt-4 mb-4">
                  <Link to="/shop">Continue Shopping</Link>
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Helmet>
  );
};

const Tr = ({ item }) => {
  const dispatch = useDispatch();
  const delateProduct = () => {
    dispatch(cartAction.delateItem(item.id));
  };

  return (
    <tr>
      <td>
        <img src={item.imgUrl} alt="" />
      </td>
      <td>{item.productName}</td>
      <td>${item.price}</td>
      <td>{item.quantity}</td>
      <td>
        <motion.i
          class="ri-delete-bin-line"
          whileTap={{ scale: 1.1 }}
          onClick={delateProduct}
        ></motion.i>
      </td>
    </tr>
  );
};

export default Cart;
