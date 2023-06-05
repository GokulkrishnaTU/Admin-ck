import { React, useState} from "react";
import CloseIcon from '@mui/icons-material/Close';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
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
    ButtonContainer
} from "./DelPopUpStyle";

function DeletePopUp(props) {
    const [color, setColor] = useState(null);
    if(!props.isDel) {
        return null;
    }
  
    return (
        <Modal>
            <ModalContent>
                {/* <ModalHeader>
                    <ModalTitle></ModalTitle>
                </ModalHeader> */}
                <ModalBody>
                    <ModalForm>

                        <FormGroup>
                            <HighlightOffIcon style={{fontSize:"100px", color:"red", marginBottom:"10px"}} /> 
                        </FormGroup>
                        <FormGroup>
                            <label>Are you sure ?</label>  
                        </FormGroup>
                
                        <ButtonContainer>
                            <Button bg={"#4669E8"}
                                color={"white"} onClick={props.onClose} >Cancel</Button>
                            <Button bg={"#4669E8"} color={"white"} onClick={props.delReq}>Delete</Button>
                        </ButtonContainer>
                    </ModalForm>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}

export default DeletePopUp;
