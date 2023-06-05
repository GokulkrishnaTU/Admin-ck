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
} from "./AddBankDetails.styled";
import axios from "axios";
import { server_api } from "../../const/api";

function AddBankDetails(props) {
  const [input, setInput] = useState("");
  const [statusText, setStatusText] = useState();

  if (!props.isOpen) {
    return null;
  }
  const sendRequest = async () => {
    let res = await axios.post(`${server_api}/api/insertBank`, {
      account_name: input.account_name,
      account_no: input.account_no,
      bank_name: input.bank_name,
      bank_branch: input.bank_branch,
      ifsc_code: input.ifsc_code,
    });
    let data = await res;
    return data;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then((data) => {
      console.log("res=>", data);
      if (data.data.code == "200") {
        props.onClose();
        props.getBankDetails();
        setStatusText("");
      } else {
        setStatusText(data.data.message);
      }
    });
  };
  return (
    <Modal>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Add Bank Details</ModalTitle>
          <CloseIcon
            style={{ fontSize: "small", cursor: "pointer", padding: "8px" }}
            opacity="0.5"
            onClick={()=>{
              props.onClose()
              setStatusText('')
              setInput('')
            }}
          />
        </ModalHeader>
          <span
            style={{
              color: "red",
              fontSize: "12px",
              float: "right",
              padding: "5px 10px",
            }}
          >
            {statusText}
          </span>
        <ModalBody>
          <ModalForm>
            <FormGroup>
              <label>Account Name :</label>
              <input
                type="text"
                value={input.account_name}
                onChange={(e) => {
                  setInput((prev) => ({
                    ...prev,
                    account_name: e.target.value,
                  }));
                }}
              />
            </FormGroup>
            <FormGroup>
              <label>Account No :</label>
              <input
                type="number"
                value={input.account_no}
                onChange={(e) => {
                  setInput((prev) => ({
                    ...prev,
                    account_no: e.target.value,
                  }));
                }}
              />
            </FormGroup>
            <FormGroup>
              <label>Bank Name :</label>
              <input
                type="text"
                value={input.bank_name}
                onChange={(e) => {
                  setInput((prev) => ({
                    ...prev,
                    bank_name: e.target.value,
                  }));
                }}
              />
            </FormGroup>
            <FormGroup>
              <label>Bank Branch :</label>
              <input
                type="text"
                value={input.bank_branch}
                onChange={(e) => {
                  setInput((prev) => ({
                    ...prev,
                    bank_branch: e.target.value,
                  }));
                }}
              />
            </FormGroup>
            <FormGroup>
              <label>IFSC Code :</label>
              <input
                type="text"
                value={input.ifsc_code}
                onChange={(e) => {
                  setInput((prev) => ({
                    ...prev,
                    ifsc_code: e.target.value,
                  }));
                }}
              />
            </FormGroup>
            <ButtonContainer>
              <Button onClick={handleSubmit}>Save</Button>
            </ButtonContainer>
          </ModalForm>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default AddBankDetails;
