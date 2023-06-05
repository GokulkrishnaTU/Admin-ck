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
} from "./AddInstallationStyled";
import axios from "axios";
import { server_api } from "../../const/api";

function AddInstallation(props) {
  const [inputs, setInputs] = useState("");
  const [file, setFile] = useState("");

  if (!props.isOpen) {
    return null;
  }
  const sendRequest = async () => {
    const formData = new FormData();
    formData.append("amount", inputs.amount);
    formData.append("title", inputs.title);
    formData.append("description", inputs.description);
    // formData.append("brand_name", name);
    let result = await fetch(`${server_api}/api/insertInstallation`, {
      method: "POST",
      body: formData,
    })
    .then((data) => console.log(data))
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest()
      .then(() => props.onClose())
      .then(() => {props.getInstallation()
        setInputs('')
      });
  };
  return (
    <Modal>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Add Installation Details</ModalTitle>
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
                value={inputs.title}
                onChange={(e) => {
                  setInputs((prev) => ({
                    ...prev,
                    title: e.target.value,
                  }));
                }}
              />
            </FormGroup>
            <FormGroup>
              <label>Description :</label>
              <textarea
                type="text"
                rows="3"
                value={inputs.description}
                onChange={(e) => {
                  setInputs((prev) => ({
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
                value={inputs.amount}
                onChange={(e) => {
                  setInputs((prev) => ({
                    ...prev,
                    amount: e.target.value,
                  }));
                }}
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

export default AddInstallation;
