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
} from "./ViewServicePartner.styled";
import { SearchIcon, EditIcon, TrashIcons } from "../../assets/icons";
import AddServicePartner from "./AddServicePartner";
import EditServicePartner from "./EditServicePartner";
import DeletePopUp from "../../../admin/screen/DeletePopUp/DeletePopUp";
import AdminTable from "../../../admin/components/Table/AdminTable";
import { server_api } from "../../../admin/const/api";
import axios from "axios";
import VisibilityIcon from "@mui/icons-material/Visibility";

function ServicePartnerDetails() {
  const navigate = useNavigate();
  const arr = [1, 2, 3];
  const [isOpen, setOpen] = useState(false);
  const [isEdit, setEdit] = useState(false);
  const [editDetails, setEditDetails] = useState("");
  const [isDel, setDel] = useState(false);
  const [activeId, setActiveId] = useState("");
  const [data, setData] = useState([]);
  const columns = [
    {
      Header: "No.",
      accessor: "no",
      sortType: "basic",
    },
    {
      Header: "Name",
      accessor: "name",
      sortType: "basic",
    },
    {
      Header: "Address",
      accessor: "address",
      sortType: "basic",
    },
    {
      Header: "Contact",
      accessor: "contact",
      sortType: "basic",
    },
    {
      Header: "Freelancer",
      accessor: "freelancer",
      sortType: "basic",
    },
    {
      Header: "District",
      accessor: "district_name",
      sortType: "basic",
    },
    {
      Header: "Status",
      accessor: "status",
      sortType: "basic",
    },
    {
      Header: "Amount",
      accessor: "amount",
      sortType: "basic",
    },
    {
      Header: "Category",
      accessor: "category",
      sortType: "basic",
    },
    {
      Header: "Level",
      accessor: "level",
      sortType: "basic",
    },
    {
      Header: "Action",
      accessor: "action",
      sortType: "basic",
    },
  ];
  function getServicePart() {
    const data1 = [];
    fetch(`${server_api}/api/getServicePartner`)
      .then((response) => response.json())
      .then((response) => {
        response?.map((item, index) => {
          console.log(response);
          console.log(data1);
          data1.push({
            id: item?.id,
            no: index + 1,
            name: item?.name,
            address: item?.address,
            contact: item?.contact,
            freelancer: item?.freelancer == 1 ? "Yes" : "No",
            status: item?.status,
            level: item?.level,
            amount: item?.amount,
            category: item?.category,
            district_name: item?.district_name,
            action: (
              <VisibilityIcon
                fontSize="small"
                style={{ color: "rgba(0, 0, 0, 0.7)", cursor: "pointer" }}
                onClick={() =>
                  navigate("/service-engineers-details", {
                    state: { name: item?.name, id: item?.id },
                  })
                }
              />
            ),
          });
        });
        setData(data1);
      });
  }
  useEffect(() => {
    getServicePart();
  }, []);
  const sendRequest = async () => {
    const res = await axios
      .get(`${server_api}/api/deleteServicePartner/${activeId}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const handleDelete = (e) => {
    e.preventDefault();
    sendRequest()
      .then((res) => console.log(res.data))
      .then(() => {
        getServicePart();
        setDel(false);
      });
  };
  return (
    <Container>
      <MenuBar>
        <p>Service Partner</p>
      </MenuBar>
      <TableContainer>
        <AdminTable columns={columns} data={data} heading="Exam Category List" />
        <AddServicePartner
          isOpen={isOpen}
          onClose={() => setOpen(false)}
          getServicePart={getServicePart}
        />
        <EditServicePartner
          isEdit={isEdit}
          onClose={() => setEdit(false)}
          editDetails={editDetails}
          setEditDetails={setEditDetails}
          getServicePart={getServicePart}
        />
        <DeletePopUp isDel={isDel} onClose={() => setDel(false)} delReq={handleDelete} />
      </TableContainer>
    </Container>
  );
}

export default ServicePartnerDetails;
