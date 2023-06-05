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
} from "./AddSecondSP.styled";
import axios from "axios";
import { server_api } from "../../const/api";
import Select from "react-select";

const customStyles = {
  control: (base) => ({
    ...base,
    height: 35,
    minHeight: 35,
    width: "100%",
    fontSize: "small",
  }),
};

function AddSecondarySP(props) {
  const [inputs, setInputs] = useState("");
  const [selectedDistrict, setDistrict] = useState("");
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

  if (!props.isOpen) {
    return null;
  }
  const sendRequest = async () => {
    const formData = new FormData();
    // formData.append("userId", 18);
    formData.append("vendor_name", inputs?.vendor_name);
    formData.append("contact_no", inputs?.contact);
    formData.append("address", inputs?.address);
    formData.append("brand", inputs?.brand);
    formData.append("email_id", inputs?.email_id);
    formData.append("district", selectedDistrict);
    formData.append("warranty", 1);
    const res = await axios
      .post(`${server_api}/api/insertVendor`, formData)
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
          <ModalTitle>Add Secondary Service Partner</ModalTitle>
          <CloseIcon
            style={{ fontSize: "small", cursor: "pointer" }}
            opacity="0.5"
            onClick={() => {
              props.onClose();
              setInputs("");
              setDistrict("");
            }}
          />
        </ModalHeader>
        <ModalBody>
          <ModalForm onSubmit={handleSubmit}>
            <FormDivision>
              <FormGroup style={{ width: "50%" }}>
                <label>Name :</label>
                <input
                  type="text"
                  value={inputs.vendor_name}
                  onChange={(e) => {
                    setInputs((prev) => ({
                      ...prev,
                      vendor_name: e.target.value,
                    }));
                  }}
                  required
                />
              </FormGroup>
              <FormGroup style={{ width: "50%" }}>
                <label>Brand :</label>
                <input
                  type="text"
                  value={inputs.brand}
                  onChange={(e) => {
                    setInputs((prev) => ({
                      ...prev,
                      brand: e.target.value,
                    }));
                  }}
                  required
                />
              </FormGroup>
            </FormDivision>
            <FormGroup>
              <label>Address :</label>
              <textarea
                rows="6"
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
                <label>Email :</label>
                <input
                  type="email"
                  value={inputs.email_id}
                  onChange={(e) => {
                    setInputs((prev) => ({
                      ...prev,
                      email_id: e.target.value,
                    }));
                  }}
                  required
                />
              </FormGroup>
            </FormDivision>
            <FormGroup>
              <label>District :</label>
              <Select
                className="basic-single"
                classNamePrefix="select"
                value={districtData?.find((obj) => obj.value === selectedDistrict)}
                onChange={(e) => setDistrict(e.value)}
                isSearchable
                name="color"
                options={districtData}
                styles={customStyles}
                required
              />
            </FormGroup>

            <ButtonContainer>
              <Button>Save</Button>
            </ButtonContainer>
          </ModalForm>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default AddSecondarySP;
