import { color } from "@mui/system";
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
`;

export const ModalContent = styled.div`
    height: max-content;
    width: 500px;
    min-width: 400px;
    background-color: #fff;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    @media only screen and (max-width: 627px) {
        width: auto;
        min-width: 300px;
    }
`;
export const ModalHeader = styled.div`
    padding: 14px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 92%;
    justify-content: flex-end;
    span{
       color: ${colors.primary};
       cursor: pointer;
    }
`;

export const ModalTitle = styled.h1`
    font-size: 15px;
    font-weight: 500;
    padding-top: 5px;
    padding-bottom: 2px;
`;

export const ModalBody = styled.div`
    padding: 20px 6px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    /* width: 100%; */
    justify-content: center;
    align-items: center;
    padding-bottom: 30px;
    input, select{
        padding: 8px;
        border: 1px solid ${colors.grey};
        border-radius: 5px;
        font-family: poppins;
        width: 60%;
    }
    label{
        font-size: 12px;
    }
`

export const Button = styled.button`
    cursor: pointer;
    ${'' /* color: #fff; */}
    border: none;
    padding: 8px 20px;
    border-radius: 5px;
    font-size: 12px;
    font-weight: 100;
    margin-right:10px;
    background-color: ${colors.primary}; 
    color:white
`;
       
