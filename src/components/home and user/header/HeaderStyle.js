import styled from "styled-components";

export const HeaderContainer = styled.div`
    position: sticky;
    top: 0;
    width: 100%;
    height: 80px;
    background-color: black;
    z-index: 1000;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const HeaderChild = styled.div`
    background-color: black;
    // display: flex;
    margin-left: 50px;
    @media screen and (max-width: 425px) {
        margin-left: 30px;
    }
    @media screen and (max-width: 320px) {
        margin-left: 10px;
    }
    @media screen and (max-width: 768px) {
        margin-left: 30px;
    }
`;

export const HeaderRightChild = styled.div`
    margin-right: 50px;
    background-color: black;
    display: flex;
    @media screen and (max-width: 425px) {
        margin-right: 15px;
    }
    @media screen and (max-width: 768px) {
        margin-right: 10px;
    }
    @media screen and (max-width: 375px) {
        margin-right: 15px;
    }
`;

export const HeaderLogo = styled.div`
    display: flex;
    img {
        width: ${(props) => props.width};
        height: ${(props) => props.height};
        padding-left: ${(props) => props.pl};
        padding-top: ${(props) => props.pt};
    }
    @media screen and (max-width: 768px) {
        img {
            width: 110px;
            height: 20px;
        }
    }
    @media screen and (min-width: 320px) and (max-width: 425px) {
        img {
            width: 100px;
            height: 20px;
        }
    }
`;

export const NavbarLink = styled.div`
    display: flex;
    margin-right: 20px;
    img {
        width: ${(props) => props.width};
        height: ${(props) => props.height};
    }
    @media screen and (max-width: 768px) {
        img {
            width: 20px;
            height: 20px;
        }
    }
    @media screen and (min-width: 320px) and (max-width: 425px) {
        img {
            width: 20px;
            height: 20px;
        }
    }
`;
