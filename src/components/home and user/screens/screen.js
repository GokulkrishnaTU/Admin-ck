import styled from "styled-components";

export const PersonalInfoContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const PersonalInfoSub = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    @media screen and (max-width: 768px) {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    @media screen and (max-width: 425px) {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    @media screen and (max-width: 375px) {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
`;

export const InfoChild1 = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    padding: 30px;
    label {
        font-size: 16px;
    }
    @media screen and (max-width: 375px) {
        width: 85%;
        display: flex;
        flex-direction: column;
        padding: 25px;
    }

    @media screen and (max-width: 768px) {
        width: 92%;
        // display: flex;
        // flex-direction: column;
        // padding: 25px;
    }
    @media screen and (max-width: 425px) {
        width: 85%;
        display: flex;
        flex-direction: column;
        label {
            font-size: 10px;
        }
    }
`;

export const PersonalContainer = styled.div`
    width: 70%;
`;

export const EditPersonalContainer = styled.div`
    width: 70%;
`;

export const InfoChild2 = styled.div`
    margin-top: 30px;
    width: 30%;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    ${'' /* @media screen and (max-width: 425px) {
        width: 90%;
        display: flex;
        flex-direction: row;
        margin: 0 0 0 0;
        span {
            font-size: 10px;
            font-weight: 600;
        }
    } */}
    @media screen and (max-width: 768px) {
        width: 80%;
        margin-left: 23px;
        display: flex;
        flex-direction: row;
      margin-top: 0px;
        span {
            font-size: 10px;
            font-weight: 600;
        }
    }
    
`;

export const InfoHeader = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid black;
    margin-bottom: 15px;
`;
export const Info = styled.div`
    width: 50%;
    span {
        font-size: 16px;
    }
    @media screen and (max-width: 425px) {
        span {
            font-size: 12px;
        }
    }
    @media screen and (max-width: 375px) {
        span {
            font-size: 10px;
        }
    }
`;
export const Edit = styled.div`
    width: 50%;
    display: flex;
    justify-content: flex-end;
    button {
        border: none;
        background: transparent;
        color: #3255e3;
        cursor: pointer;
        font-size: 16px;
    }
    button: hover {
        font-weight: 700;
    }
    @media screen and (max-width: 425px) {
        button {
            font-size: 12px;
        }
    }
    @media screen and (max-width: 375px) {
        button {
            font-size: 10px;
        }
    }
`;

export const Description = styled.div`
    width: 80%;
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    span {
        font-size: 16px;
        font-weight: 600;
    }
    @media screen and (min-width: 768px) {
        width: 80%;
    }
    @media screen and (max-width: 425px) {
        width: 95%;
        margin-top: 5px;
        display: flex;
        align-items: center;
        span {
            font-size: 10px;
            font-weight: 600;
        }
    }
    @media screen and (max-width: 375px) {
        margin-top: 0px;
        span {
            font-size: 9px;
            font-weight: 700;
            margin-left: 5px;
        }
    }
`;

export const DesCon = styled.div`
    width: 95%;
    padding: 10px;
    text-align: justify;
    font-size: 13px;
`;

export const Des = styled.div`
    width: 100%;
`;

export const Title = styled.div`
    width: 100%;
    color: #3255e3;
    font-size: 15px;
    font-weight: 700;
`;

export const DescDetails = styled.div`
    width: 100%;
`;

export const Question = styled.div`
    width: 100%;
    font-size: 15px;
    font-weight: 700;
`;

export const Name = styled.div`
    width: ${(props) => props.width};
    display: flex;
    flex-direction: row;
    margin-bottom: ${(props) => props.mb};
    label {
        font-size: 12px;
    }
    @media screen and (max-width: 768px) {
        width: 100%;
    }
    @media screen and (max-width: 425px) {
        width: 100%;
    }
    @media screen and (max-width: 375px) {
        width: 100%;
    }
`;

export const InputText = styled.div`
    width: ${(props) => props.width};
    display: flex;
    flex-direction: row;
    margin-bottom: ${(props) => props.mb};
    label {
        font-size: 12px;
    }
    @media screen and (max-width: 425px) {
        width: 100%;
    }
    @media screen and (max-width: 375px) {
        width: 100%;
    }
`;

export const Firstname = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    label {
        font-size: 16px;
    }
    p {
        font-size: 16px;
        font-weight: 600;
        margin-top: 5px;
    }
    @media screen and (max-width: 425px) {
        label {
            font-size: 10px;
        }
        p {
            font-size: 10px;
        }
    }
    
`;
export const Lastname = styled.div`
    width: 100%;
    p {
        font-size: 13px;
        font-weight: 700;
    }
    @media screen and (max-width: 425px) {
        p {
            font-size: 12px;
        }
    }
`;

export const Input = styled.input`
    border: none;
    ::placeholder,
    ::-webkit-input-placeholder {
        color: gray;
        font-size: 13px;
        padding: 10px;
    }
`;

export const EditInput = styled.input`
    border: 1px solid gray;
    width: 90%;
    height: 30px;
    border-radius: 5px;
    margin-top: 10px;
    
    ::-webkit-datetime-edit {
        color: grey !important;
        font-size: 13px;
        padding: 10px;
    }
    ::placeholder {
        padding: 10px;
    }
`;

export const Gender = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 15px;

    label {
        font-size: 13px;
        font-weight: 600;
    }
`;

export const Radio = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 15px;
    font-size: 13px;

    span {
        display: inline-block;
        margin-left: 10px;
    }
`;

export const Anniversary = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 15px;
    label {
        width: 100%;
        font-size: 13px;
        font-weight: 600;
    }
`;

export const EditAddress = styled.div`
    width: 100%;
    margin-top: 10px;
    padding: 10px;
    border: 1px solid #3255e3;
    border-radius: 15px;
    @media screen and (max-width: 425px) {
        width: 80%;
    }
    @media screen and (max-width: 768px) {
        width: 92%;
    }
`;

export const AddressLabel = styled.div`
    width: 100%;

    label {
        font-size: 16px;
        font-weight: 600;
    }
    @media screen and (max-width: 425px) {
        label {
            font-size: 11px;
            font-weight: 600;
        }
    }
`;

export const AddressDetails = styled.div`
    width: 100%;
`;

export const AddressDetailsChild1 = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    label {
        font-size: 16px;
    }
    p {
        font-size: 16px;
        margin: 0 0 0 0;
    }
    @media screen and (max-width: 425px) {
        p {
            font-size: 12px;
        }
    }
`;

export const AddressDetailsChild2 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 40px;
    button {
        border: none;
        background: transparent;
        font-size: 16px;
        font-weight: 600;
        color: gray;
        cursor: pointer;
    }
    @media screen and (max-width: 425px) {
        button {
            font-size: 12px;
        }
    }
`;

export const PerDetCon = styled.div`
    // width:100%;
    // display: flex;
    // flex-direction: column;
`;

export const PerDetForm = styled.div`
    width: 100%;
`;

export const HeaderInPerDet = styled.div`
    width: 100%;
`;

export const NameInput = styled.div`
    width: 100%;
    padding: 20px 0 0 50px;
`;

export const FullName = styled.div`
    width: 50%;
    display: flex;
    flex-direction: row;
    margin-top: 15px;
`;

export const FirstName = styled.div`
    //width: 100%;
`;

export const LastName = styled.div`
    // width: 100%;
    margin-left: 10px;
`;

export const TextInput = styled.input`
    width: 200px;
    height: 30px;
    border: 1px solid gray;
    border-radius: 10px;
`;

export const GenderLabel = styled.div`
    width: 100%;
`;

export const EditOrgName = styled.div`
    width: 100%;
    margin-top: 10px;
    display: flex;
    flex-direction: row;
`;

export const EditProfession = styled.div`
    width: 30%;
    height: 30px;
    border: none;
    border-radius: 8px;
    // margin-top: 13px;
    select {
        width: 100%;
        height: 30px;
        border: 0px solid #c9c7c7;
        border-radius: 8px;
        color: black;
        font-size: 13px;
        // padding: 8px;

        appearance: none;
        background-image: url(data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23000000%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E) !important;
        background-repeat: no-repeat, repeat !important;
        background-position: right 0.7em top 50%, 0 0 !important;
        background-size: 0.65em auto, 100% !important;
    }
`;

export const SaveBtn = styled.div`
    width: 100%;
    margin-top: 10px;
    padding: 10px;
    border: 1px solid #3255e3;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    background: #3255e3;
    button {
        border: none;
        background: transparent;
        font-size: 16px;
        font-weight: 600;
        color: white;
        background: #3255e3;
        cursor: pointer;
    }
    @media screen and (max-width: 425px) {
        width: 80%;

        button {
            font-size: 12px;
        }
    }
    @media screen and (max-width: 768px) {
        width: 95%;

        button {
            font-size: 16px;
        }
    }
`;

export const DetailsDropDown = styled.div`
    width: 45%;
    height: 38px;
    border: 1px solid gray;
    border-radius: 8px;
    margin-top: 10px;
    margin-bottom: 10px;
    select {
        width: 100%;
        height: 38px;
        border: 0px solid #c9c7c7;
        border-radius: 8px;
        color: grey !important;
        font-size: 13px;
        padding: 2px;

        appearance: none;
        background-image: url(data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23000000%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E) !important;
        background-repeat: no-repeat, repeat !important;
        background-position: right 0.7em top 50%, 0 0 !important;
        background-size: 0.65em auto, 100% !important;
    }
    @media screen and (max-width: 425px) {
        width: 95%;
    }
`;
export const Address = styled.div`
    width: 100%;
`;

export const EditPersonalInfoSub = styled.div`
    width: 100%;
`;

export const EditInfoChild1 = styled.div`
    width: 100%;
`;

export const EditInfoChild2 = styled.div`
    width: 100%;
`;

export const LoginContainer = styled.div`
    background-color: white;
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 1;
    // align-items: center;
    // justify-content: center;
    display: flex;
    flex-direction: column;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: scroll;
`;

export const LoginConSub = styled.div`
    width: 100%;
    height: 100%;
    //background: green;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SectionLogin = styled.div`
    width: 55%;
    background: white;
    position: absolute;
    display: flex;
    flex-direction: row;
    margin-top:100px;
    @media screen and (max-width: 1440px) {
        width: 80%;
        
    }
    @media screen and (max-width: 1024px) {
        width: 80%;
        margin-top: 35px;
    }

    @media screen and (min-width: 425px) and (max-width: 768px) {
        width: 86%;
        margin-bottom:140px;
    }
    @media screen and (min-width: 320px) and (max-width: 375px) {
        width: 85%;
        margin-bottom:140px;
    }
`;

export const SectionsInLogin = styled.div`
    width: 50%;
    background: ${(props) => props.background};
    border: ${(props) => props.border};
    border-top-left-radius: ${(props) => props.btlr};
    border-bottom-left-radius: ${(props) => props.bblr};
    padding: 30px;

    @media screen and (min-width: 320px) and (max-width: 768px) {
        display: none;
    }
`;

export const SectionsInLogin2 = styled.div`
    width: 50%;
    background: ${(props) => props.background};
    border: ${(props) => props.border};
    border-top-left-radius: ${(props) => props.btlr};
    border-bottom-left-radius: ${(props) => props.bblr};
    padding: 30px;

    @media screen and (min-width: 425px) and (max-width: 768px) {
        width: 100%;
    }
    @media screen and (min-width: 320px) and (max-width: 375px) {
        width: 100%;
    }
`;

export const LoginSec1 = styled.div`
    width: 100%;
    height: 100%;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 320px) and (max-width: 768px) {
        display: none;
    }
`;

export const LoginSec2 = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const LoginInput = styled.input`
    width: 80%;
    height: 30px;
    border: 1px solid rgba(0,0,0,0.5);
    border-radius: 5px;
    padding: 10px;

    ::placeholder,
    ::-webkit-input-placeholder {
        color: #878787;
        font-size: 14px;
        padding: 10px;
    }
    @media screen and (max-width: 320px) {
        ::placeholder,
        ::-webkit-input-placeholder {
            color: #878787;
            font-size: 13px;
            line-height: 20px;
        }
    }
`;

export const LoginButton = styled.button`
    width: 84%;
    height: 50px;
    border: none;
    border-radius: 5px;
    background: #4669e8;
    font-size: 18px;
    color: white;

    @media screen and (max-width: 320px) {
        font-size: 13px;
        line-height: 20px;
    }
    @media screen and (min-width: 320px) and (max-width: 425px) {
        width: 90%;
    }
`;

export const LogoInLogin = styled.div`
    display: flex;
    justify-content: center;
    font-family: poppins;
    margin-top: ${(props) => props.mt};
    margin-left: ${(props) => props.ml};
    margin-bottom: ${(props) => props.mb};
    img {
        width: ${(props) => props.width};
        height: ${(props) => props.height};
    }
    span {
        width: ${(props) => props.width};
        font-size: ${(props) => props.fs};
        font-weight: ${(props) => props.fw};
        line-height: ${(props) => props.lh};
        color: ${(props) => props.color};
        text-align: center;
    }
    p {
        text-align: center;
        width: ${(props) => props.width};
        font-size: ${(props) => props.fs};
        font-weight: ${(props) => props.fw};
        line-height: ${(props) => props.lh};
        color: ${(props) => props.color};
    }
    button {
        width: 92%;
        height: 100%;
        padding: 10px;
        border: none;
        border-radius: 20px;
        background-color: #4669e8;
    }

    @media screen and (max-width: 1440px) {
        p {
            font-size: 14px;
            font-weight: 700;
            line-height: 20px;

            span {
                font-size: 14px;
                font-weight: 700;
                line-height: 20px;
            }
        }
    }

    @media screen and (min-width: 375px) and (max-width: 1024px) {
        p {
            text-align: center;
            font-size: 11px;
            font-weight: 700;

            span {
                text-align: center;
                font-size: 11px;
                font-weight: 700;
            }
        }
    }
    @media screen and (max-width: 320px) {
        p {
            text-align: center;
            font-size: 9px;
            font-weight: 600;
            color: rgba(0, 0, 0, 0.5);

            span {
                text-align: center;
                font-size: 9px;
                font-weight: 600;
               
            }
        }
    }
`;

export const ImgInLogin = styled.div`
    display: flex;
    justify-content: center;
    font-family: poppins;
    margin-top: ${(props) => props.mt};
    margin-left: ${(props) => props.ml};
    margin-bottom: ${(props) => props.mb};
    img {
        width: ${(props) => props.width};
        height: ${(props) => props.height};
    }
    @media screen and (min-width: 768px) and (max-width: 1024px) {
        width: 100%;
        img {
            width: 100%;
        }
    }
`;

export const LoginForm = styled.div`
    width: 90%;
`;

export const LoginTitle = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: ${(props) => props.mt};
    margin-bottom: ${(props) => props.mb};
    span {
        width: ${(props) => props.width};
        color: ${(props) => props.color};
        font-size: ${(props) => props.fs};
        font-weight: ${(props) => props.fw};
        line-height: ${(props) => props.lh};
    }
    @media screen and (min-width: 320px) {
        span {
            font-size: 13px;
            font-weight: 600;
            line-height: 20px;
        }
    }
    @media screen and (min-width: 768px) and (max-width: 1440px) {
        span {
            font-size: 18px;
            font-weight: 500;
            line-height: 20px;
            color:  rgba(#000000);
        }
    }
    @media screen and (max-width: 2560px) {
        span {
            font-size: 20px;
            font-weight: 570;
            line-height: 20px;
            color:  rgba(#000000);
        }
    }

`;

export const LoginTitle1 = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: ${(props) => props.mt};
    margin-bottom: ${(props) => props.mb};
    span {
        color: gray;
        font-size:17px;
        font-weight:500;
        line-height:25px;
    }
   
    @media screen and (min-width: 768px) and (max-width: 1440px) {
        span {
            font-size: 18px;
            font-weight: 500;
            line-height: 20px;
            color:  rgba(#000000);
        }
    }
    @media screen and (max-width: 2560px) {
        span {
            font-size: 15px;
            font-weight: 550;
            line-height: 20px;
        
        }
    }

    @media screen and (max-width: 320px) {
        span {
            font-size: 12px;
            font-weight: 500;
            line-height: 20px;
        
        }
    }

`;
export const LinkToCreate = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: ${(props) => props.mt};
    margin-bottom: ${(props) => props.mb};
    display: flex;
    flex-direction: row;
    //color: ${(props) => props.color};
    padding-top: 50%;

    @media screen and (min-width: 320px) and (max-width: 768px) {
        width:104%;
       padding-top:0px;
       margin-top:50px;
    }
`;

export const Link1 = styled.div`
    //width: 50%;
    a {
        text-decoration: none !important;
        color: ${(props) => props.color};
        font-size: ${(props) => props.fs};
        font-weight: ${(props) => props.fw};
        line-height: ${(props) => props.lh};
    }
    @media screen and (min-width: 375px) and (max-width: 425px) {
        a {
            font-size: 13px;
            font-weight: 600;
            line-height: 20px;
        }
    }
    @media screen and (max-width: 320px) {
        width: 100%;
        a {
            font-size: 11px;
            font-weight: 600;
            line-height: 20px;
        }
    }
`;
export const Link2 = styled.div`
    //width: 50%;
    margin-left: 10px;
    a {
        text-decoration: none !important;
        color: ${(props) => props.color};
        font-size: ${(props) => props.fs};
        font-weight: ${(props) => props.fw};
        line-height: ${(props) => props.lh};
    }
    @media screen and (min-width: 320px) and (max-width: 425px) {
        a {
            font-size: 13px;
            font-weight: 600;
            line-height: 20px;
        }
    }
    @media screen and (max-width: 320px) {
        width: 100%;
        margin-left: -16px;
        a {
            font-size: 11px;
            font-weight: 600;
            line-height: 20px;
        }
    }
`;
