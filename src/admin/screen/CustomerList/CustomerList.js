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
} from "./CustomerList.styled";
import { SearchIcon, EditIcon, TrashIcons, AddIcon } from "../../assets/icons";
import AdminTable from "../../components/Table/AdminTable";
import { server_api } from "../../const/api";
import axios from "axios";
import moment from "moment";

function CustomerList() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    getProductCategory();
  }, []);

  const columns = [
    {
      Header: "No",
      accessor: "no",
      sortType: "basic",
    },
    {
      Header: "Name",
      accessor: "name",
      sortType: "basic",
    },
    {
      Header: "Designation",
      accessor: "designation",
      disableSortBy: true,
    },
    {
      Header: "DOB",
      accessor: "dob",
      disableSortBy: true,
    },
    {
      Header: "Organization Type",
      accessor: "org_type",
      disableSortBy: true,
    },
    {
      Header: "Organization Name",
      accessor: "org_name",
      disableSortBy: true,
    },
    {
      Header: "Address",
      accessor: "address",
      disableSortBy: true,
    },
    {
      Header: "Pincode",
      accessor: "pincode",
      disableSortBy: true,
    },
    {
      Header: "Contact",
      accessor: "contact",
      disableSortBy: true,
    },
  ];
  function getProductCategory() {
    const data1 = [];
    fetch(`${server_api}/api/getUserList`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        response?.map((item, index) => {
          console.log(item);
          data1.push({
            no: index + 1,
            name: item?.name,
            designation: item?.designation,
            org_type: item?.type_of_organization,
            org_name: item?.organization_name,
            dob: moment(item?.dob).format("DD/MM/YYYY"),
            address: (
              <>
                <p>{item?.district}</p>
                <p>{item?.state}</p>
              </>
            ),
            pincode: item?.pincode,
            contact: (
              <>
                <p>{item?.mob1}</p>
                <p>{item?.secMob}</p>
              </>
            ),
          });
        });
        setData(data1);
      });
  }
  return (
    <Container>
      <MenuBar>
        <p>Customer List</p>
      </MenuBar>
      <TableContainer>
        <AdminTable columns={columns} data={data} heading="Exam Category List" />
      </TableContainer>
    </Container>
  );
}

export default CustomerList;
