import { React, useState, useEffect } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
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
} from "./ViewServicePartner.styled";
import { SearchIcon, EditIcon, TrashIcons } from "../../assets/icons";
import AdminTable from "../../../admin/components/Table/AdminTable";
import { server_api } from "../../const/api";
import axios from "axios";

function ServiceEngineerDetails() {
  const location = useLocation();
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
            contact: item?.contact,
            completedTickets: item?.completedTickets,
            status: item?.status,
            service_partner_id: item?.service_partner_id,
          });
        });
        setData(data1?.filter((item) => item?.service_partner_id == location?.state?.id));
      });
  }
  useEffect(() => {
    getServiceEng();
  }, []);
  return (
    <Container>
      <MenuBar>
        <p>Service Engineer ({location?.state.name})</p>
      </MenuBar>
      <TableContainer>
        <AdminTable columns={columns} data={data} heading="Exam Category List" />
      </TableContainer>
    </Container>
  );
}

export default ServiceEngineerDetails;
