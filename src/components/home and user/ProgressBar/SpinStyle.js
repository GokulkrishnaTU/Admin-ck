import styled from "styled-components";

export const Main = styled.div`
    width: 100%;
    height: 100vh;
    @media screen and (max-width: 768px){
       display: none;
    }
`;

export const SubContainer = styled.div`
    height: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
        margin: 0px;
    }
    ${'' /* @media screen and (max-width: 768px){
        h1{
            font-size: 24px;
        }
    }
    @media screen and (max-width: 425px){
        h1{
            font-size: 14px;
        }
    }
    @media screen and (max-width: 375px){
        h1{
            font-size: 13px;
        }
    }
    @media screen and (max-width: 320px){
        h1{
            font-size: 11px;
        }
    } */}
`;

export const Title = styled.div`
    height: auto;
`;

export const ZoomContainer = styled.div`
    height: 100vh;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
        animation: h1 7s ease-out infinite normal;
        margin: 0px;
    }
    @keyframes h1 {
        50% {
            transform: scale(100);
        }
        100% {
            transform: scale(100);
        }
    }
`;  

export const Container = styled.div`
  height: 7px;
  width: 44.5%;
  position: relative;

  @media screen and (max-width: 1440px) {
    width: 59.5%;
  }
  @media screen and (max-width: 1024px) {
    width: 83.5%;
  }
  @media screen and (max-width: 768px) {

    width: 83.5%;
  }
  @media screen and (max-width: 425px){
        height: 6px;
        width: 87%;
    }
    @media screen and (max-width: 375px){
        height: 4px;
        width: 85%;
    }
    @media screen and (max-width: 375px){
        
        width: 90%;
    }
`;

export const BaseBox = styled.div`
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 3px;
  transition: width 10s ease-in-out;
`;

export const Background = styled(BaseBox)`
  background: grey;
  width: 100%;
`;

export const Progress = styled(BaseBox)`
  background: blue;
  width: ${({ percent }) => percent}%;
`;




