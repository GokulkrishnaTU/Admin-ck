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
} from "./AddBankDetails.styled";
import { server_api } from "../../const/api";
import axios from "axios";

function EditBankDetails(props) {
  let { id, account_name, account_no, bank_name, bank_branch, ifsc_code } =
    props.editDetails;
  const [statusText, setStatusText] = useState("");
  console.log("status=>", statusText);
  if (!props.isEdit) {
    return null;
  }

  const sendRequest = async () => {
    let res = await axios
      .post(`${server_api}/api/updateBank`, {
        id,
        account_name,
        account_no,
        bank_name,
        bank_branch,
        ifsc_code,
      })
      .catch((err) => console.log(err));
    let data = await res;
    return data;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then((data) => {
      console.log(data);
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
          <ModalTitle>Edit Bank Details</ModalTitle>
          <CloseIcon
            style={{ fontSize: "small", cursor: "pointer" }}
            opacity="0.5"
            onClick={() => {
              props.onClose();
              setStatusText("");
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
                value={account_name}
                onChange={(e) => {
                  props.setEditDetails((prev) => ({
                    ...prev,
                    account_name: e.target.value,
                  }));
                }}
              />
            </FormGroup>

            <FormGroup>
              <label>Account No :</label>
              <input
                type="text"
                value={account_no}
                onChange={(e) => {
                  props.setEditDetails((prev) => ({
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
                value={bank_name}
                onChange={(e) => {
                  props.setEditDetails((prev) => ({
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
                value={bank_branch}
                onChange={(e) => {
                  props.setEditDetails((prev) => ({
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
                value={ifsc_code}
                onChange={(e) => {
                  props.setEditDetails((prev) => ({
                    ...prev,
                    ifsc_code: e.target.value,
                  }));
                }}
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

export default EditBankDetails;
