import { React, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { MenuBar, TableContainer, Container } from "./ProductTaken.styled";
import AdminTable from "../../../admin/components/Table/AdminTable";
import { server_api } from "../../../admin/const/api";

function ProductTakenAcknowledgement() {
  const [data, setData] = useState([]);
  const columns = [
    {
      Header: "Ticket No.",
      accessor: "no",
      sortType: "basic",
    },
    {
      Header: "Service Reg Id",
      accessor: "service_reg_id",
      sortType: "basic",
    },
    {
      Header: "Warranty Status",
      accessor: "warranty_status",
      sortType: "basic",
    },
    {
      Header: "Warranty Vendor Id",
      accessor: "warranty_vendor_id",
      sortType: "basic",
    },
    {
      Header: "Vendor Case Id",
      accessor: "vendor_caseId",
      sortType: "basic",
    },
    {
      Header: "Secondary Service Partner Id",
      accessor: "secondary_service_partner_id",
      sortType: "basic",
    },
    {
      Header: "Product Condition",
      accessor: "product_condition",
      sortType: "basic",
    },
    {
      Header: "Reason Of Taking",
      accessor: "reason_of_taking",
      sortType: "basic",
    },
    {
      Header: "Approx Cost",
      accessor: "approx_cost",
      sortType: "basic",
    },
    {
      Header: "Customer Approval",
      accessor: "customer_approval",
      sortType: "basic",
    },
    {
      Header: "Return Assured Date",
      accessor: "Return_assured_date",
      sortType: "basic",
    },
    {
      Header: "service_engineer_id",
      accessor: "service_engineer_id",
      sortType: "basic",
    },
  ];
  function getAcknowledgement() {
    const data1 = [];
    fetch(`${server_api}/api/getProductTaken`)
      .then((response) => response.json())
      .then((response) => {
        response?.map((item, index) => {
          console.log(response);
          console.log(data1);
          data1.push({
            id: item?.id,
            no: item?.ticketno,
            service_reg_id: item?.service_reg_id,
            warranty_status: item?.warranty_status,
            warranty_vendor_id: item?.warranty_vendor_id,
            vendor_caseId: item?.vendor_caseId,
            secondary_service_partner_id: item?.secondary_service_partner_id,
            product_condition: item?.product_condition,
            reason_of_taking: item?.reason_of_taking,
            approx_cost: item?.approx_cost,
            customer_approval: item?.customer_approval == 0 ? "No" : "Yes",
            Return_assured_date: item?.Return_assured_date,
            service_engineer_id: item?.service_engineer_id,
          });
        });
        setData(data1);
      });
  }
  useEffect(() => {
    getAcknowledgement();
  }, []);

  return (
    <Container>
      <MenuBar>
        <p style={{ paddingLeft: "15px" }}>Product Taken Acknowledgement</p>
      </MenuBar>
      <TableContainer>
        <AdminTable columns={columns} data={data} heading="Exam Category List" />
      </TableContainer>
    </Container>
  );
}

export default ProductTakenAcknowledgement;
