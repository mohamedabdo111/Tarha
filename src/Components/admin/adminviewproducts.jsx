import React from "react";
import { Button, Modal, Table } from "react-bootstrap";
import GetProductHocks from "../../all_Hocks/getProduct/getProductHocks";
import DeleteProductHock from "../../all_Hocks/admin/deleteProductHock";
import Tabless from "../table/table";

const Adminviewproducts = () => {
  const [data, dataOffers] = GetProductHocks();
  return (
    <div className="p-2">
      <h1 className=" fw-semibold fs-2  mb-4 mt-2">منتجاتك</h1>
      <div>
        <Table responsive="sm" dir="ltr">
          <thead>
            <tr>
              <th>Name</th>
              <th>Discription</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data && data.length >= 1
              ? data.map((items, index) => {
                  return (
                    <>
                      <Tabless items={items} key={index}></Tabless>
                    </>
                  );
                })
              : null}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Adminviewproducts;
