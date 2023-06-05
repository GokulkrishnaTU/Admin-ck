import styled from "styled-components";
import { colors, size } from "../../tableConst/const";
const Styles = styled.div`
  padding: 1.5rem;
  ${"" /* width:; */}
  background-color: ${colors.white};
  @media ${size.tablet} {
    padding: 0.5rem;
  }
  @media ${size.mobileS} {
    padding: 0;
  }
  @media screen and (max-width: ${size.mobileL}) {
    padding: 1rem 0;
  }
  div {
    width: 100%;
  }
  .search-div {
    width: 20%;
    float: right;
    padding: 1rem;
  }
  h3 {
    font-size: 1.1rem;
    color: ${colors.black};
    padding-bottom: 0.5rem;
    border-bottom: 1px solid ${colors.disabled};
  }

  table {
    display: table;
    table-layout: fixed;
    width: 100%;
    height: auto;
    border-top: 1px solid ${colors.inputborder};
    border-left: 1px solid ${colors.inputborder};
    border-right: 1px solid ${colors.inputborder};
    :last-child {
      border-bottom: 0;
    }
  }

  th {
    color: ${colors.grey};
    font-weight: normal;
    // display:flex;
  }
  th,
  td {
    word-wrap: break-word;
    text-align: center;
    vertical-align: middle;
    ${"" /* border-left:1px solid ${colors.inputborder}; */}
    ${"" /* border-top: 1px solid ${colors.inputborder}; */}
    padding:0.2rem;
    width: auto;
    height: auto;
    border-right: 1px solid ${colors.inputborder};
    border-bottom: 1px solid ${colors.inputborder};
    overflow: hidden;
    :last-child {
      border-right: 0;
    }
  }

  .pagination {
    padding: 0.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    @media (max-width: ${size.mobileL}) {
      justify-content: flex-start;
    }
  }
  .btn {
    width: auto;
    height: auto;
  }
  @media (max-width: ${size.laptopL}) {
    /* margin-left: 0.5rem;
    width: 95%;
    /* width: auto; */
    over-flow: scroll;
    margin-left: 0.5rem;
    width: 100%;
    over-flow: scroll;
    table{
      table-layout: auto;
    } 
  }
  @media (min-width: ${size.laptopL}) {
    margin-left: 0.5rem;
    width: 95%;
    over-flow: scroll;
    table{
      table-layout: auto;
    }
  }
  @media (max-width: ${size.laptop}) {
    margin-left: 0.5rem;
    width: 100%;
  }

  @media (max-width: ${size.tablet}) {
    margin-left: 0.5rem;
    width: 140%;
    over-flow: scroll;
  }
  @media (max-width: ${size.mobileL}) {
    margin-left: 2rem;
    width: 300%;
    over-flow: scroll;
    table{
      table-layout: auto;
    }
  }
  @media (max-width: ${size.mobileM}) {
    margin-left: 2rem;
    over-flow: scroll;
  }
  @media (max-width: ${size.mobileS}) {
    table {
      margin-left: -10px;
    }
  }
`;

export { Styles };
