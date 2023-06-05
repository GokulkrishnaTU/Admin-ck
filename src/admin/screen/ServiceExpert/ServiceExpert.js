import { React, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Button,
  ImageDiv,
  MenuBar,
  MenuItems,
  Search,
  Select,
  Table,
  TableContainer,
  Container,
  Searchbar,
} from "./ServiceExpert.styled";
import { SearchIcon, EditIcon, TrashIcons } from "../../assets/icons";
import AdminTable from "../../components/Table/AdminTable";
import { server_api } from "../../const/api";
import axios from "axios";
import EditServiceReg from "./EditServiceReg";
import moment from "moment";

function ServiceExpert() {
  const [data, setData] = useState([]);
  const [editDetails, setEditDetails] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  console.log("Data=>", data);
  const [servicePartnerData, setServicePartnerData] = useState([]);
  const [phNo, setPhNo] = useState("");
  const [complainDetails, setComplaintDetails] = useState("");
  const columns = [
    {
      Header: "SlNo",
      accessor: "slno",
      sortType: "basic",
    },
    {
      Header: "Date of Registration",
      accessor: "date",
      sortType: "basic",
    },
    {
      Header: "Service Type",
      accessor: "service_types",
      sortType: "basic",
    },
    {
      Header: "Brand",
      accessor: "brand",
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
      Header: "Complaint",
      accessor: "complaint",
      sortType: "basic",
    },
    {
      Header: "Service Pack ExpDate",
      accessor: "servicePackExpDate",
      sortType: "basic",
    },
    {
      Header: "Advance Payment",
      accessor: "advance_payment",
      sortType: "basic",
    },
    {
      Header: "Service List",
      accessor: "serviceList",
      sortType: "basic",
    },
    {
      Header: "Details",
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
          // console.log("Date", );
          data1.push({
            id: item?.id,
            slno: item?.slno,
            service_types: item?.serviceTypes,
            brand: item?.brand,
            yearOfPurchase: item?.yearOfPurchase,
            warranty: item?.warranty,
            warrantyExpiryDate: moment(item?.warrantyExpiryDate).format("DD-MM-YYYY"),
            complaint: item?.complaint,
            servicePackDate: item?.servicePackDate,
            servicePackExpDate: item?.servicePackExpDate,
            serviceList: item?.serviceList,
            name: item?.name,
            advance_payment: item?.advance_payment,
            date: moment(item?.created_at).format("DD-MM-YYYY"),
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
  const handleClick = (e) => {
    e.preventDefault();
    console.log("Phone Numbewr", phNo);
    const data1 = [];
    axios
      .get(`${server_api}/api/getServiceDetailsByMob/${phNo}`)
      .catch((err) => {
        console.log(err);
        alert("No data found");
      })
      .then((response) => {
        if (response.status == 200) {
          return response.data;
        }
      })
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
            yearOfPurchase: item?.yearOfPurchase,
            warranty: item?.warranty,
            warrantyExpiryDate: moment(item?.warrantyExpiryDate).format("DD-MM-YYYY"),
            complaint: item?.complaint,
            servicePackDate: item?.servicePackDate,
            servicePackExpDate: item?.servicePackExpDate,
            serviceList: item?.serviceList,
            isEdit: true,
            name: (
              <ImageDiv>
                <img
                  src={EditIcon}
                  onClick={() => {
                    setIsOpen(true);
                    setEditDetails(item);
                  }}
                />
              </ImageDiv>
            ),
            advance_payment: item?.advance_payment,
          });
        });
        setData(data1);
      });
  };
  return (
    <Container>
      <MenuBar>
        <p>Service List - (8606606046)</p>
        <MenuItems>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "30px",
            }}
          >
            <Search>
              <input type="number" value={phNo} onChange={(e) => setPhNo(e.target.value)} />
              <img src={SearchIcon} onClick={handleClick} />
            </Search>
          </div>
        </MenuItems>
      </MenuBar>
      <TableContainer>
        <AdminTable columns={columns} data={data} heading="Exam Category List" />
      </TableContainer>
      <EditServiceReg
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        editDetails={editDetails}
        setEditDetails={setEditDetails}
        handleClick={handleClick}
      />
    </Container>
  );
}

export default ServiceExpert;
