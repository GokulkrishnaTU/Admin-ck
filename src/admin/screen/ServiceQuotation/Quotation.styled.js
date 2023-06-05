import styled from "styled-components";

export const ImageDiv = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  span {
    font-size: 10px;
  }
  div {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  img {
    width: 16px;
    object-fit: contain;
    cursor: pointer;
  }
`;

export const Container = styled.div`
  position: relative;
  margin-left: 15%;
  margin-top: 80px;
  width: 85vw;
  @media screen and (max-width: 768px) {
    width: 100vw;
    margin: 50px 0px !important;
  }
  @media screen and (max-width: 1025px) {
    width: 100vw;
    margin-left: 0px;
  }
`;

export const SubContainer = styled.div`
  width: 100%;
  margin-left: 50px;
`;

export const Searchbar = styled.div`
  display: "flex";
  justify-content: "space-between";
  gap: "30px";
`;

export const MenuBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 3% 7%;
  padding: 20px;
  gap: 10px 30px;
  border-radius: 5px;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.1), 0 4px 15px 0 rgba(0, 0, 0, 0.1);
  p {
    font-weight: 400;
  }
  @media screen and (max-width: 782px) {
    flex-direction: column;
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 10%;
  }
`;
export const MenuItems = styled.div`
  position: relative;
  display: flex;
  gap: 30px;
  padding: 5px 10px;
  @media only screen and (max-width: 627px) {
    flex-direction: column;
  }
`;
export const Button = styled.button`
  display: inline-block;
  width: 150px;
  height: 30px;
  text-align: center;
  background-color: #4669e8;
  color: #fff;
  border: none;
  padding: 2px 15px;
  border-radius: 8px;
  font-size: 9px;
  font-weight: 200;
  cursor: pointer;
  @media only screen and (max-width: 393px) {
    width: 84px;
  }
`;
export const Select = styled.select`
  padding: 2px 15px;
  border-radius: 5px;
  font-size: 11px;
  border: 1px solid rgb(0, 0, 0, 0.3);
  @media only screen and (max-width: 460px) {
    padding: 3px;
  }
`;

export const TableDiv = styled.div`
  display: flex;
  margin: auto;
  /* padding: 30px; */
  /* margin-left: 10px; */
  display: flexbox;
  justify-content: center;
  overflow-x: scroll;
`;

export const TableContainer = styled.div`
  display: flex;
  margin: auto;
  padding: 30px;
  margin-left: 10px;
  display: flexbox;
  justify-content: center;
  overflow-x: scroll;
  table {
    border: 0.5px solid rgb(0, 0, 0, 0.2);
    /* display: none; */
    width: 100%;
    border-collapse: collapse;
    @media screen and (max-width: 1400px) {
      width: 120%;
    }
    td {
      border: 0.5px solid rgb(0, 0, 0, 0.3);
      padding: 5px;
      text-align: center;
      font-size: 16px;
    }
    th {
      border: 0.5px solid rgb(0, 0, 0, 0.3);
      padding: 5px;
      font-size: 16px;
      font-weight: 600;
    }
  }
`;

export const Table = styled.table`
  /* overflow-x: hidden; */
  width: 950px;
  min-width: 800px;
  border-collapse: collapse;
  th {
    font-size: 14px;
    font-weight: 400;
  }
  th,
  td {
    border: 1px solid rgb(0, 0, 0, 0.2);
    padding: 9px;
    text-align: center;
  }
  td {
    padding: 15px 9px;
  }
`;
export const FormDivision = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 100%;
`;
