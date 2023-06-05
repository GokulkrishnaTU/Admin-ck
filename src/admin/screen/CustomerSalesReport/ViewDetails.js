import { React, useState } from "react";
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
  DetailsDiv,
} from "./ViewDetails.styled";
import { useEffect } from "react";
import { server_api } from "../../const/api";
import axios from "axios";

function ViewDetails(props) {
  console.log(props.userDetails);

  if (!props.isOpen) {
    return null;
  }
  return (
    <Modal>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>
            <b>Customer Details</b>
          </ModalTitle>
          <CloseIcon
            style={{ fontSize: "small", cursor: "pointer" }}
            opacity="0.5"
            onClick={props.onClose}
          />
        </ModalHeader>
        <ModalBody>
            <DetailsDiv>
              {props.userDetails?.map((item) => (
                <ul>
                  <li>Name : {item?.name}</li>
                  <li>District : {item?.district}</li>
                  <li>Pincode : {item?.pincode}</li>
                  <li>Phone No : {item?.mob1}</li>
                </ul>
              ))}
            </DetailsDiv>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default ViewDetails;
