import React, { useEffect, useState } from 'react';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalTitle,
  FormGroup,
  Card,
} from './DetailsStyled';
import { Button } from './ExchagePrice.styled';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import { server_api } from '../../const/api';
import { A } from './Exchange.styled';

function DetailsModal({ setViewDetails, details, getExchangeData }) {
  console.log('DDDDDDD', details);
  const [AllDetails, setAllDetails] = useState();
  console.log('AllDetails', AllDetails);
  const [comp, setComp] =useState('')
  const sendReq = () => {
    axios
      .get(
        `${server_api}/api/getviewdetails_pdt?product_cat_id=${details?.product_cat_id}&user_id=${details?.user_id}&exchange_id=${details?.exchangeform_id}`
      )
      .then((res) => {
        console.log('res=>', res);
        setAllDetails(res?.data[0]);
        setComp(JSON.parse(res.data[0].complaint_id)[0].complaint ? JSON.parse(res.data[0].complaint_id)[0].complaint : JSON.parse(res.data[0].complaint_id)[0].name)
      });
  };
  useEffect(() => {
    sendReq();
  }, []);

  return (
    <Modal>
      {details.product_category_name == 'Laptop' && (
        <ModalContent>
          <ModalHeader>
            <ModalTitle>LAPTOP</ModalTitle>
            <CloseIcon
              style={{ fontSize: 'large', cursor: 'pointer' }}
              opacity='0.5'
              onClick={setViewDetails}
            />
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <Card border={AllDetails?.processor_status == 1 ? true : false}>
                <span>PROCESSOR: {AllDetails?.processor}</span>
                <span>
                  WORKING CONDITION:{' '}
                  {AllDetails?.processor_status == 0 ? 'Yes' : AllDetails?.processor_status == 1 ? 'No' : ''}
                </span>
              </Card>
              <Card>
                <span>RAM: {AllDetails?.ram} GB</span>
              </Card>
              <Card >
                <span>STORAGE: {AllDetails?.storage}</span>
              </Card>
              <Card >
                <span>
                  GRAPHICS:
                  {AllDetails?.graphics == 0 ? 'Inbuilt' : AllDetails?.graphics == 1 ?  'Dedicated' : ''}
                </span>
                <span> GRAPHICS SIZE:{AllDetails?.graphics_size}</span>
              </Card>
              <Card border={AllDetails?.display == 1 ? true : false}>
                <span>DISPLAY: {AllDetails?.display_size}</span>
                <span>
                  WORKING CONDITION: {AllDetails?.display == 0 ? 'Yes' : AllDetails?.display == 1 ? 'No' : ''}
                </span>
              </Card>
              <Card border={AllDetails?.keyboard_working == 1 ? true : false}>
                <span>
                  KEY BOARD:
                  {AllDetails?.keyboard_type == 0
                    ? 'Ordinary'
                    : 'Backlight'}{' '}
                </span>
                <span>
                  WORKING CONDITION:{' '}
                  {AllDetails?.keyboard_working == 0 ? 'Yes' : AllDetails?.keyboard_working == 1 ? 'No' : ''}
                </span>
              </Card>
              <Card border={AllDetails?.touchpad_working == 1 ? true : false}>
                <span>
                  TOUCH PAD:{' '}
                  {AllDetails?.touchpad_type == 0 ? 'Single' : AllDetails?.touchpad_type == 1 ? 'Dual' : ''}
                </span>
                <span>
                  WORKING CONDITION:{' '}
                  {AllDetails?.touchpad_working == 0 ? 'Yes' : AllDetails?.touchpad_working == 1 ? 'No' : ''}
                </span>
              </Card>
              <Card border={AllDetails?.wifi_working == 1 ? true : false}>
                <span>WIFI: {AllDetails?.wifi == 0 ? 'Yes' : AllDetails?.wifi == 1 ? 'No' : ''}</span>
                <span>
                  WORKING CONDITION:{' '}
                  {AllDetails?.wifi_working == 0 ? 'Yes' : AllDetails?.wifi_working == 1 ?  'No' : ''}
                </span>
              </Card>
              <Card border={AllDetails?.speaker_working == 1 ? true : false}>
                <span>
                  SPEAKERS: {AllDetails?.speaker == 0 ? 'Yes' : AllDetails?.speaker == 1 ? 'No' : ''}
                </span>
                <span>
                  WORKING CONDITION:{' '}
                  {AllDetails?.speaker_working == 0 ? 'Yes' : AllDetails?.speaker_working == 1 ? 'No' : ''}
                </span>
              </Card>
              <Card border={AllDetails?.webcam_working == 1 ? true : false}>
                <span>WEBCAM: {AllDetails?.webcam == 0 ? 'Yes' : AllDetails?.webcam == 1 ? 'No' : ''}</span>
                <span>
                  WORKING CONDITION:{' '}
                  {AllDetails?.webcam_working == 0 ? 'Yes' : AllDetails?.webcam_working == 1 ? 'No' : ''}
                </span>
              </Card>
              <Card border={AllDetails?.usb_hdmi_working == 1 ? true : false}>
                <span>
                  USB/HDMI PORTS: {AllDetails?.usb_hdmi == 0 ? 'Yes' : AllDetails?.usb_hdmi == 1 ? 'No' : ''}
                </span>
                <span>
                  WORKING CONDITION:{' '}
                  {AllDetails?.usb_hdmi_working == 0 ? 'Yes' : AllDetails?.usb_hdmi_working == 1 ? 'No' : ''}
                </span>
              </Card>
              <Card>
                <span>
                  BATTERY BACKUP:{' '}
                  {AllDetails?.battery_backup == 0
                    ? 'Below 30 mins'
                    : AllDetails?.battery_backup == 1 ? 'Above 1 Hour' : ''}
                </span>
              </Card>
              <Card border={AllDetails?.charger_powercode_working == 1 ? true : false}>
                <span>
                  CHARGER+POWERCODE:
                  {AllDetails?.charger_powercode == 0 ? 'Yes' : AllDetails?.charger_powercode == 1 ? 'No' : ''}
                </span>
                <span>
                  WORKING CONDITION:{' '}
                  {AllDetails?.charger_powercode_working == 0 ? 'Yes' : AllDetails?.charger_powercode_working == 1 ?  'No' : ''}
                </span>
              </Card>
              <Card>
                <span>
                  CARRY CASE: {AllDetails?.carry_case == 0 ? 'Yes' : AllDetails?.carry_case == 1 ?  'No' : ''}
                </span>
              </Card>
              <Card>
                <span>
                  PHYSICAL CONDITION:
                  {AllDetails?.physical_condition == 0
                    ? 'Good'
                    : AllDetails?.physical_condition == 1
                    ? 'Fair'
                    : AllDetails?.physical_condition == 2 ? 'Excellent' : ''}
                </span>
              </Card>
              <Card>
                <span>
                  WORKING CONDITION:
                  {AllDetails?.working_condition == 0
                    ? 'Good'
                    : AllDetails?.working_condition == 1
                    ? 'Fair'
                    : AllDetails?.working_condition == 2 ? 'Excellent' : ''}
                </span>
              </Card>
              <Card>
                <span>PURCHASE YEAR: {AllDetails?.purchase_year}</span>
              </Card>
              <Card>
                <span>
                  COMPLAINT: {comp}
                </span>
              </Card>
              <Card>
                <span>
                  REASON FOR EXCHANGE: {AllDetails?.reason_for_exchange_id}
                </span>
              </Card>
            </FormGroup>
          </ModalBody>
        </ModalContent>
      )}

      {details.product_category_name == 'Desktop' && (
        <ModalContent>
          <ModalHeader>
            <ModalTitle>DESKTOPS</ModalTitle>
            <CloseIcon
              style={{ fontSize: 'large', cursor: 'pointer' }}
              opacity='0.5'
              onClick={setViewDetails}
            />
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <Card border={AllDetails?.processor_status == 1 ? true : false}>
                <span>PROCESSOR: {AllDetails?.processor}</span>
                <span>
                  WORKING CONDITION:{' '}
                  {AllDetails?.processor_status == 0 ? 'Yes' : AllDetails?.processor_status == 1 ? 'No' : ''}
                </span>
              </Card>
              <Card>
                <span>RAM: {AllDetails?.ram} GB</span>
              </Card>
              <Card >
                <span>STORAGE: {AllDetails?.storage}</span>
              </Card>
              <Card>
                <span>
                  GRAPHICS: {AllDetails?.graphics == 0 ? 'Inbuilt' : AllDetails?.graphics == 1 ? 'Dedicated' : ''}
                </span>
                <span>{AllDetails?.graphics_size}</span>
              </Card>
              <Card>
                <span>MONITOR BRAND: {AllDetails?.monitor_brand}</span>
              </Card>
              <Card>
                <span>MONITOR SIZE: {AllDetails?.monitor_size}</span>
              </Card>
              <Card border={AllDetails?.keyboard_working == 1 ? true : false}>
                <span>
                  KEY BOARD WITH MOUSE:
                  {AllDetails?.keyboard_with_mouse == 0
                    ? 'Ordinary'
                    : 'Backlight'}
                </span>
                <span>
                  WORKING CONDITION:{' '}
                  {AllDetails?.keyboard_working == 0 ? 'Yes' : AllDetails?.keyboard_working == 1 ? 'No': ''}
                </span>
              </Card>
              <Card border={AllDetails?.wifi_working == 1 ? true : false}>
                <span>WIFI: {AllDetails?.wifi == 0 ? 'Yes' : AllDetails?.wifi == 1 ? 'No' : ''}</span>
                <span>
                  WORKING CONDITION:{' '}
                  {AllDetails?.wifi_working == 0 ? 'Yes' : AllDetails?.wifi_working == 1 ? 'No' : ''}
                </span>
              </Card>
              <Card border={AllDetails?.speaker_working == 1 ? true : false}>
                <span>
                  SPEAKERS: {AllDetails?.speaker == 0 ? 'Yes' : AllDetails?.speaker == 1 ? 'No' : ''}
                </span>
                <span>
                  WORKING CONDITION:{' '}
                  {AllDetails?.speaker_working == 0 ? 'Yes' : AllDetails?.speaker_working == 1 ? 'No' : ''}
                </span>
              </Card>
              <Card border={AllDetails?.webcam_working == 1 ? true : false}>
                <span>WEBCAM: {AllDetails?.webcam == 0 ? 'Yes' : AllDetails?.webcam == 1 ? 'No' : ''}</span>
                <span>
                  WORKING CONDITION:{' '}
                  {AllDetails?.webcam_working == 0 ? 'Yes' : AllDetails?.webcam_working == 1 ? 'No' : ''}
                </span>
              </Card>
              <Card>
                <span>
                  PHYSICAL CONDITION:{' '}
                  {AllDetails?.physical_condition == 0
                    ? 'Good'
                    : AllDetails?.physical_condition == 1
                    ? 'Fair'
                    : AllDetails?.physical_condition == 2 ? 'Excellent' : ''}
                </span>
              </Card>
              <Card>
                <span>
                  WORKING CONDITION:{' '}
                  {AllDetails?.working_condition == 0
                    ? 'Good'
                    : AllDetails?.working_condition == 1
                    ? 'Fair'
                    : AllDetails?.working_condition == 2 ? 'Excellent' : ''}
                </span>
                <span></span>
              </Card>
              <Card>
                <span>PURCHASE YEAR: {AllDetails?.purchase_year}</span>
              </Card>
            </FormGroup>
          </ModalBody>
        </ModalContent>
      )}

      {details.product_category_name == 'Battery' && (
        <ModalContent>
          <ModalHeader>
            <ModalTitle>BATTERY</ModalTitle>
            <CloseIcon
              style={{ fontSize: 'large', cursor: 'pointer' }}
              opacity='0.5'
              onClick={setViewDetails}
            />
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <Card border={AllDetails?.processor_status == 1 ? true : false}>
                <span>AMPHERE: {AllDetails?.amphere}</span>
              </Card>
              <Card>
                <span>MODEL: {AllDetails?.model}SMF</span>
              </Card>
              <Card>
                <span>BRAND: {AllDetails?.brand}</span>
                {/* <span>
                  WORKING CONDITION:YES
                </span> */}
              </Card>
              <Card>
                <span>
                  PHYSICAL CONDITION:{' '}
                  {AllDetails?.physical_condition == 0
                    ? 'Good'
                    : AllDetails?.physical_condition == 1
                    ? 'Fair'
                    : AllDetails?.physical_condition == 2 ? 'Excellent' : ''}
                </span>
              </Card>
              <Card>
                <span>
                  WORKING CONDITION:{' '}
                  {AllDetails?.working_condition == 0
                    ? 'Good'
                    : AllDetails?.working_condition == 1
                    ? 'Fair'
                    : AllDetails?.working_condition == 2 ? 'Excellent' : ''}
                </span>
              </Card>
              <Card>
                <span>PURCHASE YEAR: {AllDetails?.purchase_year}</span>
              </Card>
              <Card><span>COMPLAINT: {AllDetails && JSON.parse(AllDetails?.complaint_id)[0]?.complaint}</span></Card>
              <Card>
                <span>
                  REASON FOR EXCHANGE: {AllDetails?.reason_for_exchange_id}
                </span>
              </Card>
            </FormGroup>
          </ModalBody>
        </ModalContent>
      )}

      {details.product_category_name == 'Mobiles' && (
        <ModalContent>
          <ModalHeader>
            <ModalTitle>MOBILES</ModalTitle>
            <CloseIcon
              style={{ fontSize: 'large', cursor: 'pointer' }}
              opacity='0.5'
              onClick={setViewDetails}
            />
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <Card border={AllDetails?.processor_status == 1 ? true : false}>
                <span>PROCESSOR: {AllDetails?.processor}</span>
                <span>
                  WORKING CONDITION:{' '}
                  {AllDetails?.processor_status == 0 ? 'Yes' : AllDetails?.processor_status == 1 ?  'No' : ''}
                </span>
              </Card>
              <Card>
                <span>RAM: {AllDetails?.ram}</span>
              </Card>
              <Card >
                <span>STORAGE: {AllDetails?.storage}</span>
              </Card>
              <Card >
                <span>SCREEN SIZE: {AllDetails?.screen_size}</span>
              </Card>
              <Card >
                <span>BRAND: {AllDetails?.brand}</span>
              </Card>
              <Card border={AllDetails?.wifi_working == 1 ? true : false}>
                <span>WIFI: {AllDetails?.wifi == 0 ? 'Yes' : AllDetails?.wifi == 1 ? 'No' : ''}</span>
                <span>
                  WORKING CONDITION:{' '}
                  {AllDetails?.wifi_working == 0 ? 'Yes' : AllDetails?.wifi_working == 1 ? 'No' : ''}
                </span>
              </Card>
              <Card border={AllDetails?.speaker_working == 1 ? true : false}>
                <span>
                  SPEAKERS: {AllDetails?.speaker == 0 ? 'Yes' : AllDetails?.speaker == 1 ? 'No' : ''}
                </span>
                <span>
                  WORKING CONDITION:{' '}
                  {AllDetails?.speaker_working == 0 ? 'Yes' : AllDetails?.speaker_working == 1 ? 'No' : ''}
                </span>
              </Card>
              <Card border={AllDetails?.camera_working == 1 ? true : false}>
                <span>CAMERA: {AllDetails?.camera == 0 ? 'Yes' : AllDetails?.camera == 1 ? 'No' : ''}</span>
                <span>
                  WORKING CONDITION:{' '}
                  {AllDetails?.camera_working == 0 ? 'Yes' : AllDetails?.camera_working == 1 ? 'No' : ''}
                </span>
              </Card>
              <Card>
                <span>
                  PHYSICAL CONDITION:
                  {AllDetails?.physical_condition == 0
                    ? 'Good'
                    : AllDetails?.physical_condition == 1
                    ? 'Fair'
                    :  AllDetails?.physical_condition == 2 ? 'Excellent': ''}
                </span>
              </Card>
              <Card>
                <span>
                  WORKING CONDITION:
                  {AllDetails?.working_condition == 0
                    ? 'Good'
                    : AllDetails?.working_condition == 1
                    ? 'Fair'
                    :   AllDetails?.working_condition == 2 ? 'Excellent': ''}
                </span>
              </Card>
              <Card>
                <span>PURCHASE YEAR: {AllDetails?.purchase_year}</span>
              </Card>
              <Card><span>COMPLAINT: {AllDetails && JSON.parse(AllDetails?.complaint_id)[0]?.complaint}</span></Card>
              <Card>
                <span>
                  REASON FOR EXCHANGE: {AllDetails?.reason_for_exchange_id}
                </span>
              </Card>
            </FormGroup>
          </ModalBody>
        </ModalContent>
      )}

      {details.product_category_name == 'Monitors' && (
        <ModalContent>
          <ModalHeader>
            <ModalTitle>MONITORS</ModalTitle>
            <CloseIcon
              style={{ fontSize: 'large', cursor: 'pointer' }}
              opacity='0.5'
              onClick={setViewDetails}
            />
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <Card border={AllDetails?.processor_status == 1 ? true : false}>
                <span>SCREEN SIZE: {AllDetails?.screen_size}</span>
              </Card>
              <Card >
                <span>BRAND: {AllDetails?.brand}</span>
              </Card>
              <Card border={AllDetails?.speaker_working == 1 ? true : false}>
                <span>
                  SPEAKERS: {AllDetails?.speaker == 0 ? 'Yes' : AllDetails?.speaker == 1 ? 'No' : ''}
                </span>
                <span>
                  WORKING CONDITION:{' '}
                  {AllDetails?.speaker_working == 0 ? 'Yes' :  AllDetails?.speaker_working == 1 ? 'No': ''}
                </span>
              </Card>
              <Card border={AllDetails?.camera_working == 1 ? true : false}>
                <span>CAMERA: {AllDetails?.camera == 0 ? 'Yes' : AllDetails?.camera == 1 ? 'No' : ''}</span>
                <span>
                  WORKING CONDITION:{' '}
                  {AllDetails?.camera_working == 0 ? 'Yes' : AllDetails?.camera_working == 1 ? 'No' : ''}
                </span>
              </Card>
              <Card>
                <span>
                  PHYSICAL CONDITION:
                  {AllDetails?.physical_condition == 0
                    ? 'Good'
                    : AllDetails?.physical_condition == 1
                    ? 'Fair'
                    : AllDetails?.physical_condition == 2 ? 'Excellent' : ''}
                </span>
              </Card>
              <Card>
                <span>
                  WORKING CONDITION:
                  {AllDetails?.working_condition == 0
                    ? 'Good'
                    : AllDetails?.working_condition == 1
                    ? 'Fair'
                    : AllDetails?.working_condition == 2 ? 'Excellent' : ''}
                </span>
              </Card>
              <Card>
                <span>PURCHASE YEAR: {AllDetails?.purchase_year}</span>
              </Card>
              <Card>
                <span>COMPLAINT: {AllDetails && JSON.parse(AllDetails?.complaint_id)[0]?.complaint}</span>
              </Card>
              <Card>
                <span>
                  REASON FOR EXCHANGE: {AllDetails?.reason_for_exchange_id}
                </span>
              </Card>
            </FormGroup>
          </ModalBody>
        </ModalContent>
      )}

      {details.product_category_name == 'UPS/Inverter' && (
        <ModalContent>
          <ModalHeader>
            <ModalTitle>UPS</ModalTitle>
            <CloseIcon
              style={{ fontSize: 'large', cursor: 'pointer' }}
              opacity='0.5'
              onClick={setViewDetails}
            />
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <Card border={AllDetails?.processor_status == 1 ? true : false}>
                <span>LOAD CAPACITY: {AllDetails?.load_capacity}</span>
              </Card>
              <Card >
                <span>BATTERY NUMBERS: {AllDetails?.battery_numbers}</span>
              </Card>
              <Card >
                <span>
                  TYPE:{AllDetails?.type == 0 ? 'Online' : AllDetails?.type == 1 ? 'Offline' : ''}
                </span>
              </Card>
              <Card border={AllDetails?.battery_built_working == 1 ? true : false}>
                <span>
                  BATTERY BUILT:
                  {AllDetails?.battery_built == 0 ? 'Inbuilt' : AllDetails?.battery_built == 1 ? 'External' : ''}
                </span>
                <span>
                  WORKING CONDITION:{' '}
                  {AllDetails?.battery_built_working == 0 ? 'Yes' : AllDetails?.battery_built_working == 1 ? 'No' : ''}
                </span>
              </Card>
              <Card>
                <span>
                  PHYSICAL CONDITION:
                  {AllDetails?.physical_condition == 0
                    ? 'Good'
                    : AllDetails?.physical_condition == 1
                    ? 'Fair'
                    : AllDetails?.physical_condition == 2 ? 'Excellent' :''}
                </span>
              </Card>
              <Card>
                <span>
                  WORKING CONDITION:
                  {AllDetails?.working_condition == 0
                    ? 'Good'
                    : AllDetails?.working_condition == 1
                    ? 'Fair'
                    : AllDetails?.working_condition == 2 ? 'Excellent' :''}
                </span>
              </Card>
              <Card>
                <span>PURCHASE YEAR: {AllDetails?.purchase_year}</span>
              </Card>
              <Card>
                <span>COMPLAINT: {AllDetails && JSON.parse(AllDetails?.complaint_id)[0]?.complaint}</span>
              </Card>
              <Card>
                <span>
                  REASON FOR EXCHANGE: {AllDetails?.reason_for_exchange_id}
                </span>
              </Card>
            </FormGroup>
          </ModalBody>
        </ModalContent>
      )}
    </Modal>
  );
}

export default DetailsModal;