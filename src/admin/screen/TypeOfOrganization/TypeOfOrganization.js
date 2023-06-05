import { React, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Button,
  ImageDiv,
  MenuBar,
  MenuItems,
  TableContainer,
  Container
} from "./TypeOfOrganization.styled";
import { SearchIcon, EditIcon, TrashIcons, AddIcon } from "../../assets/icons";
import AddTypeOfOrg from "./AddTypeOfOrg";
import EditTypeOfOrg from "./EditTypeOfOrg";
import DeletePopUp from "../DeletePopUp/DeletePopUp";
import AdminTable from "../../components/Table/AdminTable";
import { server_api } from "../../const/api";
import axios from "axios";

function TypeOfOrganization() {
  const navigate = useNavigate();

  const [isOpen, setOpen] = useState(false);
  const [isEdit, setEdit] = useState(false);
  const [editDetails, setEditDetails] = useState("");
  const [isDel, setDel] = useState(false);
  const [activeId, setActiveId] = useState("");
  const [data, setData] = useState([]);

  const columns = [
    {
      Header: "No.",
      accessor: "index",
      sortType: "basic",
    },
    {
      Header: "Organisation Name",
      accessor: "organisation_name",
      disableSortBy: true,
    },
    {
      Header: "purchase Type Name",
      accessor: "purchaseTypeName",
      sortType: "basic",
    },
    {
      Header: "Action",
      accessor: "action",
      disableSortBy: true,
    }
  ];
  function getOrgType() {
    const data1 = [];
    fetch(`${server_api}/api/getTypeOfOrganisation`)
      .then((response) => response.json())
      .then((response) => {
        response?.map((item, index) => {
          data1.push({
            organisation_id: item?.organisation_id,
            purchaseTypeId: item?.purchaseTypeId,
            index: index + 1,
            purchaseTypeName: item?.type_name,
            organisation_name: item?.organisation_name,
            action: (
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
                    setActiveId(item?.organisation_id);
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
    getOrgType();
  }, []);
  const sendRequest = async () => {
    const res = await axios
      .post(`${server_api}/api/deleteTypeOfOrganisation`, {
        id: activeId,
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const handleDelete = (e) => {
    e.preventDefault();
    sendRequest().then(() =>{
      getOrgType()
      setDel(false)
    });
  };
  return (
    <Container>
      <MenuBar>
        <p>Type of organisation</p>
        <MenuItems>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "30px",
            }}
          >
            <Button onClick={() => setOpen(true)}>Add Organisation Type</Button>
          </div>
        </MenuItems>
      </MenuBar>
      <TableContainer>
        <AdminTable
          columns={columns}
          data={data}
          heading="Exam Category List"
        />
        <AddTypeOfOrg isOpen={isOpen} onClose={() => setOpen(false)} getOrgType={getOrgType} />
        <EditTypeOfOrg
          isEdit={isEdit}
          onClose={() => setEdit(false)}
          editDetails={editDetails}
          setEditDetails={setEditDetails}
          getOrgType={getOrgType}
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

export default TypeOfOrganization;
