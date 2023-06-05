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
  FormDivision,
  FormDivision1,
} from "./SendQuotation.styled";
import axios from "axios";
import Select from "react-select";
import { server_api } from "../../const/api";
import AddIcon from "@mui/icons-material/Add";
import { TrashIcons } from "../../assets/icons";
import DeleteIcon from "@mui/icons-material/Delete";

const customStyles = {
  control: (base) => ({
    ...base,
    height: 35,
    minHeight: 35,
    width: "100%",
    fontSize: "small",
  }),
};

function SendQuotation(props) {
  const { id, ticket_no, product_details, qnty, brand } = props.details;
  const [inputs, setInputs] = useState("");
  const [productData, setProductData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [list, setList] = useState([
    {
      product_id: "",
      qnty: "",
    },
  ]);
  console.log("Entered Values=>", list);
  const [productArray, setProductArray] = useState({
    product_id: "",
    qnty: "",
  });

  const getProductData = async () => {
    const res = await axios
      .get(`${server_api}/api/getProductList`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    getProductData().then((data) => {
      console.log("category=>", data);
      // let listArray = [];
      // for (let i = 0; i < data.length; i++) {
      //   listArray.push({ value: data[i].id, label: data[i].title });
      // }
      setProductData(data);
    });
  }, []);

  if (!props.isOpen) {
    return null;
  }
  const sendRequest = async () => {
    const formData = new FormData();
    formData.append("ticket_no", ticket_no);
    formData.append("quot_no", id);
    formData.append("item_details", JSON.stringify(list));
    formData.append("terms_conditions", inputs.terms_condition);
    formData.append("prepared_by", JSON.stringify({ name: inputs.name, phone: inputs.phone }));
    formData.append("customer_approval", "");
    // formData.append("brand_name", name);
    let res = await axios
      .post(`${server_api}/api/createQuot`, formData)
      .catch((err) => console.log(err));
    const data = res.data;
    return data;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then((data) => {
      console.log("res=>", data);
      if (data.code == 200) {
        props.onClose();
        props.getPurchaseReq();
      } else {
        alert(data.message);
      }
    });
  };
  const handleAdd = (e) => {
    let listArray = [...list];
    listArray.push({
      product_id: "",
      qnty: "",
    });
    setList(listArray);
  };
  const handleDelete = () => {
    let listArray = [...list];
    if (listArray.length > 1) {
      listArray.splice(0, 1);
      setList(listArray);
    }
  };
  const handleChange = (e, key, value) => {
    console.log("Change=>", e.target.value);
    let listArray = [...list];
    listArray[key][value] = e.target.value;
    setList(listArray);
  };
  return (
    <Modal>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Send Quotation</ModalTitle>
          <CloseIcon
            style={{ fontSize: "small", cursor: "pointer" }}
            opacity="0.5"
            onClick={props.onClose}
          />
        </ModalHeader>
        <ModalBody>
          <ModalForm>
            <FormGroup
              style={{
                border: "1px solid rgba(0, 0, 0, 0.2)",
                borderRadius: "5px",
                padding: "7px",
                marginBottom: "10px",
              }}
            >
              <label style={{ display: "flex", justifyContent: "space-evenly" }}>
                <span>Brand : {brand} </span> <span>Category : {product_details} </span>{" "}
                <span>qty: {qnty} </span>
              </label>
            </FormGroup>
            {list?.map((item, key) => (
              <FormDivision1 style={{ flexDirection: "row" }}>
                <FormGroup style={{ width: "50%" }}>
                  <label>Product :</label>
                  {/* <Select
                    className="basic-single"
                    classNamePrefix="select"
                    value={productData.find((obj) => obj.value === selectedProduct)}
                    onChange={(e) => setSelectedProduct(e.value)}
                    isSearchable
                    name="color"
                    options={productData}
                    styles={customStyles}
                    required
                  /> */}
                  <select
                    name="professionType"
                    id="professionType"
                    value={list[key]?.id}
                    // onChange={(e) =>
                    //   setProduct((prev) => ({
                    //     ...prev,
                    //     product_id: e.target.value,
                    //   }))
                    // }
                    onChange={(e) => handleChange(e, key, "product_id")}
                    defaultValue="none"
                  >
                    <option value="none" disabled hidden>
                      --Select--
                    </option>
                    {productData?.map((item) => (
                      <option value={item.id}>{item.title}</option>
                    ))}
                  </select>
                </FormGroup>
                <FormGroup style={{ width: "50%" }}>
                  <label>Quantity :</label>
                  <input
                    type="text"
                    value={list[key]?.qnty}
                    // onChange={(e) => {
                    //   setInputs((prev) => ({
                    //     ...prev,
                    //     qnty: e.target.value,
                    //   }));
                    // }}
                    onChange={(e) => handleChange(e, key, "qnty")}
                  />
                </FormGroup>
              </FormDivision1>
            ))}
            <FormGroup>
              <label style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
                <span
                  style={{ display: "flex", alignItems: "center", gap: "5px", cursor: "pointer" }}
                  onClick={handleAdd}
                >
                  Add More Products <AddIcon fontSize="small" style={{ opacity: ".7" }} />
                </span>
                <span
                  style={{ display: "flex", alignItems: "center", gap: "5px", cursor: "pointer" }}
                  onClick={handleDelete}
                >
                  Delete <img src={TrashIcons} width="15" />
                </span>
              </label>
            </FormGroup>
            <FormGroup>
              <label>Terms & condiitions :</label>
              <textarea
                type="text"
                rows="3"
                value={inputs.terms_condition}
                onChange={(e) => {
                  setInputs((prev) => ({
                    ...prev,
                    terms_condition: e.target.value,
                  }));
                }}
              />
            </FormGroup>
            <div style={{ borderBottom: "1px solid rgb(0, 0, 0, 0.3)", marginBottom: "10px" }}>
              <label
                style={{
                  fontSize: "13px",
                }}
              >
                Prepared By :
              </label>
            </div>
            <FormDivision>
              <FormGroup>
                <label>Name :</label>
                <input
                  type="text"
                  value={inputs.name}
                  onChange={(e) => {
                    setInputs((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }));
                  }}
                />
              </FormGroup>
              <FormGroup>
                <label>Phone :</label>
                <input
                  type="number"
                  value={inputs.phone}
                  onChange={(e) => {
                    setInputs((prev) => ({
                      ...prev,
                      phone: e.target.value,
                    }));
                  }}
                />
              </FormGroup>
            </FormDivision>

            <ButtonContainer>
              <Button onClick={handleSubmit}>Save</Button>
            </ButtonContainer>
          </ModalForm>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default SendQuotation;
