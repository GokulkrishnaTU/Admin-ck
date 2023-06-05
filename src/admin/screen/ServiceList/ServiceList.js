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
} from "./ServiceList.styles";
import { SearchIcon, EditIcon, TrashIcons } from "../../assets/icons";
// import AddServiceEngineer from "./AddServiceEngineer";
// import EditServiceEngineer from "./EditServiceEngineer";
import DeletePopUp from "../DeletePopUp/DeletePopUp";
import AdminTable from "../../components/Table/AdminTable";
import { server_api } from "../../const/api";
import axios from "axios";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import AssignServiceEngineer from "./AssignServiceEngineer";

function ServiceList() {
  //   const navigation = useNavigate();
  const arr = [1, 2, 3];
  const [isOpen, setOpen] = useState(false);
  const [isEdit, setEdit] = useState(false);
  const [editDetails, setEditDetails] = useState("");
  const [isDel, setDel] = useState(false);
  const [activeId, setActiveId] = useState("");
  const [complainDetails, setComplaintDetails] = useState(false);
  const [data, setData] = useState([]);
  const [serviceEngineerData ,setServiceEngineerData] = useState([])
  const columns = [
    {
      Header: "slno.",
      accessor: "slno",
      sortType: "basic",
    },
    {
      Header: "Brand",
      accessor: "brand",
      sortType: "basic",
    },
    {
      Header: "Service Types",
      accessor: "serviceTypes",
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
      Header: "Service Pack Date",
      accessor: "servicePackDate",
      sortType: "basic",
    },
    {
      Header: "Service List",
      accessor: "service List",
      sortType: "basic",
    },
    {
      Header: "Service Pack Expiry Date",
      accessor: "service Pack ExpDate",
      sortType: "basic",
    },
    
    {
      Header: "Assign Service Engineer",
      accessor: "assign",
      sortType: "basic",
    },
  ];
  function getServicePack() {
    const data1 = [];
    fetch(`${server_api}/api/getServiceListOfServicePartner/2`)
      .then((response) => response.json())
      .then((response) => {
        response?.map((item, index) => {
          console.log(response);
          console.log(data1);
          data1.push({
            slno: item?.slno,
            brand: item?.brand,
            serviceTypes: item?.serviceTypes,
            yearOfPurchase: item?.yearOfPurchase,
            warranty: item?.warranty,
            servicePackDate: item?.servicePackDate,
            complaint: item?.complaint,
            complaint: item?.complaint,
            assign: (
              <ImageDiv>
                <PersonAddAltIcon
                fontSize="small"
                  src={EditIcon}
                  alt=""
                  onClick={() => {
                    setOpen(true);
                    setComplaintDetails(item)
                    // setData(JSON.parse(item?.image));
                  }}
                  style={{cursor:'pointer', opacity: '0.7'}}
                />
              </ImageDiv>
            ),
          });
        });
        setData(data1);
      });
  }
  const sendReq = () => {
    axios.get(`${server_api}/api/getServiceEngineer`).then((res)=>{
      console.log("data",res.data)
      setServiceEngineerData(res.data)
    })
  }
  useEffect(() => {
    getServicePack();
    sendReq()
  }, []);

  return (
    <Container>
      <MenuBar>
        <p>Service List</p>
        <MenuItems>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "30px",
            }}
          >
            {/* <Button onClick={() => setOpen(true)}>Add Service Engineer</Button> */}
          </div>
        </MenuItems>
      </MenuBar>
      <TableContainer>
        <AdminTable
          columns={columns}
          data={data}
          heading="Exam Category List"
        />
        <AssignServiceEngineer isOpen={isOpen} onClose={() => setOpen(false)} complainDetails={complainDetails} serviceEngineerData={serviceEngineerData} />
      </TableContainer>
    </Container>
  );
}

export default ServiceList;



