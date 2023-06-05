import { React, useEffect, useState } from "react";
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
} from "./AddServices.styled";
import { server_api } from "../../const/api";
import axios from "axios";

function AddServices(props) {
  const [inputs, setInputs] = useState("");
  console.log("Inputs", inputs);

  const sendRequest = async () => {
    const formData = new FormData();
    formData.append("service_name", inputs.service_name);
    formData.append("service_amount", inputs.service_amount);
    formData.append("description", inputs.description);
    formData.append("product_category_id", inputs.product_category_id);
    let result = await fetch(`${server_api}/api/insertAvailableServices`, {
      method: "POST",
      body: formData,
    }).then((data) => console.log(data));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest()
      .then(() => props.onClose())
      .then(() => {
        props.getComponents();
        setInputs("");
      });
  };

  if (!props.isOpen) {
    return null;
  }
  return (
    <Modal>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Add Services</ModalTitle>
          <CloseIcon
            style={{ fontSize: "small", cursor: "pointer" }}
            opacity="0.5"
            onClick={props.onClose}
          />
        </ModalHeader>
        <ModalBody>
          <ModalForm>
            <FormGroup>
              <label>Service Name :</label>
              <input
                type="text"
                value={inputs.service_name}
                onChange={(e) => {
                  setInputs((prev) => ({
                    ...prev,
                    service_name: e.target.value,
                  }));
                }}
              />
            </FormGroup>

            <FormGroup>
              <label>Service Amount :</label>
              <input
                type="number"
                value={inputs.service_amount}
                onChange={(e) => {
                  setInputs((prev) => ({
                    ...prev,
                    service_amount: e.target.value,
                  }));
                }}
              />
            </FormGroup>

            <FormGroup>
              <label>Service Description :</label>
              <textarea
                rows={6}
                value={inputs.description}
                onChange={(e) => {
                  setInputs((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }));
                }}
              />
            </FormGroup>
            <FormGroup>
              <label>Product Category :</label>
              <select
                name="product_category_id"
                id="product_category_id"
                value={inputs.product_category_id}
                onChange={(e) => {
                  setInputs((prev) => ({
                    ...prev,
                    product_category_id: e.target.value,
                  }));
                }}
                defaultValue="none"
              >
                <option value="none" disabled hidden>
                  --Select--
                </option>
                {props?.productCategory?.map((item, key) => {
                  return (
                    <option value={item.id} key={key}>
                      {item.product_category_name}
                    </option>
                  );
                })}
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

export default AddServices;
