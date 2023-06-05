import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { server_api } from "../../const/api";
import Assign from "./Assign";
import DetailsModal from "./DetailsModal";
import EstimatedPrice from "./EstimatedPrice";
import { Button, Container, MenuBar, MenuItems, MenuWrapperRight, TableContainer, Wrapper } from "./Exchange.styled";
import { Modal, ModalBody, ModalContent, ModalHeader, ModalTitle, FormGroup, Card, FooterDiv, CommentCard, NameDiv, SubDiv, TopSection, TopSectionDiv, ModalContentDiv } from './ReportStyled'
function InspectionReport() {
  const navigate = useNavigate()
  const [AllDetails, setAllDetails] = useState({});
  const { state } = useLocation()
  console.log(state, "state");
  const [isEstimatedPrice, setIsEstimatedPrice] = useState(false)

  const sendReq = () => {
    axios.get(`${server_api}/api/inspection_viewdetails?exchange_id=${state?.exchangeform_id}`).then((res) => {
      console.log('res=>', res.data);
      setAllDetails(res.data[0]);
    });
    
  }

  useEffect(() => {
    sendReq();
  }, []);


  return (
    <Container>
      {isEstimatedPrice && <EstimatedPrice text="Enter Final Price" setIsEstimatedPrice={() => setIsEstimatedPrice(false)} items={state} />}
      <MenuBar>
        <p>Exchange</p>
        <MenuItems>
          <MenuWrapperRight></MenuWrapperRight>
        </MenuItems>
      </MenuBar>
      <SubDiv>
        <TopSection>
          <h4>SERVICE ENGINEER INSPECTION REPORT</h4>
          <TopSectionDiv>
            <h5>₹ {state?.estimated_price}</h5>
            <span>*Estimated Cost</span>
          </TopSectionDiv>
          {state?.final_price ? <TopSectionDiv>
            <h5>₹ {state?.final_price}</h5>
            <span>*Final Cost</span>
          </TopSectionDiv> : <Button onClick={() => setIsEstimatedPrice(true)}>Assign Final Cost</Button>}
        </TopSection>

        {state.product_category_name == 'Laptop' && (<ModalContentDiv>
          <ModalHeader>
            <ModalTitle>LAPTOP</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <Card>
                <span>PROCESSOR: {AllDetails?.processor}</span>
                <span>
                  WORKING CONDITION:{' '}
                  {AllDetails?.processor_status === 0 ? 'Yes' : 'No'}
                </span>
              </Card>
              <Card>
                <span>RAM: {AllDetails?.ram} GB</span>
              </Card>
              <Card border>
                <span>STORAGE: {AllDetails?.storage}</span>
              </Card>
              <Card>
                <span>GRAPHICS: {AllDetails?.graphics === 0 ? 'Inbuilt' : 'Dedicated'}</span>
                <span>GRAPHICS SIZE: {AllDetails?.graphics_size}</span>
              </Card>
              <Card>
                <span>DISPLAY: {AllDetails?.display_size}</span>
                <span>
                  WORKING CONDITION:{' '}
                  {AllDetails?.display === 0 ? 'Yes' : 'No'}
                </span>
              </Card>
              <Card>
                <span>
                  KEY BOARD:
                  {AllDetails?.keyboard_type === 0
                    ? 'Ordinary'
                    : 'Backlight'}
                </span>
                <span>
                  WORKING CONDITION:{' '}
                  {AllDetails?.keyboard_working === 0 ? 'Yes' : 'No'}
                </span>
              </Card>
              <Card>
                <span>
                  TOUCH PAD:
                  {AllDetails?.touchpad_type === 0 ? 'Single' : 'Dual'}
                </span>
                <span>
                  WORKING CONDITION:{' '}
                  {AllDetails?.touchpad_working === 0 ? 'Yes' : 'No'}
                </span>
              </Card>
              <Card border>
              <span>WIFI: {AllDetails?.wifi === 0 ? 'Yes' : 'No'}</span>
                <span>
                  WORKING CONDITION:{' '}
                  {AllDetails?.wifi_working === 0 ? 'Yes' : 'No'}
                </span>
              </Card>
              <Card>
                <span>
                  SPEAKERS: {AllDetails?.speaker === 0 ? 'Yes' : 'No'}
                </span>
                <span>
                  WORKING CONDITION:{' '}
                  {AllDetails?.speaker_working === 0 ? 'Yes' : 'No'}
                </span>
              </Card>
              <Card>
              <span>WEBCAM: {AllDetails?.webcam === 0 ? 'Yes' : 'No'}</span>
                <span>
                  WORKING CONDITION:{' '}
                  {AllDetails?.webcam_working === 0 ? 'Yes' : 'No'}
                </span>
              </Card>
              <Card>
              <span>
                  USB/HDMI PORTS:{AllDetails?.usb_hdmi === 0 ? 'Yes' : 'No'}
                </span>
                <span>
                  WORKING CONDITION:{' '}
                  {AllDetails?.usb_hdmi_working === 0 ? 'Yes' : 'No'}
                </span>
              </Card>
              <Card>
              <span>
                  BATTERY BACKUP:
                  {AllDetails?.battery_backup === 0
                    ? 'Below 30 mins'
                    : 'Above 1 Hour'}
                </span>
              </Card>
              <Card>
              <span>
                  CHARGER+POWERCODE:
                  {AllDetails?.charger_powercode === 0 ? 'Yes' : 'No'}
                </span>
                <span>
                  WORKING CONDITION:{' '}
                  {AllDetails?.charger_powercode_working === 0 ? 'Yes' : 'No'}
                </span>
              </Card>
              <Card>
                <span>
                  CARRY CASE: {AllDetails?.carry_case === 0 ? 'Yes' : 'No'}
                </span>
              </Card>
              <Card>
                <span>
                  PHYSICAL CONDITION:{' '}
                  {AllDetails?.physical_condition === 0
                    ? 'Good'
                    : AllDetails?.physical_condition === 1
                    ? 'Fair'
                    : 'Excellent'}
                </span>
              </Card>
              <Card>
                <span>
                  WORKING CONDITION:{' '}
                  {AllDetails?.working_condition === 0
                    ? 'Good'
                    : AllDetails?.working_condition === 1
                    ? 'Fair'
                    : 'Excellent'}
                </span>
              </Card>
              <Card>
                <span>PURCHASE YEAR: {AllDetails?.purchase_year}</span>
              </Card>
              <Card>
                {/* <span>
                  COMPLAINT: {AllDetails && (JSON.parse(AllDetails?.complaint_id)[0]?.complaint)}
                </span> */}
              </Card>
              <Card>
                <span>
                  REASON FOR EXCHANGE: {AllDetails?.reason_for_exchange_id}
                </span>
              </Card>
            </FormGroup>
            <FooterDiv>
              <CommentCard>
                <span>Comment: {AllDetails?.comment}</span>
              </CommentCard>
            </FooterDiv>
            <FooterDiv>
              <NameDiv>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span>Name: {AllDetails?.name}</span>
                  <span>Phone No: {AllDetails?.contact}</span>
                </div>
              </NameDiv>
            </FooterDiv>
            <Button style={{ padding: '10px 25px', alignSelf: 'flex-end' }}  onClick={() => navigate('/exchange')}>Next</Button>
          </ModalBody>
        </ModalContentDiv>)}

        {state.product_category_name == 'Desktop' && (<ModalContentDiv>
          <ModalHeader>
            <ModalTitle>DESKTOP</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <FormGroup>
            <Card border={AllDetails?.processor_status === 1 ? true : false}>
                <span>PROCESSOR: {AllDetails?.processor}</span>
                <span>
                  WORKING CONDITION:{' '}
                  {AllDetails?.processor_status === 0 ? 'Yes' : 'No'}
                </span>
              </Card>
              <Card>
                <span>RAM: {AllDetails?.ram} GB</span>
              </Card>
              <Card border>
                <span>STORAGE: {AllDetails?.storage}</span>
              </Card>
              <Card>
                <span>
                  GRAPHICS: {AllDetails?.graphics === 0 ? 'Inbuilt' : 'No'}
                </span>
                <span>GRAPHICS SIZE: {AllDetails?.graphics_size}</span>
              </Card>
              <Card>
                <span>MONITOR BRAND: {AllDetails?.monitor_brand}</span>
              </Card>
              <Card>
                <span>MONITOR SIZE: {AllDetails?.monitor_size}</span>
              </Card>
              <Card>
                <span>
                  KEY BOARD WITH MOUSE:
                  {AllDetails?.keyboard_with_mouse === 0
                    ? 'Ordinary'
                    : 'Backlight'}
                </span>
                <span>
                  WORKING CONDITION:{' '}
                  {AllDetails?.keyboard_working === 0 ? 'Yes' : 'No'}
                </span>
              </Card>
              <Card>
                <span>WIFI: {AllDetails?.wifi === 0 ? 'Yes' : 'No'}</span>
                <span>
                  WORKING CONDITION:{' '}
                  {AllDetails?.wifi_working === 0 ? 'Yes' : 'No'}
                </span>
              </Card>
              <Card>
                <span>
                  SPEAKERS: {AllDetails?.speaker === 0 ? 'Yes' : 'No'}
                </span>
                <span>
                  WORKING CONDITION:{' '}
                  {AllDetails?.speaker_working === 0 ? 'Yes' : 'No'}
                </span>
              </Card>
              <Card border>
                <span>WEBCAM: {AllDetails?.webcam === 0 ? 'Yes' : 'No'}</span>
                <span>
                  WORKING CONDITION:{' '}
                  {AllDetails?.webcam_working === 0 ? 'Yes' : 'No'}
                </span>
              </Card>
              <Card>
                <span>
                  PHYSICAL CONDITION:{' '}
                  {AllDetails?.physical_condition === 0
                    ? 'Good'
                    : AllDetails?.physical_condition === 1
                    ? 'Fair'
                    : 'Excellent'}
                </span>
              </Card>
              <Card>
                <span>
                  WORKING CONDITION:{' '}
                  {AllDetails?.working_condition === 0
                    ? 'Good'
                    : AllDetails?.working_condition === 1
                    ? 'Fair'
                    : 'Excellent'}
                </span>
                <span></span>
              </Card>
              <Card>
                <span>PURCHASE YEAR: {AllDetails?.purchase_year}</span>
              </Card>
            </FormGroup>
            <FooterDiv>
              <CommentCard>
                <span>Comment: {AllDetails?.comment}</span>
              </CommentCard>
            </FooterDiv>
            <FooterDiv>
              <NameDiv>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span>Name: {AllDetails?.name}</span>
                  <span>Phone No: {AllDetails?.contact}</span>
                </div>
              </NameDiv>
            </FooterDiv>
            <Button style={{ padding: '10px 25px', alignSelf: 'flex-end' }}  onClick={() => navigate('/exchange')}>Next</Button>
          </ModalBody>
        </ModalContentDiv>)}

        {state.product_category_name == 'Battery' && (<ModalContentDiv>
          <ModalHeader>
            <ModalTitle>BATTERY</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <FormGroup>
            <Card border={AllDetails?.processor_status === 1 ? true : false}>
                <span>AMPHERE: {AllDetails?.amphere}</span>
              </Card>
              <Card>
                <span>MODEL: {AllDetails?.model}SMF</span>
              </Card>
              <Card border>
                <span>BRAND: {AllDetails?.brand}</span>
                {/* <span>
                  WORKING CONDITION:YES
                </span> */}
              </Card>
              <Card>
                <span>
                  PHYSICAL CONDITION:{' '}
                  {AllDetails?.physical_condition === 0
                    ? 'Good'
                    : AllDetails?.physical_condition === 1
                    ? 'Fair'
                    : 'Excellent'}
                </span>
              </Card>
              <Card>
                <span>
                  WORKING CONDITION:{' '}
                  {AllDetails?.working_condition === 0
                    ? 'Good'
                    : AllDetails?.working_condition === 1
                    ? 'Fair'
                    : 'Excellent'}
                </span>
              </Card>
              <Card>
                <span>PURCHASE YEAR: {AllDetails?.purchase_year}</span>
              </Card>
              <Card>{/* <span>COMPLAINT: {AllDetails?.ram}</span> */}</Card>
              <Card>
                <span>
                  REASON FOR EXCHANGE: {AllDetails?.reason_for_exchange_id}
                </span>
              </Card>
            </FormGroup>
            <FooterDiv>
              <CommentCard>
                <span>Comment: {AllDetails?.comment}</span>
              </CommentCard>
            </FooterDiv>
            <FooterDiv>
              <NameDiv>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span>Name: {AllDetails?.name}</span>
                  <span>Phone No: {AllDetails?.contact}</span>
                </div>
              </NameDiv>
            </FooterDiv>
            <Button style={{ padding: '10px 25px', alignSelf: 'flex-end' }}  onClick={() => navigate('/exchange')}>Next</Button>
          </ModalBody>
        </ModalContentDiv>)}

       
        {state.product_category_name == 'Mobiles' && (<ModalContentDiv>
          <ModalHeader>
            <ModalTitle>MOBILES</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <FormGroup>
            <Card border={AllDetails?.processor_status == 1 ? true : false}>
                <span>PROCESSOR: {AllDetails?.processor}</span>
                <span>
                  WORKING CONDITION:{' '}
                  {AllDetails?.processor_status === 0 ? 'Yes' : 'No'}
                </span>
              </Card>
              <Card>
                <span>RAM: {AllDetails?.ram}</span>
              </Card>
              <Card border>
                <span>STORAGE: {AllDetails?.storage}</span>
              </Card>
              <Card border>
                <span>SCREEN SIZE: {AllDetails?.screen_size}</span>
              </Card>
              <Card border>
                <span>BRAND: {AllDetails?.brand}</span>
              </Card>
              <Card>
                <span>WIFI: {AllDetails?.wifi === 0 ? 'Yes' : 'No'}</span>
                <span>
                  WORKING CONDITION:{' '}
                  {AllDetails?.wifi_working === 0 ? 'Yes' : 'No'}
                </span>
              </Card>
              <Card>
                <span>
                  SPEAKERS: {AllDetails?.speaker === 0 ? 'Yes' : 'No'}
                </span>
                <span>
                  WORKING CONDITION:{' '}
                  {AllDetails?.speaker_working === 0 ? 'Yes' : 'No'}
                </span>
              </Card>
              <Card border>
                <span>CAMERA: {AllDetails?.camera === 0 ? 'Yes' : 'No'}</span>
                <span>
                  WORKING CONDITION:{' '}
                  {AllDetails?.camera_working === 0 ? 'Yes' : 'No'}
                </span>
              </Card>
              <Card>
                <span>
                  PHYSICAL CONDITION:{' '}
                  {AllDetails?.physical_condition === 0
                    ? 'Good'
                    : AllDetails?.physical_condition === 1
                    ? 'Fair'
                    : 'Excellent'}
                </span>
              </Card>
              <Card>
                <span>
                  WORKING CONDITION:{' '}
                  {AllDetails?.working_condition === 0
                    ? 'Good'
                    : AllDetails?.working_condition === 1
                    ? 'Fair'
                    : 'Excellent'}
                </span>
              </Card>
              <Card>
                <span>PURCHASE YEAR: {AllDetails?.purchase_year}</span>
              </Card>
              <Card>{/* <span>COMPLAINT: {AllDetails?.ram}</span> */}</Card>
              <Card>
              <span>
                  REASON FOR EXCHANGE: {AllDetails?.reason_for_exchange_id}
                </span>
              </Card>
            </FormGroup>
            <FooterDiv>
              <CommentCard>
                <span>Comment: {AllDetails?.comment}</span>
              </CommentCard>
            </FooterDiv>
            <FooterDiv>
              <NameDiv>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span>Name: {AllDetails?.name}</span>
                  <span>Phone No: {AllDetails?.contact}</span>
                </div>
              </NameDiv>
            </FooterDiv>
            <Button style={{ padding: '10px 25px', alignSelf: 'flex-end' }}  onClick={() => navigate('/exchange')}>Next</Button>
          </ModalBody>
        </ModalContentDiv>)}

        {state.product_category_name == 'Monitors' && (<ModalContentDiv>
          <ModalHeader>
            <ModalTitle>MONITORS</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <FormGroup>
            <Card border={AllDetails?.processor_status === 1 ? true : false}>
                <span>SCREEN SIZE: {AllDetails?.screen_size}</span>
              </Card>
              <Card border>
                <span>BRAND: {AllDetails?.brand}</span>
              </Card>
              <Card>
                <span>
                  SPEAKERS: {AllDetails?.speaker === 0 ? 'Yes' : 'No'}
                </span>
                <span>
                  WORKING CONDITION:{' '}
                  {AllDetails?.speaker_working === 0 ? 'Yes' : 'No'}
                </span>
              </Card>
              <Card border>
                <span>CAMERA: {AllDetails?.camera === 0 ? 'Yes' : 'No'}</span>
                <span>
                  WORKING CONDITION:{' '}
                  {AllDetails?.camera_working === 0 ? 'Yes' : 'No'}
                </span>
              </Card>
              <Card>
                <span>
                  PHYSICAL CONDITION:{' '}
                  {AllDetails?.physical_condition === 0
                    ? 'Good'
                    : AllDetails?.physical_condition === 1
                    ? 'Fair'
                    : 'Excellent'}
                </span>
              </Card>
              <Card>
                <span>
                  WORKING CONDITION:{' '}
                  {AllDetails?.working_condition === 0
                    ? 'Good'
                    : AllDetails?.working_condition === 1
                    ? 'Fair'
                    : 'Excellent'}
                </span>
              </Card>
              <Card>
                <span>PURCHASE YEAR: {AllDetails?.purchase_year}</span>
              </Card>
              <Card>
                {/* <span>COMPLAINT: {AllDetails?.reason_for_exchange_id}</span> */}
              </Card>
              <Card>
                <span>
                  REASON FOR EXCHANGE: {AllDetails?.reason_for_exchange_id}
                </span>
              </Card>
            </FormGroup>
            <FooterDiv>
              <CommentCard>
                <span>Comment: {AllDetails?.comment}</span>
              </CommentCard>
            </FooterDiv>
            <FooterDiv>
              <NameDiv>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span>Name: {AllDetails?.name}</span>
                  <span>Phone No: {AllDetails?.contact}</span>
                </div>
              </NameDiv>
            </FooterDiv>
            <Button style={{ padding: '10px 25px', alignSelf: 'flex-end' }}  onClick={() => navigate('/exchange')}>Next</Button>
          </ModalBody>
        </ModalContentDiv>)}

        {state.product_category_name == 'UPS/Inverter' && (<ModalContentDiv>
          <ModalHeader>
            <ModalTitle>UPS</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <FormGroup>
            <Card border={AllDetails?.processor_status === 1 ? true : false}>
                <span>LOAD CAPACITY: {AllDetails?.load_capacity}</span>
              </Card>
              <Card >
                <span>BATTERY NUMBERS: {AllDetails?.battery_numbers}</span>
              </Card>
              <Card >
                <span>
                  TYPE:{AllDetails?.type === 0 ? 'Online' : AllDetails?.type === 1 ? 'Offline' : ''}
                </span>
              </Card>
              <Card >
                <span>
                  BATTERY BUILT:
                  {AllDetails?.battery_built === 0 ? 'Inbuilt' : AllDetails?.battery_built == 1 ? 'External' : ''}
                </span>
                <span>
                  WORKING CONDITION:{' '}
                  {AllDetails?.battery_built_working === 0 ? 'Yes' : 'No'}
                </span>
              </Card>
              <Card>
                <span>
                  PHYSICAL CONDITION:{' '}
                  {AllDetails?.physical_condition === 0
                    ? 'Good'
                    : AllDetails?.physical_condition === 1
                    ? 'Fair'
                    : 'Excellent'}
                </span>
              </Card>
              <Card>
                <span>
                  WORKING CONDITION:{' '}
                  {AllDetails?.working_condition === 0
                    ? 'Good'
                    : AllDetails?.working_condition === 1
                    ? 'Fair'
                    : 'Excellent'}
                </span>
              </Card>
              <Card>
                <span>PURCHASE YEAR: {AllDetails?.purchase_year}</span>
              </Card>
              <Card>
                {/* <span>COMPLAINT: {AllDetails?.battery_numbers}</span> */}
              </Card>
              <Card>
                <span>
                  REASON FOR EXCHANGE: {AllDetails?.reason_for_exchange_id}
                </span>
              </Card>
            </FormGroup>
            <FooterDiv>
              <CommentCard>
                <span>Comment: {AllDetails?.comment}</span>
              </CommentCard>
            </FooterDiv>
            <FooterDiv>
              <NameDiv>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span>Name: {AllDetails?.name}</span>
                  <span>Phone No: {AllDetails?.contact}</span>
                </div>
              </NameDiv>
            </FooterDiv>
            <Button style={{ padding: '10px 25px', alignSelf: 'flex-end' }} onClick={() => navigate('/exchange')}>Next</Button>
          </ModalBody>
        </ModalContentDiv>)}
      </SubDiv>
    </Container>
  );
}

export default InspectionReport;