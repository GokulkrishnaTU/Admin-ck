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

const status = [
  { label: "Available", value: "available" },
  { label: "Busy", value: "busy" },
  { label: "Deactive", value: "deactive" },
];

const category = [
  { label: "Test 1", value: "0" },
  { label: "Test 2", value: "1" },
  { label: "Test 3", value: "2" },
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

function AddServicePartner(props) {
  const [inputs, setInputs] = useState("");
  const [type, setType] = useState("");
  const [selectedStatus, setStatus] = useState("");
  const [selectedLevel, setLevel] = useState("");
  const [selectedCategory, setCategory] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [categoryData, setCategoryData] = useState([]);
  const [levelData, setLevelData] = useState([]);
  const [districtData, setDistrictData] = useState([]);
  console.log("dis=>", districtData);

  const getDistricts = async () => {
    const res = await axios.get(`${server_api}/api/getDistrict`).catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

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
    getDistricts().then((data) => {
      console.log("res=>", data);
      let listArray = [];
      for (let i = 0; i < data.length; i++) {
        listArray.push({ value: data[i]?.id, label: data[i]?.district_name });
      }
      setDistrictData(listArray);
    });
  }, []);

  if (!props.isOpen) {
    return null;
  }
  const sendRequest = async () => {
    const formData = new FormData();
    // formData.append("userId", 18);
    formData.append("name", inputs.name);
    formData.append("contact", inputs.contact);
    formData.append("address", inputs.address);
    formData.append("freelancer", type);
    formData.append("status", selectedStatus);
    formData.append("level", selectedLevel);
    formData.append("category", selectedCategory);
    formData.append("amount", inputs?.amount);
    // formData.append("brand_name", name);
    // let result = await fetch(`${server_api}/api/insertServicePartner`, {
    //   method: "POST",
    //   body: formData,
    // }).then((data) => console.log(data));
    const res = await axios
      .post(`${server_api}/api/insertServicePartner`, formData)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then((data) => {
      console.log("Res=>", data);
      if (data.code == 200) {
        props.onClose();
        props.getServicePart();
        setInputs("");
        setType("");
        setStatus("");
        setLevel("");
        setCategory("");
      } else {
        alert(data.message);
      }
    });
  };
  return (
    <Modal>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Add Service Partner</ModalTitle>
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
                value={inputs.name}
                onChange={(e) => {
                  setInputs((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }));
                }}
                required
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
                required
              />
            </FormGroup>
            <FormDivision>
              <FormGroup style={{ width: "50%" }}>
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
                  required
                />
              </FormGroup>
              <FormGroup style={{ width: "50%" }}>
                <label>Amount :</label>
                <input
                  type="number"
                  value={inputs.amount}
                  onChange={(e) => {
                    setInputs((prev) => ({
                      ...prev,
                      amount: e.target.value,
                    }));
                  }}
                  required
                />
              </FormGroup>
            </FormDivision>

            <FormDivision>
              <FormGroup style={{ width: "50%" }}>
                <label>Status :</label>
                {/* <select
                name="product_category_id"
                id="product_category_id"
                value={inputs.status}
                onChange={(e) => {
                  setInputs((prev) => ({
                    ...prev,
                    status: e.target.value,
                  }));
                }}
                defaultValue="none"
              >
                <option value="none" disabled hidden>
                  --Select--
                </option>

                <option value="active">Active</option>
                <option value="busy">Busy</option>
                <option value="deactive">Deactive</option>
              </select> */}
                <Select
                  className="basic-single"
                  classNamePrefix="select"
                  value={status.find((obj) => obj.value === selectedStatus)}
                  onChange={(e) => setStatus(e.value)}
                  isSearchable
                  name="color"
                  options={status}
                  styles={customStyles}
                  required
                />
              </FormGroup>

              <FormGroup style={{ width: "50%" }}>
                <label>Level :</label>
                <Select
                  className="basic-single"
                  classNamePrefix="select"
                  value={levelData.find((obj) => obj.value === selectedLevel)}
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
                  className="basic-single"
                  classNamePrefix="select"
                  value={categoryData.find((obj) => obj.value === selectedCategory)}
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
                  value={districtData?.find((obj) => obj?.value === selectedDistrict)}
                  onChange={(e) => setCategory(e?.value)}
                  isSearchable
                  name="color"
                  options={districtData}
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
              <Button type="submit">Save</Button>
            </ButtonContainer>
          </ModalForm>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default AddServicePartner;
