import styled from "styled-components";
import { colors, size } from "../../const/style";
const AdminLoginContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    height:90vh;
`
const LoginFormContainer = styled.div`
    display:flex;
    flex-direction:column;
    padding:40px;
    box-shadow: 0px 7px 30px rgba(0, 0, 0, 0.07);
    border-radius: 5px;
    width:300px;
    @media (max-width:${size.MobileM}){
        width:280px;
        padding:30px;
    }
    @media (max-width:${size.MobileM}){
        width:240px;
        padding:20px;
    }
`
const Heading = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    margin-bottom:10px;
    label{
        color:${colors.black};
        font-size:${size.heading};
    }
`
const FormGroup=styled.div`
    display:flex;
    flex-direction:column;
    margin:10px;
    label{
        color:${colors.grey};
        font-size:${size.font};
        margin-bottom:3px;
    }
    input{
        padding:8px;
        border:1px solid ${colors.grey};
        border-radius:5px;
        color:${colors.black};
       &:focus{
        outline: none;
        border:1px solid ${colors.grey};
       }
    }
    select{
        padding:8px;
        border:1px solid ${colors.grey};
        border-radius:5px;
        color:${colors.black};
       &:focus{
        outline: none;
        border:1px solid ${colors.grey};
       }
    }
    
`
const ButtonGroup=styled.div`
    display:flex;
    flex-direction:row;
    margin:10px;
    align-items:center;
    justify-content:space-between;
    button{
        background-color:${colors.primary};
        border:1px solid ${colors.primary};
        padding:8px;
        border-radius:5px;
        color:${colors.white};
        font-size:${size.font};
        width:40%;
        cursor:pointer;
    }
    p{
        color:${colors.primary};
        font-size:12px;
        cursor:pointer;
    }
`
export {
    AdminLoginContainer,
    LoginFormContainer,
    Heading,
    FormGroup,
    ButtonGroup
}