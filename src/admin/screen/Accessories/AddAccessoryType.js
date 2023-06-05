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
  FormDiv,
  RadioDiv,
  CheckboxDiv,
} from "./AddAccessoryType.styled";
import axios from "axios";
import { server_api } from "../../const/api";

function AddProductCategory(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [type, setType] = useState("");
  const [categoryType, setCategoryType] = useState([]);
  if (!props.isOpen) {
    return null;
  }
  const sendRequest = async () => {
    const formData = new FormData();
    formData.append("accessory_image", image ? image : "");
    formData.append("accessory_type_name", name ? name : "");
    formData.append("common", type ? type : "");
    formData.append("description", description ? description : "");
    formData.append("product_category_id", JSON.stringify(categoryType.map(Number)));
    let result = await fetch(`${server_api}/api/insertAccessoriesTypes`, {
      method: "POST",
      body: formData,
    }).then((data) => console.log("res=>", data));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest()
      .then(() => props.onClose())
      .then(() => {
        props.getAccessoryType();
        setName("");
        setDescription("");
        setType("");
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
          <ModalTitle>Add Accessories</ModalTitle>
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
              <input type="text" onChange={(e) => setName(e.target.value)} />
            </FormGroup>
            <FormGroup>
              <label>Description :</label>
              <textarea rows={4} onChange={(e) => setDescription(e.target.value)} />
            </FormGroup>
            <RadioDiv>
              <span>Common :</span>
              <input
                type="radio"
                name="common"
                id="common1"
                value={1}
                onChange={(e) => setType(e.target.value)}
              />
              <label htmlFor="common1">Yes</label>
              <input
                type="radio"
                value={0}
                id="common0"
                name="common"
                onChange={(e) => setType(e.target.value)}
              />
              <label htmlFor="common0">No</label>
            </RadioDiv>
            <span style={{ fontSize: "12px" }}>Product Category :</span>
            <CheckboxDiv>
              {props.categoryData?.map((item) => (
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
              <label>Image :</label>
              <input type="file" onChange={(e) => setImage(e.target.files[0])} />
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

export default AddProductCategory;
