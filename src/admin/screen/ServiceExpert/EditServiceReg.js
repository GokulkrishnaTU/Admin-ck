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
} from "./EditServiceReg.styled";
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

function EditServiceReg(props) {
  const {
    advance_payment,
    brand,
    complaint,
    customer_visibility,
    district,
    id,
    payment_status,
    product_category_id,
    product_id,
    serviceList,
    servicePackDate,
    servicePackExpDate,
    serviceTypes,
    service_validity,
    shipping_address_id,
    slno,
    total_amount,
    user_id,
    warranty,
    warrantyExpiryDate,
    yearOfPurchase,
  } = props.editDetails;
  if (!props.isOpen) {
    return null;
  }
  const sendRequest = async () => {
    const formData = new FormData();
    // formData.append("userId", 18);
    formData.append("product_category_id", product_category_id);
    formData.append("serviceTypes", serviceTypes);
    formData.append("brand", brand);
    formData.append("slno", slno);
    formData.append("yearOfPurchase", yearOfPurchase);
    formData.append("warranty", warranty);
    formData.append("warrantyExpiryDate", warrantyExpiryDate);
    formData.append("complaint", complaint);
    formData.append("servicePackDate", servicePackDate);
    formData.append("servicePackExpDate", servicePackExpDate);
    formData.append("serviceList", serviceList);
    formData.append("user_id", user_id);
    formData.append("shipping_address_id", shipping_address_id);
    formData.append("product_id", product_id);
    formData.append("district", district);
    formData.append("customer_visibility", customer_visibility);
    formData.append("service_validity", service_validity);
    formData.append("advance_payment", advance_payment);
    formData.append("total_amount", total_amount);
    formData.append("payment_status", payment_status);
    formData.append("id", id);
    const res = await axios
      .post(`${server_api}/api/updateServiceReg`, formData)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  console.log("warrantyExpiryDate=>", warrantyExpiryDate);
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then((data) => {
      console.log("Res=>", data);
      if (data.code == 200) {
        props.onClose();
        props.handleClick(e);
      } else {
        alert(data.message);
      }
    });
  };
  return (
    <Modal>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Update Service Complaint</ModalTitle>
          <CloseIcon
            style={{ fontSize: "small", cursor: "pointer" }}
            opacity="0.5"
            onClick={() => {
              props.onClose();
            }}
          />
        </ModalHeader>
        <ModalBody>
          <ModalForm onSubmit={handleSubmit}>
            <FormDivision>
              <FormGroup style={{ width: "50%" }}>
                <label>Sl No :</label>
                <input
                  type="text"
                  value={slno}
                  onChange={(e) => {
                    props.setEditDetails((prev) => ({
                      ...prev,
                      slno: e.target.value,
                    }));
                  }}
                  required
                />
              </FormGroup>
              <FormGroup style={{ width: "50%" }}>
                <label>Year Of Purchase :</label>
                <input
                  type="number"
                  value={yearOfPurchase}
                  onChange={(e) => {
                    props.setEditDetails((prev) => ({
                      ...prev,
                      yearOfPurchase: e.target.value,
                    }));
                  }}
                  required
                />
              </FormGroup>
            </FormDivision>

            <FormDivision>
              <FormGroup style={{ width: "50%" }}>
                <label>Warranty :</label>
                <input
                  type="number"
                  value={warranty}
                  onChange={(e) => {
                    props.setEditDetails((prev) => ({
                      ...prev,
                      warranty: e.target.value,
                    }));
                  }}
                  required
                />
              </FormGroup>
              <FormGroup style={{ width: "50%" }}>
                <label>Warranty Exp Date :</label>
                <input
                  type="date"
                  value={warrantyExpiryDate}
                  onChange={(e) => {
                    props.setEditDetails((prev) => ({
                      ...prev,
                      warrantyExpiryDate: e.target.value,
                    }));
                  }}
                  required
                />
              </FormGroup>
            </FormDivision>
            <FormGroup>
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
            <FormGroup>
              <label>Complaint :</label>
              <textarea
                rows="6"
                value={complaint}
                onChange={(e) => {
                  props.setEditDetails((prev) => ({
                    ...prev,
                    complaint: e.target.value,
                  }));
                }}
                required
              />
            </FormGroup>

            <ButtonContainer>
              <Button
                onClick={() => {
                  props.handleClick();
                }}
              >
                Update
              </Button>
            </ButtonContainer>
          </ModalForm>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default EditServiceReg;
