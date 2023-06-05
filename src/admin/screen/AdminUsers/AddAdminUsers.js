import { React, useEffect } from "react";
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
  FormDivision,
} from "./AddAdminUsers.styled";
import Select from "react-select";
import axios from "axios";
import { server_api } from "../../const/api";
import { useState } from "react";

const customStyles = {
  control: (base) => ({
    ...base,
    height: 35,
    minHeight: 35,
    width: "100%",
    fontSize: "small",
  }),
};

function AddAdminUsers(props) {
  const [inputs, setInputs] = useState("");
  const [servicePartner, setServicePartner] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  console.log("selected", selectedOption);
  const getServicePartner = async () => {
    const res = await axios.get(`${server_api}/api/getUserType`).catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    getServicePartner().then((data) => {
      console.log("category=>", data);
      let listArray = [];
      for (let i = 0; i < data?.length; i++) {
        listArray?.push({ value: data[i]?.id, label: data[i]?.user_type });
      }
      setServicePartner(listArray);
    });
  }, []);
  if (!props.isOpen) {
    return null;
  }
  const sendRequest = async () => {
    const res = await axios
      .post(`${server_api}/api/insertSuperAdmin`, {
        username: inputs?.username,
        mob: inputs?.mob,
        email: inputs?.email,
        user_type: JSON.stringify(selectedOption),
        pasword: inputs?.pasword,
      })
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
        props.getUserTypes();
        setInputs("");
        setSelectedOption("");
      } else {
        alert(data.message);
      }
    });
  };
  return (
    <Modal>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Add Admin User</ModalTitle>
          <CloseIcon
            style={{ fontSize: "small", cursor: "pointer" }}
            opacity="0.5"
            onClick={props.onClose}
          />
        </ModalHeader>
        <ModalBody>
          <ModalForm onSubmit={handleSubmit}>
            <FormDivision></FormDivision>
            <FormGroup>
              <label>User Name :</label>
              <input
                type="text"
                value={inputs?.username}
                onChange={(e) => {
                  setInputs((prev) => ({
                    ...prev,
                    username: e.target.value,
                  }));
                }}
                required
              />
            </FormGroup>
            <FormGroup>
              <label>Mobile Number :</label>
              <input
                type="text"
                value={inputs?.mob}
                onChange={(e) => {
                  setInputs((prev) => ({
                    ...prev,
                    mob: e.target.value,
                  }));
                }}
                required
              />
            </FormGroup>
            <FormGroup>
              <label>Email :</label>
              <input
                type="email"
                value={inputs?.email}
                onChange={(e) => {
                  setInputs((prev) => ({
                    ...prev,
                    email: e.target.value,
                  }));
                }}
                required
              />
            </FormGroup>
            <FormGroup>
              <label>User Type :</label>
              <Select
                className="basic-single"
                classNamePrefix="select"
                value={servicePartner.find((obj) => obj.value == selectedOption)}
                onChange={(e) => setSelectedOption(e.value)}
                isSearchable
                name="color"
                options={servicePartner}
                styles={customStyles}
                required
              />
            </FormGroup>
            <FormGroup>
              <label>Password :</label>
              <input
                type="password"
                value={inputs?.pasword}
                onChange={(e) => {
                  setInputs((prev) => ({
                    ...prev,
                    pasword: e.target.value,
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

export default AddAdminUsers;
