import React, { useState } from "react";
import ReactColorPicker from "@super-effective/react-color-picker";
import "react-color-palette/lib/css/styles.css";
import {
  Button,
  ButtonContainer,
  FormDiv,
  FormGroup,
  Modal,
  ModalBody,
  ModalContent,
  ModalForm,
  ModalHeader,
  ModalTitle,
} from "./EditTeme.styled";
import CloseIcon from "@mui/icons-material/Close";
import { server_api } from "../../../const/api";
import axios from "axios";

function EditTheme(props) {
  let { id, layoutname, color, code, image } = props.editDetails;
  const [colors, setColor] = useState(color);
  const [file, setFile] = useState();
  if (!props.isEdit) {
    return null;
  }
  const onColorChange = (updatedColor) => {
    setColor(updatedColor);
    console.log(updatedColor);
    props.setEditDetails((prev) => ({
      ...prev,
      color: updatedColor,
    }));
  };
  const sendRequest = async () => {
    const formData = new FormData();
    formData.append("id", id);
    formData.append("layoutname", layoutname);
    formData.append("image", file ? file : image);
    formData.append("color", colors);
    formData.append("code", code);
    let result = await fetch(`${server_api}/api/updateTheme`, {
      method: "POST",
      body: formData,
    }).then((data) => console.log(data));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest()
      .then(() => props.onClose())
      .then(() => props.getThemeList());
  };
  return (
    <Modal>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Edit Theme</ModalTitle>
          <CloseIcon
            fontSize="small"
            style={{ opacity: ".5", cursor: "pointer" }}
            onClick={props.onClose}
          />
        </ModalHeader>
        <ModalBody>
          <ModalForm>
            <FormGroup>
              <label>Layout Name :</label>
              <input
                type="text"
                value={layoutname}
                onChange={(e) => {
                  props.setEditDetails((prev) => ({
                    ...prev,
                    layout: e.target.value,
                  }));
                }}
              />
            </FormGroup>
            <FormGroup>
              <label>Choose a Color: {colors}</label>
              <ReactColorPicker colors={color} onChange={onColorChange} />
            </FormGroup>
            <FormGroup>
              <label>Code :</label>
              <input
                type="text"
                value={code}
                onChange={(e) => {
                  props.setEditDetails((prev) => ({
                    ...prev,
                    code: e.target.value,
                  }));
                }}
              />
            </FormGroup>
            <FormGroup>
              <label>Image :</label>
              <input type="file" onChange={(e) => setFile(e.target.files[0])} />
              <img src={image} width="100" alt="" />
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

export default EditTheme;
