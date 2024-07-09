import React from "react";
import { Col, Row } from "react-bootstrap";
import Adminsidebar from "../../Components/admin/adminsidebar";
import AdminviewOffers from "../../Components/admin/adminviewOffers";

const AdminViewOffersPage = () => {
  return (
    <Row
      className=" flex-row-reverse w-full m-auto"
      style={{ minHeight: "120vh" }}
    >
      <Col xs="4" md="3" lg="2" className="p-0">
        <Adminsidebar></Adminsidebar>
      </Col>
      <Col xs="8" md="9" lg="10">
        <AdminviewOffers></AdminviewOffers>
      </Col>
    </Row>
  );
};

export default AdminViewOffersPage;
