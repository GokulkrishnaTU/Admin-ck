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
} from "./UpdateQuotation.styled";
import axios from "axios";
import Select from "react-select";
import { server_api } from "../../const/api";
import AddIcon from "@mui/icons-material/Add";
import { TrashIcons } from "../../assets/icons";
import { FormDivision1 } from "../PurchaseReq/SendQuotation.styled";

const customStyles = {
  control: (base) => ({
    ...base,
    height: 35,
    minHeight: 35,
    width: "100%",
    fontSize: "small",
  }),
};

function UpdateQuotation(props) {
  console.log("Propssss", props);
  const { ticket_no, quot_no, item_details, terms_conditions, prepared_by, customer_approval, id } =
    props.editDetails;
  const [selectedProduct, setSelectedProduct] = useState(props?.productDetails?.id);
  const [productData, setProductData] = useState([]);
  const [list, setList] = useState(
    props?.isEdit == true ? item_details : [{ product_id: "", qnty: "" }]
  );
  // const [list, setList] = useState([{ product_id: "", qnty: "" }]);
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
      let listArray = [];
      for (let i = 0; i < data.length; i++) {
        listArray.push({ product_id: data[i]?.id, title: data[i]?.title });
      }
      setProductData(listArray);
      setList(item_details);
    });
    setSelectedProduct(props.productDetails.id);
  }, [props?.productDetails?.id, item_details]);
  if (!props.isEdit) {
    return null;
  }
  const sendRequest = async () => {
    const formData = new FormData();
    formData.append("ticket_no", ticket_no);
    formData.append("id", id);
    formData.append("quot_no", quot_no);
    formData.append("item_details", JSON.stringify(list));
    formData.append("terms_conditions", terms_conditions);
    formData.append("prepared_by", JSON.stringify(props?.preparedDetails));
    formData.append("customer_approval", customer_approval);
    // formData.append("brand_name", name);
    let res = await axios
      .post(`${server_api}/api/updateQuot`, formData)
      .catch((err) => console.log(err));
    let data = await res.data;
    return data;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then((data) => {
      console.log("res=>", data);
      if (data.code == 200) {
        props.onClose();
        props.getQuotationList();
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
      // listArray.splice(0, -1);
      listArray.pop();
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
          <ModalTitle>Update Quotation</ModalTitle>
          <CloseIcon
            style={{ fontSize: "small", cursor: "pointer" }}
            opacity="0.5"
            onClick={props.onClose}
          />
        </ModalHeader>
        <ModalBody>
          <ModalForm>
            {list?.map((item, key) => (
              <FormDivision1 style={{ flexDirection: "row" }}>
                <FormGroup style={{ width: "50%" }}>
                  <label>Product :</label>
                  <select
                    name="professionType"
                    id="professionType"
                    defaultValue="select"
                    value={list[key]?.product_id}
                    onChange={(e) => handleChange(e, key, "product_id")}
                  >
                    <option value="select">--Select--</option>
                    {productData?.map((item) => (
                      <>
                        {console.log("sglfd", item)}
                        <option value={item?.product_id}>{item?.title}</option>
                      </>
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
            {/* <FormGroup>
              <label>Product :</label>
              <Select
                className="basic-single"
                classNamePrefix="select"
                value={productData.find((obj) => obj.value == selectedProduct)}
                onChange={(e) => setSelectedProduct(e.value)}
                isSearchable
                name="color"
                options={productData}
                styles={customStyles}
                required
              />
            </FormGroup>
            <FormGroup>
              <label>Quantity :</label>
              <input
                type="text"
                value={props.productDetails.qnty}
                onChange={(e) => {
                  props?.setProductDetails((prev) => ({
                    ...prev,
                    qnty: e.target.value,
                  }));
                }}
              />
            </FormGroup> */}
            <FormGroup>
              <label>Terms & condiitions :</label>
              <textarea
                type="text"
                rows="3"
                value={terms_conditions}
                onChange={(e) => {
                  props?.setEditDetails((prev) => ({
                    ...prev,
                    terms_conditions: e.target.value,
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
                  value={props?.preparedDetails?.name}
                  onChange={(e) => {
                    props?.setPreparedDetails((prev) => ({
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
                  value={props?.preparedDetails?.phone}
                  onChange={(e) => {
                    props?.setPreparedDetails((prev) => ({
                      ...prev,
                      phone: e.target.value,
                    }));
                  }}
                />
              </FormGroup>
            </FormDivision>

            <ButtonContainer>
              <Button onClick={handleSubmit}>Update</Button>
            </ButtonContainer>
          </ModalForm>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default UpdateQuotation;
