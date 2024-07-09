import React from "react";
import { Col, Row } from "react-bootstrap";
import Adminsidebar from "../../Components/admin/adminsidebar";
import Adminaddproduct from "../../Components/admin/adminaddproduct";

const AdminAddProductPage = () => {
  return (
    <Row className=" flex-row-reverse w-full m-auto">
      <Col xs="4" md="3" lg="2" className="p-0">
        <Adminsidebar></Adminsidebar>
      </Col>
      <Col xs="8" md="9" lg="10">
        <Adminaddproduct></Adminaddproduct>
      </Col>
    </Row>
  );
};

export default AdminAddProductPage;
