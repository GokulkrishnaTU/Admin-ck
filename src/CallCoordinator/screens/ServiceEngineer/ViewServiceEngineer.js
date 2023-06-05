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
} from "./ViewServiceEngineer.styled";
import { SearchIcon, EditIcon, TrashIcons } from "../../assets/icons";
import AddServiceEngineer from "./AddServiceEngineer";
import EditServiceEngineer from "./EditServiceEngineer";
import DeletePopUp from "../../../admin/screen/DeletePopUp/DeletePopUp";
import AdminTable from "../../../admin/components/Table/AdminTable";
import { server_api } from "../../const/api";
import axios from "axios";

function ViewServiceEngineer() {
  //   const navigation = useNavigate();
  const arr = [1, 2, 3];
  const [isOpen, setOpen] = useState(false);
  const [isEdit, setEdit] = useState(false);
  const [editDetails, setEditDetails] = useState("");
  const [isDel, setDel] = useState(false);
  const [activeId, setActiveId] = useState("");
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
      Header: "Service Partner",
      accessor: "service_partner_name",
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
    {
      Header: "Action",
      accessor: "action",
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
            service_partner_name: item?.service_partner_name,
            action: (
              <ImageDiv>
                <img
                  src={EditIcon}
                  alt=""
                  onClick={() => {
                    setEdit(true);
                    setEditDetails(item);
                    // setData(JSON.parse(item?.image));
                  }}
                />
                <img
                  src={TrashIcons}
                  alt=""
                  onClick={() => {
                    setDel(true);
                    setActiveId(item?.serviceEngineerId);
                  }}
                />
              </ImageDiv>
            ),
          });
        });
        setData(data1);
      });
  }
  useEffect(() => {
    getServiceEng();
  }, []);
  const sendRequest = async () => {
    const res = await axios
      .get(`${server_api}/api/deleteServiceEngineer/${activeId}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const handleDelete = (e) => {
    e.preventDefault();
    sendRequest()
      .then((res) => console.log(res.data))
      .then(() => {
        getServiceEng();
        setDel(false);
      });
  };
  return (
    <Container>
      <MenuBar>
        <p>Service Engineer</p>
        <MenuItems>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "30px",
            }}
          >
            <Button onClick={() => setOpen(true)}>Add Service Engineer</Button>
          </div>
        </MenuItems>
      </MenuBar>
      <TableContainer>
        <AdminTable columns={columns} data={data} heading="Exam Category List" />
        <AddServiceEngineer
          isOpen={isOpen}
          onClose={() => setOpen(false)}
          getServiceEng={getServiceEng}
        />
        <EditServiceEngineer
          isEdit={isEdit}
          onClose={() => setEdit(false)}
          editDetails={editDetails}
          setEditDetails={setEditDetails}
          getServiceEng={getServiceEng}
        />
        <DeletePopUp isDel={isDel} onClose={() => setDel(false)} delReq={handleDelete} />
      </TableContainer>
    </Container>
  );
}

export default ViewServiceEngineer;
