import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import CartrRow from "./cartrRow";
import { Link } from "react-router-dom";

const Cart = () => {
  if (JSON.parse(localStorage.getItem("Cart")) != null) {
    var CartData = JSON.parse(localStorage.getItem("Cart"));
  } else {
    CartData = [];
  }

  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("Cart")) || [];
    setCartItems(items);
    const total = items.reduce((acc, item) => acc + item.price * item.count, 0);
    setTotalPrice(total);
  }, []);

  const removeFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
    localStorage.setItem("Cart", JSON.stringify(updatedCartItems));
    const total = updatedCartItems.reduce(
      (acc, item) => acc + item.price * item.count,
      0
    );
    setTotalPrice(total);
  };

  return (
    <Row className=" rounded-md overflow-hidden border my-11">
      <Col
        sm="12"
        className="flex flex-row-reverse justify-between bg-zinc-900 p-3 text-white align-items-center"
      >
        <h1 className=" fw-semibold">Shopping cart</h1>
        <Link to="/">
          <h1 className="border p-2 rounded-md cursor-pointer">
            Continue shopping
          </h1>
        </Link>
      </Col>

      <Col sm="12">
        {CartData && CartData.length >= 1 ? (
          CartData.map((item, index) => {
            return (
              <CartrRow
                dataCart={item}
                key={index}
                index={index}
                removeFromCart={removeFromCart}
              ></CartrRow>
            );
          })
        ) : (
          <div className=" fw-bold fs-3 p-5 text-center">لا يوجد بيانات</div>
        )}
      </Col>
      <Col className="  p-2">
        <div className=" border-2 p-2 text-center fw-semibold w-52 rounded-md">
          Total(EG): {totalPrice}
        </div>
      </Col>
    </Row>
  );
};

export default Cart;
