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
} from "./AddCallCoordinator.styled";
import Select from "react-select";
import { server_api } from "../../const/api";
import axios from "axios";

function UpdateCallCoordinator(props) {
  let { id, name, email_id, mob, district } = props.editDetails;
  console.log("edit=>", props.editDetails);
  const [dist, setDistrict] = useState(district);
  console.log("district==>", district);
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
    setDistrict(district);
  }, [district]);

  if (!props.isEdit) {
    return null;
  }

  const sendRequest = async () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email_id", email_id);
    formData.append("mob", mob);
    formData.append("district", dist);
    formData.append("id", id);
    const res = await axios
      .post(`${server_api}/api/updateCall/2`, formData)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then((data) => {
      console.log("res=>", data);
      if (data.code == "200") {
        props.onClose();
        props.getCallCoordinator();
        setDistrict("");
      } else {
        alert(data.message);
      }
    });
  };
  return (
    <Modal>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Edit Call Coordinator</ModalTitle>
          <CloseIcon
            style={{ fontSize: "small", cursor: "pointer" }}
            opacity="0.5"
            onClick={() => {
              props.onClose();
              setDistrict("");
            }}
          />
        </ModalHeader>
        <ModalBody>
          <ModalForm>
            <FormGroup>
              <label>Name :</label>
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  props.setEditDetails((prev) => ({
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
                value={email_id}
                onChange={(e) => {
                  props.setEditDetails((prev) => ({
                    ...prev,
                    email_id: e.target.value,
                  }));
                }}
              />
            </FormGroup>
            <FormGroup>
              <label>Mobile Number :</label>
              <input
                type="number"
                value={mob}
                onChange={(e) => {
                  props.setEditDetails((prev) => ({
                    ...prev,
                    mob: e.target.value,
                  }));
                }}
              />
            </FormGroup>
            <FormGroup style={{ fontSize: "14px" }}>
              <label>District :</label>
              <Select
                className="basic-single"
                classNamePrefix="select"
                value={districtData?.find((obj) => obj?.value == dist)}
                onChange={(e) => setDistrict(e.value)}
                isSearchable
                name="color"
                options={districtData}
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

export default UpdateCallCoordinator;
