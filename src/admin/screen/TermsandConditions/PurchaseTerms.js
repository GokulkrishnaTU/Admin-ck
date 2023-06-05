import React, { useEffect, useState } from 'react'
import { DefaultEditor } from 'react-simple-wysiwyg';
import { Container, MenuBar, MenuItems, MenuWrapperRight, TableContainer } from '../Exchange/Exchange.styled'
import { Button } from '../ProductCategory/ProductCategory.styled'
import { BtnDiv, EditorDiv, TermsDiv } from './TermsStyle';
import axios from 'axios';
import { purchaseInsert,selectPurchase,PurchaseUpdate } from "../../../api/api";
import parse from "html-react-parser";



const PurchaseTerms = () => {
    const [html, setHtml] = useState();
    console.log('html: ', html);

    const [data, setData] = useState([]);
  console.log("state: ", data);

  const [description, setDescription] = useState("");
  const [value, setValue] = useState(true);



    const insertPurchase = () => {
      axios.post(purchaseInsert, { desciption: html}).then((response)=>{
        console.log(response);


      })
      .catch(error => {
        console.log(error);
      });
    }


    
    const getPurchase = () => {
      console.log("hitt");
      axios.get(selectPurchase).then((resp) => {
        console.log(resp, "response");
              setData(resp?.data[0]);
              console.log('resp?.data[0]: ', resp?.data[0]);
              // console.log('demo testttttttttttttttttttttttttttttttttt: ', resp);

              setDescription(resp.data[0].description);
              console.log("resp.data[0].description: ", resp.data[0].description);
            });


    
    };

    const updatePurchase = ()=>{
      const list={
        id:data.id,
        description: description,
      }

      axios.post(PurchaseUpdate,list).then((response)=>{
        console.log("response updated :",response)
      });
    };

    useEffect(()=>{
      getPurchase()
    },[]);

    const valueChange = () => {
      setValue(!value);
    };
  

    




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
          <Button  onClick={valueChange} >Update</Button>
        </div>
        <MenuWrapperRight></MenuWrapperRight>
      </MenuItems>
    </MenuBar>

    <TermsDiv>
            
    {value ? (
          ""
        ) : (
          <EditorDiv>
            <DefaultEditor
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <BtnDiv>
              <Button onClick={() => {updatePurchase();setValue(!value)} }>Submit</Button>
            </BtnDiv>
          </EditorDiv>
        )}








{value ? (
          <div style={{width:"100%"}} >
            <p></p>{" "}
            {data ? (
              <p style={{paddingLeft:"50px"}} >{parse(description) }</p>
            ) : (
              <EditorDiv>
                <DefaultEditor
                  value={html}
                  onChange={(e) => setHtml(e.target.value)}
                />
                <BtnDiv>
                  <Button onClick={() => insertPurchase()}>Add</Button>
                </BtnDiv>
              </EditorDiv>
            )}
          </div>
        ) : (
          ""
        )}
                
              </TermsDiv>

  </Container>
  )
}

export default PurchaseTerms
