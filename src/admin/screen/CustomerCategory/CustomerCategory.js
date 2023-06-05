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
} from "./CustomerCategory.styled";
import { SearchIcon, EditIcon, TrashIcons, AddIcon } from "../../assets/icons";
import AddCustomerCategory from "./AddCustomerCategory";
import EditCustomerCategory from "./EditCustomerCategory";
import DeletePopUp from "../DeletePopUp/DeletePopUp";
import AdminTable from "../../components/Table/AdminTable";
// import { getProductCategory } from "../../../admin/const/api";
import { server_api } from "../../const/api";
import axios from "axios";

function CustomerCategory() {
  const navigate = useNavigate();

  const [isOpen, setOpen] = useState(false);
  const [isEdit, setEdit] = useState(false);
  const [editDetails, setEditDetails] = useState("");
  const [editCatDetails, setEditCatDetails] = useState("");
  const [isDel, setDel] = useState(false);
  const [activeId, setActiveId] = useState("");
  const [data, setData] = useState([]);

  const [productCat, setProductCat] = useState([]);
  const [purchaseType, setPurchaseType] = useState([]);
  console.log("purchase=>", purchaseType);
  useEffect(() => {
    getProductCat().then((res) => setProductCat(res));
    getPurchaseType().then((res) => setPurchaseType(res));
    getCustCategory();
  }, []);
  const getProductCat = async () => {
    const res = await axios
      .get(`${server_api}/api/getProductCategory`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const getPurchaseType = async () => {
    const res = await axios
      .get(`${server_api}/api/getPurchaseType`)
      // .then((res) => console.log(res))
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  const columns = [
    {
      Header: "No",
      accessor: "no",
      sortType: "basic",
    },
    {
      Header: "Name",
      accessor: "cust_cat_name",
      sortType: "basic",
    },
    {
      Header: "Image",
      accessor: "image",
      disableSortBy: true,
    },
    {
      Header: "Product Category",
      accessor: "product_cat",
      disableSortBy: true,
    },
    {
      Header: "Purchase Type",
      accessor: "purchase_type",
      disableSortBy: true,
    },
    {
      Header: "Action",
      accessor: "action",
      disableSortBy: true,
    },
    {
      Header: "Sub category",
      accessor: "subcategory",
      disableSortBy: true,
    },
  ];
  function getCustCategory() {
    const data1 = [];
    fetch(`${server_api}/api/getCustomerCategory`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        response?.map((item, index) => {
          console.log(item);
          data1.push({
            no: index + 1,
            cust_cat_name: item?.category_name,
            image: <img src={item?.category_image} alt="" width="100px" />,
            product_cat: (
              item?.product_category_name.map((prod)=>(
                <p style={{margin:'0'}}>{prod}</p>
              ))
            ),
            purchase_type: item?.type_name,
            action: (
              <ImageDiv>
                <img
                  src={EditIcon}
                  alt=""
                  onClick={() => {
                    setEditCatDetails(JSON.parse(item?.product_category_id));
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
            subcategory: (
              <ImageDiv>
                <AddIcon
                  style={{ opacity: 0.7 }}
                  onClick={() => {
                    console.log(item?.id);
                    navigate(`/view-customer-subcategory`, { state: {id: item?.id, name: item?.category_name} });
                  }}
                />
              </ImageDiv>
            ),
          });
        });
        setData(data1);
      });
  }

  const sendDelRequest = async () => {
    const res = await axios
      .post(`${server_api}/api/deleteCustomerCategory`, {
        id: activeId,
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const handleDelete = (e) => {
    e.preventDefault();
    sendDelRequest().then(() => {
      getCustCategory()
      setDel(false)
    });
  };
  return (
    <Container>
      <MenuBar>
        <p>Customer Category</p>
        <MenuItems>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "30px",
            }}
          >
            <Button onClick={() => setOpen(true)}>Add Customer Category</Button>
          </div>
        </MenuItems>
      </MenuBar>
      <TableContainer>
        <AdminTable
          columns={columns}
          data={data}
          heading="Exam Category List"
        />
        <AddCustomerCategory
          isOpen={isOpen}
          onClose={() => setOpen(false)}
          productCat={productCat}
          purchaseType={purchaseType}
          getCustCategory={getCustCategory}
        />
        <EditCustomerCategory
          isEdit={isEdit}
          onClose={() => setEdit(false)}
          editDetails={editDetails}
          editCatDetails={editCatDetails}
          setEditDetails={setEditDetails} setEditCatDetails={setEditCatDetails}
          productCat={productCat}
          purchaseType={purchaseType}
          getCustCategory={getCustCategory}
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

export default CustomerCategory;
