import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import LoginHock from "../../all_Hocks/Auth/loginHock";
const LoginAdmin = () => {
  const [email, password, onChangeEmail, onChangePassword, onClick, x] =
    LoginHock();
  console.log(email);
  console.log(password);

  return (
    <div
      className="mx-auto mt-16"
      style={{ maxWidth: "500px", minHeight: "70vh" }}
    >
      <div className=" h-20">{x}</div>
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Col className="text-center">
            <Form.Control
              type="email"
              placeholder="Email"
              onChange={onChangeEmail}
            />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalPassword"
        >
          <Col className="text-center">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={onChangePassword}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col className="text-center">
            <Button
              type="submit"
              className=" w-72 bg-zinc-900 border-0 hover:bg-zinc-800 "
              onClick={onClick}
            >
              Sign in
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};

export default LoginAdmin;
