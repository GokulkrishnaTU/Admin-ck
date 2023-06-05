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
} from "./AddServiceEngineer.styled";
import { server_api } from "../../const/api";
import Select from "react-select";
import axios from "axios";
import { FormDivision } from "../../../admin/screen/CustomerSalesReport/CustomerSalesReport.styled";

const customStyles = {
  control: (base) => ({
    ...base,
    height: 35,
    minHeight: 35,
    width: "100%",
    fontSize: "small",
  }),
};

const statusData = [
  { label: "Available", value: "available" },
  { label: "Busy", value: "busy" },
  { label: "Deactive", value: "deactive" },
];

function EditServiceEngineer(props) {
  let {
    id,
    serviceEngineerName,
    contact,
    address,
    status,
    service_partner_id,
    email,
    serviceEngineerId,
  } = props.editDetails;
  console.log(props.editDetails);
  const [servicePartner, setServicePartner] = useState([]);
  const [selectedPartner, setSelectedPartner] = useState(service_partner_id);
  const [selectedOption, setSelectedOption] = useState(status);
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
    setSelectedOption(status);
    setSelectedPartner(service_partner_id);
  }, [status, service_partner_id]);

  if (!props.isEdit) {
    return null;
  }

  const sendRequest = async () => {
    const formData = new FormData();
    formData.append("name", serviceEngineerName);
    formData.append("contact", contact);
    formData.append("address", address);
    formData.append("id", serviceEngineerId);
    formData.append("email", email);
    formData.append("status", selectedOption);
    formData.append("service_partner_id", selectedPartner);
    let result = await fetch(`${server_api}/api/updateServiceEngineer`, {
      method: "POST",
      body: formData,
    }).then((data) => console.log(data));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest()
      .then(() => props.onClose())
      .then(() => props.getServiceEng());
  };
  return (
    <Modal>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Update service Engineer</ModalTitle>
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
                value={serviceEngineerName}
                onChange={(e) => {
                  props.setEditDetails((prev) => ({
                    ...prev,
                    serviceEngineerName: e.target.value,
                  }));
                }}
              />
            </FormGroup>
            <FormDivision>
              <FormGroup style={{ width: "47%" }}>
                <label>Contact :</label>
                <input
                  type="number"
                  value={contact}
                  onChange={(e) => {
                    props.setEditDetails((prev) => ({
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
                  value={email}
                  onChange={(e) => {
                    props.setEditDetails((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }));
                  }}
                  required
                />
              </FormGroup>
            </FormDivision>
            {/* <FormGroup>
              <label>Address :</label>
              <textarea
                rows="4"
                value={address}
                onChange={(e) => {
                  props.setEditDetails((prev) => ({
                    ...prev,
                    address: e.target.value,
                  }));
                }}
              />
            </FormGroup> */}
            {/* <FormDivision>
              <FormGroup style={{ width: "50%" }}>
                <label>Status :</label>
                <Select
                  className="basic-single"
                  classNamePrefix="select"
                  value={statusData?.find((obj) => obj?.value == selectedOption)}
                  onChange={(e) => setSelectedOption(e.value)}
                  isSearchable
                  name="color"
                  options={statusData}
                  styles={customStyles}
                  required
                />
              </FormGroup>
              <FormGroup style={{ width: "50%" }}>
                <label>Service Partner :</label>
                <Select
                  className="basic-single"
                  classNamePrefix="select"
                  value={servicePartner?.find((obj) => obj?.value == selectedPartner)}
                  onChange={(e) => setSelectedPartner(e.value)}
                  isSearchable
                  name="color"
                  options={servicePartner}
                  styles={customStyles}
                  required
                />
              </FormGroup>
            </FormDivision> */}
            <FormGroup>
              <label>Service Partner :</label>
              <Select
                className="basic-single"
                classNamePrefix="select"
                value={servicePartner?.find((obj) => obj?.value == selectedPartner)}
                onChange={(e) => setSelectedPartner(e.value)}
                isSearchable
                name="color"
                options={servicePartner}
                styles={customStyles}
                required
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

export default EditServiceEngineer;
