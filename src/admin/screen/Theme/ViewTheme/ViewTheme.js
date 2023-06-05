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
} from "./ViewTheme.styled";
import { SearchIcon, EditIcon, TrashIcons } from "../../../assets/icons/index";
import AddTheme from "../AddTheme/AddTheme";
import EditTheme from "../EditTheme/EditTheme";
import DeletePopUp from "../../DeletePopUp/DeletePopUp";
import AdminTable from "../../../components/Table/AdminTable";
import { server_api } from "../../../const/api";
import axios from "axios";

function ViewTheme() {
  const [view, setView] = useState(false);
  const [isEdit, setEdit] = useState(false);
  const [editDetails, setEditDetails] = useState("");
  const [isDel, setDel] = useState(false);
  const [data, setData] = useState([]);
  const [activeId, setActiveId] = useState("");

  const columns = [
    {
      Header: "ID",
      accessor: "id",
      sortType: "basic",
    },
    {
      Header: "Layout",
      accessor: "layout",
      sortType: "basic",
    },
    {
      Header: "Image",
      accessor: "image",
      sortType: "basic",
    },
    {
      Header: "Color",
      accessor: "color",
      sortType: "basic",
    },

    {
      Header: "Code",
      accessor: "code",
      sortType: "basic",
    },
    {
      Header: "Action",
      accessor: "action",
      sortType: "basic",
    },
  ];
  function getThemeList() {
    const data1 = [];
    fetch(`${server_api}/api/getThemeList`)
      .then((response) => response.json())
      .then((response) => {
        response?.map((item) => {
          data1.push({
            id: item?.id,
            layout: item?.layoutname,
            image: item?.image ? (
              <img
                src={item?.image}
                style={{
                  height: "100px",
                  width: "100px",
                  objectFit: "contain",
                }}
              />
            ) : null,
            color: item?.color,
            code: item?.code,
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
  React.useEffect(() => {
    getThemeList();
  }, []);
  const sendRequest = async () => {
    const res = await axios
      .post(`${server_api}/api/deleteTheme`, {
        id: activeId,
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const handleDelete = (e) => {
    e.preventDefault();
    sendRequest()
      .then((res) => console.log(res.data))
      .then(() => {
        getThemeList();
        setDel(false);
      });
  };
  return (
    <Container>
      <MenuBar>
        <p>Theme</p>
        <MenuItems>
          <Wrapper>
            <Button onClick={() => setView(true)}>Add Theme</Button>
          </Wrapper>
          <MenuWrapperRight></MenuWrapperRight>
        </MenuItems>
      </MenuBar>
      <TableContainer>
        <AdminTable
          columns={columns}
          data={data}
          // heading="Theme"
        />
        <AddTheme view={view} onClose={() => setView(false)} getThemeList={getThemeList} />

        <EditTheme
          isEdit={isEdit}
          onClose={() => setEdit(false)}
          editDetails={editDetails}
          setEditDetails={setEditDetails}
          getThemeList={getThemeList}
        />
        <DeletePopUp isDel={isDel} onClose={() => setDel(false)} delReq={handleDelete} />
      </TableContainer>
    </Container>
  );
}

export default ViewTheme;
