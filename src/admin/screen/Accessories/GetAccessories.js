import { React, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Button,
  ImageDiv,
  MenuBar,
  MenuItems,
  TableContainer,
  Container,
} from "./GetAccessories.styled";
import { SearchIcon, EditIcon, TrashIcons, AddIcon } from "../../assets/icons";
import AddAccessoryType from "./AddAccessoryType";
import EditAccessories from "./EditAccessories";
import DeletePopUp from "../DeletePopUp/DeletePopUp";
import AdminTable from "../../components/Table/AdminTable";
import { server_api } from "../../const/api";
import axios from "axios";

function GetAccessories() {
  const navigate = useNavigate();

  const [isOpen, setOpen] = useState(false);
  const [isEdit, setEdit] = useState(false);
  const [editDetails, setEditDetails] = useState("");
  const [editCatDetails, setEditCatDetails] = useState("");
  const [isDel, setDel] = useState(false);
  const [activeId, setActiveId] = useState("");
  const [data, setData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);

  const columns = [
    {
      Header: "No.",
      accessor: "no",
      sortType: "basic",
    },
    {
      Header: "Accessory Type Name",
      accessor: "accessory_type_name",
      disableSortBy: true,
    },
    {
      Header: "Image",
      accessor: "accessory_image",
      sortType: "basic",
    },
    {
      Header: "Description",
      accessor: "description",
      sortType: "basic",
    },
    {
      Header: "Common",
      accessor: "common",
      sortType: "basic",
    },
    {
      Header: "Product Category",
      accessor: "product_category_id",
      sortType: "basic",
    },
    {
      Header: "Action",
      accessor: "action",
      disableSortBy: true,
    },
  ];
  function getAccessoryType() {
    const data1 = [];
    fetch(`${server_api}/api/getAccessoriesTypes`)
      .then((response) => response.json())
      .then((response) => {
        response?.map((item, index) => {
          data1.push({
            no: index + 1,
            id: item?.id,
            accessory_type_name: item?.accessory_type_name,
            product_category_id: (item?.product_category_name.map((it)=>(
              <p>{it}</p>
            ))

              ),
            description: item?.description,
            common: item?.common ? "Yes" : "No",
            accessory_image: item?.accessory_image ? (
              <img
                src={item?.accessory_image}
                width="100%"
                height="100%"
                style={{ width: "100px" }}
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
                    setEditCatDetails(JSON.parse(item?.product_category_id));
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
  const getProdCat = async () => {
    await axios
      .get(`${server_api}/api/getProductCategory`)
      .then((res) => setCategoryData(res.data));
  };
  useEffect(() => {
    getAccessoryType();
    getProdCat();
  }, []);
  const sendRequest = async () => {
    const res = await axios
      .post(`${server_api}/api/deleteAccessoriesTypes`, {
        id: activeId,
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const handleDelete = (e) => {
    e.preventDefault();
    sendRequest().then(() => {
      getAccessoryType();
      setDel(false);
    });
  };
  return (
    <Container>
      <MenuBar>
        <p>Accessories List</p>
        <MenuItems>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "30px",
            }}
          >
            <Button onClick={() => setOpen(true)}>Add Accessory Type</Button>
          </div>
        </MenuItems>
      </MenuBar>
      <TableContainer>
        <AdminTable
          columns={columns}
          data={data}
          heading="Exam Category List"
        />
        <AddAccessoryType
          isOpen={isOpen}
          onClose={() => setOpen(false)}
          categoryData={categoryData}
          getAccessoryType={getAccessoryType}
        />
        <EditAccessories
          isEdit={isEdit}
          onClose={() => setEdit(false)}
          editDetails={editDetails}
          setEditDetails={setEditDetails}
          categoryData={categoryData}
          editCatDetails={editCatDetails}
          setEditCatDetails={setEditCatDetails}
          getAccessoryType={getAccessoryType}
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

export default GetAccessories;
