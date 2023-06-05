import { React, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { MenuBar, Container, TableDiv, ImageDiv } from "./Quotation.styled";
import { SearchIcon, EditIcon, TrashIcons } from "../../assets/icons";
// import AdminTable from "../../components/Table/AdminTable";
import AdminTable from "../../components/Table/AdminTable";
import { server_api } from "../../const/api";
import axios from "axios";

import SendIcon from "@mui/icons-material/Send";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeletePopUp from "../DeletePopUp/DeletePopUp";
import UpdateQuotation from "./UpdateQuotation";
import { Header } from "rsuite";

function Quotation() {
  const [data, setData] = useState([]);
  const [isEdit, setEdit] = useState(false);
  const [editDetails, setEditDetails] = useState("");
  const [isDel, setDel] = useState(false);
  const [activeId, setActiveId] = useState("");
  const [productDetails, setProductDetails] = useState("");
  const [preparedDetails, setPreparedDetails] = useState("");

  const columns = [
    {
      Header: "Ticket No.",
      accessor: "ticket_no",
      sortType: "basic",
    },
    {
      Header: "Quotation No.",
      accessor: "quot_no",
      sortType: "basic",
    },
    {
      Header: "Item Details",
      accessor: "item_details",
      sortType: "basic",
    },
    {
      Header: "Terms & Conditions",
      accessor: "terms_conditions",
      sortType: "basic",
    },

    {
      Header: "Prepared By",
      accessor: "prepared_by",
      sortType: "basic",
    },
    {
      Header: "Contact No.",
      accessor: "contact_no",
      sortType: "basic",
    },
    {
      Header: "Customer Approval",
      accessor: "customer_approval",
      sortType: "basic",
    },
    {
      Header: "Actions",
      accessor: "actions",
      sortType: "basic",
    },
  ];
  function getQuotationList() {
    const data1 = [];
    fetch(`${server_api}/api/listQuot`)
      .then((response) => response.json())
      .then((response) => {
        console.log("details=>", response);
        response?.map((item, index) => {
          // console.log("item=>", JSON.parse(item?.item_details));
          data1.push({
            id: item?.id,
            ticket_no: item?.ticket_no,
            quot_no: item?.quot_no,
            // qnty: JSON.parse(item?.item_details).map((prod) => prod?.qnty),
            // product_id: JSON.parse(item?.item_details).map((prod) => prod?.product_id),
            terms_conditions: item?.terms_conditions,
            prepared_by: item?.prepared_by?.name,
            contact_no: item?.prepared_by?.phone,
            customer_approval: (
              <>
                {item?.customer_approval == null
                  ? "Awaiting"
                  : item?.customer_approval == "null"
                  ? "Awaiting"
                  : ""}
                {item?.customer_approval == 0 ? "Rejected" : ""}
                {item?.customer_approval == 1 ? "Accepted" : ""}
              </>
            ),
            item_details: (
              <table>
                <tr>
                  <th>Title</th>
                  <th>Qnty</th>
                  <th>Warranty</th>
                  <th>Price</th>
                </tr>
                {item?.productArray.map((prod) => (
                  <tr>
                    <th>{prod?.title}</th>
                    <th>{prod?.qnty}</th>
                    <th>{prod?.warranty}</th>
                    <th>{prod?.offer_price}</th>
                  </tr>
                ))}
              </table>
            ),
            actions: (
              <ImageDiv>
                <img
                  src={EditIcon}
                  alt=""
                  onClick={() => {
                    setEdit(true);
                    setEditDetails(item);
                    setProductDetails(item?.item_details);
                    setPreparedDetails(item?.prepared_by);
                    // setData(JSON.parse(item?.image));
                  }}
                />
                <img
                  src={TrashIcons}
                  alt=""
                  onClick={() => {
                    setDel(true);
                    setActiveId(item?.id);
                  }}
                />
              </ImageDiv>
            ),
          });
        });
        setData(data1);
      });
  }
  const sendRequest = async () => {
    const res = await axios
      .get(`${server_api}/api/deleteQuot/${activeId}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const handleDelete = (e) => {
    e.preventDefault();
    sendRequest()
      .then((res) => console.log(res.data))
      .then(() => {
        getQuotationList();
        setDel(false);
      });
  };
  useEffect(() => {
    getQuotationList();
  }, []);
  return (
    <Container>
      <MenuBar>
        <p>Quotation List</p>
      </MenuBar>
      <TableDiv>
        <AdminTable columns={columns} data={data} heading="Exam Category List" />
      </TableDiv>
      <DeletePopUp isDel={isDel} onClose={() => setDel(false)} delReq={handleDelete} />
      <UpdateQuotation
        isEdit={isEdit}
        setEditDetails={setEditDetails}
        onClose={() => setEdit(false)}
        editDetails={editDetails}
        setProductDetails={setProductDetails}
        productDetails={productDetails}
        setPreparedDetails={setPreparedDetails}
        preparedDetails={preparedDetails}
        getQuotationList={getQuotationList}
      />
    </Container>
  );
}

export default Quotation;
