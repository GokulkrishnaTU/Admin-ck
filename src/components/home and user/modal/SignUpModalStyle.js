import styled from "styled-components";

export const Container = styled.div`
    background-color: white;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    ${"" /* padding: 50px; */}
    ${"" /* overflow: scroll; */}
    z-index: 1;
`;

export const DetailsContainer = styled.div`
    background-color: rgb(0, 0, 0, 0.6);
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: scroll;
    display: flex;
    backdrop-filter: blur(0.5px);
`;

export const SubOtpContainer = styled.div`
    display: flex;
    background-color: white;
    height: auto;
    position: relative;
    border-radius: 10px;

    @media (max-width: 1024px) {
        width: auto;
    }
`;

export const Overlay = styled.div`
    width: 60%;
    display: flex;
    flex-direction: row;
    background-color: white;

    @media screen and (min-width: 768px) and (max-width: 2560px) {
        width: 80%;
        margin-top: 80px;
        margin-bottom: 80px;
    }
    @media screen and (min-width: 320px) and (max-width: 425px) {
        width: 85%;
        margin-top: 30px;
        margin-bottom: 30px;
    }
`;

export const OtpDetails = styled.div`
    width: 100%;
    background-color: white;
    padding: 10%;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    @media screen and (max-width: 425px) {
        width: 300px;
    }
    @media screen and (max-width: 375px) {
        width: 300px;
    }
    @media screen and (max-width: 320px) {
        width: 250px;
    }
`;

export const OtpLogo = styled.div`
    width: 60%;
    display: flex;
    justify-content: center;
    img {
        width: 75%;
        height: 100%;
    }

    @media screen and (max-width: 1024px) {
        img {
            width: 90%;
            height: 100%;
        }
    }
    @media screen and (max-width: 1440px) {
        img {
            width: 90%;
            height: 100%;
        }
    }
`;

export const SentOtp = styled.div`
    width: 60%;
    background-color: white;
    display: flex;
    justify-content: center;
    margin-top: 5%;
    p {
        color: #73736f;
        font-size: 12px;
    }

    @media screen and (max-width: 1024px) {
        p {
            font-size: 12px;
            font-weight: 400;
        }
    }

    @media screen and (max-width: 768px) {
        p {
            color: #73736f;
            font-size: 10px;
        }
    }
    @media screen and (max-width: 320px) {
        width: 100%;
        p {
            color: #73736f;
            font-size: 5px;
        }
    }
    @media screen and (max-width: 425px) {
        width: 100%;
        p {
            color: #73736f;
            font-size: 9px;
            font-weight: 300;
        }
    }
`;

export const Otp = styled.div`
    width: 60%;
    display: flex;
    justify-content: center;
    margin-top: 5%;
    input {
        width: 35px;
        height: 40px;
        border: 1px solid #73736f;
        border-radius: 10px;
        margin-left: 10px;
    }
    @media screen and (max-width: 1024px) {
        input {
            width: 30px;
            height: 30px;
            border: 1px solid #73736f;
            border-radius: 5px;
        }
    }
    @media screen and (max-width: 768px) {
        input {
            width: 30px;
            height: 30px;
            border: 1px solid #73736f;
            border-radius: 5px;
            margin-left: 5px;
        }
    }

    @media screen and (max-width: 320px) {
        width: 100%;
        display: flex;
        flex-direction: row;
        input {
            width: 20px;
            height: 10px;
        }
    }
    @media screen and (max-width: 425px) {
        input {
            width: 25px;
            height: 25px;
        }
    }
`;

export const ResendOtp = styled.div`
    width: 60%;
    display: flex;
    justify-content: flex-end;
    margin-top: 5%;
    font-size: 12px;
    a {
        color: #3255e3;
    }
    @media screen and (max-width: 768px) {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        a {
            color: #3255e3;
            font-size: 10px;
            padding-right: 15px;
        }
    }
    @media screen and (max-width: 1024px) {
        width: 50%;
    }
`;
export const BtnContinue = styled.div`
    width: 60%;
    margin-top: 20px;
    button {
        width: 100%;
        height: 30px;
        border: 1px solid #73736f;
        border-radius: 5px;
        background-color: #3255e3;
        color: white;
    }
    @media screen and (max-width: 768px) {
        button {
            width: 50%;
        }
    }
    @media screen and (max-width: 1440px) {
        width: 60%;
        margin-top: 20px;
        margin-left: 10px;
        button {
            width: 100%;
        }
    }

    @media screen and (max-width: 1024px) {
        width: 50%;
        margin-top: 20px;
        margin-left: 10px;
        button {
            width: 100%;
        }
    }
`;

export const PurchaseContainer = styled.div`
    width: 70%;
    height: 75%;
    background-color: yellow;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const PurSubContainer = styled.div`
    width: 90%;
    height: 90%;
    background-color: white;
`;

export const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: ${(props) => props.mt};
    img {
        width: ${(props) => props.width};
        padding-top: ${(props) => props.pt};
        margin-bottom: {
            ${(props) => props.marginBottom}px
        }
    }
    span {
        width: ${(props) => props.width};
        color: ${(props) => props.color};
        font-size: ${(props) => props.fs};
        font-weight: ${(props) => props.fw};
        line-height: ${(props) => props.lh};
    }
    @media screen and (max-width: 768px) {
        img {
            width: 60px;
        }
    }
    @media screen and (max-width: 320px) {
        img {
            padding-top: 20px;
        }
    }
`;

export const PurchaseDetails = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    p {
        color: Black;
        font-size: 25px;
        font-weight: 500;
    }
    @media screen and (max-width: 768px) {
        p {
            font-size: 15px;
            font-weight: 500;
        }
    }
    @media screen and (max-width: 320px) {
        p {
            font-size: 8px;
            font-weight: 250;
        }
    }
    @media screen and (max-width: 425px) {
        p {
            font-size: 8px;
            font-weight: 250;
        }
    }
`;

export const PurchaseButton = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: row;
    margin-top: 30px;
    @media screen and (max-width: 320px) {
        width: 100%;
        height: 50%;
        display: flex;
        flex-direction: row;
        margin-top: 15px;
    }
    @media screen and (max-width: 425px) {
        margin-top: 10px;
    }
`;

export const PurchaseButton1 = styled.div`
    width: 45%;
    height: 50%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    button {
        width: 80%;
        height: 60%;
        border: 1px solid #3255e3;
        border-radius: 15px;
        background-color: white;
        color: #3255e3;
        font-size: 25px;
        font-weight: 500;
    }
    button:hover {
        background-color: #3255e3;
        border-color: #3255e3;
        color: white;
        transition: 0.5s;
    }
    @media screen and (max-width: 1024px) {
        button {
            font-size: 20px;
            font-weight: 500;
        }
    }
    @media screen and (max-width: 768px) {
        button {
            height: 40%;
            font-size: 15px;
            font-weight: 500;
        }
    }
    @media screen and (max-width: 320px) {
        button {
            width: 80%;
            height: 20%;
            border: 1px solid #3255e3;
            border-radius: 5px;
            font-size: 5px;
            font-weight: 250;
        }
    }
    @media screen and (max-width: 425px) {
        button {
            width: 80%;
            height: 20%;
            border: 1px solid #3255e3;
            border-radius: 5px;
            font-size: 5px;
            font-weight: 250;
        }
    }
`;
export const PurchaseButton2 = styled.div`
    width: 50%;
    height: 50%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-left: 25px;

    button {
        width: 80%;
        height: 60%;
        border: 1px solid #3255e3;
        border-radius: 15px;
        background-color: #3255e3;
        color: white;
        font-size: 25px;
        font-weight: 500;
    }
    button:hover {
        background-color: white;
        border-color: #3255e3;
        color: #3255e3;
        transition: 0.5s;
    }
    @media screen and (max-width: 1024px) {
        button {
            font-size: 20px;
            font-weight: 500;
        }
    }
    @media screen and (max-width: 768px) {
        margin-left: 10px;
        button {
            height: 40%;
            font-size: 15px;
            font-weight: 500;
        }
    }
    @media screen and (max-width: 320px) {
        margin-left: 5px;
        button {
            width: 80%;
            height: 20%;
            border: 1px solid #3255e3;
            border-radius: 5px;
            font-size: 8px;
            font-weight: 250;
        }
    }
    @media screen and (max-width: 425px) {
        margin-left: 5px;
        button {
            width: 80%;
            height: 20%;
            border: 1px solid #3255e3;
            border-radius: 5px;
            font-size: 5px;
            font-weight: 250;
        }
    }
`;

export const DetailsInput = styled.input`
    width: 65%;
    height: 40px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    //margin-bottom: 15px;
    ::placeholder,
    ::-webkit-input-placeholder {
        color: #878787;
        font-size: 12px;
        padding: 10px;
    }
    @media screen and (min-width: 320px) and (max-width: 425px) {
        width: 85%;
        ::placeholder,
        ::-webkit-input-placeholder {
            color: #878787;
            font-size: 12px;
            padding: 10px;
        }
    }
    @media screen and (min-width: 768px) and (max-width: 1880px) {
        width: 85%;
        ::placeholder,
        ::-webkit-input-placeholder {
            color: #878787;
            font-size: 14px;
            padding: 10px;
        }
    }
`;

export const ErrorMsg = styled.div`
    width: 65%;
    p {
        font-size: 12px;
        color: red;
    }
`;

export const InputDate = styled.input`
    width: 65%;
    height: 40px;
    border: 1px solid #c9c7c7;
    border-radius: 8px;

    ::placeholder,
    ::-webkit-input-placeholder {
        color: #878787;
        font-size: 12px;
        padding: 10px;
    }
    ::-webkit-datetime-edit {
        color: #878787;
        font-size: 12px;
        padding: 10px;
    }

    @media screen and (min-width: 320px) and (max-width: 425px) {
        width: 85%;
        ::-webkit-datetime-edit {
            color: #878787;
            font-size: 12px;
        }
    }

    @media screen and (min-width: 768px) and (max-width: 1880px) {
        width: 85%;
        ::-webkit-datetime-edit {
            color: #878787;
            font-size: 14px;
        }
    }
`;

export const DetailsDropDown = styled.select`
    width: 65.5%;
    height: 44.5px;
    border: 1px solid #c9c7c7;
    border-radius: 8px;

    ${'' /* select { */}
        ${'' /* width: 100%; */}
        ${'' /* height: 30px;
        border: 0px solid #c9c7c7;
        border-radius: 8px; */}
        color: #878787;
        font-size: 12px;
        padding: 8px;

        appearance: none;
        background-image: url(data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23000000%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E) !important;
        background-repeat: no-repeat, repeat !important;
        background-position: right 0.7em top 50%, 0 0 !important;
        background-size: 0.65em auto, 100% !important;
    ${'' /* } */}

    @media screen and (min-width: 320px) and (max-width: 425px) {
        width: 85%;
        select {
            color: #878787;
            font-size: 12px;
        }
    }
    @media screen and (min-width: 768px) and (max-width: 1880px) {
        width: 86%;
        select {
            color: #878787;
            font-size: 14px;
        }
    }
`;

export const DetailsBtn = styled.div`
     {
        width: 65.5%;
        display: flex;
        flex-direction: column;
    }
    @media screen and (min-width: 768px) and (max-width: 1880px) {
        width: 86%;
    }
    @media screen and (min-width: 320px) and (max-width: 425px) {
        width: 85%;
    }
`;

export const Modal = styled.div`
    width: 100%;
    display: flex;
    background-color: white;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 320px) and (max-width: 1880px) {
        margin-top: 0px;
        overflow: scroll;
    }
`;
export const Details = styled.div`
    width: 100%;
    background: ${(props) => props.bg};
    border-top-left-radius: ${(props) => props.btlr};
    border-bottom-left-radius: ${(props) => props.bblr};
    border: ${(props) => props.border};
    display: flex;
    flex-direction: column;
    padding-bottom: 30px;
    align-items: center;

`;

export const Details1 = styled.div`
    width: 100%;
    background: ${(props) => props.bg};
    border-top-left-radius: ${(props) => props.btlr};
    border-bottom-left-radius: ${(props) => props.bblr};
    border: ${(props) => props.border};
    display: flex;
    flex-direction: column;
    padding-bottom: 30px;
    align-items: center;

    @media screen and (min-width: 320px) and (max-width: 768px) {
        display: none;
    }
`;

export const ParaInDetail = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        color: rgba(0, 0, 0, 0.5);
        font-size: 14px;
        font-weight: 600;
    }
    @media screen and (min-width: 768px) and (max-width: 1880px) {
        p {
            font-size: 14px;
        }
    }
    @media screen and (min-width: 320px) and (max-width: 425px) {
        p {
            font-size: 12px;
        }
    }
`;
export const DetailsBtn1 = styled.button`
    width: 100%;
    height: 40px;
    border: 1px solid #3255e3;
    border-radius: 8px;
    background-color: #4669E8;
    color: #ffffff;
    font-size: 13px;
    font-weight: 300;
    margin-top: 10px;

    &:hover {
        background-color:#ffffff;
        color: #4669E8;
        transition: 0.5s;
    }

    @media screen and (min-width: 320px) and (max-width: 425px) {
        font-size: 12px;
        font-weight: 460;
    }
    @media screen and (min-width: 768px) and (max-width: 1880px) {
        font-size: 14px;
        font-weight: 460;
    }
`;

export const DetailsBtn2 = styled.button`
    width: 100%;
    height: 40px;
    border: 1px solid #3255e3;
    border-radius: 8px;
    background-color: #ffffff;
    color:  #4669E8;
    font-size: 13px;
    font-weight: 300;
    margin-top: 10px;

    &:hover {
        background-color:  #4669E8;
        color:#ffffff;
        transition: 0.5s;
    }

    @media screen and (min-width: 320px) and (max-width: 425px) {
        font-size: 12px;
        font-weight: 460;
    }
    @media screen and (min-width: 768px) and (max-width: 1880px) {
        font-size: 14px;
        font-weight: 460;
    }
`;

export const BtnClick = styled.div`
    background-color: white;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: scroll;
    backdrop-filter: blur(0.5px);
`;

export const Btn = styled.div`
    width: 40%;
    height: 40%;
`;
export const LogoInSignUp = styled.div`
    display: flex;
    justify-content: center;
    font-family: poppins;
    margin-top: ${(props) => props.mt};
    margin-left: ${(props) => props.ml};
    width: ${(props) => props.width};
    img {
        width: ${(props) => props.width};
        height: ${(props) => props.height};
    }
    @media screen and (max-width: 1024px) {
        width: 60%;
        img {
            width: 60%;
        }
    }
    @media screen and (max-width: 1440px) {
        img {
            width: 50%;
        }
    }
`;

export const TextInSignUp = styled.div`
    display: flex;
    justify-content: center;
    font-family: poppins;
    margin-top: ${(props) => props.mt};
    margin-left: ${(props) => props.ml};
    width: ${(props) => props.width};
    img {
        width: ${(props) => props.width};
        height: ${(props) => props.height};
    }
    p {
        text-align: center;
        width: ${(props) => props.width};
        font-size: ${(props) => props.fs};
        font-weight: ${(props) => props.fw};
        line-height: ${(props) => props.lh};
        color: ${(props) => props.color};
    }
    span {
        color: white;
    }
    @media screen and (min-width: 320px) and (max-width: 425px) {
        width: 100%;
        p {
            font-size: 12px;
        }
    }
    @media screen and (min-width: 768px) and (max-width: 1880px) {
        width: 100%;
        p {
            text-align: center;
            font-size: 13px;
        }
        span {
            text-align: center;
            font-size: 20px;
        }

        img {
            width: 20%;
        }
    }
`;

export const TextInSignUp1 = styled.div`
    display: flex;
    justify-content: center;
    font-family: poppins;
    margin-top: ${(props) => props.mt};
    margin-left: ${(props) => props.ml};
    width: ${(props) => props.width};
    img {
        width: ${(props) => props.width};
        height: ${(props) => props.height};
    }
    p {
        text-align: center;
        width: ${(props) => props.width};
        font-size: ${(props) => props.fs};
        font-weight: ${(props) => props.fw};
        line-height: ${(props) => props.lh};
        color: ${(props) => props.color};
    }
    span {
        color: white;
    }
    @media screen and (min-width: 320px) and (max-width: 425px) {
        width: 100%;
        p {
            font-size: 12px;
        }
    }
    @media screen and (min-width: 768px) and (max-width: 1880px) {
        width: 100%;
        p {
            text-align: center;
            font-size: 13px;
        }
        span {
            text-align: center;
            font-size: 13px;
        }
    }
`;

export const ImgInSignUp = styled.div`
    display: flex;
    justify-content: center;
    font-family: poppins;
    margin-top: ${(props) => props.mt};
    margin-left: ${(props) => props.ml};
    width: ${(props) => props.width};
    img {
        width: ${(props) => props.width};
        height: ${(props) => props.height};
    }

    @media screen and (max-width: 1880px) {
        width: 80%;
        img {
            width: 80%;
        }
    }
    @media screen and (max-width: 1440px) {
        width: 100%;
        img {
            width: 80%;
        }
    }
    @media screen and (max-width: 1024px) {
        width: 100%;
        img {
            width: 90%;
        }
    }
`;
