import { React } from "react";
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
} from "./AddUserTypes.styled";
import axios from "axios";
import { server_api } from "../../const/api";
import { useState } from "react";

function AddUserTypes(props) {
  const [inputs, setInputs] = useState("");
  if (!props.isOpen) {
    return null;
  }
  const sendRequest = async () => {
    const res = await axios
      .post(`${server_api}/api/insertUserType`, {
        user_type: inputs?.user_type,
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
      .then(() => {
        props.getUserTypes();
        setInputs("");
      });
  };
  return (
    <Modal>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Add User Type</ModalTitle>
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
                value={inputs.user_type}
                onChange={(e) => {
                  setInputs((prev) => ({
                    ...prev,
                    user_type: e.target.value,
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

export default AddUserTypes;
