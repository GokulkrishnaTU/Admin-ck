import styled from "styled-components";

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
export const MenuBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3% 10%;
  padding: 30px;
  gap: 10px 30px;
  border-radius: 5px;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.1), 0 4px 15px 0 rgba(0, 0, 0, 0.1);
  p {
    font-weight: 400;
  }
  @media screen and (max-width: 769px) {
    flex-direction: column;
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 10%;
  }
`;
export const FormSubDiv = styled.div`
  width: 60%;
  background-color: #f7f7f7;
  border: 1px solid rgb(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 30px;
  padding-right: 20px;
  margin-bottom: 10px;
  @media screen and (max-width: 1441px) {
    width: 80%;
  }
  @media screen and (max-width: 1025px) {
    width: 90%;
  }
  @media screen and (max-width: 769px) {
    width: 100%;
    margin-right: 12px;
    padding-right: 30px;
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
export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-left: 30px;
  @media screen and (max-width: 769px) {
    margin-left: 12px;
  }
`;
export const FormDivision = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4.2%;
  width: 100%;
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;
export const FormHeader = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  width: 97%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 5px;
  margin-bottom: 20px;
`;
export const FormGroup = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 2%;
  padding-bottom: 18px;
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
    padding: 8px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    outline-color: rgba(0, 0, 0, 0.3);
    width: 90%;
    @media screen and (max-width: 500px) {
      width: 95%;
    }
  }
  select {
    outline-color: rgba(0, 0, 0, 0.3);
    padding: 8px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    outline-color: rgba(0, 0, 0, 0.3);
    width: 97%;
    @media only screen and (max-width: 627px) {
      width: 100% !important;
    }
  }
  textarea {
    resize: none;
    padding: 8px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    outline-color: rgba(0, 0, 0, 0.3);
    width: 95%;
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
  margin-top: 30px;
`;

export const IconContainer = styled.div`
display: flex;
width: 40%;
justify-content: space-between;
a{
  text-decoration: underline;
  color: blue;
  cursor: pointer;
}
`