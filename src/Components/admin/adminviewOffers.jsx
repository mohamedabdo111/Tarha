import React from "react";
import { Button, Modal, Table } from "react-bootstrap";
import GetProductHocks from "../../all_Hocks/getProduct/getProductHocks";
import DeleteProductHock from "../../all_Hocks/admin/deleteProductHock";
import DeleteOffertHock from "../../all_Hocks/admin/deleteOfferHock";
import TablessOffer from "../table/tablesOffer";

const AdminviewOffers = () => {
  const [data, dataOffers] = GetProductHocks();
  const [onClick, show, handleClose, handleShow] = DeleteOffertHock();

  console.log(dataOffers);

  return (
    <div className="p-2">
      <h1 className=" fw-semibold fs-2  mb-4 mt-2">عروضك</h1>
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
            {dataOffers && dataOffers.length >= 1
              ? dataOffers.map((item, index) => {
                  return (
                    <>
                      <TablessOffer items={item} key={index}></TablessOffer>
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

export default AdminviewOffers;
