import { React, useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import {
  Button,
  FormGroup,
  Modal,
  ModalBody,
  ModalContent,
  ModalForm,
  ModalHeader,
  ModalTitle,
  ButtonContainer,
  FormDiv,
} from "./AddCustomerCategory.styled";
// import {addProductCat} from '../../const/api';
import axios from "axios";
import { server_api } from "../../const/api";
import { CheckboxDiv } from "../PurchaseType/PurchaseType.style";

function AddCustomerCategory(props) {
  const [inputs, setInputs] = useState("");
  const [file, setFile] = useState("");
  const [categoryType, setCategoryType] = useState([]);
  console.log(categoryType);
  if (!props.isOpen) {
    return null;
  }
  const sendRequest = async () => {
    const formData = new FormData();
    formData.append("category_image", file);
    formData.append("category_name", inputs.category_name);
    // formData.append("product_category_id", inputs.product_category_id);
    formData.append("product_category_id", JSON.stringify(categoryType.map(Number)));
    formData.append("purchaseTypeId", inputs.purchaseTypeId);
    let result = await fetch(`${server_api}/api/insertCustomerCategory`, {
      method: "POST",
      body: formData,
    }).then((data) => console.log(data));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest()
      .then(() => props.onClose())
      .then(() => {
        props.getCustCategory();
        setInputs("");
      });
  };
  const handleChange = (e) => {
    // Destructuring
    const { value, checked } = e.target;
    // Case 1 : The user checks the box
    if (checked) {
      setCategoryType([...categoryType, value]);
    }

    // Case 2  : The user unchecks the box
    else {
      setCategoryType(categoryType.filter((e) => e !== value));
    }
  };
  return (
    <Modal>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Add Customer Category</ModalTitle>
          <CloseIcon
            style={{ fontSize: "small", cursor: "pointer" }}
            opacity="0.5"
            onClick={() => {
              props.onClose();
              setInputs("");
              setCategoryType("");
            }}
          />
        </ModalHeader>
        <ModalBody>
          <ModalForm>
            <FormGroup>
              <label>Category Name :</label>
              <input
                type="text"
                value={inputs.category_name}
                onChange={(e) => {
                  setInputs((prev) => ({
                    ...prev,
                    category_name: e.target.value,
                  }));
                }}
              />
            </FormGroup>
            <FormGroup>
              <label>Category Image : </label>
              <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            </FormGroup>

            {/* <FormGroup
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "",
              }}
            >
              <label>Choose Product Category :</label>
              <select
                name="product_category_id"
                id="product_category_id"
                value={inputs.product_category_id}
                onChange={(e) => {
                  setInputs((prev) => ({
                    ...prev,
                    product_category_id: e.target.value,
                  }));
                }}
                defaultValue="none"
              >
                <option value="none" disabled hidden>
                  --Select--
                </option>
                {props.productCat.map((item, key) => {
                  return (
                    <option value={item.id} key={key}>
                      {item.product_category_name}
                    </option>
                  );
                })}
              </select>
            </FormGroup> */}
            <label style={{ fontSize: "13px" }}>Product Category: </label>
            <CheckboxDiv>
              {props.productCat?.map((item) => (
                <div>
                  <input
                    type="checkbox"
                    id={item?.id}
                    name="topping"
                    value={item?.id}
                    onChange={handleChange}
                  />
                  <label htmlFor="">{item?.product_category_name}</label>
                </div>
              ))}
            </CheckboxDiv>

            <FormGroup>
              <label>Choose Purchase Type :</label>
              <select
                name="purchaseTypeId"
                id="purchase_type_id"
                value={inputs.purchaseTypeId}
                onChange={(e) => {
                  setInputs((prev) => ({
                    ...prev,
                    purchaseTypeId: e.target.value,
                  }));
                }}
                defaultValue="none"
              >
                <option value="none" disabled hidden>
                  --Select--
                </option>
                {props.purchaseType.map((item, key) => {
                  return (
                    <option value={item.id} key={key}>
                      {item.type_name}
                    </option>
                  );
                })}
              </select>
            </FormGroup>
            <ButtonContainer>
              <Button onClick={handleSubmit}>Save</Button>
            </ButtonContainer>
          </ModalForm>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
export default AddCustomerCategory;
