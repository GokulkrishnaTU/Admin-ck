import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ReactColorPicker from "@super-effective/react-color-picker";
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
} from "./AddTypOfOrg.styled";
import axios from "axios";
import { server_api } from "../../const/api";
import { useEffect } from "react";
function EditTypeOfOrg(props) {
  let { organisation_id, organisation_name, purchaseTypeId } = props.editDetails;
  const [data, setData] = useState([]);
  useEffect(() => {
    sendReq().then((res) => setData(res));
  }, []);
  const sendReq = async () => {
    const res = await axios
      .get(`${server_api}/api/getPurchaseType`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  if (!props.isEdit) {
    return null;
  }

  const sendRequest = async () => {
    const res = await axios
      .post(`${server_api}/api/updateTypeOfOrganisation`, {
        purchaseTypeId,
        id: organisation_id,
        organisation_name
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest()
      .then(() => props.onClose())
      .then(() => props.getOrgType());
  };
  return (
    <Modal>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Edit Type Of Organisation</ModalTitle>
          <CloseIcon
            style={{ fontSize: "small", cursor: "pointer" }}
            opacity="0.5"
            onClick={props.onClose}
          />
        </ModalHeader>
        <ModalBody>
          <ModalForm>
            <FormGroup>
              <label>Organisation Name :</label>
              <input
                type="text"
                value={organisation_name}
                onChange={(e) => {
                  props.setEditDetails((prev) => ({
                    ...prev,
                    organisation_name: e.target.value,
                  }));
                }}
              />
            </FormGroup>
            <FormGroup>
              <label>Choose Purchase Type :</label>
              <select
                name="purchaseTypeId"
                id="purchase_type_id"
                value={purchaseTypeId}
                onChange={(e) => {
                  props.setEditDetails((prev) => ({
                    ...prev,
                    purchaseTypeId: e.target.value,
                  }));
                }}
                defaultValue="none"
              >
                <option value="none" disabled hidden>
                  --Select--
                </option>
                {data.map((item, key) => {
                  return (
                    <option value={item.id} key={key}>
                      {item.type_name}
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

export default EditTypeOfOrg;
