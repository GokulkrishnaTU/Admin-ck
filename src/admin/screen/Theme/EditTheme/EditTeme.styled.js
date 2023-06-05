import styled from "styled-components";

export const Modal = styled.div`
  z-index: 1001;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* background-color: rgba(0, 0, 0, 0.1); */
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(2px);
`;

export const ModalContent = styled.div`
  min-height: 430px;
  width: 400px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.1), 0 4px 15px 0 rgba(0, 0, 0, 0.1);
  @media only screen and (max-width: 627px) {
    width: 300px;
  }
  /* @media only screen and (max-width: 325px) {
    width: 290px;
  } */
`;
export const ModalHeader = styled.div`
  padding: 5px;
  padding-left: 14px;
  display: flex;
  justify-content: space-between;
`;

export const ModalTitle = styled.h1`
  font-size: 15px;
  font-weight: 400;
  padding-top: 5px;
  padding-bottom: 2px;
`;

export const ModalBody = styled.div`
  padding: 10px 5px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

export const ModalForm = styled.form`
  margin: 0px 10px;
`;
export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-bottom: 18px;
  label {
    font-size: 12px;
  }
  input {
    padding: 5px;
    border: 1px solid rgb(0, 0, 0, 0.2);
    border-radius: 5px;
  }
  textarea {
    resize: none;
    border: 1px solid rgb(0, 0, 0, 0.2);
    border-radius: 5px;
  }
  img {
    height: 70px;
    object-fit: contain;
  }
`;
export const FormDiv = styled.div`
  display: flex;
  gap: 3%;
  padding-top: 10px;
  padding-bottom: 25px;
  label {
    font-size: 12px;
    padding-right: 5px;
    white-space: nowrap;
  }
  p {
    font-size: 12px;
    margin-right: 10px;
  }
  input[type="file"] {
    width: 100px;
  }
  input[type="radio"] {
    transform: scale(0.8);
  }
  div {
    display: flex;
    gap: 3%;
  }
`;
export const Button = styled.button`
  background-color: #4669e8;
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
`;
