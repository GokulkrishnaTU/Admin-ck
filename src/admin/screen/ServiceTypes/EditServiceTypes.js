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
} from "./AddServiceTypes.styled";
import { server_api } from "../../const/api";
import axios from "axios";

function EditServiceTypes(props) {
  let { id, type_name, type_image } = props.editDetails;
  console.log(props.editDetails);
  const [file, setFile] = useState("");

  if (!props.isEdit) {
    return null;
  }

  const sendRequest = async () => {
    const formData = new FormData();
    formData.append("id", id);
    formData.append("type_name", type_name);
    formData.append("type_image", file ? file : type_image);
    formData.append("id", id);
    let result = await fetch(`${server_api}/api/updateServiceType`, {
      method: "POST",
      body: formData,
    })
    .then((data) => console.log(data))
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest()
      .then(() => props.onClose())
      .then(() => props.getServiceTypes());
  };
  return (
    <Modal>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Edit Service Type</ModalTitle>
          <CloseIcon
            style={{ fontSize: "small", cursor: "pointer" }}
            opacity="0.5"
            onClick={props.onClose}
          />
        </ModalHeader>
        <ModalBody>
          <ModalForm>
            <FormGroup>
              <label>Type Name :</label>
              <input
                type="text"
                value={type_name}
                onChange={(e) => {
                  props.setEditDetails((prev) => ({
                    ...prev,
                    type_name: e.target.value,
                  }));
                }}
              />
            </FormGroup>
            <FormGroup>
              <label>Image :</label>
              <img src={type_image} alt="" width="100" />
               <input
                type="file"
                onChange={(e)=>setFile(e.target.files[0])}
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

export default EditServiceTypes;
