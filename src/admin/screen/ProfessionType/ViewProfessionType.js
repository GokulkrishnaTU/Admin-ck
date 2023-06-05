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
} from "./ViewStyle";
import { SearchIcon, EditIcon, TrashIcons } from "../../assets/icons";
import AdProfType from "./AdProfTyp";
import EditProfessionType from "./EditProfessionType";
import DeletePopUp from "../DeletePopUp/DeletePopUp";
import AdminTable from "../../components/Table/AdminTable";
import { server_api } from "../../const/api";
import axios from "axios";

function ViewProfessionType() {
  const navigation = useNavigate();
  const arr = [1, 2, 3];
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
      Header: "Profession Name",
      accessor: "profession_name",
      sortType: "basic",
    },
    {
      Header: "Action",
      accessor: "action",
      sortType: "basic",
    },
  ];

  function getProfession() {
    const data1 = [];
    fetch(`${server_api}/api/getProfession`)
      .then((response) => response.json())
      .then((response) => {
        response?.map((item) => {
          console.log(response);
          data1.push({
            id: item?.id,
            profession_name: item?.profession_name,
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
    getProfession();
  }, []);
  const sendRequest = async () => {
    const res = await axios
      .post(`${server_api}/api/deleteProfession`, {
        id: activeId,
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const handleDelete = (e) => {
    e.preventDefault();
    sendRequest()
      .then((res) => console.log(res.data))
      .then(() => {
        getProfession();
        setDel(false);
      });
  };
  return (
    <Container>
      <MenuBar>
        <p>Profession Types</p>
        <Button onClick={() => setOpen(true)}>Add Profession Type</Button>
      </MenuBar>
      <TableContainer>
        <AdminTable columns={columns} data={data} heading="Exam Category List" />
        <AdProfType isOpen={isOpen} onClose={() => setOpen(false)} getProfession={getProfession} />
        <EditProfessionType
          isEdit={isEdit}
          onClose={() => setEdit(false)}
          editDetails={editDetails}
          setEditDetails={setEditDetails}
          getProfession={getProfession}
        />
        <DeletePopUp isDel={isDel} onClose={() => setDel(false)} delReq={handleDelete} />
      </TableContainer>
    </Container>
  );
}

export default ViewProfessionType;
