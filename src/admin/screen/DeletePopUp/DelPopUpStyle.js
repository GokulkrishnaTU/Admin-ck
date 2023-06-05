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
`;

export const ModalContent = styled.div`
    height: 320px;
    min-width: 450px;
    background-color: #fff;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 627px) {
        width: 300px;
    }
    @media only screen and (max-width: 320px) {
        min-width: 295px;
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
    padding: 20px 6px;
    ${'' /* border-top: 1px solid rgba(0, 0, 0, 0.3); */}
`;

export const ModalForm = styled.form`
    margin: 0px 10px;
`;
export const FormGroup = styled.div`
    display: flex;
    justify-content: center;
    label {
        font-size: 30px;
    }
   
   
`;

export const FormDiv = styled.div`
    display: flex;
    gap: 3%;
    padding-bottom: 25px;
    label {
        font-size: 12px;
        padding-right: 5px;

        padding-top: 13px;
    }
    p {
        font-size: 12px;
        margin-right: 10px;
    }
    input[type="file"] {
        padding-left: 5px;
        padding-top: 10px;
        font-size: 12px;
        width: 180px;
    }
    input[type="radio"] {
        transform: scale(0.8);
    }
    div {
        display: flex;
        gap: 3%;
    }
    @media only screen and (max-width: 320px) {
        gap: 0px;
    }
`;
export const Button = styled.button`
   background-color: ${(props) => props.bg};
    color: ${(props) => props.color};
    cursor: pointer;
    ${'' /* color: #fff; */}
    border: none;
    padding: 8px 16px;
    border-radius: 5px;
    font-size: 12px;
    font-weight: 100;
    margin-right:10px;
    background-color: '#4668e9'; 
    color:white;
    &:hover {
        background-color: ${(props) => props.color};
        color: ${(props) => props.bg};
        transition: 0.5s;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-diectio: row;
    justify-content: center;
    margin-top: 20px;
`;
