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
} from "./AddServices.styled";
import { server_api } from "../../const/api";
import axios from "axios";

function EditServices(props) {
  let { id, service_name, service_amount, description, product_category_id } = props.editDetails;
  console.log("edit=>", props.editDetails);
  const [file, setFile] = useState("");

  if (!props.isEdit) {
    return null;
  }

  const sendRequest = async () => {
    const formData = new FormData();
    formData.append("service_name", service_name);
    formData.append("service_amount", service_amount);
    formData.append("description", description);
    formData.append("id", id);
    formData.append("product_category_id", product_category_id);
    let result = await fetch(`${server_api}/api/updateAvailableServices`, {
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
          <ModalTitle>Edit Services</ModalTitle>
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
                value={service_name}
                onChange={(e) => {
                  props.setEditDetails((prev) => ({
                    ...prev,
                    service_name: e.target.value,
                  }));
                }}
              />
            </FormGroup>
            <FormGroup>
              <label>Service Amount :</label>
              <input
                type="text"
                value={service_amount}
                onChange={(e) => {
                  props.setEditDetails((prev) => ({
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
                value={description}
                onChange={(e) => {
                  props.setEditDetails((prev) => ({
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
                value={product_category_id}
                onChange={(e) => {
                  props.setEditDetails((prev) => ({
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
              <Button onClick={handleSubmit}>Update</Button>
            </ButtonContainer>
          </ModalForm>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default EditServices;
