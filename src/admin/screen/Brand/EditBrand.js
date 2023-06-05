import { React, useState } from "react";
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
} from "./AddBrand.styled";
import { server_api } from "../../const/api";
import axios from "axios";

function EditProductCategory(props) {
  let { id, brand_name, brand_image } = props.editDetails;
  const [file, setFile] = useState("");

  if (!props.isEdit) {
    return null;
  }

  const sendRequest = async () => {
    const formData = new FormData();
    formData.append("brand_image", file ? file : brand_image);
    formData.append("brand_name", brand_name);
    formData.append("id", id);
    let result = await fetch(`${server_api}/api/updateBrands`, {
      method: "POST",
      body: formData,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest()
      .then((data) => console.log(data))
      .then(() => props.onClose())
      .then(() => props.getBrand());
  };
  return (
    <Modal>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Edit Brand</ModalTitle>
          <CloseIcon
            style={{ fontSize: "small", cursor: "pointer" }}
            opacity="0.5"
            onClick={props.onClose}
          />
        </ModalHeader>
        <ModalBody>
          <ModalForm>
            <FormGroup>
              <label>Brand Name :</label>
              <img src={brand_image} width="100" />
              <input
                type="text"
                value={brand_name}
                onChange={(e) => {
                  props.setEditDetails((prev) => ({
                    ...prev,
                    brand_name: e.target.value,
                  }));
                }}
              />
            </FormGroup>
            <FormGroup>
              <label>Image</label>
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

export default EditProductCategory;
