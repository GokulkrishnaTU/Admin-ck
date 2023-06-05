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
} from "./AddComponents.styled";
import { server_api } from "../../const/api";

function AddComponents(props) {
  const [inputs, setInputs] = useState("");
  const [file, setFile] = useState("");

  if (!props.isOpen) {
    return null;
  }
  const sendRequest = async () => {
    const formData = new FormData();
    formData.append("component_type_name", inputs.title);
    formData.append("component_image", file);
    let result = await fetch(`${server_api}/api/insertComponentsType`, {
      method: "POST",
      body: formData,
    })
    .then((data) => console.log(data))
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest()
      .then(() => props.onClose())
      .then(() => {props.getComponents()
        setInputs('')
      });
  };
  return (
    <Modal>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Add Component</ModalTitle>
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
              <label>Image :</label>
              <input
                type="file"
                onChange={(e)=>{
                    setFile(e.target.files[0])
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

export default AddComponents;
