import { React, useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ReactColorPicker from "@super-effective/react-color-picker";
import "react-color-palette/lib/css/styles.css";
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
  CheckboxDiv,
  RadioDiv,
} from "./AddAccessoryType.styled";
import { server_api } from "../../const/api";
import axios from "axios";

function EditAccessories(props) {
  let {
    id,
    accessory_type_name,
    accessory_image,
    common,
    product_category_id,
    product_category_name,
    description,
  } = props.editDetails;
  let editCatDetails = props.editCatDetails;
  const [file, setFile] = useState();
  if (!props.isEdit) {
    return null;
  }
  const sendRequest = async () => {
    const formData = new FormData();
    formData.append("id", id);
    formData.append("accessory_image", file ? file : accessory_image);
    formData.append("accessory_type_name", accessory_type_name);
    formData.append("common", common);
    formData.append("description", description);
    formData.append("product_category_id", JSON.stringify(editCatDetails));
    let result = await fetch(`${server_api}/api/updateAccessoriesTypes`, {
      method: "POST",
      body: formData,
    }).then((data) => console.log("res=>",data))
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest()
      .then(() => props.onClose())
      .then(() => props.getAccessoryType());
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
      props.setEditCatDetails(
        editCatDetails.filter((e) => e !== parseInt(value))
      );
    }
  };
  return (
    <Modal>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Edit Accessories</ModalTitle>
          <CloseIcon
            style={{ fontSize: "small", cursor: "pointer" }}
            opacity="0.5"
            onClick={props.onClose}
          />
        </ModalHeader>
        <ModalBody>
          <ModalForm>
            <FormGroup>
              <label>Accessory Name :</label>
              <input
                type="text"
                value={accessory_type_name}
                onChange={(e) => {
                  props.setEditDetails((prev) => ({
                    ...prev,
                    accessory_type_name: e.target.value,
                  }));
                }}
              />
            </FormGroup>
            <FormGroup>
              <label>description :</label>
              <textarea
                rows={3}
                value={description}
                onChange={(e) => {
                  props.setEditDetails((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }));
                }}
              />
            </FormGroup>
            <RadioDiv>
              <span>Common :</span>
              <input
                type="radio"
                name="common"
                id="common1"
                value={1}
                checked={common == 1}
                onChange={(e) => {
                  props.setEditDetails((prev) => ({
                    ...prev,
                    common: e.target.value,
                  }));
                }}
              />
              <label htmlFor="common1">Yes</label>
              <input
                type="radio"
                value={0}
                id="common0"
                name="common"
                checked={common == 0}
                onChange={(e) => {
                  props.setEditDetails((prev) => ({
                    ...prev,
                    common: e.target.value,
                  }));
                }}
              />
              <label htmlFor="common0">No</label>
            </RadioDiv>
            <span style={{ fontSize: "12px" }}>Product Category :</span>
            <CheckboxDiv>
              {props.categoryData?.map((item) => {
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
              <label>Image :</label>
              <img src={accessory_image} alt="" />
              <input type="file" onChange={(e) => setFile(e.target.files[0])} />
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

export default EditAccessories;
