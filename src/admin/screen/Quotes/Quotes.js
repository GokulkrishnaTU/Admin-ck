import React, { useEffect, useState } from "react";
import {
  Container,
  MenuBar,
  MenuItems,
  MenuWrapperRight,
  TableContainer,
} from "../Exchange/Exchange.styled";
import { Button } from "../ProductCategory/ProductCategory.styled";
import {
  BtnDiv,
  EditorDiv,
  TermsDiv,
  Input,
  MidDiv,
  HeadingDiv,
} from "../TermsandConditions/TermsStyle";
import { DefaultEditor } from "react-simple-wysiwyg";
import { quotesInsert, quotesUpdate ,quotesGet } from "../../../api/api";
import axios from "axios";
import parse from "html-react-parser";

function Quotes() {
  const [html, setHtml] = useState();
  const [html1, setHtml1] = useState();

  console.log("html: ", html);

  const [data, setData] = useState([]);
  console.log("state: ", data);

  const [description, setDescription] = useState("");
  const [note, setNote] = useState("");

  const [value, setValue] = useState(true);

  const insertQuotes = () => {

    const list={
        home_notes: html,

        cart_notes: html1,
    }

    axios.post(quotesInsert, list).then((response) => {
      console.log("response: ", response);
    });
  };


 const updateQuotes = ()=>{
    const list1={
        id:data.id,
        cart_notes: note,
        home_notes: description,
    }

    axios.post(quotesUpdate,list1).then((response)=>{
      console.log("response updated :",response)
    });
  };

  const getQuotes = () => {
    axios.get(quotesGet).then((response) => {
      console.log(response);

      setData(response?.data[0]);

      setDescription(response.data[0].home_notes);
      setNote(response.data[0].cart_notes);

      console.log(
        "resp.data[0].description ;;;;;;;;;;;;;;;;;;;;;;;;;; ",
        response.data[0].home_notes
      );
    });
  };

  useEffect(() => {
    getQuotes();
  }, []);

  const valueChange = () => {
    setValue(!value);
  };

  return (
    <Container>
      <MenuBar>
        <p> Quotes</p>
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
                  <h3>Home notes</h3>

            <DefaultEditor
        

              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <MidDiv> </MidDiv>
            <h3>Cart notes</h3>

            <DefaultEditor
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
            <BtnDiv>
              <Button
                onClick={() => {
                    updateQuotes();
                  setValue(!value);
                }}
              >
                Submit
              </Button>
            </BtnDiv>
          </EditorDiv>
        )}

        {value ? (
          <div style={{ width: "100%" }}>
            <p></p>{" "}
            {data ? (
              <HeadingDiv>
                <div style={{paddingLeft:"100px"}}>
                  <h3>Home notes</h3>
                  <p>{parse(description)}</p>
                </div>

                <div style={{paddingLeft:"100px"}}>
                <h3>Cart notes</h3>

                  <p>{parse(note)}</p>
                </div>
              </HeadingDiv>
            ) : (
              <EditorDiv>
                                  <h3>Home notes</h3>

                <DefaultEditor
                
                  value={html}
                  onChange={(e) => setHtml(e.target.value)}
                />
            <MidDiv> </MidDiv>

            <h3>Cart notes</h3>

<DefaultEditor
                  value={html1}
                  onChange={(e) => setHtml1(e.target.value)}
                />
                <BtnDiv>
                  <Button onClick={() => insertQuotes()}>Add</Button>
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
}

export default Quotes;
