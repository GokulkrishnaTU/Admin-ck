import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  bottom: 0;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  overflow-x: hidden;
  /* height: 100vw; */
  width: 15vw;
  ${"" /* margin-top: 50px; */}
  border: 1px solid rgba(0, 0, 0, 0.2);
  @media screen and (max-width: 1025px) {
    display: none;
  }
  ${
    "" /* @media screen and (min-width:1024px) {
       width: 30vw;
    } */
  }
`;

export const Sidenav = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin-top: 70px;
`;

export const Sidebar = styled.div`
  width: 11.5vw;
  display: flex;
  padding-top: 30px;
  flex-direction: column;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const NavOption = styled.div`
  display: flex;
  flex-direction: column;
  ${"" /* width: 30vw; */}
`;
export const Button = styled.button`
  background-color: white;
  border: none;
  color: ${(props) => (props.click ? "#4668e9" : "#000000")};
  margin-top: 5px;
  text-align: left;
  cursor: pointer;
  // :hover {
  //     color: #4668e9;
  // }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  align-items: baseline;
  border-left: 1px solid ${"#c4c4c4"};
`;

export const LinkBtn = styled.button`
  background-color: transparent;
  border: none;
  color: ${(props) => (props.click ? "#4668e9" : "#000000")};
  margin-top: 10px;
  margin-left: 20px;
  display: flex;
  cursor: pointer;
  justify-content: normal;
  // :hover {
  //     color: #4668e9;
  // }
`;

export const ImgDiv = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1000;
  @media screen and (min-width: 1024px) {
    display: none;
  }
  @media screen and (min-width: 1440px) {
    display: none;
  }
  @media screen and (min-width: 2560px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  color: black;
  text-decoration: none;
  &:hover,
  &:focus {
    color: #4668e9;
  }
  ${
    "" /* @media screen and (max-width: 1440px) {
        width: 0vw;
    } */
  }
`;

export const Collapsible = styled.div`
  display: flex;
  flex-direction: column;
  ${"" /* width: 15vw; */}
`;

export const Content = styled.div`
  padding: 6px;
  margin-left: 30px;
  display: flex;
  flex-direction: row;
  width: 100vw;
`;

export const Header = styled.div`
  padding: 6px;
  cursor: pointer;
  ${"" /* width: 100vw; */}
`;

export const Section = styled.div`
  margin-left: 10px;
`;

export const General = styled.div`
  display: flex;
  flex-direction: column;
`;
