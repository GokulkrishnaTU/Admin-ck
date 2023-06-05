import { React, useState, useEffect } from "react";
import { useNavigate, Link, Navigate } from "react-router-dom";
import { MenuBar, TableContainer, Container, ImageDiv } from "./PurchaseReq.styled";
import AdminTable from "../../../admin/components/Table/AdminTable";
import { server_api } from "../../../admin/const/api";
import SendIcon from "@mui/icons-material/Send";
import SendQuotation from "./SendQuotation";
import DownloadIcon from "@mui/icons-material/Download";

function PurchaseReq(props) {
  const [data, setData] = useState([]);
  const [isOpen, setOpen] = useState(false);
  const [details, setDetails] = useState("");
  const navigate = useNavigate();
  const columns = [
    {
      Header: "Ticket No.",
      accessor: "no",
      sortType: "basic",
    },
    {
      Header: "Brand",
      accessor: "brand",
      sortType: "basic",
    },
    {
      Header: "Product details",
      accessor: "product_details",
      sortType: "basic",
    },
    {
      Header: "Quantity",
      accessor: "qnty",
      sortType: "basic",
    },
    {
      Header: "Customer Approval",
      accessor: "customer_approval",
      sortType: "basic",
    },
    {
      Header: "Quotation",
      accessor: "actions",
      sortType: "basic",
    },
  ];
  function getPurchaseReq() {
    const data1 = [];
    fetch(`${server_api}/api/listPdt`)
      .then((response) => response.json())
      .then((response) => {
        response?.map((item, index) => {
          console.log(response);
          console.log(data1);
          data1.push({
            id: item?.id,
            no: item?.ticket_no,
            product_details: item?.product_details,
            qnty: item?.qnty,
            brand: item?.brand,
            customer_approval: (
              <>
                {item?.customer_approval == null ? "Awaiting" : ""}
                {item?.customer_approval == 0 ? "Rejected" : ""}
                {item?.customer_approval == 1 ? "Accepted" : ""}
              </>
            ),
            quotationId: item?.quotationId,
            actions: !item?.quotationId ? (
              <>
                <SendIcon
                  fontSize="small"
                  style={{ opacity: "0.7", cursor: "pointer" }}
                  onClick={() => {
                    setOpen(true);
                    setDetails(item);
                  }}
                />
              </>
            ) : (
              <DownloadIcon
                style={{ opacity: "0.7", cursor: "pointer" }}
                onClick={() => navigate("/service-quotation-pdf", { state: item?.ticket_no })}
              />
            ),
          });
        });
        setData(data1);
      });
  }
  useEffect(() => {
    getPurchaseReq();
  }, []);
  return (
    <Container>
      <MenuBar>
        <p style={{ paddingLeft: "15px" }}>Product Purchase requests</p>
      </MenuBar>
      <TableContainer>
        <AdminTable columns={columns} data={data} heading="Exam Category List" />
      </TableContainer>
      <SendQuotation
        getPurchaseReq={getPurchaseReq}
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        details={details}
      />
    </Container>
  );
}

export default PurchaseReq;
