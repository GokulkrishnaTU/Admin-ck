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
  RadioDiv,
} from "./AcceptQuotation.styled";
import axios from "axios";
import { server_api } from "../../const/api";

function AcceptQuotation(props) {
  const [name, setName] = useState("");
  const [file, setFile] = useState("");
  const [type, setType] = useState("");
  let {
    slno,
    product_model,
    product_desc,
    warranty,
    price,
    qnty,
    product_category_id,
    purchaseTypeId,
    userid,
    payment_days,
    delivery_days,
    installation_days,
    id,
  } = props.details;
  console.log(props.details);
  console.log(type);
  if (!props.isOpen) {
    return null;
  }
  const sendRequest = async () => {
    const formData = new FormData();
    formData.append("slno", slno);
    formData.append("product_model", product_model);
    formData.append("product_desc", product_desc);
    formData.append("warranty", warranty);
    formData.append("price", price);
    formData.append("qnty", qnty);
    formData.append("product_category_id", product_category_id);
    formData.append("purchaseTypeId", purchaseTypeId);
    formData.append("userid", userid);
    formData.append("payment_days", payment_days);
    formData.append("delivery_days", delivery_days);
    formData.append("installation_days", installation_days);
    formData.append("id", id);
    formData.append("acceptable", JSON.stringify(type));
    let result = await fetch(`${server_api}/api/updateCustomSaleReport`, {
      method: "POST",
      body: formData,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest()
      .then((data) => console.log(data))
      .then(() => props.onClose())
      .then(() => window.location.reload());
  };
  return (
    <Modal>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Quotation</ModalTitle>
          <CloseIcon
            style={{ fontSize: "small", cursor: "pointer" }}
            opacity="0.5"
            onClick={props.onClose}
          />
        </ModalHeader>
        <ModalBody>
          <ModalForm>
            <RadioDiv>
              <span>Payment :</span>
              <input
                type="radio"
                name="payment"
                id="payment-accept"
                value={true}
                onChange={(e) =>
                  setType((prev) => ({
                    ...prev,
                    payment: e.target.value,
                  }))
                }
              />
              <label htmlFor="payment-accept">Yes</label>
              <input
                type="radio"
                value={false}
                id="payment-reject"
                name="payment"
                onChange={(e) =>
                  setType((prev) => ({
                    ...prev,
                    payment: e.target.value,
                  }))
                }
              />
              <label htmlFor="payment-reject">No</label>
            </RadioDiv>
            {type.payment === "false" ? (
              <FormGroup>
                <label>Payment Message :</label>
                <input
                  type="text"
                  value={type.payment_msg}
                  onChange={(e) =>
                    setType((prev) => ({
                      ...prev,
                      payment_msg: e.target.value,
                    }))
                  }
                />
              </FormGroup>
            ) : (
              ""
            )}
            <RadioDiv>
              <span>Installation :</span>
              <input
                type="radio"
                name="installation"
                id="installation-true"
                value={true}
                onChange={(e) =>
                  setType((prev) => ({
                    ...prev,
                    installation: e.target.value,
                  }))
                }
              />
              <label htmlFor="installation-true">Yes</label>
              <input
                type="radio"
                value={false}
                id="installation-false"
                name="installation"
                onChange={(e) =>
                  setType((prev) => ({
                    ...prev,
                    installation: e.target.value,
                  }))
                }
              />
              <label htmlFor="installation-false">No</label>
            </RadioDiv>
            {type.installation === "false" ? (
              <FormGroup>
                <label>Installation Message :</label>
                <input
                  type="text"
                  value={type.installation_msg}
                  onChange={(e) =>
                    setType((prev) => ({
                      ...prev,
                      installation_msg: e.target.value,
                    }))
                  }
                />
              </FormGroup>
            ) : (
              ""
            )}
            <RadioDiv>
              <span>Delivery :</span>
              <input
                type="radio"
                name="delivery"
                id="delivery-true"
                value={true}
                onChange={(e) =>
                  setType((prev) => ({
                    ...prev,
                    delivery: e.target.value,
                  }))
                }
              />
              <label htmlFor="delivery-true">Yes</label>
              <input
                type="radio"
                value={false}
                id="delivery-false"
                name="delivery"
                onChange={(e) =>
                  setType((prev) => ({
                    ...prev,
                    delivery: e.target.value,
                  }))
                }
              />
              <label htmlFor="delivery-false">No</label>
            </RadioDiv>
            {type.delivery === "false" ? (
              <FormGroup>
                <label>Delivery Message :</label>
                <input
                  type="text"
                  value={type.delivery_msg}
                  onChange={(e) =>
                    setType((prev) => ({
                      ...prev,
                      delivery_msg: e.target.value,
                    }))
                  }
                />
              </FormGroup>
            ) : (
              ""
            )}
            <ButtonContainer>
              <Button onClick={handleSubmit}>Save</Button>
            </ButtonContainer>
          </ModalForm>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default AcceptQuotation;
