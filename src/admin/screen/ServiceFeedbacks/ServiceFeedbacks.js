import { React, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { MenuBar, TableContainer, Container } from "./ServceFeedbacks.styled";
import AdminTable from "../../../admin/components/Table/AdminTable";
import { server_api } from "../../../admin/const/api";

function ServiceFeedbacks() {
  const [data, setData] = useState([]);
  const columns = [
    {
      Header: "Ticket No.",
      accessor: "no",
      sortType: "basic",
    },
    {
      Header: "Service Rating",
      accessor: "ck_service_rating",
      sortType: "basic",
    },
    {
      Header: "Service Engineer Rating",
      accessor: "ck_service_engineer_rating",
      sortType: "basic",
    },
    {
      Header: "Suggestion",
      accessor: "suggestion",
      sortType: "basic",
    },
  ];
  function getServiceFeedbacks() {
    const data1 = [];
    fetch(`${server_api}/api/getfeedback`)
      .then((response) => response.json())
      .then((response) => {
        response?.map((item, index) => {
          console.log(response);
          console.log(data1);
          data1.push({
            id: item?.id,
            no: item?.ticket_no,
            ck_service_rating: item?.ck_service_rating,
            ck_service_engineer_rating: item?.ck_service_engineer_rating,
            suggestion: item?.suggestion,
          });
        });
        setData(data1);
      });
  }
  useEffect(() => {
    getServiceFeedbacks();
  }, []);

  return (
    <Container>
      <MenuBar>
        <p style={{ paddingLeft: "15px" }}>Service Feedbacks</p>
      </MenuBar>
      <TableContainer>
        <AdminTable columns={columns} data={data} heading="Exam Category List" />
      </TableContainer>
    </Container>
  );
}

export default ServiceFeedbacks;
