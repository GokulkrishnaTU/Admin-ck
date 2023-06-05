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
} from "./AddInstallationStyled";
import { server_api } from "../../const/api";
import axios from "axios";

function EditProductCategory(props) {
  let { id, amount, description, title } = props.editDetails;
  console.log(props.editDetails);
  const [file, setFile] = useState("");

  if (!props.isEdit) {
    return null;
  }

  const sendRequest = async () => {
    const formData = new FormData();
    formData.append("amount", amount);
    formData.append("description", description);
    formData.append("title", title);
    formData.append("id", id);
    let result = await fetch(`${server_api}/api/updateInstallation`, {
      method: "POST",
      body: formData,
    })
    .then((data) => console.log(data))
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest()
      .then(() => props.onClose())
      .then(() => props.getInstallation());
  };
  return (
    <Modal>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Edit Installations</ModalTitle>
          <CloseIcon
            style={{ fontSize: "small", cursor: "pointer" }}
            opacity="0.5"
            onClick={props.onClose}
          />
        </ModalHeader>
        <ModalBody>
          <ModalForm>
            <FormGroup>
              <label>Title :</label>
              <input
                type="text"
                value={title}
                onChange={(e) => {
                  props.setEditDetails((prev) => ({
                    ...prev,
                    title: e.target.value,
                  }));
                }}
              />
            </FormGroup>
            <FormGroup>
              <label>Description:</label>
              <textarea
                rows="3"
                type="text"
                value={description}
                onChange={(e) => {
                  props.setEditDetails((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }));
                }}
              />
            </FormGroup>
            <FormGroup>
              <label>Amount :</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => {
                  props.setEditDetails((prev) => ({
                    ...prev,
                    amount: e.target.value,
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
