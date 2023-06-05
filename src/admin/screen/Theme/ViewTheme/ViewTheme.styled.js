import styled from "styled-components";

export const Container = styled.div`
  margin-left: 15%;
  margin-top: 80px;
  width: 85vw;
  @media screen and (max-width: 768px) {
        width: 100vw;
        margin: 50px 0px !important;
      }
      @media screen and (max-width: 1025px) {
        width: 100vw;
        margin-left:0px;
    }
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
        /* flex-direction: column; */
        /* padding-left: 10px;
        padding-right: 10px; */
    }
`;

export const MenuItems = styled.div`
    position: relative;
    display: flex;
    gap: 30px;
    padding: 5px 10px;
    /* @media only screen and (max-width: 627px) {
        flex-direction: column;
    } */
`;
export const Button = styled.button`
    display: inline-block;
    width: 100px;
    height: 30px;
    text-align: center;
    background-color: #4669e8;
    color: #fff;
    border: none;
    padding: 2px 15px;
    border-radius: 8px;
    font-size: 11px;
    font-weight: 200;
    cursor: pointer;
    @media only screen and (max-width: 393px) {
        width: 84px;
    }
`;
export const Search = styled.div`
    display: flex;
    input {
        padding: 5px;
        width: 100%;
        border-radius: 8px 0 0 8px;
        border: 1px solid rgb(0, 0, 0, 0.3);
        outline-color: rgb(0, 0, 0, 0.3);
    }
    img {
        margin-left: -2px;
        width: 14px;
        padding: 9px;
        object-fit: contain;
        background-color: #4669e8;
        border-radius: 0 8px 8px 0;
        cursor: pointer;
    }
    @media only screen and (max-width: 393px) {
        width: 50%;
    }
`;
export const ImageDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    img {
        width: 16px;
        object-fit: contain;
        cursor: pointer;
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

export const TableContainer = styled.div`
   display: flex;
    margin: auto;
    display: flexbox;
    justify-content: center;
    overflow-x: scroll;
`;

export const Table = styled.table`
    /* overflow-x: hidden; */
    width: 950px;
    min-width: 800px;
    border-collapse: collapse;
    th {
        font-size: 14px;
        font-weight: 600;
    }
    th,
    td {
        border: 1px solid rgb(0, 0, 0, 0.11);
        padding: 9px;
        text-align: center;
    }
    td {
        /* padding: 15px 9px; */
        img {
            width: 80px;
            padding: 0;
            object-fit: contain;
        }
    }
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 30px;
`;

export const MenuWrapperRight = styled.div`
    display: flex;
    justify-content: center;
`;
