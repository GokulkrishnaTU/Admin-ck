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
  display: flex;
  flex-direction: column;
  /* min-width: 300px; */
  max-width: 700px;
  width: max-content;
  background-color: #fff;
  border-radius: 8px;
  max-height: 500px;
  height: max-content;
  padding-bottom: 20px;
  @media only screen and (max-width: 768px) {
    width: auto;
    margin: 10px;
  }
`;
export const ModalHeader = styled.div`
  padding: 5px;
  padding-left: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ModalTitle = styled.h1`
  font-size: 20px;
  font-weight: 800;
  padding-top: 5px;
  /* padding-bottom: 2px; */
`;

export const ModalBody = styled.div`
/* border-top: 1px solid rgba(0,0,0,0.1); */
  display: flex;
  flex-direction: column;
  gap: 15px;
  height: 100%;
  overflow: auto;
  padding: 20px;
`;
export const FormGroup = styled.div`
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(4,1fr);
  width: 100%;
  /* height: 100%; */
  @media only screen and (max-width: 695px){
  grid-template-columns: repeat(3,1fr);
  }
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
  background-color: rgba(0,0,0,0.03);
  /* border-radius: 5px; */
  border: ${(props) => props.border ? `1px solid red` : 'none'};
  padding: 5px;
  
`;

export const FooterDiv = styled.div`
  display: flex;
  width: 100%;
`
export const CommentCard = styled.div`
  display: flex;
  font-size: 12px;
  background-color: rgba(0,0,0,0.03);
  /* border-radius: 5px; */
  padding: 5px;
  width: auto;
`;
export const NameDiv = styled.div`
  display: flex;
  font-size: 12px;
  width: 100%;
  justify-content: flex-end;
`;
export const SubDiv = styled.div`
display: flex;
max-width: 700px;
width: auto;
flex-direction: column;
padding: 20px 40px;
padding-top: 0;
`
export const TopSection = styled.div`
display: flex;
gap: 30px;
justify-content: space-between;
align-items: center;
/* padding-left: 20px; */
@media only screen and (max-width:425px){
  flex-wrap: wrap;
  justify-content: center;
padding-left: 0;

}
`
export const TopSectionDiv = styled.div`
display: flex;
align-items: center;
flex-direction: column;
h5{
  margin: 0;
}
span{
  text-align: center;
}
`
export const ModalContentDiv = styled.div`
`