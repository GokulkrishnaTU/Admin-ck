import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { MenuBar } from "../CustomerSalesReport/CustomSaleForm.styled";
import {
  AutoFillDiv,
  Button,
  ButtonContainer,
  Container,
  FormContainer,
  FormDivision,
  FormGroup,
  FormGroup1,
  FormGroup2,
  FormSubDiv,
  FormSubGroup,
  SubContainer,
} from "./AddProduct.styled";
import { server_api } from "../../const/api";
// import { AutoComplete, MultiSelect } from "@progress/kendo-react-dropdowns";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { Hint } from "react-autocomplete-hint";
import Autosuggest from "react-autosuggest";
import "./Autofill.css";

const customStyles = {
  control: (base) => ({
    ...base,
    height: 35,
    minHeight: 35,
    width: "100%",
    fontSize: "small",
  }),
};

const getSuggestions = (list = [], value) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0
    ? []
    : list.filter((el) => el.value.toLowerCase().slice(0, inputLength) === inputValue);
};

const getSuggestionValue = (suggestion) => suggestion.value;
const renderSuggestion = (suggestion) => <div>{suggestion.value}</div>;

function AddProd() {
  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState(null);
  const [val, setVal] = useState(null);
  console.log("selected options=======>", selectedOption);
  console.log("selected=======>", val);
  const [inputs, setInputs] = useState({});
  const [productID, setProductID] = useState('none');
  const [specsInputs, setSpecsInputs] = useState({});
  const [processors, setProcessors] = useState("");
  const [motherboardArray, setMotherBoardArray] = useState("");
  const [file, setFile] = useState([]);
  const [processortype, setProcessorType] = useState("");
  const [motherboardBrand, setMotherboardBrand] = useState("");
  const [specifications, setSpecifications] = useState("");
  const [storageType, setStorageType] = useState("");
  const [storageCapacity, setStorageCapacity] = useState("");
  const [cabinetType, setCabinetType] = useState("");
  const [cabinetBrand, setCabinetBrand] = useState("");
  const [powerSupplyType, setPowerSupplyType] = useState("");
  const [powerSupplyBrand, setPowerSupplyBrand] = useState("");
  const [graphicCardBrand, setGraphicCardBrand] = useState("");
  const [graphicCardModel, setGraphicCardModel] = useState("");
  const [monitorType, setMonitorType] = useState("");
  const [upsType, setUpsType] = useState("");
  const [ramBrand, setRamBrand] = useState("");
  const [subcatData, setSubcatData] = useState([]);
  console.log("sub cat data=====>", subcatData);
  console.log("processors==========>", processors);
  console.log(
    "Data==========>",
    processortype,
    motherboardBrand,
    specifications,
    storageType,
    storageCapacity,
    cabinetType,
    cabinetBrand,
    powerSupplyType,
    powerSupplyBrand,
    graphicCardBrand,
    graphicCardModel,
    ramBrand
  );
  console.log("array inputs================>", processors);
  // const [purchaseTypeData, setPurchaseTypeData] = useState([]);
  const [professionTypeData, setProfessionTypeData] = useState([]);
  const [productCategoryData, setProductCategoryData] = useState([]);
  const [brandData, setBrandData] = useState([]);
  const [accessoryData, setAccessoryData] = useState([]);
  const [customerData, setCustomerData] = useState([]);
  const [componentData, setComponentData] = useState([]);
  const [printerData, setPrinterData] = useState([]);
  const [dropdownValues, setDropdownValues] = useState([]);
  const [cctvType, setCctvType] = useState([]);
  const [speakerType, setSpeakerType] = useState([]);
  const [networkingProds, setNetworkingProds] = useState([]);
  const [profData, setProfData] = useState([]);
  const [processorArray, setProcessorArray] = useState([]);
  const [motherboardAray, setMotherboardAray] = useState([]);
  const [upsTypeData, setUpsTypeData] = useState([]);
  console.log("Processor array=>", processorArray);
  console.log("category Data=>", productCategoryData);

  console.log("VVVV", productID);

  console.log("prof data===>", profData);
  console.log("dropdownValues==============>", dropdownValues);
  console.log("Warranty Details=================>", inputs.warranty_details);

  //================== Auto Fill =============================================
  const [suggestions, setSuggestions] = useState([]);
  const [specsData, setSpecsData] = useState([]);
  const [ramData, setRamData] = useState([]);
  const [storageTypeData, setStorageTypeData] = useState([]);
  const [storageCapacityData, setStorageCapacityData] = useState([]);
  const [cabinetTypeData, setCabinetTypeData] = useState([]);
  const [cabinetBrandData, setCabinetBrandData] = useState([]);
  const [graphicCardBrandData, setGraphicCardBrandData] = useState([]);
  const [graphicCardModelData, setGraphicCardModelData] = useState([]);
  const [powerSupplyTypeData, setPowerSupplyTypeData] = useState([]);
  const [powerSupplyBrandData, setPowerSupplyBrandData] = useState([]);

  const onChange = (event, { newValue }) => {
    setProcessorType(newValue);
  };
  const onChange2 = (event, { newValue }) => {
    setMotherboardBrand(newValue);
  };
  const onChange1 = (event, { newValue }) => {
    setSpecifications(newValue);
  };
  const onChange3 = (event, { newValue }) => {
    setRamBrand(newValue);
  };
  const onChange4 = (event, { newValue }) => {
    setStorageType(newValue);
  };
  const onChange5 = (event, { newValue }) => {
    setStorageCapacity(newValue);
  };
  const onChange6 = (event, { newValue }) => {
    setCabinetType(newValue);
  };
  const onChange7 = (event, { newValue }) => {
    setCabinetBrand(newValue);
  };
  const onChange8 = (event, { newValue }) => {
    setGraphicCardBrand(newValue);
  };
  const onChange9 = (event, { newValue }) => {
    setGraphicCardModel(newValue);
  };
  const onChange10 = (event, { newValue }) => {
    setPowerSupplyType(newValue);
  };
  const onChange11 = (event, { newValue }) => {
    setPowerSupplyBrand(newValue);
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const inputProps = {
    placeholder: "Enter Processor Type",
    value: processortype,
    onChange,
  };
  const inputProps1 = {
    placeholder: "Enter Specification",
    value: specifications,
    onChange: onChange1,
  };
  const inputProps2 = {
    placeholder: "Enter Motherboard brand",
    value: motherboardBrand,
    onChange: onChange2,
  };
  const inputProps3 = {
    placeholder: "Enter Ram Brand",
    value: ramBrand,
    onChange: onChange3,
  };
  const inputProps4 = {
    placeholder: "Enter Storage Type",
    value: storageType,
    onChange: onChange4,
  };
  const inputProps5 = {
    placeholder: "Enter Storage Type",
    value: storageCapacity,
    onChange: onChange5,
  };
  const inputProps6 = {
    placeholder: "Enter Cabinet Type",
    value: cabinetType,
    onChange: onChange6,
  };
  const inputProps7 = {
    placeholder: "Enter Cabinet Type",
    value: cabinetBrand,
    onChange: onChange7,
  };
  const inputProps8 = {
    placeholder: "Enter Graphic Card Type",
    value: graphicCardBrand,
    onChange: onChange8,
  };
  const inputProps9 = {
    placeholder: "Enter Graphic Card Model",
    value: graphicCardModel,
    onChange: onChange9,
  };
  const inputProps10 = {
    placeholder: "Enter Power Supply Type",
    value: powerSupplyType,
    onChange: onChange10,
  };
  const inputProps11 = {
    placeholder: "Enter Power Supply Brand",
    value: powerSupplyBrand,
    onChange: onChange11,
  };

  //===========================================================================

  const handleChanges = (e) => {
    setSelectedOption(Array.isArray(e) ? e?.map((x) => x.value) : []);
  };
  const [custDat, setCustDat] = useState("");
  console.log("Cust Dat============>", custDat);
  const handleCustCatData = async (e) => {
    setCustDat(Array.isArray(e) ? e?.map((x) => x.value) : []);
    const difference = e.length <= custDat.length;

    if (difference) {
      if (e.length < 1) {
        setSubcatData([]);
        setSelectedOption([]);
      }
      e?.map(async (item) => {
        const res = await axios
          .post(`${server_api}/api/getCustomerSubCategory`, {
            category_id: item?.value,
          })
          .catch((err) => console.log(err));
        let data = await res.data;
        let listArray = [];
        let newArray = [];
        let compareArray = [];
        for (let i = 0; i < data.length; i++) {
          listArray.push({ value: data[i].id, label: data[i].sub_category_name });
          compareArray.push(data[i].id);
        }
        newArray = selectedOption.filter((element) => compareArray.includes(element));
        setSelectedOption(newArray);
        setSubcatData(listArray);
      });
    }
    if (!difference) {
      let len = e.length;
      const res = await axios
        .post(`${server_api}/api/getCustomerSubCategory`, {
          category_id: e[len - 1]?.value,
        })
        .catch((err) => console.log(err));
      const data = await res.data;
      let listArray = [...subcatData];
      for (let i = 0; i < data.length; i++) {
        if (!listArray?.find(({ value }) => value == data[i].id)) {
          listArray.push({ value: data[i].id, label: data[i].sub_category_name });
        }
      }
      setSubcatData(listArray);
    }
  };
  const handleProf = (e) => {
    setProfData(Array.isArray(e) ? e?.map((x) => x.value) : []);
  };

  const getAllDropdownValues = async () => {
    const res = await axios
      .get(`${server_api}/api/getAllDropDownValues`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const getProfessionType = async () => {
    const res = await axios.get(`${server_api}/api/getProfession`).catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const getProductCategory = async () => {
    const res = await axios
      .get(`${server_api}/api/getProductCategory`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const getBrands = async () => {
    const res = await axios.get(`${server_api}/api/getBrands`).catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const getAccessories = async () => {
    const res = await axios
      .get(`${server_api}/api/getAccessoriesTypes`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const getCustomerCategory = async () => {
    const res = await axios
      .get(`${server_api}/api/getCustomerCategory`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const getComponents = async () => {
    const res = await axios.get(`${server_api}/api/getComponents`).catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const getPrinterType = async () => {
    const res = await axios
      .get(`${server_api}/api/getCustomerCategory/11/1`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const getMonitorType = async () => {
    const res = await axios
      .get(`${server_api}/api/getCustomerCategory/14/1`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const getUpsType = async () => {
    const res = await axios
      .get(`${server_api}/api/getCustomerCategory/16/1`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const getCCTVType = async () => {
    const res = await axios.get(`${server_api}/api/getCctv`).catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const getSpeakerType = async () => {
    const res = await axios.get(`${server_api}/api/getSpeaker`).catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const getNetworkingProds = async () => {
    const res = await axios
      .get(`${server_api}/api/getNetworkingProducts`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  const sendRequest = async () => {
    const formData = new FormData();
    for (let i = 0; i < file?.length; i++) {
      formData.append(`images[${i}]`, file[i]);
    }
    formData.append("product_category_id", productID[0]);
    if (productID[1] == '001' || productID[1] == '004') {
      formData.append(`customer_category_id`, JSON.stringify(custDat));
      formData.append("customer_sub_category_id", JSON.stringify(selectedOption));
    }
    if (
      productID[1] == '005' ||
      productID[1] == '008' ||
      productID[1] == '010'
    ) {
      formData.append("customer_category_id", `[${inputs?.customer_category_id}]`);
    }
    if (productID[1] == '005' || productID[1] == '008') {
      formData.append("customer_sub_category_id", "[1]");
    }
    if (productID[1] == '010') {
      formData.append("customer_sub_category_id", `[${inputs?.customer_sub_category_id}]`);
    }
    formData.append("model", inputs?.model);
    formData.append("description", inputs?.description);
    formData.append("specification", JSON.stringify(specsInputs));
    formData.append("title", inputs?.title);
    formData.append("price", inputs?.price);
    formData.append("reward_points", inputs?.reward_points);
    formData.append("profession_id", 1);
    formData.append("profession_id1", JSON.stringify(profData));
    formData.append("offer_price", inputs?.offer_price);
    formData.append("warranty", inputs?.warranty);
    formData.append("stock_status", inputs?.stock_status);
    formData.append("warranty_details", inputs?.warranty_details);
    formData.append("brandId", inputs?.brandId);
    formData.append("delivery_charge", inputs?.delivery_charge);
    formData.append("utility", inputs?.utility);
    formData.append("comboPrice", productID[1] == '012' ? inputs.comboPrice : "");
    formData.append(
      "networkingTypeId",
      productID[1] == '011' ? inputs.networkingTypeId : ""
    );
    formData.append(
      "speakerTypeId",
      productID[1] == '007' ? inputs?.speakerTypeId : ""
    );
    formData.append("cctvTypeId", productID[1] == '006' ? inputs?.cctv_type_id : "");
    formData.append(
      "acessoriesTypeId",
      productID[1] == '012' ? inputs.acessoriesTypeId : ""
    );
    formData.append("printerCate", productID[1] == '005' ? inputs.printerCate : "");
    formData.append(
      "componentTypeId",
      productID[1] == '009' ? inputs.componentTypeId : ""
    );
    formData.append(
      "processorType",
      productID[1] == '009' && inputs.componentTypeId == "1" ? processortype : ""
    );
    formData.append(
      "specifications",
      productID[1] == '009' && inputs.componentTypeId == "1" ? specifications : ""
    );
    formData.append(
      "motherboard_brand",
      productID[1] == '009' && inputs.componentTypeId == "2" ? motherboardBrand : ""
    );
    formData.append(
      "storage_type",
      productID[1] == '009' && inputs.componentTypeId == "4" ? storageType : ""
    );
    formData.append(
      "storage_capacity",
      productID[1] == '009' && inputs.componentTypeId == "4" ? storageCapacity : ""
    );
    formData.append(
      "cabinet_type",
      productID[1] == '009' && inputs.componentTypeId == "7" ? cabinetType : ""
    );
    formData.append(
      "cabinet_brand",
      productID[1] == '009' && inputs.componentTypeId == "7" ? cabinetBrand : ""
    );
    formData.append(
      "power_supply_type",
      productID[1] == '009' && inputs.componentTypeId == "8" ? powerSupplyType : ""
    );
    formData.append(
      "power_supply_brand",
      productID[1] == '009' && inputs.componentTypeId == "8" ? powerSupplyBrand : ""
    );
    formData.append(
      "graphic_card_brand",
      productID[1] == '009' && inputs.componentTypeId == "17" ? graphicCardBrand : ""
    );
    formData.append(
      "graphic_card_model",
      productID[1] == '009' && inputs.componentTypeId == "17" ? graphicCardModel : ""
    );
    formData.append(
      "ram_brand",
      productID[1] == '009' && inputs?.componentTypeId == "3" ? ramBrand : ""
    );
    if (productID[1] == '009' && inputs.componentTypeId == "3") {
      formData.append("depend_product_list", JSON.stringify(motherboardArray));
    }
    if (productID[1] == '009' && inputs.componentTypeId == "2") {
      formData.append("depend_product_list", processors ? JSON.stringify(processors) : "");
    }
    if (productID[1] == '009' && inputs.componentTypeId == "4") {
      formData.append(
        "depend_product_list",
        motherboardArray ? JSON.stringify(motherboardArray) : ""
      );
    }
    // productID[1] == '009' && inputs.componentTypeId === "3" ? formData.append("depend_product_list", JSON.stringify(motherboardArray)) : ""
    await axios
      .post(`${server_api}/api/insertProduct`, formData, {
        header: {
          "Content-Type": "multipart/form-data",
          accept: "application/json",
        },
      })
      // .then((res)=>res.json())
      .then((res) => {
        console.log("res=>", res);
        if (res.data.code == "200") {
          navigate("/view-products");
        } else {
          alert(res.data.message);
        }
      })
      .then((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest();
  };

  useEffect(() => {
    // getPurchaseType().then((res) => setPurchaseTypeData(res));
    getProfessionType().then((res) => {
      let profArray = [];
      for (let i = 0; i < res.length; i++) {
        profArray.push({ value: res[i].id, label: res[i].profession_name });
      }
      setProfessionTypeData(profArray);
    });
    getProductCategory().then((res) => setProductCategoryData(res));
    getBrands().then((res) => setBrandData(res));
    getAccessories().then((res) => setAccessoryData(res));
    getCustomerCategory().then((res) => {
      let custAray = [];
      for (let i = 0; i < res.length; i++) {
        custAray.push({ value: res[i].id, label: res[i].category_name });
      }
      setCustomerData(custAray);
    });
    getComponents().then((res) => setComponentData(res));
    getPrinterType().then((res) => setPrinterData(res));
    getUpsType().then((res) => setUpsType(res));
    getMonitorType().then((res) => setMonitorType(res));

    //======================== Set DropDown Values ============================

    getAllDropdownValues().then((res) => {
      let processorAray = [];
      let motherBoardAray = [];
      let specsArray = [];
      let ramArray = [];
      let storageTypeArray = [];
      let storageCapacityArray = [];
      let cabinetTypeArray = [];
      let cabinetBrandArray = [];
      let graphicCardBrandArray = [];
      let graphicCardModelArray = [];
      let powerSupplyTypeArray = [];
      let powerSupplyBrandArray = [];

      for (let i = 0; i < res.processorType.length; i++) {
        if (!processorAray?.find(({ value }) => value == res.processorType[i])) {
          processorAray.push({ value: res.processorType[i], label: res.processorType[i] });
        }
      }
      for (let i = 0; i < res.specifications.length; i++) {
        if (!specsArray?.find(({ value }) => value == res.specifications[i])) {
          specsArray.push({ value: res.specifications[i], label: res.specifications[i] });
        }
      }
      for (let i = 0; i < res.motherBoardBrand.length; i++) {
        if (!motherBoardAray?.find(({ value }) => value == res.motherBoardBrand[i])) {
          motherBoardAray.push({ value: res.motherBoardBrand[i], label: res.motherBoardBrand[i] });
        }
      }
      for (let i = 0; i < res.ramBrand.length; i++) {
        if (!ramArray?.find(({ value }) => value == res.ramBrand[i])) {
          ramArray.push({ value: res.ramBrand[i], label: res.ramBrand[i] });
        }
      }
      for (let i = 0; i < res.storageType.length; i++) {
        if (!storageTypeArray?.find(({ value }) => value == res.storageType[i])) {
          storageTypeArray.push({ value: res.storageType[i], label: res.storageType[i] });
        }
      }
      for (let i = 0; i < res.storageCapacity.length; i++) {
        if (!storageCapacityArray?.find(({ value }) => value == res.storageCapacity[i])) {
          storageCapacityArray.push({
            value: res.storageCapacity[i],
            label: res.storageCapacity[i],
          });
        }
      }
      for (let i = 0; i < res.cabinetType.length; i++) {
        if (!cabinetTypeArray?.find(({ value }) => value == res.cabinetType[i])) {
          cabinetTypeArray.push({
            value: res.cabinetType[i],
            label: res.cabinetType[i],
          });
        }
      }
      for (let i = 0; i < res.cabinetBrand.length; i++) {
        if (!cabinetBrandArray?.find(({ value }) => value == res.cabinetBrand[i])) {
          cabinetBrandArray.push({
            value: res.cabinetBrand[i],
            label: res.cabinetBrand[i],
          });
        }
      }
      for (let i = 0; i < res.graphicCardBrand.length; i++) {
        if (!graphicCardBrandArray?.find(({ value }) => value == res.graphicCardBrand[i])) {
          graphicCardBrandArray.push({
            value: res.graphicCardBrand[i],
            label: res.graphicCardBrand[i],
          });
        }
      }
      for (let i = 0; i < res.grapicCardModel.length; i++) {
        if (!graphicCardModelArray?.find(({ value }) => value == res.grapicCardModel[i])) {
          graphicCardModelArray.push({
            value: res.grapicCardModel[i],
            label: res.grapicCardModel[i],
          });
        }
      }
      for (let i = 0; i < res.powerSupplyType.length; i++) {
        if (!powerSupplyTypeArray?.find(({ value }) => value == res.powerSupplyType[i])) {
          powerSupplyTypeArray.push({
            value: res.powerSupplyType[i],
            label: res.powerSupplyType[i],
          });
        }
      }
      for (let i = 0; i < res.powerSupplyBrand.length; i++) {
        if (!powerSupplyBrandArray?.find(({ value }) => value == res.powerSupplyBrand[i])) {
          powerSupplyBrandArray.push({
            value: res.powerSupplyBrand[i],
            label: res.powerSupplyBrand[i],
          });
        }
      }

      setProcessorArray(processorAray);
      setMotherboardAray(motherBoardAray);
      setSpecsData(specsArray);
      setRamData(ramArray);
      setStorageTypeData(storageTypeArray);
      setStorageCapacityData(storageCapacityArray);
      setCabinetTypeData(cabinetTypeArray);
      setCabinetBrandData(cabinetBrandArray);
      setGraphicCardBrandData(graphicCardBrandArray);
      setGraphicCardModelData(graphicCardModelArray);
      setPowerSupplyTypeData(powerSupplyTypeArray);
      setPowerSupplyBrandData(powerSupplyBrandArray);

      setDropdownValues(res);
    });

    //==========================================================================

    getCCTVType().then((res) => setCctvType(res));
    getSpeakerType().then((res) => setSpeakerType(res));
    getNetworkingProds().then((res) => setNetworkingProds(res));
  }, []);

  return (
    <Container>
      {/* <MenuBar>Add Product</MenuBar> */}
      <SubContainer>
        <FormContainer>
          <FormSubDiv>
            <p style={{ textAlign: "center" }}>Add Product</p>
            <FormDivision style={{ flexWrap: "nowrap" }}>
              <FormGroup style={{ width: "50%" }}>
                <label>Title/Specifications :</label>
                <input
                  type="text"
                  value={inputs.title}
                  onChange={(e) => {
                    setInputs((prev) => ({
                      ...prev,
                      title: e.target.value,
                    }));
                  }}
                />
              </FormGroup>
              <FormGroup style={{ width: "50%" }}>
                <label>Model :</label>
                <input
                  type="text"
                  value={inputs.model}
                  onChange={(e) => {
                    setInputs((prev) => ({
                      ...prev,
                      model: e.target.value,
                    }));
                  }}
                />
              </FormGroup>
            </FormDivision>

            <FormDivision style={{ flexWrap: "nowrap" }}>
              <FormGroup style={{ width: "50%" }}>
                <label>Price :</label>
                <input
                  type="number"
                  value={inputs.price}
                  onChange={(e) => {
                    setInputs((prev) => ({
                      ...prev,
                      price: e.target.value,
                    }));
                  }}
                />
              </FormGroup>
              <FormGroup style={{ width: "50%" }}>
                <label>Offer Price :</label>
                <input
                  type="number"
                  value={inputs.offer_price}
                  onChange={(e) => {
                    setInputs((prev) => ({
                      ...prev,
                      offer_price: e.target.value,
                    }));
                  }}
                />
              </FormGroup>
            </FormDivision>

            <FormDivision style={{ flexWrap: "nowrap" }}>
              <FormGroup style={{ width: "50%" }}>
                <label>Reward Points :</label>
                <input
                  type="number"
                  value={inputs.reward_points}
                  onChange={(e) => {
                    setInputs((prev) => ({
                      ...prev,
                      reward_points: e.target.value,
                    }));
                  }}
                />
              </FormGroup>

              <FormGroup style={{ width: "50%" }}>
                <label>Warranty :</label>
                <input
                  type="number"
                  value={inputs.warranty}
                  onChange={(e) => {
                    setInputs((prev) => ({
                      ...prev,
                      warranty: e.target.value,
                    }));
                  }}
                />
              </FormGroup>
            </FormDivision>

            <FormDivision style={{ flexWrap: "nowrap" }}>
              <FormGroup style={{ width: "50%" }}>
                <label>Delivery Charge :</label>
                <input
                  type="number"
                  value={inputs.delivery_charge}
                  onChange={(e) => {
                    setInputs((prev) => ({
                      ...prev,
                      delivery_charge: e.target.value,
                    }));
                  }}
                />
              </FormGroup>

              <FormGroup style={{ width: "50%" }}>
                <label>Utility :</label>
                <input
                  type="text"
                  value={inputs.utility}
                  onChange={(e) => {
                    setInputs((prev) => ({
                      ...prev,
                      utility: e.target.value,
                    }));
                  }}
                />
              </FormGroup>
            </FormDivision>

            <FormDivision style={{ flexWrap: "nowrap" }}>
              <FormGroup style={{ width: "50%" }}>
                <label>Warranty Details :</label>
                <textarea
                  rows={6}
                  value={inputs.warranty_details}
                  onChange={(e) => {
                    setInputs((prev) => ({
                      ...prev,
                      warranty_details: e.target.value,
                    }));
                  }}
                />
              </FormGroup>
              <FormGroup style={{ width: "50%" }}>
                <label>Description :</label>
                <textarea
                  rows={6}
                  value={inputs.description}
                  onChange={(e) => {
                    setInputs((prev) => ({
                      ...prev,
                      description: e.target.value,
                    }));
                  }}
                />
              </FormGroup>
            </FormDivision>



            <FormDivision style={{ flexWrap: "nowrap" }}>
              <FormGroup style={{ width: "50%" }}>
                <label>Stock Status :</label>
                <input
                  type="text"
                  value={inputs.stock_status}
                  onChange={(e) => {
                    setInputs((prev) => ({
                      ...prev,
                      stock_status: e.target.value,
                    }));
                  }}
                />
              </FormGroup>
              <FormGroup>
                <label>Image :</label>
                <input
                  type="file"
                  onChange={(e) => {
                    const targetFiles = e.target.files;
                    const targetFilesObject = [...targetFiles];
                    setFile(targetFilesObject);
                  }}
                  multiple
                />
              </FormGroup>
            </FormDivision>

            <FormDivision>
              <FormGroup style={{ width: "49%" }}>
                <label>Brand :</label>
                <select
                  name="BrandId"
                  id="purchase_type_id"
                  value={inputs.brandId}
                  onChange={(e) => {
                    setInputs((prev) => ({
                      ...prev,
                      brandId: e.target.value,
                    }));
                  }}
                  defaultValue="none">
                  <option value="none" disabled hidden>
                    --Select--
                  </option>
                  {brandData?.map((item, key) => {
                    return (
                      <option value={item.id} key={key}>
                        {item.brand_name}
                      </option>
                    );
                  })}
                </select>
              </FormGroup>

              <FormGroup2 style={{ width: "47.3%" }}>
                <label>Profession :</label>
                <Select
                  onChange={(e) => handleProf(e)}
                  value={professionTypeData?.filter((obj) => profData?.includes(obj.value))}
                  options={professionTypeData}
                  isMulti
                  isClearable
                  menuPortalTarget={document.body}
                  styles={(customStyles, { menuPortal: (base) => ({ ...base, zIndex: 9999 }) })}
                />
              </FormGroup2>

              <FormGroup style={{ width: "49%" }}>
                <label>Product category :</label>
                <select
                  name="product_category_id"
                  id="product_category_id"
                  value={productID}
                  onChange={(e) => {
                    // setInputs((prev) => ({
                    //   ...prev,
                    //   product_category_id: e.target.value,
                    //   customer_category_id: "none",
                    // }));
                    setProductID((e.target.value).split(","))
                  }}
                  defaultValue="none">
                  <option value="none" disabled hidden>
                    --Select--
                  </option>
                  {productCategoryData?.map((item, key) => {
                    return (
                      <option value={`${item.id},${item?.color}`} key={key}>
                        {item.product_category_name}
                      </option>
                    );
                  })}
                </select>
              </FormGroup>
              {productID[1] == '005' ? (
                <FormGroup style={{ width: "49%" }}>
                  <label>Printer Category :</label>
                  <select
                    name="printerCate"
                    id="printerCate "
                    value={inputs.printerCate}
                    onChange={(e) => {
                      setInputs((prev) => ({
                        ...prev,
                        printerCate: e.target.value,
                      }));
                    }}
                    defaultValue="none">
                    <option value="none" disabled hidden>
                      --Select--
                    </option>
                    <option value={0}>Light</option>
                    <option value={1}>Heavy</option>
                  </select>
                </FormGroup>
              ) : (
                ""
              )}

              {productID[1] == '005' ? (
                <FormGroup style={{ width: "49%" }}>
                  <label>Printer Type :</label>
                  <select
                    name="CustomerCat"
                    id="purchase_type_id"
                    value={inputs?.customer_category_id}
                    onChange={(e) => {
                      setInputs((prev) => ({
                        ...prev,
                        customer_category_id: e.target.value,
                      }));
                    }}
                    defaultValue="none">
                    <option value="none" disabled hidden>
                      --Select--
                    </option>
                    {printerData?.map((item, key) => {
                      return (
                        <option value={item.id} key={key}>
                          {item.category_name}
                        </option>
                      );
                    })}
                  </select>
                </FormGroup>
              ) : (
                ""
              )}

              {productID[1] == '008' ? (
                <FormGroup style={{ width: "49%" }}>
                  <label>Monitor Type :</label>
                  <select
                    name="CustomerCat"
                    id="purchase_type_id"
                    value={inputs?.customer_category_id}
                    onChange={(e) => {
                      setInputs((prev) => ({
                        ...prev,
                        customer_category_id: e.target.value,
                      }));
                    }}
                    defaultValue="none">
                    <option value="none" disabled hidden>
                      --Select--
                    </option>
                    {monitorType?.map((item, key) => {
                      return (
                        <option value={item.id} key={key}>
                          {item?.category_name}
                        </option>
                      );
                    })}
                  </select>
                </FormGroup>
              ) : (
                ""
              )}

              {productID[1] == '010' ? (
                <FormGroup style={{ width: "49%" }}>
                  <label>UPS/Inverter Category :</label>
                  <select
                    name="CustomerCat"
                    id="purchase_type_id"
                    value={inputs?.customer_category_id}
                    onChange={(e) => {
                      setInputs((prev) => ({
                        ...prev,
                        customer_category_id: e.target.value,
                      }));
                      axios
                        .post(`${server_api}/api/getCustomerSubCategory`, {
                          category_id: e.target.value,
                        })
                        .then((res) => setUpsTypeData(res.data));
                    }}
                    defaultValue="none">
                    <option value="none" disabled hidden>
                      --Select--
                    </option>
                    {upsType?.map((item, key) => {
                      return (
                        <option value={item.id} key={key}>
                          {item.category_name}
                        </option>
                      );
                    })}
                  </select>
                </FormGroup>
              ) : (
                ""
              )}

              {productID[1] == '010' ? (
                <FormGroup style={{ width: "49%" }}>
                  <label>UPS/Inverter Type :</label>
                  <select
                    name="CustomerCat"
                    id="purchase_type_id"
                    value={inputs?.customer_sub_category_id}
                    onChange={(e) => {
                      setInputs((prev) => ({
                        ...prev,
                        customer_sub_category_id: e.target.value,
                      }));
                    }}
                    defaultValue="none">
                    <option value="none" disabled hidden>
                      --Select--
                    </option>
                    {upsTypeData?.map((item, key) => {
                      return (
                        <option value={item.id} key={key}>
                          {item.sub_category_name}
                        </option>
                      );
                    })}
                  </select>
                </FormGroup>
              ) : (
                ""
              )}

              {productID[1] == '009' ? (
                <FormGroup style={{ width: "49%" }}>
                  <label>Component Type :</label>
                  <select
                    name="acessoriesTypeId"
                    id="acessoriesTypeId"
                    value={inputs.componentTypeId}
                    onChange={(e) => {
                      setInputs((prev) => ({
                        ...prev,
                        componentTypeId: e.target.value,
                      }));
                    }}
                    defaultValue="none">
                    <option value="none" disabled hidden>
                      --Select--
                    </option>
                    {componentData?.map((item, key) => {
                      return (
                        <option value={item.id} key={key}>
                          {item.component_type_name}
                        </option>
                      );
                    })}
                  </select>
                </FormGroup>
              ) : (
                ""
              )}

              {productID[1] == '012' ? (
                <FormGroup style={{ width: "49%" }}>
                  <label>Accessories Type :</label>
                  <select
                    name="acessoriesTypeId"
                    id="acessoriesTypeId"
                    value={inputs.acessoriesTypeId}
                    onChange={(e) => {
                      setInputs((prev) => ({
                        ...prev,
                        acessoriesTypeId: e.target.value,
                      }));
                    }}
                    defaultValue="none">
                    <option value="none" disabled hidden>
                      --Select--
                    </option>
                    {accessoryData?.map((item, key) => {
                      return (
                        <option value={item.id} key={key}>
                          {item.accessory_type_name}
                        </option>
                      );
                    })}
                  </select>
                </FormGroup>
              ) : (
                ""
              )}

              {productID[1] == '012' ? (
                <FormGroup style={{ width: "50%" }}>
                  <label>Combo Price :</label>
                  <input
                    type="number"
                    value={inputs.comboPrice}
                    onChange={(e) => {
                      setInputs((prev) => ({
                        ...prev,
                        comboPrice: e.target.value,
                      }));
                    }}
                  />
                </FormGroup>
              ) : (
                ""
              )}

              {productID[1] == '006' ? (
                <FormGroup style={{ width: "49%" }}>
                  <label>CCTV Type :</label>
                  <select
                    name="cctv_type_id"
                    id="cctv_type_id"
                    value={inputs?.cctv_type_id}
                    onChange={(e) => {
                      setInputs((prev) => ({
                        ...prev,
                        cctv_type_id: e.target.value,
                      }));
                    }}
                    defaultValue="none">
                    <option value="none" disabled hidden>
                      --Select--
                    </option>
                    {cctvType?.map((item, key) => {
                      return (
                        <option value={item?.id} key={key}>
                          {item?.cctv_type_name}
                        </option>
                      );
                    })}
                  </select>
                </FormGroup>
              ) : (
                ""
              )}

              {productID[1] == '007' ? (
                <FormGroup style={{ width: "49%" }}>
                  <label>Speaker Type :</label>
                  <select
                    name="speakerTypeId"
                    id="speakerTypeId"
                    value={inputs?.speakerTypeId}
                    onChange={(e) => {
                      setInputs((prev) => ({
                        ...prev,
                        speakerTypeId: e.target.value,
                      }));
                    }}
                    defaultValue="none">
                    <option value="none">--Select--</option>
                    {speakerType?.map((item, key) => {
                      return (
                        <option value={item?.id} key={key}>
                          {item?.speaker_type_name}
                        </option>
                      );
                    })}
                  </select>
                </FormGroup>
              ) : (
                ""
              )}

              {productID[1] == '011' ? (
                <FormGroup style={{ width: "49%" }}>
                  <label>Networking Product Type :</label>
                  <select
                    name="networkingTypeId"
                    id="networkingTypeId"
                    value={inputs.networkingTypeId}
                    onChange={(e) => {
                      setInputs((prev) => ({
                        ...prev,
                        networkingTypeId: e.target.value,
                      }));
                    }}
                    defaultValue="none">
                    <option value="none">--Select--</option>
                    {networkingProds.map((item, key) => {
                      return (
                        <option value={item?.id} key={key}>
                          {item?.networking_type_name}
                        </option>
                      );
                    })}
                  </select>
                </FormGroup>
              ) : (
                ""
              )}
            </FormDivision>

            <FormDivision>
              {productID[1] == '009' && inputs.componentTypeId === "1" ? (
                <FormGroup1 style={{ width: "49%" }}>
                  <label>Processor type :</label>
                  {/* <Hint options={processorArray} allowTabFill>
                    <input
                      style={{ width: "91%", padding: "9px", fontSize: "14px" }}
                      className="input-with-hint"
                      value={processortype}
                      onChange={(e) => setProcessorType(e.target.value)}
                    />
                  </Hint> */}
                  <Autosuggest
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={({ value }) =>
                      setSuggestions(getSuggestions(processorArray, value))
                    }
                    onSuggestionsClearRequested={onSuggestionsClearRequested}
                    getSuggestionValue={getSuggestionValue}
                    renderSuggestion={renderSuggestion}
                    inputProps={inputProps}
                  />
                </FormGroup1>
              ) : (
                ""
              )}

              {productID[1] == '009' && inputs.componentTypeId === "1" ? (
                <FormGroup1 style={{ width: "49%" }}>
                  <label>Specifications:</label>
                  {/* <Hint options={dropdownValues?.specifications} allowTabFill>
                    <input
                      style={{ width: "91%", padding: "9px", fontSize: "14px" }}
                      className="input-with-hint"
                      value={specifications}
                      onChange={(e) => setSpecifications(e.target.value)}
                    />
                  </Hint> */}
                  <Autosuggest
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={({ value }) =>
                      setSuggestions(getSuggestions(specsData, value))
                    }
                    onSuggestionsClearRequested={onSuggestionsClearRequested}
                    getSuggestionValue={getSuggestionValue}
                    renderSuggestion={renderSuggestion}
                    inputProps={inputProps1}
                  />
                </FormGroup1>
              ) : (
                ""
              )}
            </FormDivision>

            <FormDivision>
              {productID[1] == '009' && inputs.componentTypeId === "2" ? (
                <FormGroup1 style={{ width: "49%" }}>
                  <label>Motherboard Brand :</label>
                  {/* <Hint options={dropdownValues?.motherBoardBrand} allowTabFill>
                    <input
                      style={{ width: "91%", padding: "9px", fontSize: "14px" }}
                      className="input-with-hint"
                      value={motherboardBrand}
                      onChange={(e) => setMotherboardBrand(e.target.value)}
                    />
                  </Hint> */}
                  <Autosuggest
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={({ value }) =>
                      setSuggestions(getSuggestions(motherboardAray, value))
                    }
                    onSuggestionsClearRequested={onSuggestionsClearRequested}
                    getSuggestionValue={getSuggestionValue}
                    renderSuggestion={renderSuggestion}
                    inputProps={inputProps2}
                  />
                </FormGroup1>
              ) : (
                ""
              )}

              {productID[1] == '009' && inputs.componentTypeId === "2" ? (
                <FormGroup2 style={{ width: "47.3%" }}>
                  <label>Choose Processor :</label>
                  <Select
                    onChange={(e) => setProcessors(Array.isArray(e) ? e?.map((x) => x.value) : [])}
                    value={processorArray?.filter((obj) => processors?.includes(obj.value))}
                    options={processorArray}
                    isMulti
                    isClearable
                  />
                </FormGroup2>
              ) : (
                ""
              )}
            </FormDivision>

            <FormDivision>
              {productID[1] == '009' && inputs.componentTypeId === "3" ? (
                <FormGroup1 style={{ width: "49%" }}>
                  <label>Ram Brand :</label>
                  {/* <Hint options={dropdownValues?.ramBrand} allowTabFill>
                    <input
                      style={{ width: "91%", padding: "9px", fontSize: "14px" }}
                      className="input-with-hint"
                      value={ramBrand}
                      onChange={(e) => setRamBrand(e.target.value)}
                    />
                  </Hint> */}
                  <Autosuggest
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={({ value }) =>
                      setSuggestions(getSuggestions(ramData, value))
                    }
                    onSuggestionsClearRequested={onSuggestionsClearRequested}
                    getSuggestionValue={getSuggestionValue}
                    renderSuggestion={renderSuggestion}
                    inputProps={inputProps3}
                  />
                </FormGroup1>
              ) : (
                ""
              )}

              {productID[1] == '009' && inputs.componentTypeId === "3" ? (
                <FormGroup2 style={{ width: "47.3%" }}>
                  <label>Motherboard :</label>
                  <Select
                    onChange={(e) =>
                      setMotherBoardArray(Array.isArray(e) ? e?.map((x) => x.value) : [])
                    }
                    value={motherboardAray?.filter((obj) => motherboardArray?.includes(obj.value))}
                    options={motherboardAray}
                    isMulti
                    isClearable
                  />
                </FormGroup2>
              ) : (
                ""
              )}
            </FormDivision>

            <FormDivision>
              {productID[1] == '009' && inputs.componentTypeId === "4" ? (
                <FormGroup1 style={{ width: "49%" }}>
                  <label>Storage type :</label>
                  {/* <Hint options={dropdownValues?.storageType} allowTabFill>
                    <input
                      style={{ width: "91%", padding: "9px", fontSize: "14px" }}
                      className="input-with-hint"
                      value={storageType}
                      onChange={(e) => setStorageType(e.target.value)}
                    />
                  </Hint> */}
                  <Autosuggest
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={({ value }) =>
                      setSuggestions(getSuggestions(storageTypeData, value))
                    }
                    onSuggestionsClearRequested={onSuggestionsClearRequested}
                    getSuggestionValue={getSuggestionValue}
                    renderSuggestion={renderSuggestion}
                    inputProps={inputProps4}
                  />
                </FormGroup1>
              ) : (
                ""
              )}
              {productID[1] == '009' && inputs.componentTypeId === "4" ? (
                <FormGroup1 style={{ width: "49%" }}>
                  <label>Storage capacity :</label>
                  {/* <Hint options={dropdownValues?.storageCapacity} allowTabFill>
                    <input
                      style={{ width: "91%", padding: "9px", fontSize: "14px" }}
                      className="input-with-hint"
                      value={storageCapacity}
                      onChange={(e) => setStorageCapacity(e.target.value)}
                    />
                  </Hint> */}
                  <Autosuggest
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={({ value }) =>
                      setSuggestions(getSuggestions(storageCapacityData, value))
                    }
                    onSuggestionsClearRequested={onSuggestionsClearRequested}
                    getSuggestionValue={getSuggestionValue}
                    renderSuggestion={renderSuggestion}
                    inputProps={inputProps5}
                  />
                </FormGroup1>
              ) : (
                ""
              )}
            </FormDivision>

            <FormDivision>
              {productID[1] == '009' && inputs?.componentTypeId === "4" ? (
                <FormGroup2 style={{ width: "47.3%" }}>
                  <label>Motherboard :</label>
                  <Select
                    onChange={(e) =>
                      setMotherBoardArray(Array.isArray(e) ? e.map((x) => x.value) : [])
                    }
                    value={motherboardAray?.filter((obj) => motherboardArray?.includes(obj.value))}
                    options={motherboardAray}
                    isMulti
                    isClearable
                  />
                </FormGroup2>
              ) : (
                ""
              )}
            </FormDivision>

            <FormDivision>
              {productID[1] == '009' && inputs?.componentTypeId === "7" ? (
                <FormGroup1 style={{ width: "49%" }}>
                  <label>Cabinet type :</label>
                  {/* <Hint options={dropdownValues?.cabinetType} allowTabFill>
                    <input
                      style={{ width: "91%", padding: "9px", fontSize: "14px" }}
                      className="input-with-hint"
                      value={cabinetType}
                      onChange={(e) => setCabinetType(e.target.value)}
                    />
                  </Hint> */}
                  <Autosuggest
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={({ value }) =>
                      setSuggestions(getSuggestions(cabinetTypeData, value))
                    }
                    onSuggestionsClearRequested={onSuggestionsClearRequested}
                    getSuggestionValue={getSuggestionValue}
                    renderSuggestion={renderSuggestion}
                    inputProps={inputProps6}
                  />
                </FormGroup1>
              ) : (
                ""
              )}
              {productID[1] == '009' && inputs?.componentTypeId === "7" ? (
                <FormGroup1 style={{ width: "49%" }}>
                  <label>Cabinet Brand :</label>
                  {/* <Hint options={dropdownValues?.cabinetBrand} allowTabFill>
                    <input
                      style={{ width: "91%", padding: "9px", fontSize: "14px" }}
                      className="input-with-hint"
                      value={cabinetBrand}
                      onChange={(e) => setCabinetBrand(e.target.value)}
                    />
                  </Hint> */}
                  <Autosuggest
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={({ value }) =>
                      setSuggestions(getSuggestions(cabinetBrandData, value))
                    }
                    onSuggestionsClearRequested={onSuggestionsClearRequested}
                    getSuggestionValue={getSuggestionValue}
                    renderSuggestion={renderSuggestion}
                    inputProps={inputProps7}
                  />
                </FormGroup1>
              ) : (
                ""
              )}
            </FormDivision>

            <FormDivision>
              {productID[1] == '009' && inputs?.componentTypeId === "17" ? (
                <FormGroup1 style={{ width: "49%" }}>
                  <label>Graphic Card Brand :</label>
                  {/* <Hint options={dropdownValues?.graphicCardBrand} allowTabFill>
                    <input
                      style={{ width: "91%", padding: "9px", fontSize: "14px" }}
                      className="input-with-hint"
                      value={graphicCardBrand}
                      onChange={(e) => setGraphicCardBrand(e.target.value)}
                    />
                  </Hint> */}
                  <Autosuggest
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={({ value }) =>
                      setSuggestions(getSuggestions(graphicCardBrandData, value))
                    }
                    onSuggestionsClearRequested={onSuggestionsClearRequested}
                    getSuggestionValue={getSuggestionValue}
                    renderSuggestion={renderSuggestion}
                    inputProps={inputProps8}
                  />
                </FormGroup1>
              ) : (
                ""
              )}
              {productID[1] == '009' && inputs?.componentTypeId === "17" ? (
                <FormGroup1 style={{ width: "49%" }}>
                  <label>Graphic Card Model :</label>
                  {/* <Hint options={dropdownValues?.grapicCardModel} allowTabFill>
                    <input
                      style={{ width: "91%", padding: "9px", fontSize: "14px" }}
                      className="input-with-hint"
                      value={graphicCardModel}
                      onChange={(e) => setGraphicCardModel(e.target.value)}
                    />
                  </Hint> */}
                  <Autosuggest
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={({ value }) =>
                      setSuggestions(getSuggestions(graphicCardModelData, value))
                    }
                    onSuggestionsClearRequested={onSuggestionsClearRequested}
                    getSuggestionValue={getSuggestionValue}
                    renderSuggestion={renderSuggestion}
                    inputProps={inputProps9}
                  />
                </FormGroup1>
              ) : (
                ""
              )}
            </FormDivision>

            <FormDivision>
              {productID[1] == '009' && inputs?.componentTypeId === "8" ? (
                <FormGroup1 style={{ width: "49%" }}>
                  <label>Power Supply Type :</label>
                  {/* <Hint options={dropdownValues?.powerSupplyType} allowTabFill>
                    <input
                      style={{ width: "91%", padding: "9px", fontSize: "14px" }}
                      className="input-with-hint"
                      value={powerSupplyType}
                      onChange={(e) => setPowerSupplyType(e.target.value)}
                    />
                  </Hint> */}
                  <Autosuggest
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={({ value }) =>
                      setSuggestions(getSuggestions(powerSupplyTypeData, value))
                    }
                    onSuggestionsClearRequested={onSuggestionsClearRequested}
                    getSuggestionValue={getSuggestionValue}
                    renderSuggestion={renderSuggestion}
                    inputProps={inputProps10}
                  />
                </FormGroup1>
              ) : (
                ""
              )}
              {productID[1] == '009' && inputs?.componentTypeId === "8" ? (
                <FormGroup1 style={{ width: "49%" }}>
                  <label>Power Supply Brand :</label>
                  {/* <Hint options={dropdownValues?.powerSupplyBrand} allowTabFill>
                    <input
                      style={{ width: "91%", padding: "9px", fontSize: "14px" }}
                      className="input-with-hint"
                      value={powerSupplyBrand}
                      onChange={(e) => setPowerSupplyBrand(e.target.value)}
                    />
                  </Hint> */}
                  <Autosuggest
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={({ value }) =>
                      setSuggestions(getSuggestions(powerSupplyBrandData, value))
                    }
                    onSuggestionsClearRequested={onSuggestionsClearRequested}
                    getSuggestionValue={getSuggestionValue}
                    renderSuggestion={renderSuggestion}
                    inputProps={inputProps11}
                  />
                </FormGroup1>
              ) : (
                ""
              )}
            </FormDivision>

            <FormDivision style={{ flexWrap: "nowrap" }}>
              {productID[1] == '001' || productID[1] == '004' ? (
                <FormGroup1 style={{ width: "97.5%" }}>
                  <label>Customer Category :</label>
                  <Select
                    onChange={(e) => {
                      handleCustCatData(e);
                    }}
                    value={customerData?.filter((obj) => custDat?.includes(obj.value))}
                    options={customerData}
                    isMulti
                    isClearable
                  />
                </FormGroup1>
              ) : (
                ""
              )}
            </FormDivision>
            <FormDivision>
              {productID[1] == '001' || productID[1] == '004' ? (
                <FormGroup1 style={{ width: "97.5%" }}>
                  <label>Customer Sub Category :</label>
                  <Select
                    onChange={(e) => handleChanges(e)}
                    value={subcatData?.filter((obj) => selectedOption?.includes(obj.value))}
                    options={subcatData}
                    isMulti
                    isClearable
                  />
                </FormGroup1>
              ) : (
                ""
              )}
            </FormDivision>
            {productID[1] == '001' || productID[1] == '004' ?
              <>
                <FormDivision
                  style={{
                    borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
                    marginBottom: "10px",
                    width: "97%",
                  }}>
                  <label htmlFor="">Enter Specifications </label>
                </FormDivision>

                <FormDivision
                  style={{ borderBottom: "1px solid rgba(0, 0, 0, 0.2)", marginBottom: "10px" }}>
                  <FormGroup style={{ width: "49%" }}>
                    <label htmlFor="">Processor :</label>
                    <input
                      type="text"
                      value={specsInputs?.processor}
                      onChange={(e) => {
                        setSpecsInputs((prev) => ({
                          ...prev,
                          processor: e.target.value,
                        }));
                      }}
                    />
                  </FormGroup>
                  <FormGroup style={{ width: "49%" }}>
                    <label htmlFor="">Ram :</label>
                    <input
                      type="text"
                      value={specsInputs?.ram}
                      onChange={(e) => {
                        setSpecsInputs((prev) => ({
                          ...prev,
                          ram: e.target.value,
                        }));
                      }}
                    />
                  </FormGroup>
                  <FormGroup style={{ width: "49%" }}>
                    <label htmlFor="">Motherboard :</label>
                    <input
                      type="text"
                      value={specsInputs?.motherboard}
                      onChange={(e) => {
                        setSpecsInputs((prev) => ({
                          ...prev,
                          motherboard: e.target.value,
                        }));
                      }}
                    />
                  </FormGroup>
                  <FormGroup style={{ width: "49%" }}>
                    <label htmlFor="">Hard drive :</label>
                    <input
                      type="text"
                      value={specsInputs?.hardDrive}
                      onChange={(e) => {
                        setSpecsInputs((prev) => ({
                          ...prev,
                          hardDrive: e.target.value,
                        }));
                      }}
                    />
                  </FormGroup>
                  <FormGroup style={{ width: "49%" }}>
                    <label htmlFor="">Graphic Card :</label>
                    <input
                      type="text"
                      value={specsInputs?.graphicCard}
                      onChange={(e) => {
                        setSpecsInputs((prev) => ({
                          ...prev,
                          graphicCard: e.target.value,
                        }));
                      }}
                    />
                  </FormGroup>
                  <FormGroup style={{ width: "49%" }}>
                    <label htmlFor="">Display :</label>
                    <input
                      type="text"
                      value={specsInputs?.display}
                      onChange={(e) => {
                        setSpecsInputs((prev) => ({
                          ...prev,
                          display: e.target.value,
                        }));
                      }}
                    />
                  </FormGroup>
                  <FormGroup style={{ width: "49%" }}>
                    <label htmlFor="">Os :</label>
                    <input
                      type="text"
                      value={specsInputs?.os}
                      onChange={(e) => {
                        setSpecsInputs((prev) => ({
                          ...prev,
                          os: e.target.value,
                        }));
                      }}
                    />
                  </FormGroup>
                  <FormGroup style={{ width: "49%" }}>
                    <label htmlFor="">Speaker :</label>
                    <input
                      type="text"
                      value={specsInputs?.speaker}
                      onChange={(e) => {
                        setSpecsInputs((prev) => ({
                          ...prev,
                          speaker: e.target.value,
                        }));
                      }}
                    />
                  </FormGroup>
                  <FormGroup style={{ width: "49%" }}>
                    <label htmlFor="">Color :</label>
                    <input
                      type="text"
                      value={specsInputs?.color}
                      onChange={(e) => {
                        setSpecsInputs((prev) => ({
                          ...prev,
                          color: e.target.value,
                        }));
                      }}
                    />
                  </FormGroup>
                  <FormGroup style={{ width: "49%" }}>
                    <label htmlFor="">Type :</label>
                    <input
                      type="text"
                      value={specsInputs?.type}
                      onChange={(e) => {
                        setSpecsInputs((prev) => ({
                          ...prev,
                          type: e.target.value,
                        }));
                      }}
                    />
                  </FormGroup>
                </FormDivision>
              </> : ''
            }
            <ButtonContainer>
              <Button onClick={handleSubmit}>Save</Button>
            </ButtonContainer>
          </FormSubDiv>
        </FormContainer>
      </SubContainer>
    </Container>
  );
}

export default AddProd;
