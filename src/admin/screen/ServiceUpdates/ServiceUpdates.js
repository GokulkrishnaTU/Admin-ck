import { React, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { MenuBar, TableContainer, Container } from "./ServiceUpdates.styled";
import AdminTable from "../../../admin/components/Table/AdminTable";
import { server_api } from "../../../admin/const/api";
import moment from "moment";

function ServiceUpdates() {
  const [data, setData] = useState([]);
  const columns = [
    {
      Header: "Ticket No.",
      accessor: "ticket_no",
      sortType: "basic",
    },
    {
      Header: "Complaint Details",
      accessor: "complaint_details",
      sortType: "basic",
    },
    {
      Header: "Attended Date",
      accessor: "attended_date",
      sortType: "basic",
    },
    {
      Header: "Attended Time",
      accessor: "attended_time",
      sortType: "basic",
    },
    {
      Header: "Closing Date",
      accessor: "closing_date",
      sortType: "basic",
    },
    {
      Header: "Closing Time",
      accessor: "closing_time",
      sortType: "basic",
    },
    {
      Header: "Complaint Changes",
      accessor: "complaint_changes",
      sortType: "basic",
    },
    {
      Header: "Service Charge",
      accessor: "service_charge",
      sortType: "basic",
    },
    {
      Header: "Invoice Amount",
      accessor: "invoice_amount",
      sortType: "basic",
    },
    {
      Header: "Action",
      accessor: "action",
      sortType: "basic",
    },
  ];
  function getServiceUpdates() {
    const data1 = [];
    fetch(`${server_api}/api/getServiceUpdates`)
      .then((response) => response.json())
      .then((response) => {
        response?.map((item, index) => {
          console.log("Res=>", response);
          console.log(data1);
          data1.push({
            id: item?.id,
            ticket_no: item?.ticket_no,
            attended_date: moment(item?.attended_date).format("DD/MM/YYYY"),
            attended_time: item?.attended_time,
            complaint_changes: <>{item?.complaint_changes == 1 ? "Yes" : "No"}</>,
            complaint_details: item?.complaint_details,
            service_charge: item?.service_charge,
            action: item?.action,
            closing_date: moment(item?.closing_date).format("DD/MM/YYYY"),
            closing_time: item?.closing_time,
            invoice_amount: item?.invoice_amount,
          });
        });
        setData(data1);
      });
  }
  useEffect(() => {
    getServiceUpdates();
  }, []);

  return (
    <Container>
      <MenuBar>
        <p style={{ paddingLeft: "15px" }}>Service Updates</p>
      </MenuBar>
      <TableContainer>
        <AdminTable columns={columns} data={data} heading="Exam Category List" />
      </TableContainer>
    </Container>
  );
}

export default ServiceUpdates;
