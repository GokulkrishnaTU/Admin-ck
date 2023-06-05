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
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { server_api } from "../../../admin/const/api";
import axios from "axios";
import AssignPartner from "./AssignPartner";

function ReturnedTickets() {
  const [data, setData] = useState([]);
  const [isOpen, setOpen] = useState(false);
  const [servicePartnerData, setServicePartnerData] = useState([]);
  const [complainDetails, setComplaintDetails] = useState("");

  const getServicePartner = async () => {
    let res = await axios
      .get(`${server_api}/api/getServicePartner`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    getServicePartner().then((data) => {
      console.log(data);
      let listArray = [];
      for (let i = 0; i < data?.length; i++) {
        listArray?.push({ value: data[i]?.id, label: data[i]?.name });
      }
      setServicePartnerData(listArray);
    });
  }, []);
  const columns = [
    {
      Header: "Ticket No.",
      accessor: "no",
      sortType: "basic",
    },
    {
      Header: "Service Partner Name",
      accessor: "service_partner",
      sortType: "basic",
    },
    {
      Header: "ticket_status",
      accessor: "ticket_status",
      sortType: "basic",
    },
    {
      Header: "Assign Service Partner",
      accessor: "assign",
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
            ticket_status: item?.ticket_status,
            service_partner: item?.servicepartnerName,
            call_cordinator_id: item?.call_cordinator_id,
            assign: (
              <>
                <PersonAddAltIcon
                  fontSize="small"
                  style={{ cursor: "pointer", opacity: "0.7" }}
                  onClick={() => {
                    setOpen(true);
                    setComplaintDetails(item);
                  }}
                />
              </>
            ),
          });
        });
        setData(data1?.filter((item) => item?.ticket_status == 1 && item?.call_cordinator_id == 1));
      });
  }
  useEffect(() => {
    getTickets();
  }, []);

  return (
    <Container>
      <MenuBar>
        <p style={{ paddingLeft: "15px" }}>Returned Tickets</p>
      </MenuBar>
      <TableContainer>
        <AdminTable columns={columns} data={data} heading="Exam Category List" />
        <AssignPartner
          isOpen={isOpen}
          onClose={() => setOpen(false)}
          complainDetails={complainDetails}
          servicePartnerData={servicePartnerData}
          // getServiceComplaints={getServiceComplaints}
        />
      </TableContainer>
    </Container>
  );
}

export default ReturnedTickets;
