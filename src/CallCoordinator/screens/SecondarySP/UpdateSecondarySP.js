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
  FormDivision,
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

function UpdateSecondarySP(props) {
  let { id, contact_no, address, vendor_name, brand, email_id, district, userId, warranty } =
    props.editDetails;
  console.log("Details=>", props.editDetails);
  const [selectedDistrict, setDistrict] = useState(district);
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
    formData.append("id", id);
    formData.append("vendor_name", vendor_name);
    formData.append("contact_no", contact_no);
    formData.append("address", address);
    formData.append("brand", brand);
    formData.append("email_id", email_id);
    formData.append("district", selectedDistrict);
    formData.append("warranty", 1);
    const res = await axios
      .post(`${server_api}/api/updateVendor`, formData)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then((data) => {
      console.log("res=>", data);
      if (data.code == 200) {
        props.onClose();
        props.getServicePart();
      } else {
        alert(data.message);
      }
    });
  };
  return (
    <Modal>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Update Secondary Service Partner</ModalTitle>
          <CloseIcon
            style={{ fontSize: "small", cursor: "pointer" }}
            opacity="0.5"
            onClick={props.onClose}
          />
        </ModalHeader>
        <ModalBody>
          <ModalForm onSubmit={handleSubmit}>
            <FormDivision>
              <FormGroup style={{ width: "50%" }}>
                <label>Name :</label>
                <input
                  type="text"
                  value={vendor_name}
                  onChange={(e) => {
                    props.setEditDetails((prev) => ({
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
                  value={brand}
                  onChange={(e) => {
                    props.setEditDetails((prev) => ({
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
                rows="4"
                value={address}
                onChange={(e) => {
                  props.setEditDetails((prev) => ({
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
                  value={contact_no}
                  onChange={(e) => {
                    props.setEditDetails((prev) => ({
                      ...prev,
                      contact_no: e.target.value,
                    }));
                  }}
                  required
                />
              </FormGroup>
              <FormGroup style={{ width: "50%" }}>
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
                  required
                />
              </FormGroup>
            </FormDivision>
            <FormGroup>
              <label>District :</label>
              <Select
                className="basic-single"
                classNamePrefix="select"
                value={districtData?.find((obj) => obj.value == selectedDistrict)}
                onChange={(e) => setDistrict(e.value)}
                isSearchable
                name="color"
                options={districtData}
                styles={customStyles}
                required
              />
            </FormGroup>

            <ButtonContainer>
              <Button>Update</Button>
            </ButtonContainer>
          </ModalForm>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default UpdateSecondarySP;
