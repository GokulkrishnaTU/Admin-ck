import React, { useEffect } from "react";
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
import { useState } from "react";
import { server_api } from "../../const/api";
import axios from "axios";
import { CheckboxDiv } from "../PurchaseType/PurchaseType.style";

function EditCustomerCategory(props) {
  let { id, category_name, product_category_id, purchaseTypeId, category_image } =
    props.editDetails;
  let editCatDetails = props.editCatDetails;
  console.log("cat=>", editCatDetails);
  const [file, setFile] = useState();
  if (!props.isEdit) {
    return null;
  }
  const sendRequest = async () => {
    const formData = new FormData();
    formData.append("id", id);
    formData.append("category_image", file ? file : category_image);
    formData.append("category_name", category_name);
    // formData.append("color", '');
    formData.append("product_category_id", JSON.stringify(editCatDetails));
    // formData.append("product_category_id", product_category_id);
    formData.append("purchaseTypeId", purchaseTypeId);
    let result = await fetch(`${server_api}/api/updateCustomerCategory`, {
      method: "POST",
      body: formData,
    }).then((data) => console.log(data));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest()
      .then(() => props.onClose())
      .then(() => props.getCustCategory());
  };
  const handleChange = (e) => {
    // Destructuring
    const { value, checked } = e.target;
    // Case 1 : The user checks the box
    if (checked) {
      props.setEditCatDetails([...editCatDetails, parseInt(value)]);
    }

    // Case 2  : The user unchecks the box
    else {
      props.setEditCatDetails(editCatDetails.filter((e) => e !== parseInt(value)));
    }
  };
  return (
    <Modal>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Edit Customer Category</ModalTitle>
          <CloseIcon
            style={{ fontSize: "small", cursor: "pointer" }}
            opacity="0.5"
            onClick={() => {
              props.onClose();
              props.setEditCatDetails("");
              props.editDetails("");
            }}
          />
        </ModalHeader>
        <ModalBody>
          <ModalForm>
            <FormGroup>
              <label>Category Name :</label>
              <input
                type="text"
                value={category_name}
                onChange={(e) => {
                  props.setEditDetails((prev) => ({
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
                value={product_category_id}
                onChange={(e) => {
                  props.setEditDetails((prev) => ({
                    ...prev,
                    product_category_id: e.target.value,
                  }));
                }}
                defaultValue="none"
              >
                <option value="none" disabled hidden>
                  --Select--
                </option>
                {props.productCat?.map((item, key) => {
                  return (
                    <option value={item.id} key={key}>
                      {item.product_category_name}
                    </option>
                  );
                })}
              </select>
            </FormGroup> */}
            <label style={{ fontSize: "13px" }}>Purchase Type: </label>
            <CheckboxDiv>
              {props.productCat?.map((item) => {
                let i = false;
                JSON.parse(product_category_id).map((prod_cat) => {
                  if (prod_cat === item?.id) {
                    i = true;
                  }
                });
                return (
                  <div>
                    <input
                      type="checkbox"
                      id={item?.id}
                      name=""
                      value={item?.id}
                      defaultChecked={i}
                      onChange={handleChange}
                    />
                    <label htmlFor="">{item?.product_category_name}</label>
                  </div>
                );
              })}
            </CheckboxDiv>

            <FormGroup>
              <label>Choose Purchase Type :</label>
              <select
                name="purchaseTypeId"
                id="purchase_type_id"
                value={purchaseTypeId}
                onChange={(e) => {
                  props.setEditDetails((prev) => ({
                    ...prev,
                    purchaseTypeId: e.target.value,
                  }));
                }}
                defaultValue="none"
              >
                <option value="none" disabled hidden>
                  --Select--
                </option>
                {props.purchaseType?.map((item, key) => {
                  return (
                    <option value={item.id} key={key}>
                      {item.type_name}
                    </option>
                  );
                })}
              </select>
            </FormGroup>
            <ButtonContainer>
              <Button onClick={handleSubmit}>Update</Button>
            </ButtonContainer>
          </ModalForm>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default EditCustomerCategory;
