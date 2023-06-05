import styled from "styled-components";
import { colors } from "../../const/style";

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
  min-width: 300px;
  width: 540px;
  background-color: #fff;
  border-radius: 8px;
  height: 500px;
  @media only screen and (max-width: 627px) {
    width: auto;
    margin: 10px;
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
  flex-direction: column;
  gap: 10px;
  padding: 10px 30px;
  padding-bottom: 40px;
  height: 70%;
  overflow: auto;
`;
export const FormGroup = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(3,1fr);
  width: 100%;
  height: 100%;
  @media only screen and (max-width: 560px){
  grid-template-columns: repeat(2,1fr);
  }
  @media only screen and (max-width: 375px){
  grid-template-columns: repeat(1,1fr);
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  background-color: rgba(0,0,0,0.1);
  border-radius: 5px;
  border: ${(props) => props.border ? `1px solid red` : 'none'};
  padding: 5px;
`;
