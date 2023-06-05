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
  FormDivision,
  RadioDiv,
} from "./AddServiceCategory.styled";
import axios from "axios";
import { server_api } from "../../const/api";

function EditServicePartner(props) {
  let { id, category_name, description } = props.editDetails;

  if (!props.isEdit) {
    return null;
  }

  const sendRequest = async () => {
    const formData = new FormData();
    formData.append("category_name", category_name);
    formData.append("description", description);
    formData.append("id", id);
    const res = await axios
      .post(`${server_api}/api/updateServiceCategory`, formData)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest()
      .then(() => props.onClose())
      .then(() => props.getServiceCategory());
  };
  return (
    <Modal>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Update Service Partner Category</ModalTitle>
          <CloseIcon
            style={{ fontSize: "small", cursor: "pointer" }}
            opacity="0.5"
            onClick={props.onClose}
          />
        </ModalHeader>
        <ModalBody>
          <ModalForm onSubmit={handleSubmit}>
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
                required
              />
            </FormGroup>

            <FormGroup>
              <label>Description :</label>
              <textarea
                rows="6"
                value={description}
                onChange={(e) => {
                  props.setEditDetails((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }));
                }}
                required
              />
            </FormGroup>

            <ButtonContainer>
              <Button>Update</Button>
            </ButtonContainer>
          </ModalForm>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default EditServicePartner;
