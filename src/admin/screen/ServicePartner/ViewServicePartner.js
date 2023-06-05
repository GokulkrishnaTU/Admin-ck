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
} from "./ViewServicePartner.styled";
import { SearchIcon, EditIcon, TrashIcons } from "../../assets/icons";
import AddServicePartner from "./AddServicePartner";
import EditServicePartner from "./EditServicePartner";
import DeletePopUp from "../../../admin/screen/DeletePopUp/DeletePopUp";
import AdminTable from "../../../admin/components/Table/AdminTable";
import { server_api } from "../../../admin/const/api";
import axios from "axios";

function ViewServicePartner() {
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
      Header: "Address",
      accessor: "address",
      sortType: "basic",
    },
    {
      Header: "Contact",
      accessor: "contact",
      sortType: "basic",
    },
    {
      Header: "Freelancer",
      accessor: "freelancer",
      sortType: "basic",
    },
    {
      Header: "Status",
      accessor: "status",
      sortType: "basic",
    },
    {
      Header: "Amount",
      accessor: "amount",
      sortType: "basic",
    },
    {
      Header: "Category",
      accessor: "category",
      sortType: "basic",
    },
    {
      Header: "Level",
      accessor: "level",
      sortType: "basic",
    },
    {
      Header: "Action",
      accessor: "action",
      sortType: "basic",
    },
  ];
  function getServicePart() {
    const data1 = [];
    fetch(`${server_api}/api/getServicePartner`)
      .then((response) => response.json())
      .then((response) => {
        response?.map((item, index) => {
          console.log(response);
          console.log(data1);
          data1.push({
            id: item?.id,
            no: index + 1,
            name: item?.name,
            address: item?.address,
            contact: item?.contact,
            freelancer: item?.freelancer === 1 ? "Yes" : "No",
            status: item?.status,
            level: item?.level,
            amount: item?.amount,
            category: item?.category,
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
                    setActiveId(item?.id);
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
    getServicePart();
  }, []);
  const sendRequest = async () => {
    const res = await axios
      .get(`${server_api}/api/deleteServicePartner/${activeId}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const handleDelete = (e) => {
    e.preventDefault();
    sendRequest()
      .then((res) => console.log(res.data))
      .then(() => {
        getServicePart();
        setDel(false);
      });
  };
  return (
    <Container>
      <MenuBar>
        <p>Service Partner</p>
        <MenuItems>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "30px",
            }}
          >
            <Button onClick={() => setOpen(true)}>Add Service Partner</Button>
          </div>
        </MenuItems>
      </MenuBar>
      <TableContainer>
        <AdminTable columns={columns} data={data} heading="Exam Category List" />
        <AddServicePartner
          isOpen={isOpen}
          onClose={() => setOpen(false)}
          getServicePart={getServicePart}
        />
        <EditServicePartner
          isEdit={isEdit}
          onClose={() => setEdit(false)}
          editDetails={editDetails}
          setEditDetails={setEditDetails}
          getServicePart={getServicePart}
        />
        <DeletePopUp isDel={isDel} onClose={() => setDel(false)} delReq={handleDelete} />
      </TableContainer>
    </Container>
  );
}

export default ViewServicePartner;
