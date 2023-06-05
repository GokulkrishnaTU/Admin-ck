import styled from "styled-components";

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
