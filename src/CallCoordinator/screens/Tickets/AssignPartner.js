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
} from "./AssignPartner.styled";
import axios from "axios";
import Select from "react-select";
import { server_api } from "../../const/api";

const customStyles = {
  control: (base) => ({
    ...base,
    height: 35,
    minHeight: 35,
    width: "100%",
    fontSize: "small",
  }),
};

function AssignPartner(props) {
  console.log('propssssssssssssssss: ', props);
  const {details} = props;
  console.log('detailsssssssss: ', details);
  console.log('disttttttttttttttttttttt: ', details[0]?.district);

  const [data,setData]=useState()
  const [data1,setData1]=useState()
  const [value,setValue]=useState()



function apiCall(){
  axios.get("http://192.168.0.120:8000/api/getServicePartner").then(response=>{
    console.log('response: ', response);


const freelancer = response.data.filter(data=>data.freelancer==1)
const  servicePartner =response.data.filter(data=>data.freelancer==0)
setData(freelancer)
setData1(servicePartner)


})
}





console.log("freeeeeeeeeeeeeeeee",data);
console.log("dataaaaaaaaaaaaaaaaaaaanew",data[2].name);
 
  useEffect(()=>{
    apiCall()

  },[])
  console.log("Complaint details Id =>", props.complainDetails.id);
  // console.log("User ID =>", props?.details[0]?.id);
  const [selectedPartner, setSelectedPartner] = useState("");

  if (!props.isOpen) {
    return null;
  }

  const sendRequest = async () => {
    const formData = new FormData();
    formData.append("service_partner_id", selectedPartner);
    formData.append("call_cordinator_id", props?.details[0]?.id);
    formData.append("ticket_no", props?.complainDetails?.ticket_no);
    formData.append("ticket_status", 0);
    let res = await axios
      .post(`${server_api}/api/createTicket`, formData)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then((data) => {
      console.log(data);
      if (data.code == 200) {
        props.onClose();
        props.getCallCoordinator();
      } else {
        alert(data.message);
      }
    });
  };
  return (
    <Modal>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Assign Service Partner</ModalTitle>
          <CloseIcon
            style={{ fontSize: "small", cursor: "pointer" }}
            opacity="0.5"
            onClick={() => {
              props.onClose();
              // setSelectedPartner("");
            }}
          />
        </ModalHeader>
        <ModalBody>
          <ModalForm>
          {console.log('props?.servicePartnerData: ', props?.servicePartnerData)}
         
            <FormGroup>
              <label>select service</label>
              <select onChange={(e)=>setValue(e.target.value)}>
                <option>Select</option>
                <option value={"service"}>Service Partner</option>
                <option value={"freelance"}>Freelancer</option>

              </select>



              <label>Assign</label>
              <select onChange={(e)=>setSelectedPartner(e.target.value)}>
              <option>select</option>


                {value=="service"?data1.filter(data1=> data1?.district==details[0]?.district).map((list)=>(

                     <option  value={list.id} >{list?.name}</option>

                )):value=="freelance"?
                
                data.filter(data=> data?.district==details[0]?.district).map((list)=>(


                  <option  value={list.id} >{list?.name}</option>)) :""}
                           

              </select>





              {/* <Select
                className="basic-single"
                classNamePrefix="select"
                value={props?.servicePartnerData.find((obj) => obj.value == selectedPartner)}
                onChange={(e) => setSelectedPartner(e.value)}
                isSearchable
                name="color"
                options={props?.servicePartnerData}
                styles={customStyles}
                required
              /> */}
            </FormGroup>

            <ButtonContainer>
              <Button onClick={handleSubmit}>Submit</Button>
            </ButtonContainer>
          </ModalForm>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default AssignPartner;