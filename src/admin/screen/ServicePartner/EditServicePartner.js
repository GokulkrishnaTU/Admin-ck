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
  FormDivision,
  RadioDiv,
} from "./AddServicePartner.styled";
import axios from "axios";
import { server_api } from "../../const/api";
import Select from "react-select";

const statusData = [
  { label: "Available", value: "available" },
  { label: "Busy", value: "busy" },
  { label: "Deactive", value: "deactive" },
];

const customStyles = {
  control: (base) => ({
    ...base,
    height: 35,
    minHeight: 35,
    width: "100%",
    fontSize: "small",
  }),
};

function EditServicePartner(props) {
  let { id, name, contact, address, freelancer, status, amount, category, level, userId } =
    props.editDetails;
  console.log("firdt", category);
  console.log(props.editDetails);
  const [type, setType] = useState("");
  const [selectedCategory, setCategory] = useState(category);
  const [selectedStatus, setStatus] = useState(status);
  const [selectedLevel, setLevel] = useState(level);
  const [categoryData, setCategoryData] = useState([]);
  const [levelData, setLevelData] = useState([]);

  const getCategoryData = async () => {
    const res = await axios
      .get(`${server_api}/api/listServiceCategory`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const getLevelData = async () => {
    const res = await axios.get(`${server_api}/api/listLevel`).catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    getCategoryData().then((data) => {
      console.log("category=>", data);
      let listArray = [];
      for (let i = 0; i < data.length; i++) {
        listArray.push({ value: data[i].id, label: data[i].category_name });
      }
      setCategoryData(listArray);
    });
    getLevelData().then((data) => {
      console.log("level=>", data);
      let listArray = [];
      for (let i = 0; i < data.length; i++) {
        listArray.push({ value: data[i].id, label: data[i].Level });
      }
      setLevelData(listArray);
    });
  }, []);

  console.log("selcted Category=>", selectedCategory);
  useEffect(() => {
    setCategory(category);
    setStatus(status);
    setLevel(level);
  }, [category, status, level]);

  if (!props.isEdit) {
    return null;
  }

  const sendRequest = async () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("contact", contact);
    formData.append("address", address);
    formData.append("id", id);
    formData.append("freelancer", freelancer);
    formData.append("status", selectedStatus);
    formData.append("level", selectedLevel);
    formData.append("amount", amount);
    formData.append("category", selectedCategory);
    let result = await fetch(`${server_api}/api/updateServicePartner`, {
      method: "POST",
      body: formData,
    }).then((data) => console.log(data));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest()
      .then(() => props.onClose())
      .then(() => props.getServicePart());
  };
  return (
    <Modal>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Update Service Partner</ModalTitle>
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
            </FormGroup>

            <FormDivision>
              <FormGroup style={{ width: "50%" }}>
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
              <FormGroup style={{ width: "50%" }}>
                <label>Amount :</label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => {
                    props.setEditDetails((prev) => ({
                      ...prev,
                      amount: e.target.value,
                    }));
                  }}
                />
              </FormGroup>
            </FormDivision>

            <FormDivision>
              <FormGroup style={{ width: "50%" }}>
                <label>Status :</label>
                <Select
                  className="basic-single"
                  classNamePrefix="select"
                  value={statusData.find((obj) => obj.value == selectedStatus)}
                  onChange={(e) => setStatus(e.value)}
                  isSearchable
                  name="color"
                  options={statusData}
                  styles={customStyles}
                  required
                />
              </FormGroup>

              <FormGroup style={{ width: "50%" }}>
                <label>Level :</label>
                <Select
                  className="basic-single"
                  classNamePrefix="select"
                  value={levelData.find((obj) => obj.value == selectedLevel)}
                  onChange={(e) => setLevel(e.value)}
                  isSearchable
                  name="color"
                  options={levelData}
                  styles={customStyles}
                  required
                />
              </FormGroup>
            </FormDivision>

            <FormDivision>
              <FormGroup style={{ width: "50%" }}>
                <label>Category :</label>
                <Select
                  value={categoryData.find((obj) => obj.value == selectedCategory)}
                  defaultValue={category}
                  onChange={(e) => setCategory(e.value)}
                  isSearchable
                  name="color"
                  options={categoryData}
                  styles={customStyles}
                  required
                />
              </FormGroup>

              <FormGroup style={{ width: "50%" }}>
                <label>District :</label>
                <Select
                  className="basic-single"
                  classNamePrefix="select"
                  value={statusData.find((obj) => obj.value == selectedCategory)}
                  onChange={(e) => setCategory(e.value)}
                  isSearchable
                  name="color"
                  options={statusData}
                  styles={customStyles}
                  required
                />
              </FormGroup>
            </FormDivision>

            <RadioDiv>
              <span>Freelancer :</span>
              <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
                <input
                  type="radio"
                  name="freelancer"
                  id="freelancer1"
                  value={1}
                  onChange={(e) => setType(e.target.value)}
                />
                <label htmlFor="freelancer1">Yes</label>
              </div>
              <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
                <input
                  type="radio"
                  value={0}
                  id="freelancer0"
                  name="freelancer"
                  onChange={(e) => setType(e.target.value)}
                />
                <label htmlFor="freelancer0">No</label>
              </div>
            </RadioDiv>

            <ButtonContainer>
              <Button onClick={handleSubmit}>Update</Button>
            </ButtonContainer>
          </ModalForm>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default EditServicePartner;
