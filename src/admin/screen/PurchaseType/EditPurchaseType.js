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
  FormDiv,
  CheckboxDiv,
} from "./PurchaseType.style";
import { server_api } from "../../const/api";
import axios from "axios";

function EditPurchaseType(props) {
  console.log(props.editDetails);
  let { id, type_name, color, product_category_id, type_image, code } =
    props.editDetails;
  let editCatDetails = props.editCatDetails;
  const [colors, setColor] = useState(color);
  const [file, setFile] = useState("");
  if (!props.isEdit) {
    return null;
  }
  const onColorChange = (updatedColor) => {
    setColor(updatedColor);
    props.setEditDetails((prev) => ({
      ...prev,
      color: updatedColor,
    }));
  };
  const sendRequest = async () => {
    const formData = new FormData();
    formData.append("id", id);
    formData.append("type_name", type_name);
    formData.append("type_name", type_name);
    formData.append("code", code);
    formData.append("type_image", file? file : type_image);
    formData.append("product_category_id", JSON.stringify(editCatDetails));
    let result = await fetch(`${server_api}/api/updatePurchaseType`, {
      method: "POST",
      body: formData,
    })
    .then((data) => console.log(data))
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest()
      .then(() => props.onClose())
      .then(() => props.getPurchaseType());
  };
  const handleChange = (e) => {
    // Destructuring
    const { value, checked } = e.target;
    // Case 1 : The user checks the box
    if (checked) {
      props.setEditCatDetails([...editCatDetails, parseInt(value)]);
    }

    // Case 2  : The user unchecks the box
    else {
      props.setEditCatDetails(
        editCatDetails.filter((e) => e !== parseInt(value))
      );
    }
  };
  return (
    <Modal>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Edit Purchase Type</ModalTitle>
          <CloseIcon
            style={{ fontSize: "small", cursor: "pointer" }}
            opacity="0.5"
            onClick={props.onClose}
          />
        </ModalHeader>
        <ModalBody>
          <ModalForm>
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
                  value={type_name}
                  onChange={(e) => {
                    props.setEditDetails((prev) => ({
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
                  value={code}
                  onChange={(e) => {
                    props.setEditDetails((prev) => ({
                      ...prev,
                      code: e.target.value,
                    }));
                  }}
                />
              </FormGroup>
            </div>
            <FormGroup>
              <label>Choose a Color: {colors}</label>
              <ReactColorPicker
                colors={color}
                onChange={onColorChange}
                style={{ height: "60px" }}
              />
            </FormGroup>
            <label style={{ fontSize: "13px" }}>Purchase Type: </label>
            <CheckboxDiv>
              {props.categoryData?.map((item) => {
                let i = false;
                JSON.parse(product_category_id).map((prod_cat) => {
                  if (prod_cat === item?.id) {
                    i = true;
                  }
                });
                return (
                  <div>
                    <input
                      type="checkbox"
                      id={item?.id}
                      name=""
                      value={item?.id}
                      defaultChecked={i}
                      onChange={handleChange}
                    />
                    <label htmlFor="">{item?.product_category_name}</label>
                  </div>
                );
              })}
            </CheckboxDiv>
            <FormGroup>
              <label>Image:</label>
              <img src={type_image} alt="" width="70" style={{objectFit:'contain'}} />
              <input type="file" onChange={(e) => setFile(e.target.files[0])} />
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

export default EditPurchaseType;
