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
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import DoneIcon from "@mui/icons-material/Done";
import AssignPartner from "./AssignPartner";
import axios from "axios";

function Tickets(props) {
  const { details } = props;
  console.log("Userdetails =>", details);
  const [data, setData] = useState([]);
  const [isOpen, setOpen] = useState(false);
  const [servicePartnerData, setServicePartnerData] = useState([]);
  const [complainDetails, setComplaintDetails] = useState("");
  const columns = [
    {
      Header: "Ticket No.",
      accessor: "no",
      sortType: "basic",
    },
    {
      Header: "Product Category",
      accessor: "product_category",
      sortType: "basic",
    },
    {
      Header: "Brand",
      accessor: "brand",
      sortType: "basic",
    },
    {
      Header: "Complaint",
      accessor: "complaint",
      sortType: "basic",
    },
    {
      Header: "Payment Status",
      accessor: "status",
      sortType: "basic",
    },
    {
      Header: "Ticket Status",
      accessor: "ticket_status",
      sortType: "basic",
    },
    {
      Header: "Assign Service Partner",
      accessor: "assign",
      sortType: "basic",
    },
  ];
  function getCallCoordinator() {
    const data1 = [];
    fetch(`${server_api}/api/getTicketsForCallCordinator/1`)
      .then((response) => response.json())
      .then((response) => {
        response?.map((item, index) => {
          console.log(response);
          console.log(data1);
          data1.push({
            id: item?.id,
            no: item?.ticket_no,
            brand: item?.brand,
            complaint: item?.complaint,
            product_category: item?.product_category_name,
            status: item?.payment_status == 1 ? "Paid" : "Not paid",
            ticket_status: item?.ticketStatus,
            assign:
              item?.ticketStatus == "Raised" ? (
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
              ) : (
                <DoneIcon style={{ color: "green" }} />
              ),
          });
        });
        setData(data1);
      });
  }
  const getServicePartner = async () => {
    let res = await axios
      .get(`${server_api}/api/getServicePartner`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    getCallCoordinator();
    getServicePartner().then((data) => {
      console.log(data);
      let listArray = [];
      for (let i = 0; i < data?.length; i++) {
        listArray?.push({ value: data[i]?.id, label: data[i]?.name });
      }
      setServicePartnerData(listArray);
    });
  }, []);

  return (
    <Container>
      <MenuBar>
        <p style={{ paddingLeft: "15px" }}>Tickets</p>
      </MenuBar>
      <TableContainer>
        <AdminTable columns={columns} data={data} heading="Exam Category List" />
      </TableContainer>
      <AssignPartner
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        complainDetails={complainDetails}
        servicePartnerData={servicePartnerData}
        getCallCoordinator={getCallCoordinator}
        details={details}
      />
    </Container>
  );
}

export default Tickets;
