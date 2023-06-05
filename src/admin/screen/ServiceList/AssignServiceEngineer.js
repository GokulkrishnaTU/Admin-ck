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
} from "./AssignServiceEngineer.styled";
import axios from "axios";
import { server_api } from "../../const/api";

function AssignServiceEngineer(props) {
  console.log(props.complainDetails.id);
  const [inputs, setInputs] = useState("");

  if (!props.isOpen) {
    return null;
  }
  const sendRequest = async () => {
    const formData = new FormData();
    formData.append("service_engineer_id", inputs.service_engineer_id);
    formData.append("call_cordinator_id", 5);
    formData.append("service_reg_id", props.complainDetails.id);
    formData.append("call_received_time", inputs.call_received_time);
    formData.append("call_finishing_time", inputs.call_finishing_time);
    let result = await fetch(`${server_api}/api/insertServiceList`, {
      method: "POST",
      body: formData,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest()
      .then((data) => console.log(data))
      .then(() => props.onClose())
      .then(() => window.location.reload());
  };
  return (
    <Modal>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Assign Service Engineer</ModalTitle>
          <CloseIcon
            style={{ fontSize: "small", cursor: "pointer" }}
            opacity="0.5"
            onClick={()=>{
              props.onClose()
              setInputs('')
            }}
          />
        </ModalHeader>
        <ModalBody>
          <ModalForm>
          <FormGroup>
              <label>Call Recieved Time :</label>
              <input
                type="text"
                value={inputs.call_received_time}
                onChange={(e) => {
                  setInputs((prev) => ({
                    ...prev,
                    call_received_time: e.target.value,
                  }));
                }}
              />
            </FormGroup>

            <FormGroup>
              <label>Call Finishing Time :</label>
              <input
                type="text"
                value={inputs.call_finishing_time}
                onChange={(e) => {
                  setInputs((prev) => ({
                    ...prev,
                    call_finishing_time: e.target.value,
                  }));
                }}
              />
            </FormGroup>

            <FormGroup>
              <label>Select Service Engineer :</label>
              <select
                name="product_category_id"
                id="product_category_id"
                value={inputs.service_engineer_id}
                onChange={(e) => {
                  setInputs((prev) => ({
                    ...prev,
                    service_engineer_id: e.target.value,
                  }));
                }}
                defaultValue="none"
              >
                <option value="none" disabled hidden>
                  --Select--
                </option>
                {props.serviceEngineerData.map((item) => (
                  <option value={item.id}>{item.name}</option>
                ))}
              </select>
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

export default AssignServiceEngineer;
