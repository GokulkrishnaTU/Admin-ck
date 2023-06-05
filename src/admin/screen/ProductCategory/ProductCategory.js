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
} from "./ProductCategory.styled";
import { SearchIcon, EditIcon, TrashIcons } from "../../assets/icons";
import AddProductCategory from "./AddProductCategory";
import EditProductCategory from "./EditProductCategory";
import DeletePopUp from "../DeletePopUp/DeletePopUp";
import AdminTable from "../../components/Table/AdminTable";
import { server_api } from "../../const/api";
import axios from "axios";

function ProductCategory() {
  const navigation = useNavigate();
  const arr = [1, 2, 3];
  const [isOpen, setOpen] = useState(false);
  const [isEdit, setEdit] = useState(false);
  const [editDetails, setEditDetails] = useState("");
  const [isDel, setDel] = useState(false);
  const [activeId, setActiveId] = useState("");
  const [data, setData] = useState([]);
  const [color, setColor] = useState("#3cd6bf");
  const columns = [
    {
      Header: "No.",
      accessor: "no",
      sortType: "basic",
    },
    {
      Header: "Name",
      accessor: "pro_cat_name",
      sortType: "basic",
    },
    {
      Header: "Image",
      accessor: "pro_cat_img",
      sortType: "basic",
    },
    {
      Header: "Code",
      accessor: "code",
      sortType: "basic",
    },
    {
      Header: "Action",
      accessor: "action",
      sortType: "basic",
    },
  ];
  function getProductCategory() {
    const data1 = [];
    fetch(`${server_api}/api/getProductCategory`)
      .then((response) => response.json())
      .then((response) => {
        response?.map((item, index) => {
          console.log(response);
          data1.push({
            no: index + 1,
            pro_cat_name: item?.product_category_name,
            pro_cat_img: item?.product_category_image ? (
              <img
                src={item?.product_category_image}
                width="100%"
                height="100%"
                style={{
                  width: "100px",
                }}
              />
            ) : null,
            code: item?.color,
            action: (
              <ImageDiv>
                <img
                  src={EditIcon}
                  alt=""
                  onClick={() => {
                    setEdit(true);
                    setEditDetails(item);
                    setColor(item.color);
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
    getProductCategory();
  }, []);
  const sendRequest = async () => {
    const res = await axios
      .post(`${server_api}/api/deleteProductCategory`, {
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
        getProductCategory()
        setDel(false)
      });
  };
  return (
    <Container>
      <MenuBar>
        <p>Product Category</p>
        <MenuItems>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "30px",
            }}
          >
            <Button onClick={() => setOpen(true)}>Add Product Category</Button>
          </div>
        </MenuItems>
      </MenuBar>
      <TableContainer>
        <AdminTable
          columns={columns}
          data={data}
          heading="Exam Category List"
        />
        <AddProductCategory
          isOpen={isOpen}
          onClose={() => setOpen(false)}
          getProductCategory={getProductCategory}
        />
        <EditProductCategory
          isEdit={isEdit}
          getProductCategory={getProductCategory}
          onClose={() => setEdit(false)}
          editDetails={editDetails}
          setEditDetails={setEditDetails}
          setColor={setColor}
          color={color}
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

export default ProductCategory;
