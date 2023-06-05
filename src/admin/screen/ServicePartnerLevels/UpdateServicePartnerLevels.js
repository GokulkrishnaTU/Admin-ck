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
} from "./AddServicePartnerLevels.styled";
import axios from "axios";
import { server_api } from "../../const/api";

function UpdateServicePartnerLevels(props) {
  let { id, start_amount, end_amount, Level } = props.editDetails;

  if (!props.isEdit) {
    return null;
  }

  const sendRequest = async () => {
    const formData = new FormData();
    formData.append("end_amount", end_amount);
    formData.append("start_amount", start_amount);
    formData.append("Level", Level);
    formData.append("id", id);
    const res = await axios
      .post(`${server_api}/api/updateLevel`, formData)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then((data) => {
      console.log("Res=>", data);
      if (data.code == 200) {
        props.onClose();
        props.getServicePartnerLevels();
      } else {
        alert(data?.message);
      }
    });
  };
  return (
    <Modal>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Update Levels</ModalTitle>
          <CloseIcon
            style={{ fontSize: "small", cursor: "pointer" }}
            opacity="0.5"
            onClick={props.onClose}
          />
        </ModalHeader>
        <ModalBody>
          <ModalForm onSubmit={handleSubmit}>
            <FormGroup>
              <label>Level :</label>
              <input
                type="text"
                value={Level}
                onChange={(e) => {
                  props.setEditDetails((prev) => ({
                    ...prev,
                    Level: e.target.value,
                  }));
                }}
                required
              />
            </FormGroup>

            <FormGroup>
              <label>Start Amount :</label>
              <input
                type="text"
                value={start_amount}
                onChange={(e) => {
                  props.setEditDetails((prev) => ({
                    ...prev,
                    start_amount: e.target.value,
                  }));
                }}
                required
              />
            </FormGroup>

            <FormGroup>
              <label>End Amount :</label>
              <input
                type="text"
                value={end_amount}
                onChange={(e) => {
                  props.setEditDetails((prev) => ({
                    ...prev,
                    end_amount: e.target.value,
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

export default UpdateServicePartnerLevels;
