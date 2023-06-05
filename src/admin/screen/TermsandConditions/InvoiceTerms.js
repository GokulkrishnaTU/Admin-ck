import React, { useState } from "react";
import { DefaultEditor } from "react-simple-wysiwyg";
import {
  Container,
  MenuBar,
  MenuItems,
  MenuWrapperRight,
  TableContainer,
} from "../Exchange/Exchange.styled";
import { Button } from "../ProductCategory/ProductCategory.styled";
import { BtnDiv, EditorDiv, TermsDiv, Input } from "./TermsStyle";
import axios from "axios";
import { selectInvoice, insertApi, updateApi } from "../../../api/api";
import { useEffect } from "react";
import parse from "html-react-parser";

const InvoiceTerms = () => {
  const [data, setData] = useState([]);
  console.log("state: ", data);

  const [html, setHtml] = useState();
  console.log("html: ", html);

  const [value, setValue] = useState(true);
  const [display, setDisplay] = useState(true);

  const [description, setDescription] = useState("");
  // console.log('description: ', description);

  //   axios.get(selectInvoice).then((response) => {
  // console.log(response);
  //   })

  // async function ApiCall() {
  //   let details = await axios.get(selectInvoice);
  //   console.log("fourth Api", details);

  const valueChange = () => {
    setValue(!value);
  };

  const getInvoice = () => {
    console.log("hitt");
    axios.get(selectInvoice).then((resp) => {
      console.log(resp, "response");
      setData(resp?.data[0]);
      setDescription(resp.data[0].description);
      console.log("resp.data[0].description: ", resp.data[0].description);
    });
  };

  useEffect(() => {
    getInvoice();
  }, []);

  const insertInvoice = () => {
    axios.post(insertApi, { description: html }).then((response) => {
      console.log("response: ", response);
      console.log(response);
    });
  };

  const updateInvoice = () => {
    const data1 = {
      id:data.id,
      description: description,
    };
    axios.post(updateApi,data1).then((response) => {
      console.log("updateeeee", response);
    });
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
            <Button onClick={valueChange}>Update</Button>
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
              <Button onClick={() => {updateInvoice();setValue(!value)} }>Submit</Button>
            </BtnDiv>
          </EditorDiv>
        )}

        {value ? (
          <div style={{width:"100%"}} >
            <p></p>{" "}
            {data ? (
              <p  style={{paddingLeft:"50px"}} >{parse(description)}</p>
            ) : (
              <EditorDiv>
                <DefaultEditor
                  value={html}
                  onChange={(e) => setHtml(e.target.value)}
                />
                <BtnDiv>
                  <Button onClick={() => insertInvoice()}>Add</Button>
                </BtnDiv>
              </EditorDiv>
            )}
          </div>
        ) : (
          ""
        )}
      </TermsDiv>
    </Container>
  );
};

export default InvoiceTerms;