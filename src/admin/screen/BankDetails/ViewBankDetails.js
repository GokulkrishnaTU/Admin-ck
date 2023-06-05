import React, { useState } from "react";
import {
  Container,
  Button,
  ImageDiv,
  MenuBar,
  MenuItems,
  MenuWrapperLeft,
  MenuWrapperRight,
  Search,
  Select,
  Table,
  TableContainer,
  Wrapper,
} from "./ViewBankDetails.styled";
import { SearchIcon, EditIcon, TrashIcons } from "../../assets/icons/index";
import AddBankDetails from "./AddBankDetails";
import EditBankDetails from "./EditBankDetails";
import DeletePopUp from "../DeletePopUp/DeletePopUp";
import AdminTable from "../../components/Table/AdminTable";
import { server_api } from "../../const/api";
import axios from "axios";

function ViewBankDetails() {
    const [isOpen, setOpen] = useState(false);
    const [isEdit, setEdit] = useState(false);
    const [editDetails, setEditDetails] = useState("");
    const [isDel, setDel] = useState(false);
    const [activeId, setActiveId] = useState("");
    const [data, setData] = useState([]);

  const columns = [
    {
      Header: "No",
      accessor: "no",
      sortType: "basic",
    },
    {
      Header: "Account Name",
      accessor: "account_name",
      sortType: "basic",
    },
    {
      Header: "Account No",
      accessor: "account_no",
      sortType: "basic",
    },
    {
      Header: "Bank Name",
      accessor: "bank_name",
      sortType: "basic",
    },

    {
      Header: "Bank Branch",
      accessor: "bank_branch",
      sortType: "basic",
    },
    {
      Header: "IFSC Code",
      accessor: "ifsc_code",
      sortType: "basic",
    },
    {
      Header: "Actions",
      accessor: "actions",
      sortType: "basic",
    },
  ];
  function getBankDetails() {
    const data1 = [];
    fetch(`${server_api}/api/getBank`)
      .then((response) => response.json())
      .then((response) => {
        response?.map((item, index) => {
          data1.push({
            id: item?.id,
            no: index+1,
            account_name: item?.account_name,
            account_no: item?.account_no,
            bank_name: item?.bank_name,
            bank_branch: item?.bank_branch,
            ifsc_code: item?.ifsc_code,
            actions: (
              <ImageDiv>
                <img
                  src={EditIcon}
                  alt=""
                  onClick={() => {
                    setEdit(true);
                    setEditDetails(item);
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
            )
          });
        });

        setData(data1);
      });
  }
  React.useEffect(() => {
    getBankDetails();
  }, []);
  const sendRequest = async () => {
    const res = await axios
      .get(`${server_api}/api/deleteBank/${activeId}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const handleDelete = (e) => {
    e.preventDefault();
    sendRequest()
      .then((res) => console.log(res.data))
      .then(() => {
        getBankDetails()
        setDel(false)
      });
  };
  return (
    <Container>
      <MenuBar>
        <p>Bank Details</p>
        <Button onClick={() => setOpen(true)}>Add Bank Details</Button>
      </MenuBar>
      <TableContainer>
        <AdminTable
          columns={columns}
          data={data}
          heading="Exam Category List"
        />
        <AddBankDetails
          isOpen={isOpen}
          onClose={() => setOpen(false)}
          getBankDetails={getBankDetails}
        />
        <EditBankDetails
          isEdit={isEdit}
          onClose={() => setEdit(false)}
          editDetails={editDetails}
          setEditDetails={setEditDetails}
          getBankDetails={getBankDetails}
        />
        <DeletePopUp
          isDel={isDel}
          onClose={() => setDel(false)}
          delReq={handleDelete}
        />
      </TableContainer>
    </Container>
  );
}
export default ViewBankDetails;