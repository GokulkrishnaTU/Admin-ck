import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React from "react";
import { ContainerDiv, DeatilsContainer, StyledHeader } from "./OrderedProductDetails.styled";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { server_api } from "../../const/api";
import { useState } from "react";
import AdminTable from "../../components/Table/AdminTable";
import { Button } from "../CustomerSalesReport/CustomerSalesReport.styled";

function OrderedProductDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [customerData, setCustomerData] = useState([]);
  console.log("CustData, InvoiceId", customerData, location.state.id);

  const columns = [
    {
      Header: "No.",
      accessor: "no",
      sortType: "basic",
    },
    {
      Header: "Product Category",
      accessor: "product_category",
      sortType: "basic",
    },
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
      Header: "Image",
      accessor: "product_image",
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
      Header: "Offer Price",
      accessor: "offer_price",
      sortType: "basic",
    },
    {
      Header: "Order Status",
      accessor: "quotation",
      sortType: "basic",
    },
  ];
  async function getBrand() {
    const data1 = [];
    await axios
      .post(`${server_api}/api/getAllInvoicesById`, {
        id: location.state.id,
      })
      .then((res) => {
        res?.data?.product_list?.map((item, index) => {
          console.log(item);
          data1.push({
            id: item?.id,
            title: item?.title,
            no: index + 1,
            product_category: item?.product_category,
            product_image: <img src={JSON.parse(item?.productImages)[0]} width="100px" />,
            price: item?.price,
            offer_price: item?.offer_price,
            model: item?.model,
            description: item?.description,
            product_category: item?.product_category_name,
            purchase_type: item?.type_name,
            details: "ff",
            quotation: "ff",
          });
        });
        setData(data1);
      });
  }
  useEffect(() => {
    getBrand();
    getAllDetails();
  }, []);
  const getAllDetails = async () => {
    await axios
      .post(`${server_api}/api/getAllInvoicesById`, {
        id: location.state.id,
      })
      .then((res) => {
        console.log("res=>", res);
        setCustomerData(res.data);
      });
  };

  return (
    <ContainerDiv>
      <KeyboardBackspaceIcon
        style={{ paddingLeft: "10px", color: "#393a41", cursor: "pointer" }}
        onClick={() => navigate("/view-ordered-products")}
      />
      <StyledHeader>Product</StyledHeader>
      <TableContainer>
        <AdminTable columns={columns} data={data} heading="Exam Category List" />
      </TableContainer>
      <StyledHeader>Order Details :</StyledHeader>
      <DeatilsContainer>
        <p>
          Total Amount : <span>{customerData?.totalAmount}</span>{" "}
        </p>
        <p>
          Order Status : <span>{customerData?.order_status}</span>{" "}
        </p>
        <p>
          Payment Status : <span>{customerData?.payment_status}</span>{" "}
        </p>
        <p>
          GST Number : <span>{customerData?.gst_no}</span>{" "}
        </p>
        <p>
          Purchase Date : <span>{customerData?.purchaseDate}</span>{" "}
        </p>
      </DeatilsContainer>

      <StyledHeader>Contact Details :</StyledHeader>
      <DeatilsContainer>
        <p>
          Name : <span>{customerData.name}</span>
        </p>
        {/* <p>Email : </p> */}
        <p>
          Mobile Number : <span>{customerData.mobileNumber}</span>
        </p>
        <p>
          Mobile Number 2 : <span>{customerData.mobileNumber2}</span>{" "}
        </p>
        <p>
          House Name : <span>{customerData.house_name}</span>
        </p>
        <p>
          Street Name : <span>{customerData.street_name}</span>
        </p>
        <p>
          Pincode : <span>{customerData.pincode}</span>
        </p>
        <p>
          State : <span>{customerData.state} </span>
        </p>
        <p>
          Adress Status : <span>{customerData.address_status}</span>
        </p>
        <p>
          Profession : <span>{customerData.profession}</span>
        </p>
        <p>
          Organization Name : <span>{customerData.organization_name}</span>
        </p>
        <p>
          Type of oraganization : <span>{customerData.type_of_organization}</span>
        </p>
      </DeatilsContainer>
    </ContainerDiv>
  );
}

export default OrderedProductDetails;
