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
} from "./Ticket.styled";
import AdminTable from "../../../admin/components/Table/AdminTable";
import { server_api } from "../../../admin/const/api";

function AssignedTicket() {
  const [data, setData] = useState([]);
  const [isOpen, setOpen] = useState(false);

  const columns = [
    {
      Header: "Ticket No.",
      accessor: "no",
      sortType: "basic",
    },
    // {
    //   Header: "call_cordinator_id",
    //   accessor: "call_cordinator_id",
    //   sortType: "basic",
    // },
    {
      Header: "Service Partner Name",
      accessor: "partner_name",
      sortType: "basic",
    },
    {
      Header: "Ticket Status",
      accessor: "status",
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
            status: "Forwarded",
            partner_name: item?.servicepartnerName,
          });
        });
        setData(data1?.filter((item) => item.ticket_status == 0 && item?.call_cordinator_id == 1));
      });
  }
  useEffect(() => {
    getTickets();
  }, []);

  return (
    <Container>
      <MenuBar>
        <p style={{ paddingLeft: "15px" }}>Assigned Tickets</p>
      </MenuBar>
      <TableContainer>
        <AdminTable columns={columns} data={data} heading="Exam Category List" />
      </TableContainer>
    </Container>
  );
}

export default AssignedTicket;
