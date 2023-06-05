import React from "react";
import { SubContainer } from "./Quotation.styled";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import {
  Button,
  Container,
  DateContainer,
  Letter,
  LetterHead,
  Narration,
  PdfTable,
  SubDiv,
  TermsAndConditions,
} from "./ServiceQuotation.styled";
import moment from "moment";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { server_api } from "../../const/api";
import { useEffect } from "react";
import { useState } from "react";

function QuotationPdf() {
  const location = useLocation();
  console.log("location====>", location);
  const [data, setData] = useState("");
  console.log("data=========>", data[0]?.product);
  let TotalAmt = 0;

  const handleClick = () => {
    const doc = new jsPDF();
    autoTable(doc, {
      html: "#my-table",
      tableLineColor: [0, 0, 0],
      tableLineWidth: 0.1,
      theme: "plain",
      bodyStyles: { lineColor: [0, 0, 0], lineWidth: 0.1 },
    });
    doc.save("report.pdf");
  };
  const sendRequest = async () => {
    let res = await axios
      .get(`${server_api}/api/listQuotid/${location.state}`)
      .catch((err) => console.log(err));
    let data = await res.data;
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => {
      console.log("res====>", data);
      setData(data);
    });
  }, []);

  return (
    <Container>
      <SubDiv className="print_report">
        <Button onClick={handleClick}>Download</Button>
        <Letter>
          <LetterHead>
            <span>Letterhead</span>
          </LetterHead>
          <DateContainer>
            <p>Quotation No : {data?.quot_no} </p>
            <p>Date : {moment(data?.created_at).format("DD-MM-YYYY")}</p>
          </DateContainer>
          <Narration>Narration :-</Narration>
          <PdfTable className="report__table" id="my-table">
            <tr>
              <th>No</th>
              <th>Item</th>
              <th>Warranty</th>
              <th>Unit Price</th>
              <th>Qty</th>
              <th>Total Price</th>
            </tr>
            {data?.productArray?.map((item, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{item?.title}</td>
                <td>{item?.warranty}</td>
                <td>{item?.offer_price}</td>
                <td>{item?.qnty}</td>
                <td>{item?.offer_price}</td>
              </tr>
            ))}

            <tr>
              <td colSpan={4}>CGST</td>
              <td>8%</td>
              <td></td>
            </tr>
            <tr>
              <td colSpan={4}>SGST</td>
              <td>8%</td>
              <td></td>
            </tr>

            <tr>
              <td colSpan={5}>GRAND TOTAL</td>
              <td>
                {data?.productArray?.map((item, index) => {
                  TotalAmt = TotalAmt + parseInt(item?.offer_price);
                })}
                {TotalAmt}
              </td>
            </tr>
            <tr colSpan={6}>Words</tr>
          </PdfTable>
          <TermsAndConditions>
            <p>Terms & conditions</p>
            <p>Prepared By : {data?.prepared_by?.name}</p>
          </TermsAndConditions>
        </Letter>
      </SubDiv>
    </Container>
  );
}

export default QuotationPdf;
