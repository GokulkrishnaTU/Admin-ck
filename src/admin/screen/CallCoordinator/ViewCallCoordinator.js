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
} from "./ViewCallCoordinator.styled";
import { SearchIcon, EditIcon, TrashIcons } from "../../assets/icons";
import AddCallCoordinator from "./AddCallCoordinator";
import UpdateCallCoordinator from "./UpdateCallCoordinator";
import DeletePopUp from "../DeletePopUp/DeletePopUp";
import AdminTable from "../../components/Table/AdminTable";
import { server_api } from "../../const/api";
import axios from "axios";

function ViewCallCoordinator() {
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
      Header: "Email",
      accessor: "email",
      sortType: "basic",
    },
    {
      Header: "District",
      accessor: "district",
      sortType: "basic",
    },
    {
      Header: "Mobile No",
      accessor: "mobile",
      sortType: "basic",
    },
    {
      Header: "Actions",
      accessor: "action",
      sortType: "basic",
    },
  ];
  function getCallCoordinator() {
    const data1 = [];
    fetch(`${server_api}/api/listCall`)
      .then((response) => response.json())
      .then((response) => {
        response?.map((item, index) => {
          console.log(response);
          console.log(data1);
          data1.push({
            id: item?.id,
            no: index + 1,
            name: item?.name,
            email: item?.email_id,
            district: item?.district_name,
            mobile: item?.mob,
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
    getCallCoordinator();
  }, []);
  const sendRequest = async () => {
    const res = await axios
      .get(`${server_api}/api/deletCall/${activeId}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const handleDelete = (e) => {
    e.preventDefault();
    sendRequest()
      .then((res) => console.log(res.data))
      .then(() => {
        getCallCoordinator();
        setDel(false);
      });
  };
  return (
    <Container>
      <MenuBar>
        <p>Call Coordinator</p>
        <MenuItems>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "30px",
            }}
          >
            <Button onClick={() => setOpen(true)}>Add Call Coordinator</Button>
          </div>
        </MenuItems>
      </MenuBar>
      <TableContainer>
        <AdminTable columns={columns} data={data} heading="Exam Category List" />
        <AddCallCoordinator
          isOpen={isOpen}
          onClose={() => setOpen(false)}
          getCallCoordinator={getCallCoordinator}
        />
        <UpdateCallCoordinator
          isEdit={isEdit}
          getCallCoordinator={getCallCoordinator}
          onClose={() => setEdit(false)}
          editDetails={editDetails}
          setEditDetails={setEditDetails}
        />
        <DeletePopUp isDel={isDel} onClose={() => setDel(false)} delReq={handleDelete} />
      </TableContainer>
    </Container>
  );
}

export default ViewCallCoordinator;
