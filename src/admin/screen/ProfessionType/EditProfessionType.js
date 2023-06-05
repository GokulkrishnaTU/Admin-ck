import {React, useState} from "react";
import CloseIcon from '@mui/icons-material/Close';
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
} from "./ProfType.style";
import { server_api } from "../../const/api";
import axios from "axios";

function EditProfessionType(props) {
    const [colors, setColor] = useState("#3cd6bf");
    let { id, profession_name } = props.editDetails;
    if(!props.isEdit) {
        return null;
    }
    const onColorChange = (updatedColor) => {
        setColor(updatedColor);
    };
    const sendRequest = async () => {
        const res = await axios
          .post(`${server_api}/api/updateProfession`, {
            id,
            profession_name
          })
          .catch((err) => console.log(err));
        const data = await res.data;
        return data;
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest()
          .then((data) => console.log(data))
          .then(() => props.onClose())
          .then(() => props.getProfession());
      };
    return (
        <Modal>
            <ModalContent>
                <ModalHeader>
                    <ModalTitle>Edit Profession Type</ModalTitle>
                    <CloseIcon style={{fontSize: "small", cursor:"pointer"}} opacity='0.5' onClick={props.onClose}/>
                </ModalHeader>
                <ModalBody>
                    <ModalForm>
                        <FormGroup>
                            <label>Profession Name :</label>
                            <input type="text"  value={profession_name}
                                onChange={(e) => {
                                props.setEditDetails((prev) => ({
                                    ...prev,
                                    profession_name: e.target.value,
                                }));
                            }}/>
                        </FormGroup>
                        <ButtonContainer>
                            <Button  onClick={handleSubmit}>Update</Button>
                        </ButtonContainer>
                    </ModalForm>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}

export default EditProfessionType;
