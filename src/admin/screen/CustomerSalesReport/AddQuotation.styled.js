import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
`;

export const ModalContent = styled.div`
  height: fit-content;
  min-width: 340px;
  background-color: #fff;
  border-radius: 8px;
  @media only screen and (max-width: 627px) {
    width: 400px;
  }
  @media only screen and (max-width: 425px) {
    width: 360px;
  }
  @media only screen and (max-width: 375px) {
    width: 310px !important;
  }
`;
export const ModalHeader = styled.div`
  padding: 14px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ModalTitle = styled.h1`
  font-size: 15px;
  font-weight: 500;
  padding-top: 5px;
  padding-bottom: 2px;
`;

export const ModalBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 6px;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
`;

export const ModalForm = styled.form`
width: 100%;
  margin: 0px 10px;
`;
export const FormGroup = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 18px;
  label {
    font-size: 12px;
  }
  input {
    outline-color: rgba(0, 0, 0, 0.3);
    padding: 8px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    outline-color: rgba(0, 0, 0, 0.3);
    width: 90%;
  }
  select {
    outline-color: rgba(0, 0, 0, 0.3);
    padding: 8px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    outline-color: rgba(0, 0, 0, 0.3);
    width: 97%;
    @media only screen and (max-width: 425px) {
      width: 100%;
    }
    @media only screen and (max-width: 627px) {
      width: 100%;
    }
  }
  textarea {
    resize: none;
    padding: 8px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    outline-color: rgba(0, 0, 0, 0.3);
    width: 90%;
  }
`;
export const Button = styled.button`
  background-color: #4668e9;
  cursor: pointer;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 100;
  :hover {
    /* background-color: rgb(72, 72, 250); */
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 8px;
`;

export const DetailsDiv = styled.div`
  span {
    font-weight: 600;
    margin-right: 5px;
  }
`;

export const FormDivision = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 500px;
  @media only screen and (max-width: 627px) {
    width: 370px;
  }
  @media only screen and (max-width: 425px) {
    width: 330px;
  }
  @media only screen and (max-width: 375px) {
    width: 280px;
  }
`;
