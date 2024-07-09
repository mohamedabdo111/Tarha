import React from "react";
import { Link, useLocation } from "react-router-dom";

const Adminsidebar = () => {
  const pathName = useLocation();
  return (
    <div
      className=" bg-gray-800 text-white text-center"
      style={{ height: "100%" }}
    >
      <Link to={"/admin/addproduct"}>
        <div
          className={`pb-2 pt-4 ${
            pathName.pathname === "/admin/addproduct" ? "text-blue-500" : null
          }`}
        >
          Add Product
        </div>
      </Link>
      <Link to={"/admin/offers"}>
        <div
          className={`p-2 ${
            pathName.pathname === "/admin/offers" ? "text-blue-500" : null
          }`}
        >
          Add offers
        </div>
      </Link>
      <Link to={"/admin/viewproduct"}>
        <div
          className={`p-2 ${
            pathName.pathname === "/admin/viewproduct" ? "text-blue-500" : null
          }`}
        >
          View Products
        </div>
      </Link>
      <Link to={"/admin/viewoffers"}>
        <div
          className={`p-2 ${
            pathName.pathname === "/admin/viewoffers" ? "text-blue-500" : null
          }`}
        >
          View Offers
        </div>
      </Link>
    </div>
  );
};

export default Adminsidebar;
