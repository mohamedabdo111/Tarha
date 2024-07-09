import React, { useEffect, useState } from "react";
import one from "./images/shop1.jpg";
import two from "./images/WhatsApp Image 2024-07-08 at 22.19.05_0090510f.jpg";
import Cards from "./landingpagecomp/cards";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { GetAllProductAction } from "../redux/actions/getAllProductAction";
import GetProductHocks from "../all_Hocks/getProduct/getProductHocks";

const LandingPage = () => {
  const [data, dataOffers] = GetProductHocks();
  return (
    <div style={{ minHeight: "120vh" }}>
      <div className="imagecover h-96">
        <img src={two} alt="cover" className="w-full h-full object-fill"></img>
      </div>

      <Container>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 container mb-8  mt-24 overflow-hidden">
          <h1 className=" sm:col-span-2 md:col-span-3 lg:col-span-5 fw-bold fs-2 text-zinc-800 border-b-2 pb-7 text-center">
            منتجات
          </h1>
          {data.length >= 1 ? (
            data.map((item, index) => {
              return (
                <Cards
                  AllData={item}
                  key={index}
                  urlll={`/product-details/`}
                ></Cards>
              );
            })
          ) : (
            <h1 className=" fw-bold fs-1  text-center my-4 sm:col-span-2 md:col-span-3 lg:col-span-5 ">
              لا يوجد منتجات
            </h1>
          )}
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 container mb-8  mt-24 overflow-hidden">
          <h1 className=" sm:col-span-2 md:col-span-3 lg:col-span-5 fw-bold fs-2 text-zinc-800 border-b-2 pb-7 text-center">
            عروض
          </h1>

          {dataOffers.length >= 1 ? (
            dataOffers.map((item, index) => {
              return (
                <Cards
                  AllData={item}
                  key={index}
                  urlll={`/offers-details/`}
                ></Cards>
              );
            })
          ) : (
            <h1 className=" fw-bold fs-1 text-center my-4 sm:col-span-2 md:col-span-3 lg:col-span-5 ">
              لا يوجد عروض
            </h1>
          )}
        </div>
      </Container>
    </div>
  );
};

export default LandingPage;
