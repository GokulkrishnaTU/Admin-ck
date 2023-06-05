import { React, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Button,
  ImageDiv,
  MenuBar,
  TableContainer,
  Container,
  Searchbar,
} from "./ServiceComplaints.styled";
import AdminTable from "../../components/Table/AdminTable";
import { server_api } from "../../const/api";
import axios from "axios";
import moment from "moment";

function ServiceComplaints() {
  const [data, setData] = useState([]);
  const [servicePartnerData, setServicePartnerData] = useState([]);
  const [isOpen, setOpen] = useState(false);
  const [complainDetails, setComplaintDetails] = useState("");
  const columns = [
    {
      Header: "SlNo",
      accessor: "slno",
      sortType: "basic",
    },
    {
      Header: "Brand",
      accessor: "brand",
      sortType: "basic",
    },
    {
      Header: "Complaint",
      accessor: "complaint",
      sortType: "basic",
    },
    {
      Header: "Service Type",
      accessor: "service_types",
      sortType: "basic",
    },

    {
      Header: "Year Of Purchase",
      accessor: "yearOfPurchase",
      sortType: "basic",
    },
    {
      Header: "Warranty",
      accessor: "warranty",
      sortType: "basic",
    },
    {
      Header: "Warranty Expiry Date",
      accessor: "warrantyExpiryDate",
      sortType: "basic",
    },

    {
      Header: "Service Pack Date",
      accessor: "servicePackDate",
      sortType: "basic",
    },
    {
      Header: "Service Pack ExpDate",
      accessor: "servicePackExpDate",
      sortType: "basic",
    },
    {
      Header: "Service List",
      accessor: "serviceList",
      sortType: "basic",
    },
    {
      Header: "User Details",
      accessor: "name",
      sortType: "basic",
    },
  ];

  function getServiceComplaints() {
    const data1 = [];
    fetch(`${server_api}/api/getServiceReg`)
      .then((response) => response.json())
      .then((response) => {
        console.log("res=>", response);
        response?.map((item, index) => {
          console.log(response);
          console.log(data1);
          data1.push({
            id: item?.id,
            slno: item?.slno,
            service_types: item?.serviceTypes,
            brand: item?.brand,
            yearOfPurchase: moment(item?.yearOfPurchase).format("DD/MM/YYYY"),
            warranty: item?.warranty,
            warrantyExpiryDate: moment(item?.warrantyExpiryDate).format("DD/MM/YYYY"),
            complaint: item?.complaint,
            servicePackDate: moment(item?.servicePackDate).format("DD/MM/YYYY"),
            servicePackExpDate: moment(item?.servicePackExpDate).format("DD/MM/YYYY"),
            serviceList: item?.serviceList,
            name: item?.name,
          });
        });
        setData(data1);
      });
  }
  const sendReq = async () => {
    let res = await axios
      .get(`${server_api}/api/getServicePartner`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    getServiceComplaints();
    sendReq().then((data) => {
      console.log(data);
      let listArray = [];
      for (let i = 0; i < data?.length; i++) {
        listArray?.push({ value: data[i]?.id, label: data[i]?.name });
      }
      setServicePartnerData(listArray);
    });
  }, []);
  return (
    <Container>
      <MenuBar>
        <p>Service Complaints</p>
      </MenuBar>
      <TableContainer>
        <AdminTable columns={columns} data={data} heading="Exam Category List" />
      </TableContainer>
    </Container>
  );
}

export default ServiceComplaints;
