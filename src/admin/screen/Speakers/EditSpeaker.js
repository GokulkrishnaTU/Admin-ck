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
} from "./AddSpeaker.styled";
import { server_api } from "../../const/api";
import axios from "axios";

function EditSpeaker(props) {
  let { id, speaker_type_name, speaker_image } = props.editDetails;
  console.log("edit=>", props.editDetails);
  const [file, setFile] = useState("");

  if (!props.isEdit) {
    return null;
  }

  const sendRequest = async () => {
    const formData = new FormData();
    formData.append("speaker_type_name", speaker_type_name);
    formData.append("speaker_image", file ? file : speaker_image);
    formData.append("id", id);
    let result = await fetch(`${server_api}/api/updateSpeakerType`, {
      method: "POST",
      body: formData,
    }).then((data) => console.log(data));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest()
      .then(() => props.onClose())
      .then(() => props.getComponents());
  };
  return (
    <Modal>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Edit Speaker Type</ModalTitle>
          <CloseIcon
            style={{ fontSize: "small", cursor: "pointer" }}
            opacity="0.5"
            onClick={props.onClose}
          />
        </ModalHeader>
        <ModalBody>
          <ModalForm>
            <FormGroup>
              <label>Speaker Type :</label>
              <input
                type="text"
                value={speaker_type_name}
                onChange={(e) => {
                  props.setEditDetails((prev) => ({
                    ...prev,
                    speaker_type_name: e.target.value,
                  }));
                }}
              />
            </FormGroup>
            <FormGroup>
              <label>Image :</label>
              <img src={speaker_image} width="100" alt="img" style={{ fontSize: "12px" }} />
              <input
                type="file"
                onChange={(e) => {
                  setFile(e.target.files[0]);
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

export default EditSpeaker;
