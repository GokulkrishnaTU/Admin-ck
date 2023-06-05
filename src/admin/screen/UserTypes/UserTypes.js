import { React, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Container,
  Button,
  ImageDiv,
  MenuBar,
  MenuItems,
  Search,
  Select,
  Table,
  TableContainer,
} from "./UserTypes.styled";
import { SearchIcon, EditIcon, TrashIcons } from "../../assets/icons";
import AddUserTypes from "./AddUserTypes";
import UpdateUserTypes from "./UpdateUserTypes";
import DeletePopUp from "../DeletePopUp/DeletePopUp";
import AdminTable from "../../components/Table/AdminTable";
import { server_api } from "../../const/api";
import axios from "axios";

function UserTypes() {
  const navigation = useNavigate();
  const [isOpen, setOpen] = useState(false);
  const [isEdit, setEdit] = useState(false);
  const [isDel, setDel] = useState(false);
  const [editDetails, setEditDetails] = useState("");
  const [data, setData] = useState([]);
  const [activeId, setActiveId] = useState("");

  const columns = [
    {
      Header: "No.",
      accessor: "id",
      sortType: "basic",
    },
    {
      Header: "User Type",
      accessor: "user_type",
      sortType: "basic",
    },
    {
      Header: "Action",
      accessor: "action",
      sortType: "basic",
    },
  ];

  function getUserTypes() {
    const data1 = [];
    fetch(`${server_api}/api/getUserType`)
      .then((response) => response.json())
      .then((response) => {
        response?.map((item, index) => {
          console.log(response);
          data1.push({
            id: index + 1,
            user_type: item?.user_type,
            action: (
              <ImageDiv>
                <img
                  src={EditIcon}
                  alt=""
                  onClick={() => {
                    setEdit(true);
                    setEditDetails(item);
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
    getUserTypes();
  }, []);
  const sendRequest = async () => {
    const res = await axios
      .get(`${server_api}/api/deleteUserType/${activeId}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const handleDelete = (e) => {
    e.preventDefault();
    sendRequest()
      .then((res) => console.log(res.data))
      .then(() => {
        getUserTypes();
        setDel(false);
      });
  };
  return (
    <Container>
      <MenuBar>
        <p>User Types</p>
        <Button onClick={() => setOpen(true)}>Add User Type</Button>
      </MenuBar>
      <TableContainer>
        <AdminTable columns={columns} data={data} heading="Exam Category List" />
        <AddUserTypes isOpen={isOpen} onClose={() => setOpen(false)} getUserTypes={getUserTypes} />
        <UpdateUserTypes
          isEdit={isEdit}
          onClose={() => setEdit(false)}
          editDetails={editDetails}
          setEditDetails={setEditDetails}
          getUserTypes={getUserTypes}
        />
        <DeletePopUp isDel={isDel} onClose={() => setDel(false)} delReq={handleDelete} />
      </TableContainer>
    </Container>
  );
}

export default UserTypes;
