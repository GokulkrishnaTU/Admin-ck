import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Button,
  ButtonContainer,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalTitle,
  OtpInputs,
  ResendOpt,
} from "./Login.styled";

function Otp(props) {
  const location = useLocation();
  const navigate = useNavigate();
  console.log("loc=>", location?.state?.user_id);
  const handleClick = () => {
    props?.setRole();
    localStorage.setItem("loginDetails", location?.state?.user_id);
    localStorage.setItem("role", 2);
    navigate("/view-tickets");
  };
  return (
    <Modal>
      <ModalContent>
        <ModalHeader>
          <h4>Mobile Verification</h4>
          <ModalTitle>Enter your phone number to continue</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <OtpInputs>
            <input type="number" />
            <input type="number" />
            <input type="number" />
            <input type="number" />
          </OtpInputs>
          <ButtonContainer>
            <ResendOpt>
              <span>Resend Otp</span>
            </ResendOpt>
            <Button onClick={handleClick}>Log In</Button>
          </ButtonContainer>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default Otp;
