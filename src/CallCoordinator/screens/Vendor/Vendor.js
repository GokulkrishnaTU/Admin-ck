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
} from "./Vendor.styled";
import { SearchIcon, EditIcon, TrashIcons } from "../../assets/icons";
import AddVendor from "./AddVendor";
import UpdateVendor from "./UpdateVendor";
import DeletePopUp from "../../../admin/screen/DeletePopUp/DeletePopUp";
import AdminTable from "../../../admin/components/Table/AdminTable";
import { server_api } from "../../../admin/const/api";
import axios from "axios";

function Vendor() {
  //   const navigation = useNavigate();
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
      Header: "Brand",
      accessor: "brand",
      sortType: "basic",
    },
    {
      Header: "Phone Number",
      accessor: "contact_no",
      sortType: "basic",
    },
    {
      Header: "Email Id",
      accessor: "email_id",
      sortType: "basic",
    },
    {
      Header: "District",
      accessor: "district",
      sortType: "basic",
    },
    {
      Header: "Warranty",
      accessor: "warranty",
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
    fetch(`${server_api}/api/getVendor`)
      .then((response) => response.json())
      .then((response) => response.filter((prod) => prod?.warranty == 0))
      .then((response) => {
        response?.map((item, index) => {
          console.log(response);
          console.log(data1);
          data1.push({
            id: item?.id,
            no: index + 1,
            name: item?.vendor_name,
            address: item?.address,
            contact_no: item?.contact_no,
            brand: item?.brand,
            email_id: item?.email_id,
            district: item?.district_name,
            warranty: item?.warranty == 0 ? "Yes" : "No",
            action: (
              <ImageDiv>
                <img
                  src={EditIcon}
                  alt=""
                  onClick={() => {
                    setEdit(true);
                    setEditDetails(item);
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
  useEffect(() => {
    getServicePart();
  }, []);
  const sendRequest = async () => {
    const res = await axios
      .get(`${server_api}/api/deleteVendor/${activeId}`)
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
        <p>Vendor Details</p>
        <MenuItems>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "30px",
            }}
          >
            <Button onClick={() => setOpen(true)}>Add Vendor</Button>
          </div>
        </MenuItems>
      </MenuBar>
      <TableContainer>
        <AdminTable columns={columns} data={data} heading="Exam Category List" />
        <AddVendor isOpen={isOpen} onClose={() => setOpen(false)} getServicePart={getServicePart} />
        <UpdateVendor
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

export default Vendor;
