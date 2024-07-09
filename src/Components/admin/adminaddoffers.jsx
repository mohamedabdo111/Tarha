import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import MultiImageInput from "react-multiple-image-input";
import PostDataHock from "../../all_Hocks/admin/postDataHock";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SpinnerHock from "../fixed/spinner";
const AdminAddOffers = () => {
  const [
    images,
    setImages,
    upload,
    AddCover,
    crop,
    onSubmit,
    onSubmitOffers,
    onChangeName,
    onChangePrice,
    onChangedisc,
    nameProduct,
    disc,
    price,
    alrt,
    setStartDate,
    startDate,
    ispress,
    loading,
  ] = PostDataHock();

  return (
    <div className=" p-2 container">
      <h1 className=" fw-semibold fs-2  mb-4 mt-2">اضافه عروض</h1>
      <div>{alrt}</div>
      <Row>
        <Col sm="7" className=" relative my-3">
          <h1 className=" my-3 fs-4 fw-semibold">صوره الغلاف</h1>
          <img src={upload} alt="imagecover" width={"150"} />
          <input
            type="file"
            accept="image/*"
            className=" opacity-0 h-full cursor-pointer top-0 absolute"
            onChange={AddCover}
          ></input>
        </Col>
        <Col sm="7">
          <h1 className=" my-3 fs-4 fw-semibold">صور المنتج </h1>

          <MultiImageInput
            images={images}
            setImages={setImages}
            cropConfig={{ crop, ruleOfThirds: true }}
            theme={"light"}
            max={4}
          />
        </Col>
        <Col sm="7">
          <input
            type="text"
            placeholder="اسم المنتج"
            className=" p-2 rounded-md border-2 w-full my-2"
            onChange={onChangeName}
            value={nameProduct}
          ></input>
        </Col>
        <Col sm="7">
          <textarea
            type="text"
            placeholder="وصف المنتج"
            className=" p-2 rounded-md border-2 w-full my-2"
            onChange={onChangedisc}
            value={disc}
          ></textarea>
        </Col>
        <Col sm="7">
          <input
            type="number"
            placeholder="سعر المنتج"
            className=" p-2 rounded-md border-2 w-full my-2"
            onChange={onChangePrice}
            value={price}
          ></input>
        </Col>
        <Col sm="7" className=" text-start">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className=" p-2 rounded-md border-2 w-full my-2 "
          />
        </Col>

        <Col sm="7" className=" text-start">
          <Button className="my-2 " onClick={onSubmitOffers}>
            اضف المنتج
          </Button>
        </Col>
      </Row>

      {loading && ispress ? (
        <div className="laodinggg bg-gray-400 flex justify-center rounded-3xl ">
          <SpinnerHock></SpinnerHock>
        </div>
      ) : null}
    </div>
  );
};

export default AdminAddOffers;
