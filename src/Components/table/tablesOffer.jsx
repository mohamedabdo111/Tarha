import React from "react";
import { Button, Modal } from "react-bootstrap";
import DeleteProductHock from "../../all_Hocks/admin/deleteProductHock";
import DeleteOffertHock from "../../all_Hocks/admin/deleteOfferHock";

const TablessOffer = ({ items }) => {
  const [onClick, show, handleClose, handleShow] = DeleteOffertHock();

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header className=" justify-end">
          <Modal.Title>Delete this offers</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-start">
          this offer will deleted you can't return it , So are u sure
          {items.id}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={() => onClick(items.id)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      <tr>
        <td>{items.name}</td>

        <td>{items.description}</td>
        <td>{items.price}</td>

        <td>
          <Button className=" bg-danger  border-0 mx-1" onClick={handleShow}>
            Delete
          </Button>
        </td>
      </tr>
    </>
  );
};

export default TablessOffer;
