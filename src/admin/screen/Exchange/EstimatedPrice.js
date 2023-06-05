import React, { useState } from 'react'
import { ModalContent, Modal, ModalBody, ModalHeader, Button } from './ExchagePrice.styled'
import CloseIcon from "@mui/icons-material/Close";
import axios from 'axios';
import { server_api } from '../../const/api';
import { useLocation } from 'react-router-dom';

function EstimatedPrice({ setIsEstimatedPrice, text, items, getExchangeData }) {
  console.log('items: ', items);
  const location = useLocation()
  const [price, setPrice] = useState('')
  const estimatedPrice = () => {
    const data = {
      price_id: items?.price_id,
      estimated_price: price
    }
    console.log('data: ', data);
    setIsEstimatedPrice(false)
    axios.post(`${server_api}/api/insertestimate_price`, data).then(resp => {
      console.log('resp: ', resp);

    })
  }
  const insertFinalPrice = () => {
    setIsEstimatedPrice(false)
    axios.post(`${server_api}/api/insertfinal_price?price_id=${items?.price_id}&final_price=${price}`).then(resp => {
      console.log('resp: ', resp);
      getExchangeData()
      if(resp.data.code == 200){
        alert(resp.data.message)
        
      }else{
        alert(resp.data.message)
      }

    })
  }

  return (
    <Modal>
      <ModalContent>
        <ModalHeader>
          <CloseIcon
            style={{ fontSize: "large", cursor: "pointer" }}
            opacity="0.5"
            onClick={setIsEstimatedPrice}
          />
        </ModalHeader>
        <ModalBody>
          <input type="number" placeholder={text}  onChange={(e) => setPrice(e.target.value)}/>
          { location.pathname == "/inspection-report" ?  <Button onClick={() => insertFinalPrice()}>Submit</Button> : <Button onClick={() => estimatedPrice()}>Submit</Button>}
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default EstimatedPrice