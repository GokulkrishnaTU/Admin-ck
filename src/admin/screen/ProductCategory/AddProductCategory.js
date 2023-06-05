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
  FormDiv,
} from "./AddProductCategory.styled";
import axios from "axios";
import { server_api } from "../../const/api";

function AddProductCategory(props) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [code, setCode] = useState("");

  if (!props.isOpen) {
    return null;
  }
  const sendRequest = async () => {
    const formData = new FormData();
    formData.append("product_category_image", image);
    formData.append("product_category_name", name);
    formData.append("color", code);
    let result = await fetch(`${server_api}/api/add_product_category`, {
      method: "POST",
      body: formData,
    })
    .then((data) => console.log(data))
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest()
      .then(() => props.onClose())
      .then(() => {
        props.getProductCategory();
        setName("");
        setCode("");
      });
  };
  return (
    <Modal>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Add Product Category</ModalTitle>
          <CloseIcon
            style={{ fontSize: "small", cursor: "pointer" }}
            opacity="0.5"
            onClick={props.onClose}
          />
        </ModalHeader>
        <ModalBody>
          <ModalForm>
            <FormGroup>
              <label>Category Name :</label>
              <input type="text" onChange={(e) => setName(e.target.value)} />
            </FormGroup>
            <FormGroup>
              <label>Code:</label>
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <label>Image :</label>
              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
              />
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
