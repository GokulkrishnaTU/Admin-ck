import React, { useEffect, useState } from 'react'
import { Modal, ModalBody, ModalContent, ModalHeader, ModalTitle, FormGroup, Card, FooterDiv, CommentCard, NameDiv } from './ReportStyled'
import { Button } from './ExchagePrice.styled'
import CloseIcon from "@mui/icons-material/Close";
import { server_api } from '../../const/api';
import axios from 'axios';

function ReportModal({ setReportModal, items }) {
  console.log('items: ', items);
  const [data, setData] = useState([])
  console.log('data: ', data);
  const getDetails = () => {
    axios.get(`${server_api}/api/inspection_viewdetails?exchange_id=${items?.exchangeform_id}`).then(resp => {
      console.log('resp: ', resp);
      setData(resp.data[0])
    })
  }
  useEffect(() => {
    getDetails()
  },[])
  return (
    <Modal>
      {items?.product_category_name == 'Laptop' &&  <ModalContent>
        <ModalHeader>
          <ModalTitle>Laptop</ModalTitle>
          <CloseIcon
            style={{ fontSize: "large", cursor: "pointer" }}
            opacity="0.5"
            onClick={setReportModal}
          />
        </ModalHeader>
        <ModalBody>
          <FormGroup>
          <Card>
                <span>PROCESSOR: {data?.processor}</span>
                <span>
                  WORKING CONDITION:{' '}
                  {data?.processor_status == 0 ? 'Yes' : data?.processor_status == 1 ? 'No' : ''}
                </span>
              </Card>
              <Card>
                <span>RAM: {data?.ram} GB</span>
              </Card>
              <Card border>
                <span>STORAGE: {data?.storage}</span>
              </Card>
              <Card>
                <span>GRAPHICS: {data?.graphics == 0 ? 'Inbuilt' : data?.graphics == 1 ?  'Dedicated' : ''}</span>
                <span>GRAPHICS SIZE: {data?.graphics_size}</span>
              </Card>
              <Card>
                <span>DISPLAY: {data?.display_size}</span>
                <span>
                  WORKING CONDITION:{' '}
                  {data?.display == 0 ? 'Yes' : data?.display == 1 ? 'No' : ''}
                </span>
              </Card>
              <Card>
                <span>
                  KEY BOARD:
                  {data?.keyboard_type == 0
                    ? 'Ordinary'
                    : data?.keyboard_type == 1  ? 'Backlight' : ''}
                </span>
                <span>
                  WORKING CONDITION:{' '}
                  {data?.keyboard_working == 0 ? 'Yes' : data?.keyboard_working == 1 ? 'No': ''}
                </span>
              </Card>
              <Card>
                <span>
                  TOUCH PAD:
                  {data?.touchpad_type == 0 ? 'Single' : data?.touchpad_type == 1 ? 'Dual' : ''}
                </span>
                <span>
                  WORKING CONDITION:{' '}
                  {data?.touchpad_working == 0 ? 'Yes' :  data?.touchpad_working == 1 ? 'No' : ''}
                </span>
              </Card>
              <Card border>
              <span>WIFI: {data?.wifi == 0 ? 'Yes' : data?.wifi == 1 ? 'No' : ''}</span>
                <span>
                  WORKING CONDITION:{' '}
                  {data?.wifi_working == 0 ? 'Yes' : data?.wifi_working == 1 ? 'No' : ''}
                </span>
              </Card>
              <Card>
                <span>
                  SPEAKERS: {data?.speaker == 0 ? 'Yes' : data?.speaker == 1 ? 'No' : ''}
                </span>
                <span>
                  WORKING CONDITION:{' '}
                  {data?.speaker_working == 0 ? 'Yes' : data?.speaker_working == 1 ? 'No' : ''}
                </span>
              </Card>
              <Card>
              <span>WEBCAM: {data?.webcam == 0 ? 'Yes' : data?.webcam == 1 ? 'No' : ''}</span>
                <span>
                  WORKING CONDITION:{' '}
                  {data?.webcam_working == 0 ? 'Yes' : data?.webcam_working == 1 ? 'No' : ''}
                </span>
              </Card>
              <Card>
              <span>
                  USB/HDMI PORTS:{data?.usb_hdmi == 0 ? 'Yes' : data?.usb_hdmi == 1 ? 'No': ''}
                </span>
                <span>
                  WORKING CONDITION:{' '}
                  {data?.usb_hdmi_working == 0 ? 'Yes' : data?.usb_hdmi_working == 1 ? 'No' : ''}
                </span>
              </Card>
              <Card>
              <span>
                  BATTERY BACKUP:
                  {data?.battery_backup == 0
                    ? 'Below 30 mins'
                    : data?.battery_backup == 1 ? 'Above 1 Hour' : ''}
                </span>
              </Card>
              <Card>
              <span>
                  CHARGER+POWERCODE:
                  {data?.charger_powercode == 0 ? 'Yes' : data?.charger_powercode == 1 ? 'No' : ''}
                </span>
                <span>
                  WORKING CONDITION:{' '}
                  {data?.charger_powercode_working == 0 ? 'Yes' : data?.charger_powercode_working == 1 ?  'No' : ''}
                </span>
              </Card>
              <Card>
                <span>
                  CARRY CASE: {data?.carry_case == 0 ? 'Yes' : data?.carry_case == 1 ? 'No' : ''}
                </span>
              </Card>
              <Card>
                <span>
                  PHYSICAL CONDITION:{' '}
                  {data?.physical_condition == 0
                    ? 'Good'
                    : data?.physical_condition == 1
                    ? 'Fair'
                    : data?.physical_condition == 2 ?  'Excellent' : ''}
                </span>
              </Card>
              <Card>
                <span>
                  WORKING CONDITION:{' '}
                  {data?.working_condition == 0
                    ? 'Good'
                    : data?.working_condition == 1
                    ? 'Fair'
                    : data?.working_condition == 2 ?  'Excellent' : ''}
                </span>
              </Card>
              <Card>
                <span>PURCHASE YEAR: {data?.purchase_year}</span>
              </Card>
              <Card>
                {/* <span>
                  COMPLAINT: {data && JSON.parse(data?.complaint_id)[0]?.complaint}
                </span> */}
              </Card>
              <Card>
                <span>
                  REASON FOR EXCHANGE: {data?.reason_for_exchange_id}
                </span>
              </Card>
          </FormGroup>
          <FooterDiv>
          <CommentCard>
                <span>Comment: {data?.comment}</span>
              </CommentCard>
          </FooterDiv>
          <FooterDiv>
          <NameDiv>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span>Name: {data?.name}</span>
                  <span>Phone No: {data?.contact}</span>
                </div>
              </NameDiv>
          </FooterDiv>
        </ModalBody>
      </ModalContent>}

      {items?.product_category_name == 'Desktop' && 
      <ModalContent>
      <ModalHeader>
        <ModalTitle>Desktop</ModalTitle>
        <CloseIcon
          style={{ fontSize: "large", cursor: "pointer" }}
          opacity="0.5"
          onClick={setReportModal}
        />
      </ModalHeader>
      <ModalBody>
        <FormGroup>
        <Card border={data?.processor_status == 1 ? true : false}>
                <span>PROCESSOR: {data?.processor}</span>
                <span>
                  WORKING CONDITION:{' '}
                  {data?.processor_status == 0 ? 'Yes' : data?.processor_status == 1 ? 'No' : ''}
                </span>
              </Card>
              <Card>
                <span>RAM: {data?.ram} GB</span>
              </Card>
              <Card border>
                <span>STORAGE: {data?.storage}</span>
              </Card>
              <Card>
                <span>
                  GRAPHICS: {data?.graphics == 0 ? 'Inbuilt' : data?.graphics == 1 ? 'Dedicated' : ''}
                </span>
                <span>GRAPHICS SIZE: {data?.graphics_size}</span>
              </Card>
              <Card>
                <span>MONITOR BRAND: {data?.monitor_brand}</span>
              </Card>
              <Card>
                <span>MONITOR SIZE: {data?.monitor_size}</span>
              </Card>
              <Card>
                <span>
                  KEY BOARD WITH MOUSE:
                  {data?.keyboard_with_mouse == 0
                    ? 'Ordinary'
                    : data?.keyboard_with_mouse == 1 ? 'Backlight' : ''}
                </span>
                <span>
                  WORKING CONDITION:{' '}
                  {data?.keyboard_working == 0 ? 'Yes' : data?.keyboard_working == 1 ? 'No' : ''}
                </span>
              </Card>
              <Card>
                <span>WIFI: {data?.wifi == 0 ? 'Yes' : data?.wifi == 1 ? 'No' : ''}</span>
                <span>
                  WORKING CONDITION:{' '}
                  {data?.wifi_working == 0 ? 'Yes' : data?.wifi_working == 1 ? 'No' : ''}
                </span>
              </Card>
              <Card>
                <span>
                  SPEAKERS: {data?.speaker == 0 ? 'Yes' : data?.speaker == 1 ? 'No' : ''}
                </span>
                <span>
                  WORKING CONDITION:{' '}
                  {data?.speaker_working == 0 ? 'Yes' : data?.speaker_working == 1 ? 'No' : ''}
                </span>
              </Card>
              <Card border>
                <span>WEBCAM: {data?.webcam == 0 ? 'Yes' : data?.webcam == 1 ? 'No' : ''}</span>
                <span>
                  WORKING CONDITION:{' '}
                  {data?.webcam_working == 0 ? 'Yes' : data?.webcam_working == 1 ? 'No' : ''}
                </span>
              </Card>
              <Card>
                <span>
                  PHYSICAL CONDITION:{' '}
                  {data?.physical_condition == 0
                    ? 'Good'
                    : data?.physical_condition == 1
                    ? 'Fair'
                    : data?.physical_condition == 2 ? 'Excellent' : ''}
                </span>
              </Card>
              <Card>
                <span>
                  WORKING CONDITION:{' '}
                  {data?.working_condition == 0
                    ? 'Good'
                    : data?.working_condition == 1
                    ? 'Fair'
                    :data?.working_condition == 2 ? 'Excellent' : ''}
                </span>
                <span></span>
              </Card>
              <Card>
                <span>PURCHASE YEAR: {data?.purchase_year}</span>
              </Card>
          
          </FormGroup>
          <FooterDiv>
              <CommentCard>
                <span>Comment: {data?.comment}</span>
              </CommentCard>
            </FooterDiv>
            <FooterDiv>
              <NameDiv>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span>Name: {data?.name}</span>
                  <span>Phone No: {data?.contact}</span>
                </div>
              </NameDiv>
            </FooterDiv>
          </ModalBody>
          </ModalContent>
      }
      {items?.product_category_name == 'Battery' && 
        <ModalContent>
        <ModalHeader>
          <ModalTitle>Desktop</ModalTitle>
          <CloseIcon
            style={{ fontSize: "large", cursor: "pointer" }}
            opacity="0.5"
            onClick={setReportModal}
          />
        </ModalHeader>
        <ModalBody>
          <FormGroup>
          <Card border={data?.processor_status == 1 ? true : false}>
                <span>AMPHERE: {data?.amphere}</span>
              </Card>
              <Card>
                <span>MODEL: {data?.model}SMF</span>
              </Card>
              <Card border>
                <span>BRAND: {data?.brand}</span>
                {/* <span>
                  WORKING CONDITION:YES
                </span> */}
              </Card>
              <Card>
                <span>
                  PHYSICAL CONDITION:{' '}
                  {data?.physical_condition == 0
                    ? 'Good'
                    : data?.physical_condition == 1
                    ? 'Fair'
                    : data?.physical_condition == 2 ?  'Excellent' : ''}
                </span>
              </Card>
              <Card>
                <span>
                  WORKING CONDITION:{' '}
                  {data?.working_condition == 0
                    ? 'Good'
                    : data?.working_condition == 1
                    ? 'Fair'
                    : data?.working_condition == 2 ?  'Excellent' : ''}
                </span>
              </Card>
              <Card>
                <span>PURCHASE YEAR: {data?.purchase_year}</span>
              </Card>
              <Card>{/* <span>COMPLAINT: {data?.ram}</span> */}</Card>
              <Card>
                <span>
                  REASON FOR EXCHANGE: {data?.reason_for_exchange_id}
                </span>
              </Card>
            </FormGroup>
            <FooterDiv>
              <CommentCard>
                <span>Comment: {data?.comment}</span>
              </CommentCard>
            </FooterDiv>
            <FooterDiv>
              <NameDiv>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span>Name: {data?.name}</span>
                  <span>Phone No: {data?.contact}</span>
                </div>
              </NameDiv>
            </FooterDiv>
            </ModalBody>
            </ModalContent>
      }
      {items?.product_category_name == 'Mobiles' && 
         <ModalContent>
         <ModalHeader>
           <ModalTitle>Mobiles</ModalTitle>
           <CloseIcon
             style={{ fontSize: "large", cursor: "pointer" }}
             opacity="0.5"
             onClick={setReportModal}
           />
         </ModalHeader>
         <ModalBody>
           <FormGroup>
           <Card border={data?.processor_status == 1 ? true : false}>
                <span>PROCESSOR: {data?.processor}</span>
                <span>
                  WORKING CONDITION:{' '}
                  {data?.processor_status == 0 ? 'Yes' : data?.processor_status == 1 ? 'No' : ''}
                </span>
              </Card>
              <Card>
                <span>RAM: {data?.ram}</span>
              </Card>
              <Card border>
                <span>STORAGE: {data?.storage}</span>
              </Card>
              <Card border>
                <span>SCREEN SIZE: {data?.screen_size}</span>
              </Card>
              <Card border>
                <span>BRAND: {data?.brand}</span>
              </Card>
              <Card>
                <span>WIFI: {data?.wifi == 0 ? 'Yes' : data?.wifi == 1 ? 'No' : ''}</span>
                <span>
                  WORKING CONDITION:{' '}
                  {data?.wifi_working == 0 ? 'Yes' : data?.wifi_working == 1 ? 'No' : ''}
                </span>
              </Card>
              <Card>
                <span>
                  SPEAKERS: {data?.speaker == 0 ? 'Yes' : data?.speaker == 1 ?  'No' : ''}
                </span>
                <span>
                  WORKING CONDITION:{' '}
                  {data?.speaker_working == 0 ? 'Yes' : data?.speaker_working == 1 ? 'No' : ''}
                </span>
              </Card>
              <Card border>
                <span>CAMERA: {data?.camera == 0 ? 'Yes' : data?.camera == 1 ? 'No' : ''}</span>
                <span>
                  WORKING CONDITION:{' '}
                  {data?.camera_working == 0 ? 'Yes' : data?.camera_working == 1 ? 'No' : ''}
                </span>
              </Card>
              <Card>
                <span>
                  PHYSICAL CONDITION:{' '}
                  {data?.physical_condition == 0
                    ? 'Good'
                    : data?.physical_condition == 1
                    ? 'Fair'
                    : data?.physical_condition == 2 ? 'Excellent' : ''}
                </span>
              </Card>
              <Card>
                <span>
                  WORKING CONDITION:{' '}
                  {data?.working_condition == 0
                    ? 'Good'
                    : data?.working_condition == 1
                    ? 'Fair'
                    :  data?.working_condition == 2 ? 'Excellent' : ''}
                </span>
              </Card>
              <Card>
                <span>PURCHASE YEAR: {data?.purchase_year}</span>
              </Card>
              <Card>{/* <span>COMPLAINT: {data?.ram}</span> */}</Card>
              <Card>
              <span>
                  REASON FOR EXCHANGE: {data?.reason_for_exchange_id}
                </span>
              </Card>
            </FormGroup>
            <FooterDiv>
              <CommentCard>
                <span>Comment: {data?.comment}</span>
              </CommentCard>
            </FooterDiv>
            <FooterDiv>
              <NameDiv>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span>Name: {data?.name}</span>
                  <span>Phone No: {data?.contact}</span>
                </div>
              </NameDiv>
            </FooterDiv>
            </ModalBody>
            </ModalContent>
      }
      {items?.product_category_name == 'Monitors' && 
        <ModalContent>
        <ModalHeader>
          <ModalTitle>Monitors</ModalTitle>
          <CloseIcon
            style={{ fontSize: "large", cursor: "pointer" }}
            opacity="0.5"
            onClick={setReportModal}
          />
        </ModalHeader>
        <ModalBody>
          <FormGroup>
          <Card border={data?.processor_status == 1 ? true : false}>
                <span>SCREEN SIZE: {data?.screen_size}</span>
              </Card>
              <Card border>
                <span>BRAND: {data?.brand}</span>
              </Card>
              <Card>
                <span>
                  SPEAKERS: {data?.speaker == 0 ? 'Yes' : data?.speaker == 1 ? 'No'  : ''}
                </span>
                <span>
                  WORKING CONDITION:{' '}
                  {data?.speaker_working == 0 ? 'Yes' : data?.speaker_working == 1 ? 'No' : ''}
                </span>
              </Card>
              <Card border>
                <span>CAMERA: {data?.camera == 0 ? 'Yes' : data?.camera == 1 ? 'No' : ''}</span>
                <span>
                  WORKING CONDITION:{' '}
                  {data?.camera_working == 0 ? 'Yes' : 'No'}
                </span>
              </Card>
              <Card>
                <span>
                  PHYSICAL CONDITION:{' '}
                  {data?.physical_condition == 0
                    ? 'Good'
                    : data?.physical_condition == 1
                    ? 'Fair'
                    : data?.physical_condition == 2 ? 'Excellent' : ''}
                </span>
              </Card>
              <Card>
                <span>
                  WORKING CONDITION:{' '}
                  {data?.working_condition == 0
                    ? 'Good'
                    : data?.working_condition == 1
                    ? 'Fair'
                    : data?.working_condition == 2 ? 'Excellent' : ''}
                </span>
              </Card>
              <Card>
                <span>PURCHASE YEAR: {data?.purchase_year}</span>
              </Card>
              <Card>
                {/* <span>COMPLAINT: {data?.reason_for_exchange_id}</span> */}
              </Card>
              <Card>
                <span>
                  REASON FOR EXCHANGE: {data?.reason_for_exchange_id}
                </span>
              </Card>
            </FormGroup>
            <FooterDiv>
              <CommentCard>
                <span>Comment: {data?.comment}</span>
              </CommentCard>
            </FooterDiv>
            <FooterDiv>
              <NameDiv>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span>Name: {data?.name}</span>
                  <span>Phone No: {data?.contact}</span>
                </div>
              </NameDiv>
            </FooterDiv>
            </ModalBody>
            </ModalContent>

      }
      {items?.product_category_name == 'UPS/Inverter' &&
        <ModalContent>
        <ModalHeader>
          <ModalTitle>Monitors</ModalTitle>
          <CloseIcon
            style={{ fontSize: "large", cursor: "pointer" }}
            opacity="0.5"
            onClick={setReportModal}
          />
        </ModalHeader>
        <ModalBody>
          <FormGroup>
          <Card border={data?.processor_status == 1 ? true : false}>
                <span>LOAD CAPACITY: {data?.load_capacity}</span>
              </Card>
              <Card border>
                <span>BATTERY NUMBERS: {data?.battery_numbers}</span>
              </Card>
              <Card border>
                <span>
                  TYPE:{data?.type == 0 ? 'Online' : data?.type == 1 ? 'Offline' : ''}
                </span>
              </Card>
              <Card border>
                <span>
                  BATTERY BUILT:
                  {data?.battery_built == 0 ? 'Inbuilt' : data?.battery_built == 1 ? 'External' : ''}
                </span>
                <span>
                  WORKING CONDITION:{' '}
                  {data?.battery_built_working == 0 ? 'Yes' : data?.battery_built_working == 1 ? 'No' : ''}
                </span>
              </Card>
              <Card>
                <span>
                  PHYSICAL CONDITION:{' '}
                  {data?.physical_condition == 0
                    ? 'Good'
                    : data?.physical_condition == 1
                    ? 'Fair'
                    : data?.physical_condition == 2 ? 'Excellent' : ''}
                </span>
              </Card>
              <Card>
                <span>
                  WORKING CONDITION:{' '}
                  {data?.working_condition == 0
                    ? 'Good'
                    : data?.working_condition == 1
                    ? 'Fair'
                    : data?.working_condition == 2 ? 'Excellent' :''}
                </span>
              </Card>
              <Card>
                <span>PURCHASE YEAR: {data?.purchase_year}</span>
              </Card>
              <Card>
                {/* <span>COMPLAINT: {data?.battery_numbers}</span> */}
              </Card>
              <Card>
                <span>
                  REASON FOR EXCHANGE: {data?.reason_for_exchange_id}
                </span>
              </Card>
          </FormGroup>
          <FooterDiv>
              <CommentCard>
                <span>Comment: {data?.comment}</span>
              </CommentCard>
            </FooterDiv>
            <FooterDiv>
              <NameDiv>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span>Name: {data?.name}</span>
                  <span>Phone No: {data?.contact}</span>
                </div>
              </NameDiv>
            </FooterDiv>
          </ModalBody>
          </ModalContent>
      }
      
    </Modal>
  )
}

export default ReportModal