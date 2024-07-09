import React from "react";
import { Container } from "react-bootstrap";
import Cart from "../../Components/Cart/cart";

const CartPage = () => {
  return (
    <>
      <div className=" h-64 bg-zinc-900 text-white text-center p-3 mb-3">
        <h1 className=" fw-bold fs-1 pt-9">Welcome</h1>
        <h1 className="py-5 fw-semibold fs-3 ">
          Take ScreenShot and contact  me :
          <a
            href="https://www.instagram.com/tarhaa20/"
            target="_blank"
            className=" text-primary"
          >
            {" "}
            Click here
          </a>
        </h1>
      </div>

      {/* cart shopping */}
      <Container className="py-3">
        <Cart></Cart>
      </Container>
    </>
  );
};

export default CartPage;
