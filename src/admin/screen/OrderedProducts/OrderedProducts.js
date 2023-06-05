import { React, useState, useEffect } from "react";
import {
  Button,
  ImageDiv,
  MenuBar,
  MenuItems,
  Search,
  Table,
  TableContainer,
  Container,
} from "./OrderedProducts.styled";
import { SearchIcon, EditIcon, TrashIcons } from "../../assets/icons";
import { useNavigate } from "react-router-dom";
import AdminTable from "../../components/Table/AdminTable";
import { server_api } from "../../const/api";
import { HdrEnhancedSelectOutlined } from "@mui/icons-material";
import moment from "moment";

function OrderedProducts() {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const columns = [
    {
      Header: "Invoice ID",
      accessor: "invoice_id",
      sortType: "basic",
    },
    {
      Header: "Customer Name",
      accessor: "cust_name",
      sortType: "basic",
    },
    {
      Header: "Purchase Date",
      accessor: "purchase_date",
      sortType: "basic",
    },
    {
      Header: "Purchase Time",
      accessor: "purchase_time",
      sortType: "basic",
    },
    {
      Header: "Amount",
      accessor: "amount",
      sortType: "basic",
    },
    {
      Header: "Mobile number",
      accessor: "mobno",
      sortType: "basic",
    },
    {
      Header: "Action",
      accessor: "action",
      sortType: "basic",
    },
  ];
  function getOrderedProducts() {
    const data1 = [];
    fetch(`${server_api}/api/getAllInvoices`)
      .then((response) => response.json())
      .then((response) => {
        response?.map((item) => {
          console.log(response);
          data1.push({
            invoice_id: item?.invoiceId,
            cust_name: item?.customerName,
            purchase_time: moment(item?.purchaseDate).format("LT"),
            purchase_date: moment(item?.purchaseDate).format("DD/MM/YYYY"),
            amount: item?.totalAmount,
            mobno: item?.mobileNumber,
            action: (
              <ImageDiv>
                <Button
                  onClick={() => {
                    navigate(`/ordered-product-details`, {
                      state: { id: item?.invoiceId, totalAmount: item?.totalAmount },
                    });
                  }}
                >
                  View More
                </Button>
              </ImageDiv>
            ),
          });
        });
        setData(data1);
      });
  }
  useEffect(() => {
    getOrderedProducts();
  }, []);
  return (
    <Container>
      <MenuBar>
        <p>Ordered Products</p>
      </MenuBar>
      <TableContainer>
        <AdminTable columns={columns} data={data} heading="Exam Category List" />
      </TableContainer>
    </Container>
  );
}

export default OrderedProducts;
