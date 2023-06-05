import { React, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ReactColorPicker from "@super-effective/react-color-picker";
import "react-color-palette/lib/css/styles.css";
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
} from "./AddUserTypes.styled";
import { server_api } from "../../const/api";
import axios from "axios";

function UpdateUserTypes(props) {
  const [colors, setColor] = useState("#3cd6bf");
  let { id, user_type } = props.editDetails;
  if (!props.isEdit) {
    return null;
  }
  const sendRequest = async () => {
    const res = await axios
      .post(`${server_api}/api/updateUserType`, {
        id,
        user_type,
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest()
      .then((data) => console.log(data))
      .then(() => props.onClose())
      .then(() => props.getUserTypes());
  };
  return (
    <Modal>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Edit User Type</ModalTitle>
          <CloseIcon
            style={{ fontSize: "small", cursor: "pointer" }}
            opacity="0.5"
            onClick={props.onClose}
          />
        </ModalHeader>
        <ModalBody>
          <ModalForm>
            <FormGroup>
              <label>User Type :</label>
              <input
                type="text"
                value={user_type}
                onChange={(e) => {
                  props.setEditDetails((prev) => ({
                    ...prev,
                    user_type: e.target.value,
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

export default UpdateUserTypes;
