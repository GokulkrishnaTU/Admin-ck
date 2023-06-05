import { React, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ReactColorPicker from "@super-effective/react-color-picker";
import "react-color-palette/lib/css/styles.css";
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
  CheckboxDiv,
} from "./PurchaseType.style";
import axios from "axios";
import { server_api } from "../../const/api";

function AddPurchaseType(props) {
  const [inputs, setInputs] = useState("");
  const [color, setColor] = useState("#3cd6bf");
  const [file, setFile] = useState("");
  const [categoryType, setCategoryType] = useState([]);
  if (!props.isOpen) {
    return null;
  }
  const onColorChange = (updatedColor) => {
    setColor(updatedColor);
  };
  const sendRequest = async () => {
    const formData = new FormData();
    formData.append("type_name", inputs.type_name);
    formData.append("color", color);
    formData.append("code", inputs.code);
    formData.append("type_image", file);
    formData.append(
      "product_category_id",
      JSON.stringify(categoryType.map(Number))
    );
    let result = await fetch(`${server_api}/api/insertPurchaseType`, {
      method: "POST",
      body: formData,
    })
    .then((data) => console.log(data))
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest()
      .then(() => props.onClose())
      .then(() => {
        props.getPurchaseType();
        setInputs("");
        setColor("");
      });
  };
  const handleChange = (e) => {
    // Destructuring
    const { value, checked } = e.target;
    // Case 1 : The user checks the box
    if (checked) {
      setCategoryType([...categoryType, value]);
    }

    // Case 2  : The user unchecks the box
    else {
      setCategoryType(categoryType.filter((e) => e !== value));
    }
  };
  return (
    <Modal>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Add Purchase Type</ModalTitle>
          <CloseIcon
            style={{ fontSize: "small", cursor: "pointer" }}
            opacity="0.5"
            onClick={() => {
              props.onClose();
              setInputs("");
              setCategoryType("");
            }}
          />
        </ModalHeader>
        <ModalBody>
          <ModalForm onSubmit={handleSubmit}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "20px",
              }}
            >
              <FormGroup style={{ width: "50%" }}>
                <label>Purchase Type Name :</label>
                <input
                  type="text"
                  value={inputs.type_name}
                  onChange={(e) => {
                    setInputs((prev) => ({
                      ...prev,
                      type_name: e.target.value,
                    }));
                  }}
                />
              </FormGroup>
              <FormGroup style={{ width: "50%" }}>
                <label>Code :</label>
                <input
                  type="text"
                  value={inputs.code}
                  onChange={(e) => {
                    setInputs((prev) => ({
                      ...prev,
                      code: e.target.value,
                    }));
                  }}
                />
              </FormGroup>
            </div>
            <FormGroup>
              <label>Choose a Color: {color}</label>

              <ReactColorPicker
                color={color}
                onChange={onColorChange}
                style={{ height: "60px" }}
              />
            </FormGroup>
            <FormGroup>
              <label>image:</label>
              <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            </FormGroup>
            <label style={{ fontSize: "13px" }}>Product Category: </label>
            <CheckboxDiv>
              {props.categoryData?.map((item) => (
                <div>
                  <input
                    type="checkbox"
                    id={item?.id}
                    name="topping"
                    value={item?.id}
                    onChange={handleChange}
                  />
                  <label htmlFor="">{item?.product_category_name}</label>
                </div>
              ))}
            </CheckboxDiv>
            <ButtonContainer>
              <Button>Save</Button>
            </ButtonContainer>
          </ModalForm>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default AddPurchaseType;
