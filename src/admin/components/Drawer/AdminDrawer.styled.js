import styled from "styled-components";
import { colors } from "../../const/style";
const DrawerContainer=styled.div`
    display:flex;
    flex-direction:column;
    position:absolute;
    background-color:${colors.white};
    top:7.5vh;
    left:0;
    width:250px;
    height:92vh;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.04);
    align-items:flex-start;
    padding:10px;
    transition:all 0.3s;
`
const DrawerIcon=styled.div `
    display:flex;
    align-items:center;
    justify-content:center;
    padding:5px;
    border-radius:100px;
    color:${colors.iconColor};
    transition:all 0.3s;
    &:hover{
        background-color:${colors.primary};
        color:${colors.white};
    }
`
const DrawerContent=styled.div`
    display:flex;
    flex-direction:column;
`
const DrawerHead=styled.div`
    display:flex;
    font-size:14px;
    font-weight:700;
    flex-direction:row;
    align-items:center;
    transition:all .3s;
    label{
        cursor:pointer;
    }
`
const DrawerSubHead=styled.div `
    display:flex;
    margin-left:10px;
    color:${props=>props.selected?colors.primary:colors.black};
    font-size:14px;
    transition:all 0.3s;
    padding:5px;
    cursor:pointer;
    label{
        cursor:pointer;
        &:hover{
            color:${colors.primary}
        }
    }
`
export {
    DrawerContainer,
    DrawerIcon,
    DrawerHead,
    DrawerContent,
    DrawerSubHead
}