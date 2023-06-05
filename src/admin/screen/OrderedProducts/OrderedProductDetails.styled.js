import styled from "styled-components";

export const ContainerDiv = styled.div`
  margin-left: 20%;
  margin-right: 5%;
  margin-top: 100px;
  width: 100vw;
  ${"" /* width: 85vw; */}
  @media screen and (max-width: 1025px) {
    width: 100%;
    margin: 5%;
    margin-top: 100px;
  }
  p {
    padding-left: 16px;
    padding-bottom: 10px;
  }
`;
export const StyledHeader = styled.h1`
  margin-top: 20px;
  font-size: 20px;
  font-weight: 600;
  /* padding-left: 16px; */
  color: rgba(0, 0, 0, 0.7);
  padding-bottom: 10px;
  border-bottom: 1px solid rgb(0, 0, 0, 0.2);
  margin-bottom: 20px;
`;
export const Main = styled.h1``;
export const DeatilsContainer = styled.div`
  p {
    padding: 4px 10px;
    margin: 5px;
    font-size: 14px;
    font-weight: 800;
    color: rgba(0, 0, 0, 0.9);
    span {
      font-weight: 400;
      padding-left: 10px;
    }
  }

  h4 {
    padding: 4px 10px;
    margin: 5px;
    span {
      font-weight: 400;
      padding-left: 10px;
    }
  }
`;
