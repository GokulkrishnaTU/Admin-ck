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
export const Container = styled.div`
  position: relative;
  margin-left: 15%;
  margin-top: 80px;
  width: 85vw;
  @media screen and (max-width: 768px) {
    width: 100vw;
    margin: 50px 0px !important;
  }
  @media screen and (max-width: 1025px) {
    width: 100vw;
    margin-left: 0px;
  }
`;

export const ModalContent = styled.div`
  height: fit-content;
  min-width: max-content;
  background-color: #fff;
  border-radius: 8px;
  position: relative;
  @media only screen and (max-width: 395px) {
    min-width: 310px;
  }
`;
export const ModalHeader = styled.div`
  padding: 5px;
  padding-left: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ModalTitle = styled.h1`
  font-size: 15px;
  font-weight: 500;
  padding-top: 2px;
`;

export const ModalBody = styled.div`
  padding: 10px 6px;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
`;

export const ModalForm = styled.form`
  margin: 0px 5px;
`;
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  ${"" /* margin-left: 30px; */}
  @media screen and (max-width: 769px) {
    margin-left: 12px;
  }
`;
export const FormSubDiv = styled.div`
  width: 60%;
  background-color: #f5f5f5;
  border-radius: 10px;
  padding: 30px;
  padding-right: 20px;
  p {
    border-bottom: 1px solid rgb(0, 0, 0, 0.2);
    padding-bottom: 30px;
    margin-bottom: 50px;
    margin-right: 10px;
  }
  @media screen and (max-width: 1441px) {
    width: 80%;
  }
  @media screen and (max-width: 1025px) {
    width: 90%;
  }
  @media screen and (max-width: 769px) {
    width: 100%;
    margin-right: 12px;
    ${"" /* padding-right: 30px; */}
  }
`;
export const SubContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 3% 7%;
  padding: 20px;
  @media screen and (max-width: 768px) {
    margin: 3%;
  }
`;
// export const FormDivision = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   /* flex-wrap: wrap; */
//   /* flex-direction: row; */
//   gap: 10px;
//   justify-content: space-between;
//   width: 600px;
//   margin-bottom: 10px;
//   @media only screen and (max-width: 658px) {
//     width: 450px;
//   }
//   @media only screen and (max-width: 496px) {
//     width: 350px;
//   }
//   @media only screen and (max-width: 496px) {
//     flex-wrap: wrap !important;
//   }
//   @media only screen and (max-width: 395px) {
//     width: 300px;
//   }
// `;
export const FormDivision = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 10px;
  row-gap: 0;
  width: 100%;
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;
export const FormDivision1 = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 25px;
  flex-wrap: nowrap;
  width: 100%;
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;
export const AutoFillDiv = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-between;
  /* gap: 5px; */

  width: 100%;
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

export const FormDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* flex-wrap: wrap; */
  /* flex-direction: row; */
  gap: 10px;
  /* justify-content: space-between; */
  width: 600px;
  margin-bottom: 10px;
  @media only screen and (max-width: 658px) {
    width: 450px;
  }
  @media only screen and (max-width: 496px) {
    width: 350px;
  }
  @media only screen and (max-width: 496px) {
    flex-wrap: wrap !important;
  }
  @media only screen and (max-width: 395px) {
    width: 300px;
  }
`;

// export const FormGroup = styled.div`
//   display: flex;
//   flex-direction: column;
//   padding-bottom: 5px;
//   width: 23.7%;
//   @media only screen and (max-width: 658px) {
//     width: 140px;
//   }
//   @media only screen and (max-width: 496px) {
//     width: 170px !important;
//   }
//   @media only screen and (max-width: 395px) {
//     width: 100px !important;
//   }
//   @media only screen and (max-width: 395px) {
//     width: 140px !important;
//   }
//   label {
//     font-size: 12px;
//     padding-right: 10px;
//   }
//   input {
//     outline-color: rgba(0, 0, 0, 0.3);
//     padding: 5px;
//     border: 1px solid rgba(0, 0, 0, 0.2);
//     border-radius: 5px;
//     outline-color: rgba(0, 0, 0, 0.3);
//     font-size: 12px;
//   }
//   textarea {
//     resize: none;
//     border: 1px solid rgba(0, 0, 0, 0.2);
//     border-radius: 5px;
//     outline-color: rgba(0, 0, 0, 0.3);
//     font-size: 12px;
//     padding: 5px;
//   }
//   select {
//     padding: 3px;
//     cursor: pointer;
//     overflow-y: scroll;
//     border-radius: 5px;
//     outline-color: rgba(0, 0, 0, 0.3);
//     border: 1px solid rgba(0, 0, 0, 0.2);
//     font-size: 12px;
//   }
//   /* @media only screen and (max-width: 395px) {
//     input{
//       width: 120px;
//     }
//     textarea{
//       width: 120px;
//       padding: 1px 5px;
//     }
//     select{
//       width: 135px;
//     }
//     span{
//       display: none;
//     }
//   } */
// `;
export const FormGroup = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 2%;
  padding-bottom: 18px;
  font-size: 14px;
  @media screen and (max-width: 500px) {
    width: 100% !important;
  }
  span {
    padding-left: 5px;
    font-size: 14px;
  }
  label {
    font-size: 14px;
  }
  input {
    outline-color: rgba(0, 0, 0, 0.3);
    padding: 9px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    outline-color: rgba(0, 0, 0, 0.3);
    width: 90%;
    @media screen and (max-width: 500px) {
      width: 90%;
    }
  }
  input[type="file"] {
    outline-color: rgba(0, 0, 0, 0.3);
    padding: 6px 8px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    outline-color: rgba(0, 0, 0, 0.3);
    background-color: white;
    width: 90%;
  }
  select {
    outline-color: rgba(0, 0, 0, 0.3);
    padding: 9px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    outline-color: rgba(0, 0, 0, 0.3);
    width: 96%;

    @media screen and (max-width: 500px) {
      width: 95%;
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

export const FormGroup2 = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 2%;
  padding-bottom: 18px;
  font-size: 14px;
  @media screen and (max-width: 500px) {
    width: 95% !important;
  }
  span {
    padding-left: 5px;
    font-size: 14px;
  }
  label {
    font-size: 14px;
  }
  input {
    outline-color: rgba(0, 0, 0, 0.3);
    padding: 9px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    outline-color: rgba(0, 0, 0, 0.3);
    width: 90%;
    @media screen and (max-width: 500px) {
      width: 90%;
    }
  }
  select {
    outline-color: rgba(0, 0, 0, 0.3);
    padding: 9px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    outline-color: rgba(0, 0, 0, 0.3);
    width: 96%;

    @media screen and (max-width: 500px) {
      width: 95%;
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

export const FormSubGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 5px;
  width: 23.75%;
  @media only screen and (max-width: 658px) {
    width: 23.2%;
  }
  @media only screen and (max-width: 496px) {
    width: 170px;
  }
  @media only screen and (max-width: 395px) {
    width: 140px;
  }
  label {
    font-size: 12px;
    padding-right: 10px;
  }
  input {
    outline-color: rgba(0, 0, 0, 0.3);
    padding: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    outline-color: rgba(0, 0, 0, 0.3);
    font-size: 12px;
  }
  textarea {
    resize: none;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    outline-color: rgba(0, 0, 0, 0.3);
    font-size: 12px;
    padding: 5px;
  }
  select {
    padding: 3px;
    cursor: pointer;
    overflow-y: scroll;
    border-radius: 5px;
    outline-color: rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(0, 0, 0, 0.2);
    font-size: 12px;
  }
  /* @media only screen and (max-width: 395px) {
    input{
      width: 120px;
    }
    textarea{
      width: 120px;
      padding: 1px 5px;
    }
    select{
      width: 135px;
    }
    span{
      display: none;
    }
  } */
`;
export const FormGroup1 = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  padding-bottom: 18px;
  width: 100%;
  @media screen and (max-width: 500px) {
    width: 95% !important;
  }
  label {
    font-size: 14px;
  }
  input {
    outline-color: rgba(0, 0, 0, 0.3);
    padding: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    outline-color: rgba(0, 0, 0, 0.3);
    font-size: 12px;
  }
  textarea {
    resize: none;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    outline-color: rgba(0, 0, 0, 0.3);
    font-size: 12px;
    padding: 5px;
    @media screen and (max-width: 500px) {
      width: 94%;
    }
  }
  select {
    padding: 10px;
    cursor: pointer;
    overflow-y: scroll;
    border-radius: 5px;
    outline-color: rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(0, 0, 0, 0.2);
    font-size: 12px;
  }
`;
