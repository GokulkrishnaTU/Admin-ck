import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { DefaultEditor } from 'react-simple-wysiwyg';
import { server_api } from '../../const/api';
import { Container, MenuBar, MenuItems, MenuWrapperRight, TableContainer } from '../Exchange/Exchange.styled'
import { Button } from '../ProductCategory/ProductCategory.styled'
import { BtnDiv, EditorDiv, TermsDiv } from './TermsStyle';
import parse from 'html-react-parser'



const DeliveryTerms = () => {
  const [html, setHtml] = useState();
  console.log('html: ', html);
  const [description, setDescription] = useState();
  const [loader, setLoader] = useState(false)
  const [update, setUpdate] = useState(false)

  const addDescription = () => {
    axios.post(`${server_api}/api/insertdelivery_terms`, {
      description: html
    }).then((res => {
      console.log(res.data);
      if (res.data.code === 200) {
        alert(res?.data.message)
      } else {
        alert(res?.data.message)
      }
    })).catch((err) => alert(err?.message))
  }

 const updateButton=()=>{
    setUpdate(!update)
  }

  const updateDescription=()=>{
    axios.post(`${server_api}/api/update_deliveryterms`,{
      id:description?.id,
      description:description?.description
    }).then((res)=>{
      if(res.data.code===200){
        setUpdate(!update)
        alert(res.data.message)
      }else{
        alert(res.data.message)
      }
    })
  }

  useEffect(() => {
    axios.get(`${server_api}/api/selectdelivery_terms`).then((res) => {
      setLoader(true)
      console.log('res: ', res.data);
      setDescription(res?.data[0])
    })
  }, [])

  return (
    <Container>
      <MenuBar>
        <p> Delivery terms and conditions</p>
        <MenuItems>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "30px",
            }}
          >
            {/* <Button>Add terms and conditions</Button> */}
          </div>
          <MenuWrapperRight></MenuWrapperRight>
          <Button onClick={updateButton}>
            Update
          </Button>
        </MenuItems>
      </MenuBar>

      {
        loader ? ( update ?  <TermsDiv>
          <EditorDiv>
            <DefaultEditor value={description?.description} onChange={(e) => setDescription({...description,description:e.target.value})} />
            <BtnDiv>
              <Button onClick={updateDescription}>
                Submit
              </Button>
            </BtnDiv>
          </EditorDiv>
          </TermsDiv> : description ? <p style={{marginLeft: '50px'}}>{parse(description?.description)}</p> : <TermsDiv>
          <EditorDiv>
            <DefaultEditor value={html} onChange={(e) => setHtml(e.target.value)} />
            <BtnDiv>
              <Button onClick={addDescription}>
                Add
              </Button>
            </BtnDiv>
          </EditorDiv>

        </TermsDiv>) : <div style={{ display: 'flex', justifyContent: 'center' }}>
          <lottie-player
            src='https://assets4.lottiefiles.com/packages/lf20_vf08px4p.json'
            background='transparent'
            speed='.5'
            style={{ width: '100px', height: '100px' }}
            loop
            autoplay
          ></lottie-player>
        </div>

      }

    </Container>
  )
}

export default DeliveryTerms