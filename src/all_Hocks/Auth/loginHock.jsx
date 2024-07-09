import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostLoginAction } from "../../redux/actions/LoginAction";
import { Alert } from "react-bootstrap";
import { json } from "react-router-dom";

const LoginHock = () => {
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [x, setX] = useState("");

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onClick = async (e) => {
    e.preventDefault();
    setLoading(true);
    await dispatch(
      PostLoginAction({
        email,
        password,
      })
    );
    setLoading(false);
  };

  const res = useSelector((item) => item.LOGIN.Login);

  useEffect(() => {
    if (loading === false) {
      console.log(res);
      ////////////////////////
      if (
        res &&
        res.data &&
        res.data.errors &&
        res.data.errors.Email &&
        res.data.errors.Email[0] === "The Email field is required."
      ) {
        setX(
          <Alert variant="danger">
            <Alert.Heading> </Alert.Heading>
            <p className=" text-center">Email is required</p>
          </Alert>
        );
      } else if (
        res &&
        res.data &&
        res.data.errors &&
        res.data.errors.Password &&
        res.data.errors.Password[0] === "The Password field is required."
      ) {
        setX(
          <Alert variant="danger">
            <Alert.Heading> </Alert.Heading>
            <p className=" text-center">Password is required</p>
          </Alert>
        );
      } else if (
        res &&
        res.data &&
        res.data.message === "Wrong Email or Password"
      ) {
        setX(
          <Alert variant="danger">
            <Alert.Heading> </Alert.Heading>
            <p className=" text-center">Wrong Email or Password</p>
          </Alert>
        );
      } else if (res && res.statusCode === 200) {
        if (res && res.data) {
          localStorage.setItem("AdminData", JSON.stringify(res.data));
          localStorage.setItem("token", res.data.token);
          window.location.href = "/admin/addproduct";
        }
      }
    }
  }, [loading]);
  setTimeout(() => {
    setX("");
  }, 5000);
  return [email, password, onChangeEmail, onChangePassword, onClick, x];
};

export default LoginHock;
