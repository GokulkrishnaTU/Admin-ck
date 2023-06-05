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
} from "./AddTypOfOrg.styled";
import axios from "axios";
import { server_api } from "../../const/api";
import "react-color-palette/lib/css/styles.css";

function AddTypeOfOrg(props) {
  const [inputs, setInputs] = useState({});
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

  if (!props.isOpen) {
    return null;
  }
  const sendRequest = async () => {
    const res = await axios
      .post(`${server_api}/api/insertTypeOfOrganisation`, {
        organisation_name: inputs.organisation_name,
        purchaseTypeId: inputs.purchaseTypeId,
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
        props.getOrgType();
        setInputs("");
      });
  };
  return (
    <Modal>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Add Type Of Organisation</ModalTitle>
          <CloseIcon
            style={{ fontSize: "small", cursor: "pointer" }}
            opacity="0.5"
            onClick={() => {
              props.onClose();
              setInputs("");
            }}
          />
        </ModalHeader>
        <ModalBody>
          <ModalForm>
            <FormGroup>
              <label>Organisation Name :</label>
              <input
                type="text"
                value={inputs.organisation_name}
                onChange={(e) => {
                  setInputs((prev) => ({
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
                value={inputs.purchaseTypeId}
                onChange={(e) => {
                  setInputs((prev) => ({
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
              <Button onClick={handleSubmit}>Save</Button>
            </ButtonContainer>
          </ModalForm>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default AddTypeOfOrg;
