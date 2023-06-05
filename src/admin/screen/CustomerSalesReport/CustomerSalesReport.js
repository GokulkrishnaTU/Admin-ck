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
  TableDiv,
} from "./CustomerSalesReport.styled";
import { SearchIcon, EditIcon, TrashIcons } from "../../assets/icons";
// import AdminTable from "../../components/Table/AdminTable";
import AdminTable from "./AdminTable";
import { server_api } from "../../const/api";
import axios from "axios";
import ViewDetails from "./ViewDetails";

import SendIcon from "@mui/icons-material/Send";
import VisibilityIcon from "@mui/icons-material/Visibility";

function CustomerSalesReport() {
  const navigate = useNavigate();
  const [isOpen, setOpen] = useState(false);
  const [sendQuotation, setSendQuotation] = useState(false);
  const [editDetails, setEditDetails] = useState("");
  const [isDel, setDel] = useState(false);
  const [userId, setUserId] = useState("");
  const [customSaleId, setCustomSaleId] = useState("");
  const [data, setData] = useState([]);
  const [details, setDetails] = useState("");
  const [userDetails, setUserDetails] = useState([]);
  const [fullDetails, setFullDetails] = useState([]);

  const columns = [
    {
      Header: "No.",
      accessor: "no",
      sortType: "basic",
    },
    {
      Header: "Product Category",
      accessor: "product_category",
      sortType: "basic",
    },
    {
      Header: "Purchase Type",
      accessor: "purchase_type",
      sortType: "basic",
    },
    {
      Header: "Category",
      accessor: "category_name",
      sortType: "basic",
    },
    {
      Header: "Details",
      accessor: "details",
      sortType: "basic",
    },

    {
      Header: "Actions",
      accessor: "actions",
      sortType: "basic",
    },
    {
      Header: "View More",
      accessor: "view_more",
      sortType: "basic",
    },
  ];
  function getCustomSale() {
    const data1 = [];
    fetch(`${server_api}/api/getCustomSale`)
      .then((response) => response.json())
      .then((response) => {
        console.log("details=>", response);
        response?.map((item, index) => {
          data1.push({
            id: item?.id,
            no: index + 1,
            product_category: item?.product_category_name,
            purchase_type: item?.type_name,
            category_name: item?.category_name,
            details: (
              <table>
                <tr>
                  <th>Brand</th>
                  <th>Specification</th>
                  <th>Quantity</th>
                </tr>
                {JSON.parse(item?.details).map((it) => (
                  <tr>
                    <td>
                      {it?.brand?.map((brands) => (
                        <p>{brands}</p>
                      ))}
                    </td>
                    <td>{it.specification}</td>
                    <td>{it.qnty}</td>
                  </tr>
                ))}
              </table>
            ),
            actions: (
              <ImageDiv>
                <div>
                  <VisibilityIcon
                    fontSize="small"
                    onClick={() => {
                      setOpen(true);
                      setDetails(JSON.parse(item?.details));
                      axios.get(`${server_api}/api/getUser1/${item?.user_id}`).then((res) => {
                        console.log("userDetails=>", res);
                        setUserDetails(res.data);
                      });
                    }}
                    style={{ cursor: "pointer" }}
                  />
                  <span>View</span>
                </div>
                <div>
                  <SendIcon
                    fontSize="small"
                    onClick={() => {
                      navigate("/add-custom-sale-report", { state: item });
                      setFullDetails(item);
                    }}
                    style={{ cursor: "pointer" }}
                  />
                  <span>Send</span>
                </div>
              </ImageDiv>
            ),
            quotation: (
              <Button
                style={{ width: "100px" }}
                onClick={() => {
                  setSendQuotation(true);
                  setFullDetails(item);
                }}
              >
                Send Quotation
              </Button>
            ),
            view_more: (
              <p
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigate("/view-detailed-customer-sales-report", {
                    state: item?.id,
                  });
                }}
              >
                View More
              </p>
            ),
          });
        });
        setData(data1);
      });
  }
  useEffect(() => {
    getCustomSale();
  }, []);
  return (
    <Container>
      <MenuBar>
        <p>Customer Sales Report</p>
      </MenuBar>
      <TableDiv>
        <AdminTable columns={columns} data={data} heading="Exam Category List" />
      </TableDiv>
      <ViewDetails
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        details={details}
        userDetails={userDetails}
      />
    </Container>
  );
}

export default CustomerSalesReport;
