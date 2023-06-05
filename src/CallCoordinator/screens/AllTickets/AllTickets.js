import { React, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Button,
  ImageDiv,
  MenuBar,
  MenuItems,
  Search,
  Select,
  Table,
  TableContainer,
  Container,
  Searchbar,
} from "./AllTickets.styled";
import AdminTable from "../../../admin/components/Table/AdminTable";
import { server_api } from "../../../admin/const/api";

function AllTickets() {
  const [data, setData] = useState([]);
  const columns = [
    {
      Header: "Ticket No.",
      accessor: "no",
      sortType: "basic",
    },
    {
      Header: "call_cordinator_id",
      accessor: "call_cordinator_id",
      sortType: "basic",
    },
    {
      Header: "service_partner_id",
      accessor: "service_partner_id",
      sortType: "basic",
    },
    {
      Header: "ticket_status",
      accessor: "ticket_status",
      sortType: "basic",
    },
  ];
  function getTickets() {
    const data1 = [];
    fetch(`${server_api}/api/listTicket`)
      .then((response) => response.json())
      .then((response) => {
        response?.map((item, index) => {
          console.log(response);
          console.log(data1);
          data1.push({
            id: item?.id,
            no: item?.ticket_no,
            call_cordinator_id: item?.call_cordinator_id,
            service_partner_id: item?.service_partner_id,
            ticket_status: item?.ticket_status,
          });
        });
        setData(data1);
      });
  }
  useEffect(() => {
    getTickets();
  }, []);

  return (
    <Container>
      <MenuBar>
        <p style={{ paddingLeft: "15px" }}>All Tickets</p>
      </MenuBar>
      <TableContainer>
        <AdminTable columns={columns} data={data} heading="Exam Category List" />
      </TableContainer>
    </Container>
  );
}

export default AllTickets;
