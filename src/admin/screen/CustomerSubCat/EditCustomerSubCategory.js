import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ReactColorPicker from "@super-effective/react-color-picker";
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
} from "./AddCustomerSubCategory.styled";
import axios from "axios";
import { server_api } from "../../const/api";
function EditCustomerSubCategory(props) {
  let { id, sub_category_name, color, category_id, sub_category_image } =
    props.editDetails;
  console.log(props.editDetails);
  // const [colors, setColor] = useState(color);
  const [file, setFile] = useState();
  if (!props.isEdit) {
    return null;
  }
  // const onColorChange = (updatedColor) => {
  //   setColor(updatedColor);
  //   props.setEditDetails((prev) => ({
  //     ...prev,
  //     color: updatedColor,
  //   }));
  // };
  const sendRequest = async () => {
    const formData = new FormData();
    formData.append("id", id);
    formData.append("sub_category_image", file ? file : sub_category_image);
    formData.append("sub_category_name", sub_category_name);
    formData.append("category_id", category_id);
    let result = await fetch(`${server_api}/api/updateCustomerSubCategory`, {
      method: "POST",
      body: formData,
    }).then((res) => console.log("res=>", res))
    .then((err) => console.log(err))
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest()
    .then(() => props.onClose())
    .then(()=>props.getCustomerSubCategory())
  };
  return (
    <Modal>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Edit Customer Sub Category</ModalTitle>
          <CloseIcon
            style={{ fontSize: "small", cursor: "pointer" }}
            opacity="0.5"
            onClick={props.onClose}
          />
        </ModalHeader>
        <ModalBody>
          <ModalForm>
            <FormGroup>
              <label>Sub Category Name :</label>
              <input
                type="text"
                value={sub_category_name}
                onChange={(e) => {
                  props.setEditDetails((prev) => ({
                    ...prev,
                    sub_category_name: e.target.value,
                  }));
                }}
              />
            </FormGroup>

            {/* <FormGroup>
              <label>Choose a Color: {color}</label>
              <ReactColorPicker colors={color} onChange={onColorChange} />
            </FormGroup> */}

            <FormGroup>
              <label>Image : </label>
              <img src={sub_category_image} width="100px" alt="" />
              <input type="file" onChange={(e) => setFile(e.target.files[0])} />
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

export default EditCustomerSubCategory;
