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
} from "./ViewInstallationStyled";
import { SearchIcon, EditIcon, TrashIcons } from "../../assets/icons";
// import { EditIcon } from "../../assets/icons/edit.png";
// import { TrashIcons } from "../../assets/icons/delete.png";
// import AddBrand from '../Brand/AddBrand'
import AddInstallation from "./AddInstallation";
// import EditBrand from "../Brand/EditBrand";
import EditInstallation from "../Installation/EditInstallation"
import DeletePopUp from "../DeletePopUp/DeletePopUp";
import AdminTable from "../../components/Table/AdminTable";
import { server_api } from "../../const/api";
import axios from "axios"

function ViewInstallation() {
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
      Header: "Title",
      accessor: "title",
      sortType: "basic",
    },
    {
      Header: "Description",
      accessor: "description",
      sortType: "basic",
    },
    {
      Header: "Amount",
      accessor: "amount",
      sortType: "basic",
    },
    {
      Header: "Action",
      accessor: "action",
      sortType: "basic",
    },
  ];
  function getInstallation() {
    const data1 = [];
    fetch(`${server_api}/api/getInstallation`)
      .then((response) => response.json())
      .then((response) => {
        response?.map((item, index) => {
          console.log(response);
          console.log(data1);
          data1.push({
            id: item?.id,
            no: index+1,
            title: item?.title,
            amount: item?.amount,
            description: item?.description,
            brand_name: item?.brand_name,
            brand_image: item?.brand_image ? (
              <img
                  src={item?.brand_image}
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
    getInstallation();
  }, []);
  const sendRequest = async() => {
    // const res = await axios.post(`${server_api}/api/deleteBrand`,{
    //   id: activeId
    // })
    const res = await axios.get(`${server_api}/api/deleteInstallation/${activeId}`)
    .catch((err)=> console.log(err))
    const data = await res.data
    return data
  }
  const handleDelete = (e) => {
    e.preventDefault()
    sendRequest().then((res)=> console.log(res.data))
    .then(()=> {
      getInstallation()
      setDel(false)
    })
  }
  return (
    <Container>
      <MenuBar>
        <p>Installation</p>
        <MenuItems>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "30px",
            }}
          >
            <Button onClick={() => setOpen(true)}>Add Installation</Button>
          </div>
        </MenuItems>
      </MenuBar>
      <TableContainer>
        <AdminTable
          columns={columns}
          data={data}
          heading="Exam Category List"
        />
        <AddInstallation isOpen={isOpen} onClose={() => setOpen(false)} getInstallation={getInstallation} />
        <EditInstallation isEdit={isEdit} onClose={() => setEdit(false)} editDetails={editDetails} setEditDetails={setEditDetails} getInstallation={getInstallation} />
        <DeletePopUp isDel={isDel} onClose={() => setDel(false)} delReq={handleDelete}  />
      </TableContainer>
    </Container>
  );
}

export default ViewInstallation;
