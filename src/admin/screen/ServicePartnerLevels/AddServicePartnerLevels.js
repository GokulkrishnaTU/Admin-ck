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
  FormDivision,
  RadioDiv,
} from "./AddServicePartnerLevels.styled";
import axios from "axios";
import { server_api } from "../../const/api";

function AddServicePartnerLevels(props) {
  const [inputs, setInputs] = useState("");
  console.log("inputs==>", inputs);
  if (!props.isOpen) {
    return null;
  }
  const sendRequest = async () => {
    const formData = new FormData();
    formData.append("Level", inputs?.Level);
    formData.append("start_amount", inputs?.start_amount);
    formData.append("end_amount", inputs?.end_amount);
    let res = await axios
      .post(`${server_api}/api/createLevel`, formData)
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
        setInputs("");
      } else {
        alert(data?.message);
      }
    });
  };
  return (
    <Modal>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Add Service Partner Levels</ModalTitle>
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
                type="number"
                value={inputs?.Level}
                onChange={(e) => {
                  setInputs((prev) => ({
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
                type="number"
                value={inputs?.start_amount}
                onChange={(e) => {
                  setInputs((prev) => ({
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
                type="number"
                value={inputs?.end_amount}
                onChange={(e) => {
                  setInputs((prev) => ({
                    ...prev,
                    end_amount: e.target.value,
                  }));
                }}
                required
              />
            </FormGroup>

            <ButtonContainer>
              <Button type="submit">Save</Button>
            </ButtonContainer>
          </ModalForm>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default AddServicePartnerLevels;
