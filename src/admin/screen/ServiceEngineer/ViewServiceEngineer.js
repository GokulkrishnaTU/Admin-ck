import { React, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { MenuBar, TableContainer, Container } from "./ViewServiceEngineer.styled";
import AdminTable from "../../components/Table/AdminTable";
import { server_api } from "../../const/api";
import axios from "axios";

function ViewServiceEngineer() {
  //   const navigation = useNavigate();
  const arr = [1, 2, 3];
  const [data, setData] = useState([]);
  const columns = [
    {
      Header: "No.",
      accessor: "no",
      sortType: "basic",
    },
    {
      Header: "Name",
      accessor: "name",
      sortType: "basic",
    },
    {
      Header: "Contact",
      accessor: "contact",
      sortType: "basic",
    },
    {
      Header: "Email Id",
      accessor: "email",
      sortType: "basic",
    },
    {
      Header: "Scheduled Tickets",
      accessor: "scheduledTickets",
      sortType: "basic",
    },
    {
      Header: "Active Tickets",
      accessor: "activeTickets",
      sortType: "basic",
    },
    {
      Header: "Completed Tickets",
      accessor: "completedTickets",
      sortType: "basic",
    },
  ];
  function getServiceEng() {
    const data1 = [];
    fetch(`${server_api}/api/getServiceEngineer`)
      .then((response) => response.json())
      .then((response) => {
        response?.map((item, index) => {
          console.log(response);
          console.log(data1);
          data1.push({
            id: item?.id,
            no: index + 1,
            name: item?.serviceEngineerName,
            activeTickets: item?.activeTickets,
            scheduledTickets: item?.scheduledTickets,
            address: item?.address,
            contact: item?.contact,
            email: item?.email,
            completedTickets: item?.completedTickets,
            status: item?.status,
          });
        });
        setData(data1);
      });
  }
  useEffect(() => {
    getServiceEng();
  }, []);
  return (
    <Container>
      <MenuBar>
        <p>Service Engineer</p>
      </MenuBar>
      <TableContainer>
        <AdminTable columns={columns} data={data} heading="Exam Category List" />
      </TableContainer>
    </Container>
  );
}

export default ViewServiceEngineer;
