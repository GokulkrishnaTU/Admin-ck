import styled from "styled-components";

export const Modal = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  z-index: 10000;
`;

export const ModalContent = styled.div`
  height: fit-content;
  width: 550px;
  height: max-content;
  background-color: #fff;
  box-shadow: 5px 1px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  @media only screen and (max-width: 627px) {
    width: 400px;
  }
  @media only screen and (max-width: 425px) {
    width: 350px;
  }
  @media only screen and (max-width: 375px) {
    width: auto;
    margin: 20px;
    text-align: center;
  }
`;
export const ResendOpt = styled.div`
  width: 100%;
  text-align: right;
  padding: 5px 0px;
  /* padding: 0; */
`;
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ModalHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 14px;
  /* padding-top: 30px; */
`;

export const ModalTitle = styled.h1`
  font-size: 15px;
  font-weight: 500;
  padding-top: 5px;
  padding-bottom: 2px;
  color: rgba(0, 0, 0, 0.7);
`;
export const OtpInputs = styled.div`
  display: flex;
  gap: 8%;
  input {
    width: 20%;
    height: 35px;
    text-align: center;
    font-size: 35px !important;
  }
  @media only screen and (max-width: 627px) {
    gap: 5%;
  }
`;
export const NumberField = styled.div`
  display: flex;
  width: 100%;
  input {
    width: 100%;
    font-size: 30px;
    letter-spacing: 2px;
  }
`;

export const ModalBody = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  row-gap: 40px;
  padding: 20px 70px;
  padding-top: 50px;
  padding-bottom: 100px;
  /* border-top: 1px solid rgba(0, 0, 0, 0.3); */
  input {
    padding: 10px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
  }
  @media only screen and (max-width: 627px) {
    padding: 25px;
    padding-top: 50px;
    padding-bottom: 50px;
  }
`;
export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  width: 100%;
`;

export const Button = styled.button`
  background-color: #4668e9;
  cursor: pointer;
  color: #fff;
  border: none;
  padding: 15px 16px;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 100;
  :hover {
    /* background-color: rgb(72, 72, 250); */
  }
`;
