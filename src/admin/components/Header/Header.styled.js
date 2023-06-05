import styled from "styled-components";
import { colors, size } from "../../const/style";
const HeaderContainer = styled.div`
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${colors.primary};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-inline: 60px;
  padding-block: 15px;
  height: 4vh;
  position: fixed;
  z-index: 1001;
  @media (max-width: ${size.MobileL}) {
    padding-inline: 10px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  img {
    height: 30px;
    width: auto;
    @media screen and (max-width: 426px) {
      width: 100px;
      object-fit: contain;
    }
  }
`;

const ImgDiv = styled.div`
  @media screen and (max-width: 2560px) and (min-width: 1026px) {
    display: none;
  }
`;

const DrawerMenu = styled.div`
  display: flex;
  img {
    height: 30px;
    width: auto;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: row;
`;
const ImageContainer = styled.div`
  display: flex;
  img {
    height: 20px;
    width: auto;
    cursor: pointer;
  }
  margin-inline: 10px;
`;

const Sidenav = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin-left: 30px;
`;

const NavOption = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
  overflow-y: scroll;
`;

const Button = styled.button`
  width: 10vw;
  background-color: white;
  border: none;
  color: #4668e9;
  margin-top: 20px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
`;

const LinkBtn = styled.button`
  width: 45vw;
  background-color: transparent;
  border: none;
  color: #4668e9;
  margin-top: 20px;
  margin-left: 40px;
  display: flex;
  justify-content: normal;
`;

export {
  HeaderContainer,
  LogoContainer,
  Section,
  ImageContainer,
  DrawerMenu,
  ImgDiv,
  NavOption,
  Sidenav,
  Button,
  Item,
  LinkBtn,
};
