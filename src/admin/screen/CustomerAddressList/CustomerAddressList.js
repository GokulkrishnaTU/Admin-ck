import { React, useState, useEffect } from "react";
import { MenuBar, MenuItems, TableContainer, Container } from "./CustomerAddressList.styled";
import AdminTable from "../../components/Table/AdminTable";
import { server_api } from "../../const/api";

function CustomerAddressList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getCustCategory();
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
      Header: "Type name",
      accessor: "type_name",
      disableSortBy: true,
    },
    {
      Header: "House name",
      accessor: "house_name",
      disableSortBy: true,
    },
    {
      Header: "Street name",
      accessor: "street_name",
      disableSortBy: true,
    },
    {
      Header: "District",
      accessor: "district",
      disableSortBy: true,
    },
    {
      Header: "State",
      accessor: "state",
      disableSortBy: true,
    },
    {
      Header: "Pincode",
      accessor: "pincode",
      sortType: "basic",
    },
  ];
  function getCustCategory() {
    const data1 = [];
    fetch(`${server_api}/api/getAllCustomerAddress`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        response?.map((item, index) => {
          console.log(item);
          data1.push({
            no: index + 1,
            name: item?.name,
            house_name: item?.house_name,
            street_name: item?.street_name,
            district: item?.district,
            state: item?.state,
            type_name: item?.type_name,
            pincode: item?.pincode,
          });
        });
        setData(data1);
      });
  }
  return (
    <Container>
      <MenuBar>
        <p>Customer Address List</p>
        <MenuItems>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "30px",
            }}
          ></div>
        </MenuItems>
      </MenuBar>
      <TableContainer>
        <AdminTable columns={columns} data={data} heading="Exam Category List" />
      </TableContainer>
    </Container>
  );
}

export default CustomerAddressList;
