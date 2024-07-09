import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

import { Badge, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import DeleteOffertHock from "../../all_Hocks/admin/deleteOfferHock";
const Cards = ({ AllData, urlll }) => {
  const [AdminPermision, setAdminPermision] = useState("");
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    if (localStorage.getItem("AdminData") != null) {
      setAdminPermision(JSON.parse(localStorage.getItem("AdminData")));
    }
  }, []);

  const dateStr = startDate;
  const date = new Date(AllData.endIn);

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  const formattedDate = `${month} ${String(day).padStart(2, "0")} ${year}`;

  return (
    <>
      {/* start */}
      <div className="card overflow-hidden  hover:scale-105 transition-all ease-in-out mt-3 mb-3 tran hover:shadow-lg">
        {AllData && AllData.endIn ? (
          <div className="bageparent">
            <Badge bg="danger">Offer</Badge>
          </div>
        ) : null}

        <div className="imgParent h-52 overflow-hidden ">
          <img
            src={`https://tarhaa.runasp.net/${
              AllData ? AllData.mainImageUrl : null
            }`}
            alt="imageProduct"
            className="h-full w-full "
            loading="lazy"
          ></img>
        </div>
        <div className="productDetails text-center ">
          <h3 className=" fw-semibold fs-4 mt-4 mb-2">
            {AllData ? AllData.name : null}
          </h3>
          {AllData && AllData.endIn ? (
            <p className=" fw-semibold m-0 text-danger">
              {" "}
              {AllData ? formattedDate : null}
            </p>
          ) : null}
          <p className=" fw-semibold m-0"> {AllData ? AllData.price : null}$</p>
          <Link to={`${urlll}${AllData ? AllData.id : null}`}>
            <Button className=" my-3 bg-white text-black border-black">
              Details
            </Button>
          </Link>
        </div>
      </div>
      {/* end */}
    </>
  );
};

export default Cards;
