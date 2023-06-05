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
} from "./AddCartPost.styled";
import axios from "axios";
import { server_api } from "../../const/api";

function AddCartPost(props) {
  const [file, setFile] = useState("");
  console.log(file);

  if (!props.isOpen) {
    return null;
  }
  const sendRequest = async () => {
    const formData = new FormData();
    formData.append("image", file);
    let result = await fetch(`${server_api}/api/insertCartPost`, {
      method: "POST",
      body: formData,
    }).then((data) => console.log("res=>",data))
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest()
      .then(() => props.onClose())
      .then(() => {
        props.getCartPost();
      });
  };
  return (
    <Modal>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Add Cart Post</ModalTitle>
          <CloseIcon
            style={{ fontSize: "small", cursor: "pointer" }}
            opacity="0.5"
            onClick={props.onClose}
          />
        </ModalHeader>
        <ModalBody>
          <ModalForm>
            <FormGroup>
              <label>Image :</label>
              <input
                type="file"
                onChange={(e) => {
                  setFile(e.target.files[0]);
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

export default AddCartPost;
