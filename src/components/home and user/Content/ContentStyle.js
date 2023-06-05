import styled from "styled-components";

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
