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
  FormDiv,
} from "./AddBrand.styled";
import axios from "axios";
import { server_api } from "../../const/api";

function AddBrand(props) {
  const [name, setName] = useState("");
  const [file, setFile] = useState("");

  if (!props.isOpen) {
    return null;
  }
  const sendRequest = async () => {
    const formData = new FormData();
    formData.append("brand_image", file);
    formData.append("brand_name", name);
    let result = await fetch(`${server_api}/api/insertBrand`, {
      method: "POST",
      body: formData,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest()
      .then((data) => console.log(data))
      .then(() => props.onClose())
      .then(() => {
        props.getBrand();
        setName("");
      });
  };
  return (
    <Modal>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Add Brand</ModalTitle>
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
              <input type="text" onChange={(e) => setName(e.target.value)} />
            </FormGroup>
            <FormGroup>
              <label>Brand Image :</label>
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

export default AddBrand;
