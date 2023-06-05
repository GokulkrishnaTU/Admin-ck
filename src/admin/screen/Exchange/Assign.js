import React, { useEffect, useState } from 'react'
import { Button, Modal, ModalBody, ModalContent, ModalHeader } from './ExchagePrice.styled'
import CloseIcon from "@mui/icons-material/Close";
import axios from 'axios';
import { server_api } from '../../const/api';

function Assign({ setAssign, items, getExchangeData }) {
  const [partners, setPartners] =useState([])
  console.log('partners: ', partners);
  const [service, setService] = useState('')
  const[freelancer, setFreelancer] = useState([])
  console.log('freelancer: ', freelancer);
  const[partner, setPartner] = useState([])
  // console.log('parnter: ', parnter);
  
  const getServicePartners = () => {
    axios.get(`${server_api}/api/getServicePartner`).then(resp => {
      setPartners(resp.data)
    })
  }
  const [data, setData] =useState({
    service_partner_id: '',
    freelancer:'',
    exchange_id: items?.exchangeform_id
  })
  console.log('data: ', data);
  const assignServicePartner = () => {
    setAssign(false)
    axios.post(`${server_api}/api/assign_servicepartner`, data).then(resp => {
      console.log('resp: ', resp);
      getExchangeData()
      if(resp.data.code == 200){
        alert('Service Partner assigned')
      }else{
        alert('something went wrong')
      }

    })
  }
  const getPartners = () => {
    axios.get(`${server_api}/api/getServicePartner`).then(resp => {
      console.log('resp: ', resp);
      const partners = resp?.data?.filter(i => i?.freelancer == 0)
      const freelancers = resp?.data?.filter(i => i?.freelancer == 1)

      setPartner(partners)
      setFreelancer(freelancers)

    })
  }

  useEffect(() => {
    getServicePartners()
    getPartners()
  },[])
  return (
    <Modal>
      <ModalContent>
        <ModalHeader>
          <CloseIcon
            style={{ fontSize: "large", cursor: "pointer" }}
            opacity="0.5"
            onClick={setAssign}
          />
        </ModalHeader>
        <ModalBody>
          <div style={{display: 'flex', flexDirection: 'column', alignItems:'center' , width: '100%'}}> 
          <label style={{padding: '10px 0'}}>Select freelancer or service partner</label>
          <select name='freelancer' style={{width: '60%'}} onChange ={(e) => setService(e.target.value)}>
            <option value=''>select</option>
            <option value='service-partner'>Service Partner</option>
            <option value='freelancer'>Freelancer</option>
          </select>
          </div>
          <label >Assign </label>
          <select name="servicePartner" id="servicePartner" onChange={(e) => { setData({...data, service_partner_id: e.target.value.split(" ")[0], freelancer:  e.target.value.split(" ")[1] }) }}>
            <option value="select" >Select</option>

            {service == 'service-partner' ? partner?.filter(i => i?.district == items?.district).map(item => {
                return(
                  <option value={`${item?.id} ${item?.freelancer}`}>{item?.name}</option>
                  )
            }) : freelancer?.filter(i => i?.district == items?.district).map( item => {
              return(
                <option value={`${item?.id} ${item?.freelancer}`}>{item?.name}</option>
              )

            })
            //   }) : freelancer?.map(item => {
            // })
            }
{/*             
            {partners?.map((i, index) => {
              return(
                
                )

            })} */}
          
          </select>
          <Button onClick={() => assignServicePartner()}>Submit</Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default Assign