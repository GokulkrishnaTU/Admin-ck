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
} from "./ServiceTypes.styled";
import { SearchIcon, EditIcon, TrashIcons } from "../../assets/icons";
import AddServiceTypes from "./AddServiceTypes";
import EditServiceTypes from "./EditServiceTypes"
import DeletePopUp from "../DeletePopUp/DeletePopUp";
import AdminTable from "../../components/Table/AdminTable";
import { server_api } from "../../const/api";
import axios from "axios"

function ServiceTypes() {
//   const navigation = useNavigate();
  const arr = [1, 2, 3];
  const [isOpen, setOpen] = useState(false);
  const [isEdit, setEdit] = useState(false);
  const [editDetails, setEditDetails] = useState('')
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
      Header: "Type Name",
      accessor: "type_name",
      sortType: "basic",
    },
    {
      Header: "Image",
      accessor: "image",
      sortType: "basic",
    },
    {
      Header: "Action",
      accessor: "action",
      sortType: "basic",
    },
  ];
  function getServiceTypes() {
    const data1 = [];
    fetch(`${server_api}/api/getServiceType`)
      .then((response) => response.json())
      .then((response) => {
        response?.map((item, index) => {
          console.log(response);
          console.log(data1);
          data1.push({
            id: item?.id,
            no: index+1,
            type_name: item?.type_name,
            image: item?.type_image ? (
              <img
                  src={item?.type_image}
                  style={{
                      height: "100px",
                      width: "100px",
                      objectFit: "contain",
                  }}
              />
          ) : null,
            action: (
              <ImageDiv>
                <img src={EditIcon} alt="" onClick={() => {
                      setEdit(true);
                      setEditDetails(item);
                      // setData(JSON.parse(item?.image));
                    }} />
                <img src={TrashIcons} alt=""  onClick={() => {
                    setDel(true)
                    setActiveId(item?.id)
                  }}/>
              </ImageDiv>
            ),
          });
        });
        setData(data1);
      });
    }
  useEffect(() => {
    getServiceTypes();
  }, []);
  const sendRequest = async() => {
    const res = await axios.get(`${server_api}/api/deleteServiceType/${activeId}`)
    .catch((err)=> console.log(err))
    const data = await res.data
    return data
  }
  const handleDelete = (e) => {
    e.preventDefault()
    sendRequest().then((res)=> console.log(res.data))
    .then(()=> {
      getServiceTypes()
      setDel(false)
    })
  }
  return (
    <Container>
      <MenuBar>
        <p>Service Types</p>
        <MenuItems>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "30px",
            }}
          >
            <Button onClick={() => setOpen(true)}>Add Service Type</Button>
          </div>
        </MenuItems>
      </MenuBar>
      <TableContainer>
        <AdminTable
          columns={columns}
          data={data}
          heading="Exam Category List"
        />
        <AddServiceTypes isOpen={isOpen} onClose={() => setOpen(false)} getServiceTypes={getServiceTypes} />
        <EditServiceTypes isEdit={isEdit} onClose={() => setEdit(false)} editDetails={editDetails} setEditDetails={setEditDetails} getServiceTypes={getServiceTypes} />
        <DeletePopUp isDel={isDel} onClose={() => setDel(false)} delReq={handleDelete}  />
      </TableContainer>
    </Container>
  );
}

export default ServiceTypes;
