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
} from "./ServiceCategory.styled";
import { SearchIcon, EditIcon, TrashIcons } from "../../assets/icons";
import AddServiceCategory from "./AddServiceCategory";
import UpdateServiceCategory from "./UpdateServiceCategory";
import DeletePopUp from "../../../admin/screen/DeletePopUp/DeletePopUp";
import AdminTable from "../../../admin/components/Table/AdminTable";
import { server_api } from "../../../admin/const/api";
import axios from "axios";

function ServiceCategory() {
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
      Header: "Category Name",
      accessor: "category_name",
      sortType: "basic",
    },
    {
      Header: "Description",
      accessor: "description",
      sortType: "basic",
    },
    {
      Header: "Actions",
      accessor: "action",
      sortType: "basic",
    },
  ];
  function getServiceCategory() {
    const data1 = [];
    fetch(`${server_api}/api/listServiceCategory`)
      .then((response) => response.json())
      .then((response) => {
        response?.map((item, index) => {
          console.log(response);
          console.log(data1);
          data1.push({
            id: item?.id,
            no: index + 1,
            category_name: item?.category_name,
            description: item?.description,
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
    getServiceCategory();
  }, []);
  const sendRequest = async () => {
    const res = await axios
      .get(`${server_api}/api/deleteServiceCategory/${activeId}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const handleDelete = (e) => {
    e.preventDefault();
    sendRequest()
      .then((res) => console.log(res.data))
      .then(() => {
        getServiceCategory();
        setDel(false);
      });
  };
  return (
    <Container>
      <MenuBar>
        <p>Service Partner Category</p>
        <MenuItems>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "30px",
            }}
          >
            <Button onClick={() => setOpen(true)}>Add Category</Button>
          </div>
        </MenuItems>
      </MenuBar>
      <TableContainer>
        <AdminTable columns={columns} data={data} heading="Exam Category List" />
        <AddServiceCategory
          isOpen={isOpen}
          onClose={() => setOpen(false)}
          getServiceCategory={getServiceCategory}
        />
        <UpdateServiceCategory
          isEdit={isEdit}
          onClose={() => setEdit(false)}
          editDetails={editDetails}
          setEditDetails={setEditDetails}
          getServiceCategory={getServiceCategory}
        />
        <DeletePopUp isDel={isDel} onClose={() => setDel(false)} delReq={handleDelete} />
      </TableContainer>
    </Container>
  );
}

export default ServiceCategory;
