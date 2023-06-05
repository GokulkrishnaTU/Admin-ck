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
} from "./AdminUsers.styled";
import { SearchIcon, EditIcon, TrashIcons } from "../../assets/icons";
import AddAdminUsers from "./AddAdminUsers";
import UpdateAdminUsers from "./UpdateAdminUsers";
import DeletePopUp from "../DeletePopUp/DeletePopUp";
import AdminTable from "../../components/Table/AdminTable";
import { server_api } from "../../const/api";
import axios from "axios";

function AdminUsers() {
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
      Header: "User Name",
      accessor: "username",
      sortType: "basic",
    },
    {
      Header: "Mobile Number",
      accessor: "mob",
      sortType: "basic",
    },
    {
      Header: "Email Id",
      accessor: "email",
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
    fetch(`${server_api}/api/getSuperAdmin`)
      .then((response) => response.json())
      .then((response) => {
        response?.map((item, index) => {
          console.log(response);
          data1.push({
            id: index + 1,
            username: item?.username,
            mob: item?.mob,
            email: item?.email,
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
      .get(`${server_api}/api/deleteSuperAdmin/${activeId}`)
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
        <p>Admin Users</p>
        <Button onClick={() => setOpen(true)}>Add Admin User</Button>
      </MenuBar>
      <TableContainer>
        <AdminTable columns={columns} data={data} heading="Exam Category List" />
        <AddAdminUsers isOpen={isOpen} onClose={() => setOpen(false)} getUserTypes={getUserTypes} />
        <UpdateAdminUsers
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

export default AdminUsers;
