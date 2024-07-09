import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const CartrRow = ({ dataCart, index, removeFromCart }) => {
  return (
    <Row className="flex-row-reverse justify-between py-3 border-b-2">
      <Col md="8" className="flex flex-row-reverse align-items-center">
        <img
          src={`http://tarha.runasp.net/${
            dataCart && dataCart.img ? dataCart.img : null
          }`}
          alt="imageCart"
          width={"150px"}
          className="rounded-md"
        />
        <div className="ms-4">
          <h1 className="fw-semibold">
            {dataCart && dataCart.name ? dataCart.name : null}
          </h1>
          <p className=" text-gray-500 text-center">
            {dataCart && dataCart.disc ? dataCart.disc : null}
          </p>
        </div>
      </Col>
      <Col
        md="4"
        className="flex flex-row-reverse justify-between align-items-center"
      >
        <div className="fw-semibold">
          {dataCart && dataCart.price ? dataCart.price : null}$ *{" "}
          {dataCart && dataCart.count ? dataCart.count : null}
        </div>
        {/* <div>
          <Button className="bg-zinc-900 border-0 mx-2">+</Button>
          <Button className="bg-zinc-900 border-0">-</Button>
        </div> */}
        <div>
          <FontAwesomeIcon
            icon={faTrash}
            className="text-red-700 cursor-pointer fs-4 me-3"
            onClick={() => removeFromCart(index)}
          />
        </div>
      </Col>
    </Row>
  );
};

export default CartrRow;
