import { React, useState } from "react";
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
} from "./AddProductCategory.styled";
import { server_api } from "../../const/api";
import axios from "axios";

function EditProductCategory(props) {
  let { id, product_category_name, product_category_image, color } =
    props.editDetails;
    console.log(props.editDetails);
  const [file, setFile] = useState();
  if (!props.isEdit) {
    return null;
  }
  console.log(color);
  const sendRequest = async () => {
    const formData = new FormData();
    formData.append("product_category_image", file ? file : product_category_image);
    formData.append("product_category_name", product_category_name);
    formData.append("color", color);
    formData.append("id", id);
    let result = await fetch(`${server_api}/api/updateProductCategory`, {
      method: "POST",
      body: formData,
    })
    .then((data) => console.log(data))
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest()
      .then(() => props.onClose())
      .then(() => props.getProductCategory());
  };
  return (
    <Modal>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Edit Product Category</ModalTitle>
          <CloseIcon
            style={{ fontSize: "small", cursor: "pointer" }}
            opacity="0.5"
            onClick={props.onClose}
          />
        </ModalHeader>
        <ModalBody>
          <ModalForm>
            <FormGroup>
              <label>Product Category Name :</label>
              <input
                type="text"
                value={product_category_name}
                onChange={(e) => {
                  props.setEditDetails((prev) => ({
                    ...prev,
                    product_category_name: e.target.value,
                  }));
                }}
              />
            </FormGroup>
            <FormGroup>
              <label>Image</label>
              <img src={product_category_image} alt="" width={100} />
              <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            </FormGroup>
            <FormGroup>
              <label>Code:</label>
              <input
                type="text"
                value={color}
                onChange={(e) => {
                  props.setEditDetails((prev) => ({
                    ...prev,
                    color: e.target.value,
                  }));
                }}
              />
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

export default EditProductCategory;
