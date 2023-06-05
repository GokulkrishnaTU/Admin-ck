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
} from "./PurchaseFeedback.styled";
import { SearchIcon, EditIcon, TrashIcons } from "../../assets/icons";
import AdminTable from "../../components/Table/AdminTable";
import { server_api } from "../../const/api";
import axios from "axios";

function PurchaseFeedback() {
  const [data, setData] = useState([]);
  const columns = [
    {
      Header: "No.",
      accessor: "no",
      sortType: "basic",
    },
    {
      Header: "Rating",
      accessor: "rating",
      sortType: "basic",
    },
    {
      Header: "Comment",
      accessor: "comment",
      sortType: "basic",
    },
    {
      Header: "User",
      accessor: "user",
      sortType: "basic",
    },
  ];

  function getPurchaseFeedback() {
    const data1 = [];
    fetch(`${server_api}/api/getPurchaseFeedback`)
      .then((response) => response.json())
      .then((response) => {
        response?.map((item, index) => {
          console.log(response);
          console.log(data1);
          data1.push({
            id: item?.id,
            no: index + 1,
            rating: item?.ratingText,
            comment: item?.comment,
            user: item?.name,
          });
        });
        setData(data1);
      });
  }
  useEffect(() => {
    getPurchaseFeedback();
  }, []);
  return (
    <Container>
      <MenuBar>
        <p>Purchase Feedback</p>
      </MenuBar>
      <TableContainer>
        <AdminTable
          columns={columns}
          data={data}
          heading="Exam Category List"
        />
      </TableContainer>
    </Container>
  );
}

export default PurchaseFeedback;
