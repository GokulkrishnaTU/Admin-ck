import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import {
  Button,
  ButtonContainer,
  Container,
  FormDivision,
  FormGroup,
  FormHeader,
  FormSubDiv,
  MenuBar,
  ModalForm,
  SubContainer,
} from "./CustomSaleForm.styled";
import { server_api } from "../../const/api";
import { useState } from "react";

function CustomSaleUpdation() {
  const location = useLocation();
  const navigate = useNavigate();
  console.log("location=>", location.state);

  const [productData, setProductData] = useState([]);
  const [bankDetails, setBankDetails] = useState([]);
  const [installation, setInstallation] = useState([]);
  const [delivery, setDelivery] = useState([]);
  const [preparedBy, setPreparedBy] = useState("");
  const [checkedBy, setCheckedBy] = useState("");
  const [inputs, setInputs] = useState("");
  const [tax, setTax] = useState("");
  const [HOD, setHOD] = useState("");
  console.log(preparedBy);
  const [product, setProduct] = useState([]);
  console.log("product=>", product);
  console.log("Installation=>", installation);
  console.log("delivery=>", delivery);
  console.log("prepared_by=>", preparedBy);
  console.log("checked_by=>", checkedBy);
  console.log("inputs=>", inputs);
  console.log("tax=>", tax);
  console.log("HOD=>", HOD);

  const getProducts = async () => {
    let res = await axios.get(`${server_api}/api/getProductList`);
    let data = res.data;
    return data;
  };
  const getBankDetails = async () => {
    let res = await axios.get(`${server_api}/api/getBank`);
    let data = res.data;
    return data;
  };
  useEffect(() => {
    getProducts().then((data) => setProductData(data));
    getBankDetails().then((data) => setBankDetails(data));
    setProductNo();
  }, []);
  let filteredProduct = productData.filter((item) => {
    return item?.product_category_id === location.state[0].product_category_id;
  });
  console.log("filterd", filteredProduct);

  const sendRequest = async () => {
    let res = await axios.post(`${server_api}/api/insertCustomSaleReport`, {
      custom_sale_id: location?.state[0].id,
      product: JSON.stringify(product),
      status: "",
      comment: "",
      tax_charges: tax ? JSON.stringify(tax) : "",
      delivery_charges: delivery ? JSON.stringify(delivery) : "",
      installation_charges: installation ? JSON.stringify(installation) : "",
      vendor_details: inputs ? inputs.vendor_details : "",
      payment: inputs ? inputs.payment : "",
      delivery: inputs ? inputs.delivery : "",
      quotation_validity: inputs ? inputs.quotation_validity : "",
      bank_id: inputs ? inputs.bank_id : "",
      prepared_by: preparedBy ? JSON.stringify(preparedBy) : "",
      checked_by: checkedBy ? JSON.stringify(checkedBy) : "",
      hod: HOD ? JSON.stringify(HOD) : "",
    });
    let data = await res.data;
    return data;
  };
  const handleChange = (e, key, value) => {
    let listArray = [...product];
    listArray[key][value] = e.target.value;
    setProduct(listArray);
    let installationArray = [...installation];
    installationArray[key][value] = e.target.value;
    setInstallation(installationArray);
    let deliveryArray = [...delivery];
    deliveryArray[key][value] = e.target.value;
    setDelivery(deliveryArray);
  };
  const handleInstallation = (e, key, value) => {
    let installationArray = [...installation];
    installationArray[key][value] = e.target.value;
    console.log("Installation Array=>>>", installationArray);
    setInstallation(installationArray);
  };
  const handleDelivery = (e, key, value) => {
    let deliveryArray = [...delivery];
    deliveryArray[key][value] = e.target.value;
    console.log("Installation Array=>>>", deliveryArray);
    setDelivery(deliveryArray);
  };
  const setProductNo = async () => {
    let prodLength = JSON.parse(location?.state[0].details).length;
    console.log("prodLength=>>>>>>>>>>", prodLength);
    setProduct([
      ...product,
      ...Array.from({ length: prodLength }, () => ({
        product_id: "",
        qnty: "",
      })),
    ]);
    setInstallation([
      ...installation,
      ...Array.from({ length: prodLength }, () => ({
        product_id: "",
        qnty: "",
        price: "",
      })),
    ]);
    setDelivery([
      ...delivery,
      ...Array.from({ length: prodLength }, () => ({
        product_id: "",
        qnty: "",
        price: "",
      })),
    ]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then((data) => {
      console.log("res========>", data);
      navigate(-1);
    });
  };

  return (
    <Container>
      <MenuBar>Add Custom sale report</MenuBar>

      <SubContainer>
        <ModalForm>
          {JSON.parse(location.state[0].details).map((product, key) => (
            <FormSubDiv style={{ paddingBottom: "30px" }}>
              <FormHeader>
                <span>Brand : {product?.brand}</span>
                <span>Quantity : {product?.qty}</span>
                <span>Specification : {product?.specification}</span>
              </FormHeader>
              <FormDivision>
                <FormGroup>
                  <label>Choose Product :</label>
                  <select
                    name="professionType"
                    id="professionType"
                    value={product[key]?.product_id}
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
                    {filteredProduct.map((item) => (
                      <option value={item.id}>
                        {item.title}
                        {console.log("This is", item)}
                      </option>
                    ))}
                  </select>
                </FormGroup>
                <FormGroup>
                  <label htmlFor="">Quantity :</label>
                  <input
                    type="number"
                    value={product[key]?.qnty}
                    // onChange={(e) =>
                    //   setProduct((prev) => ({
                    //     ...prev,
                    //     qnty: e.target.value,
                    //   }))
                    // }
                    // onChange={(e) => handleChange(e, index, index)}
                    onChange={(e) => handleChange(e, key, "qnty")}
                  />
                </FormGroup>
              </FormDivision>
              <FormGroup style={{ width: "97%" }}>
                <label style={{ borderBottom: "1px solid rgba(0, 0, 0, 0.2)" }}>
                  Charges
                </label>
              </FormGroup>
              <FormDivision>
                <FormGroup>
                  <label htmlFor="">Delivery Charge :</label>
                  <input
                    type="number"
                    value={delivery[key]?.price}
                    onChange={(e) => handleDelivery(e, key, "price")}
                  />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="">Installation Charge :</label>
                  <input
                    type="number"
                    value={installation[key]?.price}
                    onChange={(e) => handleInstallation(e, key, "price")}
                  />
                </FormGroup>
              </FormDivision>
            </FormSubDiv>
          ))}
          <FormSubDiv>
            <FormGroup style={{ width: "97%" }}>
              <label style={{ borderBottom: "1px solid rgba(0, 0, 0, 0.2)" }}>
                Tax Details
              </label>
            </FormGroup>
            <FormDivision>
              <FormGroup style={{ width: "30%" }}>
                <label htmlFor="">CGST :</label>
                <input
                  type="number"
                  value={tax?.cgst}
                  onChange={(e) =>
                    setTax((prev) => ({
                      ...prev,
                      cgst: e.target.value,
                    }))
                  }
                />
              </FormGroup>
              <FormGroup style={{ width: "30%" }}>
                <label htmlFor="">SGST :</label>
                <input
                  type="number"
                  value={tax?.sgst}
                  onChange={(e) =>
                    setTax((prev) => ({
                      ...prev,
                      sgst: e.target.value,
                    }))
                  }
                />
              </FormGroup>
              <FormGroup style={{ width: "30%" }}>
                <label htmlFor="">CESS :</label>
                <input
                  type="number"
                  value={tax?.cess}
                  onChange={(e) =>
                    setTax((prev) => ({
                      ...prev,
                      cess: e.target.value,
                    }))
                  }
                />
              </FormGroup>
            </FormDivision>
            <FormGroup style={{ width: "97%" }}>
              <label style={{ borderBottom: "1px solid rgba(0, 0, 0, 0.2)" }}>
                Other Details
              </label>
            </FormGroup>
            <FormGroup style={{ width: "100%" }}>
              <label htmlFor="">Vendor Address :</label>
              <textarea
                name=""
                id=""
                rows="5"
                value={inputs?.vendor_details}
                onChange={(e) =>
                  setInputs((prev) => ({
                    ...prev,
                    vendor_details: e.target.value,
                  }))
                }
              ></textarea>
            </FormGroup>
            <FormDivision>
              <FormGroup style={{ width: "30%" }}>
                <label htmlFor="">Payment :</label>
                <input
                  type="number"
                  value={inputs?.payment}
                  onChange={(e) =>
                    setInputs((prev) => ({
                      ...prev,
                      payment: e.target.value,
                    }))
                  }
                />
              </FormGroup>
              <FormGroup style={{ width: "30%" }}>
                <label htmlFor="">Delivery :</label>
                <input
                  type="number"
                  value={inputs?.delivery}
                  onChange={(e) =>
                    setInputs((prev) => ({
                      ...prev,
                      delivery: e.target.value,
                    }))
                  }
                />
              </FormGroup>
              <FormGroup style={{ width: "30%" }}>
                <label htmlFor="">Quotation Validity :</label>
                <input
                  type="number"
                  value={inputs?.quotation_validity}
                  onChange={(e) =>
                    setInputs((prev) => ({
                      ...prev,
                      quotation_validity: e.target.value,
                    }))
                  }
                />
              </FormGroup>
            </FormDivision>

            <FormGroup style={{ width: "97%" }}>
              <label style={{ borderBottom: "1px solid rgba(0, 0, 0, 0.2)" }}>
                Prepared By
              </label>
            </FormGroup>

            <FormDivision>
              <FormGroup style={{ width: "30%" }}>
                <label htmlFor="">Name :</label>
                <input
                  type="text"
                  value={preparedBy?.name}
                  onChange={(e) =>
                    setPreparedBy((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }))
                  }
                />
              </FormGroup>
              <FormGroup style={{ width: "30%" }}>
                <label htmlFor="">Designation :</label>
                <input
                  type="text"
                  value={preparedBy?.designation}
                  onChange={(e) =>
                    setPreparedBy((prev) => ({
                      ...prev,
                      designation: e.target.value,
                    }))
                  }
                />
              </FormGroup>
              <FormGroup style={{ width: "30%" }}>
                <label htmlFor="">Phone No :</label>
                <input
                  type="number"
                  value={preparedBy?.phone_no}
                  onChange={(e) =>
                    setPreparedBy((prev) => ({
                      ...prev,
                      phone_no: e.target.value,
                    }))
                  }
                />
              </FormGroup>
            </FormDivision>

            <FormGroup style={{ width: "97%" }}>
              <label style={{ borderBottom: "1px solid rgba(0, 0, 0, 0.2)" }}>
                Checked By
              </label>
            </FormGroup>

            <FormDivision>
              <FormGroup style={{ width: "30%" }}>
                <label htmlFor="">Name :</label>
                <input
                  type="text"
                  value={checkedBy?.name}
                  onChange={(e) =>
                    setCheckedBy((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }))
                  }
                />
              </FormGroup>
              <FormGroup style={{ width: "30%" }}>
                <label htmlFor="">Designation :</label>
                <input
                  type="text"
                  value={checkedBy?.designation}
                  onChange={(e) =>
                    setCheckedBy((prev) => ({
                      ...prev,
                      designation: e.target.value,
                    }))
                  }
                />
              </FormGroup>
              <FormGroup style={{ width: "30%" }}>
                <label htmlFor="">Phone No :</label>
                <input
                  type="number"
                  value={checkedBy?.phone_no}
                  onChange={(e) =>
                    setCheckedBy((prev) => ({
                      ...prev,
                      phone_no: e.target.value,
                    }))
                  }
                />
              </FormGroup>
            </FormDivision>

            <FormGroup style={{ width: "97%" }}>
              <label style={{ borderBottom: "1px solid rgba(0, 0, 0, 0.2)" }}>
                HOD
              </label>
            </FormGroup>

            <FormDivision>
              <FormGroup style={{ width: "30%" }}>
                <label htmlFor="">Name :</label>
                <input
                  type="text"
                  value={HOD?.name}
                  onChange={(e) =>
                    setHOD((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }))
                  }
                />
              </FormGroup>
              <FormGroup style={{ width: "30%" }}>
                <label htmlFor="">Designation :</label>
                <input
                  type="text"
                  value={HOD?.designation}
                  onChange={(e) =>
                    setHOD((prev) => ({
                      ...prev,
                      designation: e.target.value,
                    }))
                  }
                />
              </FormGroup>
              <FormGroup style={{ width: "30%" }}>
                <label htmlFor="">Phone No :</label>
                <input
                  type="number"
                  value={HOD?.phone_no}
                  onChange={(e) =>
                    setHOD((prev) => ({
                      ...prev,
                      phone_no: e.target.value,
                    }))
                  }
                />
              </FormGroup>
            </FormDivision>

            <FormGroup style={{ width: "97%" }}>
              <label style={{ borderBottom: "1px solid rgba(0, 0, 0, 0.2)" }}>
                Bank Details
              </label>
            </FormGroup>
            <FormGroup style={{ width: "30%" }}>
              <label htmlFor="">Bank Account :</label>
              <select
                value={inputs.bank_id}
                onChange={(e) => {
                  setInputs((prev) => ({
                    ...prev,
                    bank_id: e.target.value,
                  }));
                }}
                defaultValue="none"
              >
                <option value="none" disabled hidden>
                  --Select--
                </option>
                {bankDetails.map((item) => (
                  <option value={item.id}>
                    {item.account_name}
                    {console.log("This is", item)}
                  </option>
                ))}
              </select>
            </FormGroup>
            <ButtonContainer>
              <Button onClick={handleSubmit}>Submit</Button>
            </ButtonContainer>
          </FormSubDiv>
        </ModalForm>
      </SubContainer>
    </Container>
  );
}

export default CustomSaleUpdation;
