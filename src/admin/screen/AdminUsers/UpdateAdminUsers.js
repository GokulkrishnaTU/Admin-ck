import { React, useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ReactColorPicker from "@super-effective/react-color-picker";
import "react-color-palette/lib/css/styles.css";
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
import { server_api } from "../../const/api";
import Select from "react-select";
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

function UpdateAdminUsers(props) {
  let { id, user_type, username, mob, email, password, userid } = props.editDetails;
  const [inputs, setInputs] = useState("");
  const [servicePartner, setServicePartner] = useState("");
  const [selectedOption, setSelectedOption] = useState(user_type);
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
    setSelectedOption(user_type);
  }, [user_type]);
  if (!props.isEdit) {
    return null;
  }
  const sendRequest = async () => {
    const res = await axios
      .post(`${server_api}/api/updateSuperAdmin`, {
        username: username,
        mob: mob,
        email: email,
        user_type: JSON.stringify(selectedOption),
        id: id,
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
          <ModalTitle>Update Admin User</ModalTitle>
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
                value={username}
                onChange={(e) => {
                  props.setEditDetails((prev) => ({
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
                value={mob}
                onChange={(e) => {
                  props.setEditDetails((prev) => ({
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
            <ButtonContainer>
              <Button type="submit">Save</Button>
            </ButtonContainer>
          </ModalForm>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default UpdateAdminUsers;
