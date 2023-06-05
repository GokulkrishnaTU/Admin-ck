import styled from "styled-components";
import { colors } from "../../const/style";

export const MainContainer = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`;

export const CardContainer = styled.div`
    width: 30%;
    height: 250px;
border: 1px solid transparent;
border-radius: 15px;
box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
padding: 20px;
`;

export const Title = styled.h1`
text-align: center;
margin: 0;
`;

export const Buttons = styled.div`

    display: flex;
    margin-top: 60px;
    justify-content: center;
    gap: 20px;
    @media (max-width: 768px){
     flex-direction  : column ;
    }
button{
    padding: 15px 16px;
    min-width: 110px;
    border-radius: 6px;
    background-color: ${colors.primary};
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 13px;
    
}
`;
