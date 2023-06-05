import { React, useState } from "react";
import ReactColorPicker from "@super-effective/react-color-picker";
import "react-color-palette/lib/css/styles.css";
import {
  Button,
  ButtonContainer,
  FormGroup,
  FormDiv,
  Modal,
  ModalBody,
  ModalContent,
  ModalForm,
  ModalHeader,
  ModalTitle,
} from "./AddTheme.styled";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import { server_api } from "../../../const/api";

function AddTheme(props) {
  const [layoutname, setLayoutName] = useState("");
  const [code, setCode] = useState("");
  const [color, setColor] = useState("#3cd6bf");
  const [file, setFile] = useState("");

  if (!props.view) {
    return null;
  }
  const onColorChange = (updatedColor) => {
    setColor(updatedColor);
  };
  const sendRequest = async () => {
    const formData = new FormData();
    formData.append("layoutname", layoutname);
    formData.append("image", file);
    formData.append("color", color);
    formData.append("code", code);
    let result = await fetch(`${server_api}/api/insertTheme`, {
      method: "POST",
      body: formData,
    }).then((data) => console.log(data));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest()
      .then(() => props.onClose())
      .then(() => {
        props.getThemeList();
        setLayoutName("");
        setCode("");
        setColor("");
        setFile("");
      });
  };
  return (
    <Modal>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Add Theme</ModalTitle>
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
              <input type="text" onChange={(e) => setLayoutName(e.target.value)} />
            </FormGroup>
            <FormGroup>
              <label>Choose a Color: {color}</label>

              <ReactColorPicker color={color} onChange={onColorChange} />
            </FormGroup>

            <FormGroup>
              <label>Code :</label>
              <input type="text" onChange={(e) => setCode(e.target.value)} />
            </FormGroup>
            <FormGroup>
              <label>Image :</label>
              <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            </FormGroup>
            <ButtonContainer>
              <Button onClick={handleSubmit}>Add Theme</Button>
            </ButtonContainer>
          </ModalForm>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default AddTheme;
