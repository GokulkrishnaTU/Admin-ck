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
} from "./FollowupFeedback.styled";
import AdminTable from "../../../admin/components/Table/AdminTable";
import { server_api } from "../../../admin/const/api";

function FollowupFeedback() {
  const [data, setData] = useState([]);
  const columns = [
    {
      Header: "Ticket No.",
      accessor: "ticket_no",
      sortType: "basic",
    },
    {
      Header: "Product condition",
      accessor: "product_condition",
      sortType: "basic",
    },
    {
      Header: "Complaint Repeated",
      accessor: "complaint_repeated",
      sortType: "basic",
    },
    {
      Header: "comment",
      accessor: "comment",
      sortType: "basic",
    },
  ];
  function getFollowupFeedback() {
    const data1 = [];
    fetch(`${server_api}/api/getServiceFollowup`)
      .then((response) => response.json())
      .then((response) => {
        response?.map((item, index) => {
          console.log(response);
          console.log(data1);
          data1.push({
            id: item?.id,
            ticket_no: item?.ticket_no,
            product_condition: item?.product_condition,
            complaint_repeated: item?.complaint_repeated,
            comment: item?.comment,
          });
        });
        setData(data1);
      });
  }
  useEffect(() => {
    getFollowupFeedback();
  }, []);

  return (
    <Container>
      <MenuBar>
        <p style={{ paddingLeft: "15px" }}>Followup Feedbacks</p>
      </MenuBar>
      <TableContainer>
        <AdminTable columns={columns} data={data} heading="Exam Category List" />
      </TableContainer>
    </Container>
  );
}

export default FollowupFeedback;
