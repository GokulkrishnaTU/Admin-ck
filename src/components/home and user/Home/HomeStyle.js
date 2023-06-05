import styled from "styled-components";

export const HomeMainCon = styled.div`
    background-color: white;
    width: 100%;
    height: 100%;
    position: fixed;
    display: flex;
    overflow: scroll;
    flex-direction: column;
    @media screen and (max-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const HomeContainer = styled.div`
    width: 100%;
    height: 75%;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    margin-top: 70px;
    @media screen and (min-width: 320px) and (max-width: 425px) {
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 20px;
        margin-top: 20px;
    }
    @media screen and (max-width: 320px) {
        padding: 16px;
        width: 100%;
    }
    @media screen and (max-width: 768px) {
        width: 80%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const HomeSub1 = styled.div`
    width: 50%;
    height: 100%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    margin-left: 60px;
    margin-right: 12px;
    @media screen and (max-width: 768px) {
        width: 95%;
        margin-left: 0px;
        margin-right: 0px;
    }
    @media screen and (min-width: 320px) and (max-width: 425px) {
        width: 90%;
        margin-left: 0px;
        margin-right: 0px;
    }
`;

export const Section = styled.div`
    width: 100%;
    height: 50%;
    position: relative;
    border-radius: 10px;
    background: ${(props) => props.background};
    background-image: ${(props) => props.bimg};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    img {
        position: absolute;
        background-size: cover;
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

export const Section1 = styled.div`
    width: 100%;
    height: 50%;
    position: relative;
    border-radius: 10px;
    background: ${(props) => props.background};
    background-image: ${(props) => props.bimg};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 12px;

    img {
        position: absolute;
        background-size: cover;
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

export const Text = styled.div`
    z-index: 100;
    position: absolute;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 117%;
    color: #ffffff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    @media screen and (min-width: 320px) and (max-width: 425px) {
        font-weight: 300;
        font-size: 13px;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    @media screen and (max-width: 768px) {
        font-weight: 300;
        font-size: 16px;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
`;

export const SectionSub1 = styled.div`
    width: 50%;
    height: 100%;
    position: relative;
    border-radius: 10px;
    background: ${(props) => props.background};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    img {
        position: absolute;
        width: 100%;
        height: 100%;
    }
`;
export const SectionSub2 = styled.div`
    width: 50%;
    height: 100%;
    position: relative;
    border-radius: 10px;
    background: ${(props) => props.background};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-left: 12px;
    img {
        position: absolute;
        width: 100%;
        height: 100%;
    }
`;

export const SectionLeft = styled.div`
    width: 100%;
    height: 50%;
    position: relative;
    border-radius: 10px;
    background: ${(props) => props.background};
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        position: absolute;
        width: 100%;
        height: 100%;
    }
`;

export const SectionLeft1 = styled.div`
    width: 100%;
    height: 50%;
    position: relative;
    border-radius: 10px;
    background: ${(props) => props.background};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 12px;
    img {
        position: absolute;
        width: 100%;
        height: 100%;
    }
`;

export const HomeSub2 = styled.div`
    width: 50%;
    height: 100%;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    margin-right: 60px;
    ${"" /* justify-content: space-between; */}

    @media screen and (max-width: 768px) {
        width: 95%;
        margin-right: 0px;
        margin-top: 12px;
    }
    @media screen and (min-width: 320px) and (max-width: 425px) {
        width: 90%;
        margin-right: 0px;
        margin-top: 12px;
    }
`;

export const HomeAside = styled.div`
    width: 50%;
    height: 100%;
    border-radius: 10px;
    background: ${(props) => props.background};
    display: flex;
    flex-direction: column;
    margin-right: 12px;
`;
export const HomeAside1 = styled.div`
    width: 50%;
    height: 100%;
    position: relative;
    border-radius: 10px;
    background: ${(props) => props.background};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        position: absolute;
        background-size: cover;
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

export const AsideChild = styled.div`
    width: 100%;
    height: 25%;
    position: relative;
    border-radius: 10px;
    background: ${(props) => props.background};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    img {
        position: absolute;
        background-size: cover;
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

export const AsideChild1 = styled.div`
    width: 100%;
    height: 25%;
    position: relative;
    border-radius: 10px;
    background: ${(props) => props.background};
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        position: absolute;
        background-size: cover;
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;
export const AsideChild2 = styled.div`
    width: 100%;
    height: 25%;
    position: relative;
    border-radius: 10px;
    background: ${(props) => props.background};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 12px;
    img {
        position: absolute;
        background-size: cover;
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;
export const AsideChild3 = styled.div`
    width: 100%;
    height: 25%;
    position: relative;
    border-radius: 10px;
    background: ${(props) => props.background};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 12px;
    img {
        position: absolute;
        background-size: cover;
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;
