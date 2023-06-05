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
} from "./AddCustomerSubCategory.styled";
import axios from "axios";
import { server_api } from "../../const/api";

function AddCustomerSubCategory(props) {
  const [inputs, setInputs] = useState("");
  const [file, setFile] = useState("");
  console.log(props.id);
  // const [color, setColor] = useState("#3cd6bf");
  if (!props.isOpen) {
    return null;
  }
  // const onColorChange = (updatedColor) => {
  //   setColor(updatedColor);
  // };
  const sendRequest = async () => {
    const formData = new FormData();
    formData.append("sub_category_image", file);
    formData.append("sub_category_name", inputs.sub_category_name);
    // formData.append("color", color);
    formData.append("category_id", props.id);
    let result = await axios.post(`${server_api}/api/insertCustomerSubCategory`, formData)
    .then((res) => console.log("res=>",res))
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest()
      .then(() => props.onClose())
      .then(()=>{props.getCustomerSubCategory()
        setInputs('')
      })
  };
  return (
    <Modal>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Add Customer Sub Category</ModalTitle>
          <CloseIcon
            style={{ fontSize: "small", cursor: "pointer" }}
            opacity="0.5"
            onClick={props.onClose}
          />
        </ModalHeader>
        <ModalBody>
          <ModalForm>
            <FormGroup>
              <label>Sub Category Name :</label>
              <input
                type="text"
                value={inputs.sub_category_name}
                onChange={(e) => {
                  setInputs((prev) => ({
                    ...prev,
                    sub_category_name: e.target.value,
                  }));
                }}
              />
            </FormGroup>

            {/* <FormGroup>
              <label>Choose a Color: {color}</label>

              <ReactColorPicker
                color={color}
                value={color}
                onChange={onColorChange}
              />
            </FormGroup> */}

            <FormGroup>
              <label>Image : </label>
              <input type="file" onChange={(e)=> setFile(e.target.files[0])} />
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

export default AddCustomerSubCategory;
