import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Alert, Button } from "react-bootstrap";

const DateDetails = ({ productData }) => {
  const [count, setCount] = useState("");
  const [condition, setCondition] = useState(false);
  const [conditiont, setConditiont] = useState(false);

  const OnChangeClick = (e) => {
    setCount(e.target.value);
  };

  const AddInLocalStorage = async () => {
    if (count === "" || count < 1) {
      setCondition(true);

      setTimeout(() => {
        setCondition(false);
      }, 5000);

      return;
    } else {
      setCondition(false);
    }

    if (count >= 1) {
      setConditiont(true);
      setCondition(false);

      setTimeout(() => {
        setConditiont(false);
      }, 5000);
    } else {
      setConditiont(false);
    }

    const CartObject = {
      name: productData.name,
      img: productData.mainImageUrl,
      price: productData.price,
      disc: productData.description,
      count: count,
    };

    let existingCart = JSON.parse(localStorage.getItem("Cart")) || [];

    existingCart.push(CartObject);

    localStorage.setItem("Cart", JSON.stringify(existingCart));
  };

  return (
    <div style={{ minHeight: "500px" }} className="p-2">
      {condition ? (
        <Alert variant="danger">
          <Alert.Heading>حدد الكميه</Alert.Heading>
        </Alert>
      ) : null}
      {conditiont ? (
        <Alert variant="success">
          <Alert.Heading>تمت الاضافه</Alert.Heading>
        </Alert>
      ) : null}
      <h1 className=" fw-bold fs-1 mb-4 text-end">{productData.name}</h1>
      <h2 className=" mb-4 text-end " style={{ minHeight: "100px" }}>
        {productData.description}
      </h2>
      <p className=" fs-5 text-end"> {productData.price}$</p>

      <div className="my-5 text-end flex align-items-center">
        <input
          type="number"
          className=" border w-14 p-2 rounded-md me-3 "
          placeholder="1"
          onChange={OnChangeClick}
          value={count}
        ></input>
        <Button
          className=" bg-white text-black border-black "
          onClick={AddInLocalStorage}
        >
          <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon> Add To Cart
        </Button>
      </div>
    </div>
  );
};

export default DateDetails;
