import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { server_api } from "../../const/api";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalForm,
  ModalHeader,
  ModalTitle,
  NumberField,
} from "./Login.styled";
import swal from 'sweetalert';

function Login(props) {
  const location = useLocation()
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const sendRequest = async () => {
    const res = await axios
      .post(`${server_api}/api/loginSuperAdmin/`, {
        username: userName,
        password: password,
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then((data) => {
      console.log("Res=>", data);
      if (data.code == "200") {
        // alert("OTP send to your mobile number");
        swal({ text: 'Success', icon: 'success' })
        // navigate("/admin/otp", { state: data?.data });
        props?.setRole();
        localStorage.setItem("loginDetails", location?.state?.userid);
        localStorage.setItem("role", 1);
        navigate("/view-theme");
      } else {
        // alert("Login Failed");
        swal({ text: "Error", icon: 'error' })
      }
    });
  };
  return (
    <Modal>
      <ModalContent>
        <ModalHeader>
          <h1>Login</h1>
          <ModalTitle>Enter your user name & password to continue</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <ModalForm onSubmit={handleSubmit}>
            <NumberField>
              <label>User Name :</label>
              <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
            </NumberField>
            <NumberField>
              <label>Password :</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </NumberField>
            <Button>Log In</Button>
          </ModalForm>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default Login;
