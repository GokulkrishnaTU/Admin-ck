import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import AdminTable from "./AdminTable";
import { server_api } from "../../const/api";
import AcceptQuotation from "./AcceptQuotation";
import DownloadIcon from "@mui/icons-material/Download";
import SendIcon from "@mui/icons-material/Send";
import { Button, Container, ImageDiv, MenuBar, TableContainer } from "./CustomerSalesReport.styled";

function ViewFullDetails(props) {
  const navigate = useNavigate();
  let location = useLocation();
  console.log("location=>>>", location);
  const [data, setData] = useState([]);
  const [isOpen, setOpen] = useState("");
  const [details, setDetails] = useState([]);
  let num;
  const columns = [
    {
      Header: "No",
      accessor: "no",
      sortType: "basic",
    },
    {
      Header: "Product Details",
      accessor: "product_details",
      sortType: "basic",
    },
    {
      Header: "Vendor",
      accessor: "vendor",
      sortType: "basic",
    },
    {
      Header: "Payment",
      accessor: "payment",
      sortType: "basic",
    },
    {
      Header: "Delivery",
      accessor: "delivery",
      sortType: "basic",
    },
    {
      Header: "Validity",
      accessor: "qtn_validity",
      sortType: "basic",
    },
    {
      Header: "Account Details",
      accessor: "bank_details",
      sortType: "basic",
    },
    {
      Header: "Status",
      accessor: "status",
      sortType: "basic",
    },
    {
      Header: "Comment",
      accessor: "comment",
      sortType: "basic",
    },
    {
      Header: "Actions",
      accessor: "accept",
      sortType: "basic",
    },
  ];
  const getCustomSale = async () => {
    axios.get(`${server_api}/api/getCustomSaleReport/${location.state}`).then((res) => {
      setData(res.data);
    });
  };
  // function getCustomSale() {
  //   const data1 = [];
  //   fetch(`${server_api}/api/getCustomSaleReport/${location.state}`)
  //     .then((response) => response.json())
  //     .then((response) => {
  //       console.log("Res=>", response);
  //       response?.map((item, index) => {
  //         if (!item?.acceptable) {
  //           data1.push({
  //             id: item?.id,
  //             no: index + 1,
  //             product_details: (
  //               <table>
  //                 <tr>
  //                   <th>Brand</th>
  //                   <th>Specification</th>
  //                   <th>Quantity</th>
  //                   <th>Unit Price</th>
  //                   <th>Total</th>
  //                 </tr>
  //                 {item?.product.map((it) => (
  //                   <tr>
  //                     <td>{it.model}</td>
  //                     <td>{it.title}</td>
  //                     <td>{it.qnty}</td>
  //                     <td>{it.unit_price}</td>
  //                     <td>{it.total}</td>
  //                   </tr>
  //                 ))}
  //               </table>
  //             ),
  //             vendor: item?.vendor_details,
  //             qtn_validity: item?.quotation_validity,
  //             payment: item?.payment,
  //             delivery: item?.delivery,
  //             status:
  //               item?.status != null
  //                 ? item?.status === 1
  //                   ? "Accepted"
  //                   : "Rejected"
  //                 : "Awaiting",
  //             comment: item?.comment,
  //             bank_details: (
  //               <>
  //                 <p>{item?.bank_details.account_name}</p>
  //                 <p>{item?.bank_details.account_no}</p>
  //               </>
  //             ),
  //             accept: (
  //               <div
  //                 style={{
  //                   display: "flex",
  //                   gap: "10px",
  //                   alignItems: "center",
  //                   justifyContent: "center",
  //                 }}
  //               >
  //                 {item?.status == 0 && (
  //                   <SendIcon
  //                     style={{ cursor: "pointer" }}
  //                     fontSize="small"
  //                     onClick={() => {
  //                       navigate("/update-custom-sale-report", {
  //                         state: item?.custom_sale_details,
  //                       });
  //                     }}
  //                   />
  //                 )}
  //                 <DownloadIcon
  //                   style={{ cursor: "pointer" }}
  //                   onClick={() => navigate("/pdf-report", { state: item?.id })}
  //                 />
  //               </div>
  //             ),
  //           });
  //         }
  //       });
  //       setData(data1);
  //     });
  // }
  useEffect(() => {
    getCustomSale();
  }, []);

  return (
    <Container>
      <MenuBar>
        <p>Detailed Customer Sales Report</p>
      </MenuBar>
      <TableContainer>
        {/* <AdminTable
          columns={columns}
          data={data}
          heading="Exam Category List"
        /> */}
        <table>
          <tr>
            <th>No</th>
            <th colSpan={5}>Product Details</th>
            <th>Vendor</th>
            <th>Payment</th>
            <th>Delivery</th>
            <th>Validity</th>
            <th>Account Details</th>
            <th>Status</th>
            <th>Comment</th>
            <th>Actions</th>
          </tr>
          {data.map((item, index) => (
            <>
              <tr>
                <div style={{ display: "none" }}>{(num = item?.product.length)}</div>
                <td rowSpan={num + 1}>{index + 1}</td>
                {console.log("data=================>", data)}
                <th>Brand</th>
                <th>Specification</th>
                <th>Quantity</th>
                <th>Unit Price</th>
                <th>Total</th>
                <td rowSpan={num + 1}>{item?.vendor_details}</td>
                <td rowSpan={num + 1}>{item?.payment}</td>
                <td rowSpan={num + 1}>{item?.delivery}</td>
                <td rowSpan={num + 1}>{item?.quotation_validity}</td>
                <td rowSpan={num + 1}>{item?.bank_details.account_name}</td>
                <td rowSpan={num + 1}>
                  {item?.status != null
                    ? item?.status === 1
                      ? "Accepted"
                      : "Rejected"
                    : "Awaiting"}
                </td>
                <td rowSpan={num + 1}>{item?.comment}</td>
                <td rowSpan={num + 1}>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {item?.status == 0 && (
                      <SendIcon
                        style={{ cursor: "pointer" }}
                        fontSize="small"
                        onClick={() => {
                          navigate("/update-custom-sale-report", {
                            state: item?.custom_sale_details,
                          });
                        }}
                      />
                    )}
                    <DownloadIcon
                      style={{ cursor: "pointer", opacity: "0.7" }}
                      onClick={() => navigate("/pdf-report", { state: item?.id })}
                    />
                  </div>
                </td>
              </tr>

              {item?.product.map((it) => (
                <tr>
                  <td>{it.model}</td>
                  <td>{it.title}</td>
                  <td>{it.qnty}</td>
                  <td>{it.unit_price}</td>
                  <td>{it.total}</td>
                </tr>
              ))}
            </>
          ))}
        </table>
      </TableContainer>
      <AcceptQuotation isOpen={isOpen} onClose={() => setOpen(false)} details={details} />
    </Container>
  );
}

export default ViewFullDetails;
