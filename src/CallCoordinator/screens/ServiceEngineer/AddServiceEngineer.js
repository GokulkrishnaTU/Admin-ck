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
  RadioDiv,
  FormDivision,
} from "./AddServiceEngineer.styled";
import Select from "react-select";
import { server_api } from "../../const/api";
import axios from "axios";

const customStyles = {
  control: (base) => ({
    ...base,
    height: 35,
    minHeight: 35,
    width: "100%",
    fontSize: "small",
  }),
};
const status = [
  { label: "Available", value: "available" },
  { label: "Busy", value: "busy" },
  { label: "Deactive", value: "deactive" },
];

function AddServiceEngineer(props) {
  const [inputs, setInputs] = useState("");
  const [servicePartner, setServicePartner] = useState([]);
  const [selectedPartner, setSelectedPartner] = useState([]);
  const [selectedOption, setSelectedOption] = useState([]);
  console.log(selectedOption, selectedPartner);

  const getServicePartner = async () => {
    const res = await axios
      .get(`${server_api}/api/getServicePartner`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    getServicePartner().then((data) => {
      console.log("category=>", data);
      let listArray = [];
      for (let i = 0; i < data?.length; i++) {
        listArray?.push({ value: data[i]?.id, label: data[i]?.name });
      }
      setServicePartner(listArray);
    });
  }, []);

  if (!props.isOpen) {
    return null;
  }
  const sendRequest = async () => {
    const formData = new FormData();
    formData.append("name", inputs?.name);
    formData.append("contact", inputs?.contact);
    formData.append("address", inputs?.address);
    formData.append("email", inputs?.email);
    formData.append("status", selectedOption);
    formData.append("service_partner_id", selectedPartner);
    const res = await axios
      .post(`${server_api}/api/insertServiceEngineer`, formData)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then((data) => {
      console.log(data);
      if (data.code == 200) {
        props.onClose();
        props.getServiceEng();
        setSelectedPartner("");
        setSelectedOption("");
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
          <ModalTitle>Add Service Engineer</ModalTitle>
          <CloseIcon
            style={{ fontSize: "small", cursor: "pointer" }}
            opacity="0.5"
            onClick={props.onClose}
          />
        </ModalHeader>
        <ModalBody>
          <ModalForm>
            <FormGroup>
              <label>Name :</label>
              <input
                type="text"
                value={inputs.name}
                onChange={(e) => {
                  setInputs((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }));
                }}
              />
            </FormGroup>
            <FormGroup>
              <label>Address :</label>
              <textarea
                rows="4"
                value={inputs.address}
                onChange={(e) => {
                  setInputs((prev) => ({
                    ...prev,
                    address: e.target.value,
                  }));
                }}
              />
            </FormGroup>
            <FormDivision>
              <FormGroup style={{ width: "47%" }}>
                <label>Contact :</label>
                <input
                  type="number"
                  value={inputs.contact}
                  onChange={(e) => {
                    setInputs((prev) => ({
                      ...prev,
                      contact: e.target.value,
                    }));
                  }}
                />
              </FormGroup>
              <FormGroup style={{ width: "47%" }}>
                <label>Email Address :</label>
                <input
                  type="email"
                  value={inputs.value}
                  onChange={(e) => {
                    setInputs((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }));
                  }}
                  required
                />
              </FormGroup>
            </FormDivision>

            <FormDivision>
              {/* <FormGroup style={{ width: "50%" }}>
                <label>Email Address :</label>
                <input
                  type="email"
                  value={inputs.value}
                  onChange={(e) => {
                    setInputs((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }));
                  }}
                  required
                />
              </FormGroup> */}
              <FormGroup style={{ width: "50%" }}>
                <label>Status :</label>
                <Select
                  className="basic-single"
                  classNamePrefix="select"
                  value={status?.find((obj) => obj.value == selectedOption)}
                  onChange={(e) => setSelectedOption(e?.value)}
                  isSearchable
                  name="color"
                  options={status}
                  styles={customStyles}
                  required
                />
              </FormGroup>
              <FormGroup style={{ width: "50%" }}>
                <label>Service Partner :</label>
                <Select
                  className="basic-single"
                  classNamePrefix="select"
                  value={servicePartner.find((obj) => obj.value == selectedPartner)}
                  onChange={(e) => setSelectedPartner(e.value)}
                  isSearchable
                  name="color"
                  options={servicePartner}
                  styles={customStyles}
                  required
                />
              </FormGroup>
            </FormDivision>

            <ButtonContainer>
              <Button onClick={handleSubmit}>Save</Button>
            </ButtonContainer>
          </ModalForm>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default AddServiceEngineer;
