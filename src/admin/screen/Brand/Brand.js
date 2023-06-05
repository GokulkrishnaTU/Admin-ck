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
} from "./Brand.styled";
import { SearchIcon, EditIcon, TrashIcons } from "../../assets/icons";
import AddBrand from "../Brand/AddBrand";
import EditBrand from "../Brand/EditBrand";
import DeletePopUp from "../DeletePopUp/DeletePopUp";
import AdminTable from "../../components/Table/AdminTable";
import { server_api } from "../../const/api";
import axios from "axios";

function Brand() {
  const navigation = useNavigate();
  const [isOpen, setOpen] = useState(false);
  const [isEdit, setEdit] = useState(false);
  const [editDetails, setEditDetails] = useState("");
  const [isDel, setDel] = useState(false);
  const [activeId, setActiveId] = useState("");
  const [data, setData] = useState([]);
  const columns = [
    {
      Header: "ID",
      accessor: "id",
      sortType: "basic",
    },
    {
      Header: "Brand Name",
      accessor: "brand_name",
      sortType: "basic",
    },
    {
      Header: "Brand Image",
      accessor: "brand_image",
      sortType: "basic",
    },
    {
      Header: "Action",
      accessor: "action",
      sortType: "basic",
    },
  ];
  function getBrand() {
    const data1 = [];
    fetch(`${server_api}/api/getBrands`)
      .then((response) => response.json())
      .then((response) => {
        response?.map((item) => {
          console.log(response);
          data1.push({
            id: item?.id,
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
    getBrand();
  }, []);
  const sendRequest = async () => {
    const res = await axios
      .post(`${server_api}/api/deleteBrand`, {
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
        setDel(false);
        getBrand();
      });
  };
  return (
    <Container>
      <MenuBar>
        <p>Brand List</p>
        <Button onClick={() => setOpen(true)}>Add Brand</Button>
      </MenuBar>
      <TableContainer>
        <AdminTable
          columns={columns}
          data={data}
          heading="Exam Category List"
        />
        <AddBrand
          isOpen={isOpen}
          onClose={() => setOpen(false)}
          getBrand={getBrand}
        />
        <EditBrand
          isEdit={isEdit}
          onClose={() => setEdit(false)}
          editDetails={editDetails}
          setEditDetails={setEditDetails}
          getBrand={getBrand}
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

export default Brand;
