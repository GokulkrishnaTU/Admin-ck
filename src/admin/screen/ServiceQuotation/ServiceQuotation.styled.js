import styled from "styled-components";

export const Letter = styled.div`
  width: 100%;
  border: 1px solid black;
  margin-top: 80px;
  padding: 15px;
  @media screen and (max-width: 768px) {
    /* width: 500px; */
    width: 100%;
    overflow-x: scroll;
  }
`;
export const SubDiv = styled.div`
  padding: 100px 20px;
  margin: 0 20px;
  margin-right: 40px;
  @media screen and (max-width: 768px) {
    padding: 0;
    padding-right: 40px;
    padding-top: 30px;
    margin-right: 10px;
  }
`;
export const Container = styled.div`
  position: relative;
  margin-left: 15%;
  margin-top: 30px;
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

export const LetterHead = styled.div`
  display: flex;
  margin: 20px;
  justify-content: center;
`;
export const Narration = styled.div`
  display: flex;
  /* margin: 20px; */
  padding-bottom: 50px;
`;
export const TermsAndConditions = styled.div`
  display: flex;
  padding-top: 20px;
  flex-direction: column;
  row-gap: 70px;
`;
export const DateContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PdfTable = styled.table`
  border: 0.5px solid;
  /* display: none; */
  width: 100%;
  border-collapse: collapse;
  td {
    border: 0.5px solid rgba(0, 0, 0, 0.5);
  }
  th {
    border: 0.5px solid rgba(0, 0, 0, 0.5);
    color: red;
  }
`;

export const Button = styled.button`
  float: right;
  margin: 20px 0px;
  background-color: #4668e9;
  cursor: pointer;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 100;
`;
