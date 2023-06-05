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
} from "./AddServiceCategory.styled";
import axios from "axios";
import { server_api } from "../../const/api";

function AddServiceCategory(props) {
  const [inputs, setInputs] = useState("");
  console.log("inputs==>", inputs);
  if (!props.isOpen) {
    return null;
  }
  const sendRequest = async () => {
    const formData = new FormData();
    formData.append("category_name", inputs?.category_name);
    formData.append("description", inputs?.description);
    const res = await axios
      .post(`${server_api}/api/createServiceCategory`, formData)
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
        props.getServiceCategory();
        setInputs("");
      } else {
        alert(data.message);
      }
    });
  };
  return (
    <Modal>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Add Service Partner Category</ModalTitle>
          <CloseIcon
            style={{ fontSize: "small", cursor: "pointer" }}
            opacity="0.5"
            onClick={props.onClose}
          />
        </ModalHeader>
        <ModalBody>
          <ModalForm onSubmit={handleSubmit}>
            <FormGroup>
              <label>Category Name :</label>
              <input
                type="text"
                value={inputs.category_name}
                onChange={(e) => {
                  setInputs((prev) => ({
                    ...prev,
                    category_name: e.target.value,
                  }));
                }}
                required
              />
            </FormGroup>
            <FormGroup>
              <label>Description :</label>
              <textarea
                rows="6"
                value={inputs.description}
                onChange={(e) => {
                  setInputs((prev) => ({
                    ...prev,
                    description: e.target.value,
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

export default AddServiceCategory;
