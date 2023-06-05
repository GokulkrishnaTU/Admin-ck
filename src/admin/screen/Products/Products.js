import axios from "axios";
import React from "react";
import { useState } from "react";
import AdminTable from "../../components/Table/AdminTable";
import DeletePopUp from "../DeletePopUp/DeletePopUp";
import {
  Button,
  Container,
  ImageDiv,
  MenuBar,
  MenuItems,
  ProdImageDiv,
  TableContainer,
} from "./Products.styled";
import { SearchIcon, EditIcon, TrashIcons } from "../../assets/icons";
import { server_api } from "../../const/api";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Products() {
  const navigate = useNavigate();
  const [isOpen, setOpen] = useState(false);
  const [isEdit, setEdit] = useState(false);
  const [isDel, setDel] = useState(false);
  const [activeId, setActiveId] = useState("");
  const [data, setData] = useState([]);
  const [editDetails, setEditDetails] = useState("");
  const [prodImages, setProdImages] = useState([]);
  const [custCatData, setCustCatData] = useState([]);

  const [purchaseTypeData, setPurchaseTypeData] = useState([]);
  const [professionTypeData, setProfessionTypeData] = useState([]);
  const [productCategoryData, setProductCategoryData] = useState([]);
  const [brandData, setBrandData] = useState([]);
  const [accessoryData, setAccessoryData] = useState([]);
  const [customerData, setCustomerData] = useState([]);
  const [componentData, setComponentData] = useState([]);
  // const [dropdownValues, setDropdownValues] = useState(["2"]);

  useEffect(() => {
    getPurchaseType().then((res) => setPurchaseTypeData(res));
    getProfessionType().then((res) => setProfessionTypeData(res));
    getProductCategory().then((res) => setProductCategoryData(res));
    getBrands().then((res) => setBrandData(res));
    getAccessories().then((res) => setAccessoryData(res));
    getCustomerCategory().then((res) => setCustomerData(res));
    getComponents().then((res) => setComponentData(res));
    // getAllDropdownValues().then((res) => setDropdownValues(res));
  }, []);

  // const getAllDropdownValues = async () => {
  //   const res = await axios
  //     .get(`${server_api}/api/getAllDropDownValues`)
  //     .catch((err) => console.log(err));
  //   const data = await res.data;
  //   return data;
  // };

  const getPurchaseType = async () => {
    const res = await axios
      .get(`${server_api}/api/getPurchaseType`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const getProfessionType = async () => {
    const res = await axios.get(`${server_api}/api/getProfession`).catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const getProductCategory = async () => {
    const res = await axios
      .get(`${server_api}/api/getProductCategory`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const getBrands = async () => {
    const res = await axios.get(`${server_api}/api/getBrands`).catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const getAccessories = async () => {
    const res = await axios
      .get(`${server_api}/api/getAccessoriesTypes`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const getCustomerCategory = async () => {
    const res = await axios
      .get(`${server_api}/api/getCustomerCategory`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const getComponents = async () => {
    const res = await axios.get(`${server_api}/api/getComponents`).catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const columns = [
    {
      Header: "Title",
      accessor: "title",
      sortType: "basic",
    },
    {
      Header: "Model",
      accessor: "model",
      sortType: "basic",
    },
    {
      Header: "Images",
      accessor: "images",
      sortType: "basic",
    },
    {
      Header: "Category",
      accessor: "product_category_name",
      sortType: "basic",
    },
    {
      Header: "Description",
      accessor: "description",
      sortType: "basic",
    },
    {
      Header: "Price",
      accessor: "price",
      sortType: "basic",
    },
    {
      Header: "Offer price",
      accessor: "offer_price",
      sortType: "basic",
    },
    {
      Header: "Reward points",
      accessor: "reward_points",
      sortType: "basic",
    },
    {
      Header: "Stock status",
      accessor: "stock_status",
      sortType: "basic",
    },
    {
      Header: "Warranty",
      accessor: "warranty",
      sortType: "basic",
    },
    {
      Header: "Action",
      accessor: "action",
      sortType: "basic",
    },
  ];
  async function getProductList() {
    let dropVal = await axios.get(`${server_api}/api/getAllDropDownValues`);
    let dropDownVal = await dropVal.data;
    const data1 = [];
    fetch(`${server_api}/api/getProductList`)
      .then((response) => response.json())
      .then((response) => {
        response?.map((item) => {
          data1.push({
            id: item?.id,
            title: item?.title,
            model: item?.model,
            images: (
              <ProdImageDiv>
                <img src={JSON.parse(item?.images)[0]} alt={item.title} />
              </ProdImageDiv>
            ),
            description: item?.description,
            product_category_name: item?.product_category_name,
            price: item?.price,
            offer_price: item?.offer_price,
            reward_points: item?.reward_points,
            order_status: item?.order_status,
            warranty: item?.warranty,
            stock_status: item?.stock_status,
            action: (
              <ImageDiv>
                <img
                  src={EditIcon}
                  alt=""
                  onClick={async () => {
                    // setEdit(true);
                    // setEditDetails(item);
                    // setProdImages(JSON.parse(item?.images));
                    // await axios
                    //   .post(`${server_api}/api/getCustomerSubCategory`, {
                    //     category_id: item?.customer_category_id,
                    //   })
                    //   .then((res) => {
                    //     setCustCatData(res.data);
                    //   });
                    navigate("/update-products", {
                      state: { item: item, dropdownValues: dropDownVal },
                    });
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
    getProductList();
  }, []);
  const sendDelRequest = async () => {
    const res = await axios
      .get(`${server_api}/api/Productdelete/${activeId}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const handleDelete = (e) => {
    e.preventDefault();
    sendDelRequest()
      .then((res) => console.log(res.data))
      .then(() => {
        getProductList();
        setDel(false);
      });
  };
  return (
    <Container>
      <MenuBar>
        <p>Products List</p>
        <MenuItems>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "30px",
            }}>
            <Button onClick={() => navigate("/add-products")}>Add Products</Button>
          </div>
        </MenuItems>
      </MenuBar>

      <TableContainer>
        <AdminTable columns={columns} data={data} heading="Exam Category List" />
        <DeletePopUp isDel={isDel} onClose={() => setDel(false)} delReq={handleDelete} />
      </TableContainer>
    </Container>
  );
}

export default Products;
