import { React, useState, useEffect } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
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
} from "./CustomerSubCategory.styled";
import { SearchIcon, EditIcon, TrashIcons } from "../../assets/icons";
import AddCustomerSubCategory from "./AddCustomerSubCategory";
import EditCustomerSubCategory from "./EditCustomerSubCategory";
import DeletePopUp from "../DeletePopUp/DeletePopUp";
import AdminTable from "../../components/Table/AdminTable";
import { server_api } from "../../const/api";
import axios from "axios";

function CustomerSubCategory() {
  const location = useLocation();
  console.log(location);
  const [isOpen, setOpen] = useState(false);
  const [isEdit, setEdit] = useState(false);
  const [editDetails, setEditDetails] = useState("");
  const [isDel, setDel] = useState(false);
  const [activeId, setActiveId] = useState("");
  const [data, setData] = useState([]);
  let catId = location.state.id
  const columns = [
    {
      Header: "No.",
      accessor: "index",
      sortType: "basic",
    },
    {
      Header: "Sub category name",
      accessor: "sub_category_name",
      sortType: "basic",
    },
    {
      Header: "Image",
      accessor: "sub_category_image",
      sortType: "basic",
    },
    {
      Header: "Action",
      accessor: "action",
      sortType: "basic",
    },
  ];
  async function getCustomerSubCategory() {
    const data1 = [];
    await axios
      .post(`${server_api}/api/getCustomerSubCategory`, {
        category_id: location.state.id,
      })
      .then((response) => {
        response.data?.map((item, index) => {
          data1.push({
            id: item?.id,
            index : index + 1,
            sub_category_name: item?.sub_category_name,
            sub_category_image: (
              <img src={item?.sub_category_image} alt="" width="100px" />
            ),
            action: (
              <ImageDiv>
                <img
                  src={EditIcon}
                  alt="edit icon"
                  onClick={() => {
                    setEdit(true);
                    setEditDetails(item);
                  }}
                />
                <img
                  src={TrashIcons}
                  alt="delete icon"
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
    getCustomerSubCategory();
  }, []);

  const sendDelRequest = async () => {
    const res = await axios
      .post(`${server_api}/api/deleteCustomerSubCategory`, {
        id: activeId,
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const handleDelete = (e) => {
    e.preventDefault();
    sendDelRequest()
      .then((res) => console.log(res.data))
      .then(() => {
        getCustomerSubCategory()
        setDel(false)
      });
  };
  return (
    <Container>
      <MenuBar>
        <p>Customer Sub Category - {location.state.name}</p>
        <MenuItems>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "30px",
            }}
          >
            <Button onClick={() => setOpen(true)}>
              Add Customer Sub Category
            </Button>
          </div>
        </MenuItems>
      </MenuBar>
      <TableContainer>
        <AdminTable
          columns={columns}
          data={data}
          heading="Exam Category List"
        />
        <AddCustomerSubCategory
          isOpen={isOpen}
          onClose={() => setOpen(false)}
          id={catId}
          getCustomerSubCategory={getCustomerSubCategory}
        />
        <EditCustomerSubCategory
          isEdit={isEdit}
          onClose={() => setEdit(false)}
          editDetails={editDetails}
          setEditDetails={setEditDetails}
          getCustomerSubCategory={getCustomerSubCategory}
        />
        <DeletePopUp
          isDel={isDel}
          onClose={() => setDel(false)}
          delReq={handleDelete}
        />
      </TableContainer>
    </Container>
  );
}

export default CustomerSubCategory;
