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
} from "./ServicePartnerLevels.styled";
import { SearchIcon, EditIcon, TrashIcons } from "../../assets/icons";
import AddServicePartnerLevels from "./AddServicePartnerLevels";
import UpdateServicePartnerLevels from "./UpdateServicePartnerLevels";
import DeletePopUp from "../../../admin/screen/DeletePopUp/DeletePopUp";
import AdminTable from "../../../admin/components/Table/AdminTable";
import { server_api } from "../../../admin/const/api";
import axios from "axios";

function ServicePartnerLevels() {
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
      Header: "Level",
      accessor: "Level",
      sortType: "basic",
    },
    {
      Header: "Start Amount",
      accessor: "start_amount",
      sortType: "basic",
    },
    {
      Header: "End Amount",
      accessor: "end_amount",
      sortType: "basic",
    },
    {
      Header: "Actions",
      accessor: "action",
      sortType: "basic",
    },
  ];
  function getServicePartnerLevels() {
    const data1 = [];
    fetch(`${server_api}/api/listLevel`)
      .then((response) => response.json())
      .then((response) => {
        response?.map((item, index) => {
          console.log(response);
          console.log(data1);
          data1.push({
            id: item?.id,
            no: index + 1,
            Level: item?.Level,
            start_amount: item?.start_amount,
            end_amount: item?.end_amount,
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
    getServicePartnerLevels();
  }, []);
  const sendRequest = async () => {
    const res = await axios
      .get(`${server_api}/api/deleteLevel/${activeId}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const handleDelete = (e) => {
    e.preventDefault();
    sendRequest()
      .then((res) => console.log(res.data))
      .then(() => {
        getServicePartnerLevels();
        setDel(false);
      });
  };
  return (
    <Container>
      <MenuBar>
        <p>Service Partner Levels</p>
        <MenuItems>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "30px",
            }}
          >
            <Button onClick={() => setOpen(true)}>Add Levels</Button>
          </div>
        </MenuItems>
      </MenuBar>
      <TableContainer>
        <AdminTable columns={columns} data={data} heading="Exam Category List" />
        <AddServicePartnerLevels
          isOpen={isOpen}
          onClose={() => setOpen(false)}
          getServicePartnerLevels={getServicePartnerLevels}
        />
        <UpdateServicePartnerLevels
          isEdit={isEdit}
          onClose={() => setEdit(false)}
          editDetails={editDetails}
          setEditDetails={setEditDetails}
          getServicePartnerLevels={getServicePartnerLevels}
        />
        <DeletePopUp isDel={isDel} onClose={() => setDel(false)} delReq={handleDelete} />
      </TableContainer>
    </Container>
  );
}

export default ServicePartnerLevels;
