import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { MenuBar } from "../CustomerSalesReport/CustomSaleForm.styled";
import {
  AutoFillDiv,
  Button,
  ButtonContainer,
  Container,
  FormContainer,
  FormDivision,
  FormGroup,
  FormGroup1,
  FormGroup2,
  FormSubDiv,
  FormSubGroup,
  SubContainer,
} from "./UpdateServiceReg.styled";
import { server_api } from "../../const/api";
// import { AutoComplete, MultiSelect } from "@progress/kendo-react-dropdowns";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

const customStyles = {
  control: (base) => ({
    ...base,
    height: 35,
    minHeight: 35,
    width: "100%",
    fontSize: "small",
  }),
};

function UpdateServiceReg() {
  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState(null);
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState([]);
  const [productCategory, setProductCategoryData] = useState([]);

  useEffect(() => {
    getProductCategory().then((res) => setProductCategoryData(res));
  }, []);

  const getProductCategory = async () => {
    const res = await axios
      .get(`${server_api}/api/getProductCategory`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  const sendRequest = async () => {
    const formData = new FormData();
    for (let i = 0; i < file?.length; i++) {
      formData.append(`images[${i}]`, file[i]);
    }
    formData.append("product_category_id", inputs.product_category_id);
    formData.append("customer_sub_category_id", JSON.stringify(selectedOption));
    formData.append("model", inputs.model);
    formData.append("description", inputs.description);
    formData.append("title", inputs.title);
    formData.append("price", inputs.price);
    formData.append("reward_points", inputs.reward_points);
    formData.append("profession_id", 1);
    formData.append("offer_price", inputs.offer_price);
    formData.append("warranty", inputs.warranty);
    formData.append("stock_status", inputs.stock_status);
    formData.append("warranty_details", inputs.warranty_details);
    formData.append("brandId", inputs.brandId);
    formData.append("comboPrice", inputs.product_category_id === "18" ? inputs.comboPrice : "");
    // inputs.product_category_id === "15" && inputs.componentTypeId === "3" ? formData.append("depend_product_list", JSON.stringify(motherboardArray)) : ""
    await axios
      .post(`${server_api}/api/insertProduct`, formData, {
        header: {
          "Content-Type": "multipart/form-data",
          accept: "application/json",
        },
      })
      // .then((res)=>res.json())
      .then((res) => {
        console.log("res=>", res);
        if (res.data.code == "200") {
          navigate("/view-products");
        } else {
          alert(res.data.message);
        }
      })
      .then((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest();
  };

  return (
    <Container>
      {/* <MenuBar>Add Product</MenuBar> */}
      <SubContainer>
        <FormContainer>
          <FormSubDiv>
            <p style={{ textAlign: "center" }}>Edit Service Complaints</p>
            <FormDivision>
              <FormGroup style={{ width: "49%" }}>
                <label>Sl No :</label>
                <input type="text" />
              </FormGroup>
              <FormGroup style={{ width: "49%" }}>
                <label>Brand :</label>
                <select
                  name="product_category_id"
                  id="product_category_id"
                  value={inputs.product_category_id}
                  onChange={(e) => {
                    setInputs((prev) => ({
                      ...prev,
                      product_category_id: e.target.value,
                      customer_category_id: "none",
                    }));
                  }}
                  defaultValue="none"
                >
                  <option value="none" disabled hidden>
                    --Select--
                  </option>
                  {/* {productCategoryData.map((item, key) => {
                    return (
                      <option value={item.id} key={key}>
                        {item.product_category_name}
                      </option>
                    );
                  })} */}
                </select>
              </FormGroup>
            </FormDivision>

            <FormDivision>
              <FormGroup style={{ width: "49%" }}>
                <label>Warranty :</label>
                <input
                  type="number"
                  value={inputs.title}
                  onChange={(e) => {
                    setInputs((prev) => ({
                      ...prev,
                      title: e.target.value,
                    }));
                  }}
                />
              </FormGroup>

              <FormGroup style={{ width: "49%" }}>
                <label>Warranty Expiry Date :</label>
                <input
                  type="date"
                  value={inputs.title}
                  onChange={(e) => {
                    setInputs((prev) => ({
                      ...prev,
                      title: e.target.value,
                    }));
                  }}
                />
              </FormGroup>
            </FormDivision>

            <FormDivision>
              <FormGroup style={{ width: "49%" }}>
                <label>Service Pack Date :</label>
                <input
                  type="date"
                  value={inputs.title}
                  onChange={(e) => {
                    setInputs((prev) => ({
                      ...prev,
                      title: e.target.value,
                    }));
                  }}
                />
              </FormGroup>

              <FormGroup style={{ width: "49%" }}>
                <label>Service Pack Expiry Date :</label>
                <input
                  type="date"
                  value={inputs.title}
                  onChange={(e) => {
                    setInputs((prev) => ({
                      ...prev,
                      title: e.target.value,
                    }));
                  }}
                />
              </FormGroup>
            </FormDivision>
            <FormGroup>
              <label>Complaint :</label>
              <textarea
                rows={8}
                value={inputs.description}
                onChange={(e) => {
                  setInputs((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }));
                }}
              />
            </FormGroup>
            <FormDivision>
              <FormGroup style={{ width: "49%" }}>
                <label>Year Of Purchase :</label>
                <input
                  type="number"
                  value={inputs.title}
                  onChange={(e) => {
                    setInputs((prev) => ({
                      ...prev,
                      title: e.target.value,
                    }));
                  }}
                />
              </FormGroup>
            </FormDivision>

            <ButtonContainer>
              <Button onClick={handleSubmit}>Save</Button>
            </ButtonContainer>
          </FormSubDiv>
        </FormContainer>
      </SubContainer>
    </Container>
  );
}

export default UpdateServiceReg;
