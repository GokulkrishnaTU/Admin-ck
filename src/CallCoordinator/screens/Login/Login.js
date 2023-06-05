import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
import swal from 'sweetalert'

function Login() {
  const [number, setNumber] = useState("");
  const navigate = useNavigate();
  const sendRequest = () => {
    axios.get(`${server_api}/api/callCordinatorLogin/${number}`).then((res) => {
      console.log("res=>", res)
      if (res?.data.code == "200") {
        // alert("Login Success");
        swal({ text: 'OTP send to your mobile number', icon: 'success' })
        navigate("/call-coordinator/otp", { state: res.data?.user });
      } else {
        // alert("Login Failed");
        swal({ text: 'Login failed', icon: 'error' })

      }
    })
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest()
  };
  return (
    <Modal>
      <ModalContent>
        <ModalHeader>
          <h1>Login</h1>
          <ModalTitle>Enter your phone number to continue</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <ModalForm onSubmit={handleSubmit}>
            <NumberField>
              <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
            </NumberField>
            <Button>Log In</Button>
          </ModalForm>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default Login;
