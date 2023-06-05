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
} from "./AddCallCoordinator.styled";
import { server_api } from "../../const/api";
import Select from "react-select";
import axios from "axios";

function InsertCallCoordinator(props) {
  const [inputs, setInputs] = useState("");
  const [district, setDistrict] = useState([]);
  const [districtData, setDistrictData] = useState([]);
  console.log("dis=>", districtData);

  const getDistricts = async () => {
    const res = await axios.get(`${server_api}/api/getDistrict`).catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    getDistricts().then((data) => {
      console.log("res=>", data);
      let listArray = [];
      for (let i = 0; i < data.length; i++) {
        listArray.push({ value: data[i]?.id, label: data[i]?.district_name });
      }
      setDistrictData(listArray);
    });
  }, []);

  console.log("district==>", district);
  if (!props.isOpen) {
    return null;
  }
  const sendRequest = async () => {
    const formData = new FormData();
    formData.append("name", inputs.name);
    formData.append("district", district);
    formData.append("email_id", inputs.email);
    formData.append("mob", inputs.mobile);
    const res = await axios
      .post(`${server_api}/api/createCall`, formData)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then((data) => {
      console.log("res=>>>>", data);
      if (data.code == "200") {
        props.onClose();
        setInputs("");
        props.getCallCoordinator();
      } else {
        alert(data.message);
      }
    });
  };
  return (
    <Modal>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Add Call Coordinator</ModalTitle>
          <CloseIcon
            style={{ fontSize: "small", cursor: "pointer" }}
            opacity="0.5"
            onClick={props.onClose}
          />
        </ModalHeader>
        <ModalBody>
          <ModalForm onSubmit={handleSubmit}>
            <FormGroup>
              <label>Name :</label>
              <input
                type="text"
                value={inputs.title}
                required
                onChange={(e) => {
                  setInputs((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }));
                }}
              />
            </FormGroup>
            <FormGroup>
              <label>Email :</label>
              <input
                type="email"
                value={inputs.email}
                required
                onChange={(e) => {
                  setInputs((prev) => ({
                    ...prev,
                    email: e.target.value,
                  }));
                }}
              />
            </FormGroup>
            <FormGroup>
              <label>Mobile Number :</label>
              <input
                type="number"
                value={inputs.mobile}
                required
                onChange={(e) => {
                  setInputs((prev) => ({
                    ...prev,
                    mobile: e.target.value,
                  }));
                }}
              />
            </FormGroup>
            <FormGroup style={{ fontSize: "14px" }}>
              <label>District :</label>
              <Select
                className="basic-single"
                classNamePrefix="select"
                value={districtData?.find((obj) => obj?.value === district)}
                onChange={(e) => setDistrict(e?.value)}
                isSearchable
                name="color"
                options={districtData}
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

export default InsertCallCoordinator;
