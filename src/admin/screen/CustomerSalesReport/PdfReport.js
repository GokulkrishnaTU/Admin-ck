import React from "react";
import { Container } from "./CustomerSalesReport.styled";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { Button, PdfTable } from "./PdfReport.styled";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { server_api } from "../../const/api";
import { useEffect } from "react";
import { useState } from "react";

function PdfReport() {
  const location = useLocation();
  console.log("location====>", location);
  const [data, setData] = useState("");
  console.log("data=========>", data[0]?.product);

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
      .get(`${server_api}/api/getCustomSaleReportById/${location.state}`)
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
      <div style={{ padding: " 20px 100px" }} className="print_report">
        <Button onClick={handleClick}>Download</Button>
        <PdfTable className="report__table" id="my-table">
          <tr>
            <th>No</th>
            <th>Model</th>
            <th>Item Description</th>
            <th>Warranty</th>
            <th>Qty</th>
            <th>Unit Price</th>
            <th>Total Price</th>
          </tr>
          {data[0]?.product?.map((item, index) => (
            <>
              <tr>
                <td style={{ textAlign: "center" }}>{index + 1}</td>
                <td>{item?.model}</td>
                <td>{item?.title}</td>
                <td>{item?.warranty}yr</td>
                <td>{item?.qnty}</td>
                <td>{item?.unit_price}</td>
                <td>{item?.total}</td>
              </tr>
            </>
          ))}
          <tr style={{ textAlign: "center" }}>
            <td colSpan={5}>Total</td>
            <td colSpan={2}>{data[0]?.product_total}</td>
          </tr>
          <tr>
            <th colSpan={2}>TAX-GST</th>
            <td>CGST</td>
            <td colSpan={2}>{data[0]?.tax_charges.cgst}%</td>
            <td colSpan={2}>{data[0]?.tax_charges.cgst_amount}</td>
          </tr>
          <tr>
            <td colSpan={2}></td>
            <td>SGST</td>
            <td colSpan={2}>{data[0]?.tax_charges.sgst}%</td>
            <td colSpan={2}>{data[0]?.tax_charges.sgst_amount}</td>
          </tr>
          <tr>
            <td colSpan={2}></td>
            <td>CESS</td>
            <td colSpan={2}>{data[0]?.tax_charges.cess}%</td>
            <td colSpan={2}>{data[0]?.tax_charges.cess_amount}</td>
          </tr>
          <tr>
            <td colSpan={3}>Total</td>
            <td colSpan={4}>{data[0]?.tax_total}</td>
          </tr>
          <tr>
            <th colSpan={7} style={{ textAlign: "left" }}>
              DELIVERY CHARGES
            </th>
          </tr>
          <tr style={{ textAlign: "left" }}>
            <th colSpan={4}>ITEM</th>
            <th>QTY</th>
            <th>UNIT PRICE</th>
            <th>TOTAL PRICE</th>
          </tr>
          {data[0]?.delivery_charges.map((item) => (
            <tr>
              <td colSpan={4}>{item?.title}</td>
              <td>{item?.qnty}</td>
              <td>{item?.unit_price}</td>
              <td>{item?.total}</td>
            </tr>
          ))}
          <tr>
            <th colSpan={7} style={{ textAlign: "left" }}>
              INSTALLATION CHARGES
            </th>
          </tr>
          <tr style={{ textAlign: "left" }}>
            <th colSpan={4}>ITEM</th>
            <th>QTY</th>
            <th>UNIT PRICE</th>
            <th>TOTAL PRICE</th>
          </tr>
          {data[0]?.installation_charges.map((item) => (
            <tr>
              <td colSpan={4}>{item?.title}</td>
              <td>{item?.qnty}</td>
              <td>{item?.unit_price}</td>
              <td>{item?.total}</td>
            </tr>
          ))}
          <tr>
            <td colSpan={5}>PRODUCT PRICE</td>
            <td colSpan={2}>{data[0]?.product_total}</td>
          </tr>
          <tr>
            <td colSpan={5}>Taxes</td>
            <td colSpan={2}>{data[0]?.tax_total}</td>
          </tr>
          <tr>
            <td colSpan={5}>DELIVERY CHARGES</td>
            <td colSpan={2}>{data[0]?.delivery_charges_total}</td>
          </tr>
          <tr>
            <td colSpan={5}>INSTALLATION CHARGES</td>
            <td colSpan={2}>{data[0]?.installation_charges_total}</td>
          </tr>
          <tr>
            <td colSpan={5}>GRAND TOTAL</td>
            <td colSpan={2}>
              {data[0]?.product_total +
                data[0]?.tax_total +
                data[0]?.delivery_charges_total +
                data[0]?.installation_charges_total}
            </td>
          </tr>
          <tr>
            <td colSpan={3}>AFTER SERVICE</td>
            <td colSpan={4}>{data[0]?.vendor_details}</td>
          </tr>
          <tr>
            <td colSpan={3}>PAYMENT</td>
            <td colSpan={4}>{data[0]?.payment}</td>
          </tr>
          <tr>
            <td colSpan={3}>DELIVERY TIME</td>
            <td colSpan={4}>{data[0]?.delivery}</td>
          </tr>
          <tr>
            <td colSpan={3}>QUOTATION VALIDITY TIME</td>
            <td colSpan={4}>{data[0]?.quotation_validity}</td>
          </tr>
          <tr>
            <th colSpan={7} style={{ textAlign: "left" }}>
              BANK DETAILS
            </th>
          </tr>
          <tr>
            <td colSpan={3}>ACCOUNT NAME</td>
            <td colSpan={4}>{data[0]?.bank_details.account_name}</td>
          </tr>
          <tr>
            <td colSpan={3}>ACCOUNT NO</td>
            <td colSpan={4}>{data[0]?.bank_details.account_no}</td>
          </tr>
          <tr>
            <td colSpan={3}>BANK NAME</td>
            <td colSpan={4}>{data[0]?.bank_details.bank_name}</td>
          </tr>
          <tr>
            <td colSpan={3}>BANK BRANCH</td>
            <td colSpan={4}>{data[0]?.bank_details.bank_branch}</td>
          </tr>
          <tr>
            <td colSpan={3}>IFSC CODE</td>
            <td colSpan={4}>{data[0]?.bank_details.ifsc_code}</td>
          </tr>
          <tr style={{ textAlign: "center" }}>
            <th colSpan={2}>PREPARED BY</th>
            <td>{data[0]?.prepared_by.name}</td>
            <td colSpan={2}>{data[0]?.prepared_by.designation}</td>
            <td colSpan={2}>{data[0]?.prepared_by.phone_no}</td>
          </tr>
          <tr style={{ textAlign: "center" }}>
            <th colSpan={2}>CHECKED BY</th>
            <td>{data[0]?.checked_by.name}</td>
            <td colSpan={2}>{data[0]?.checked_by.designation}</td>
            <td colSpan={2}>{data[0]?.checked_by.phone_no}</td>
          </tr>

          <tr style={{ textAlign: "center" }}>
            <th colSpan={2}>HOD</th>
            <td>{data[0]?.hod.name}</td>
            <td colSpan={2}>{data[0]?.hod.designation}</td>
            <td colSpan={2}>{data[0]?.hod.phone_no}</td>
          </tr>
        </PdfTable>
      </div>
    </Container>
  );
}

export default PdfReport;
