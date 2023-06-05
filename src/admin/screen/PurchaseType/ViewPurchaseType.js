import { React, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import {
  Button,
  ImageDiv,
  MenuBar,
  MenuItems,
  TableContainer,
  Container,
} from "./ViewStyle";
import { SearchIcon, EditIcon, TrashIcons } from "../../assets/icons";
import AddPurchaseType from "./AddPurchaseType";
import EditPurchaseType from "./EditPurchaseType";
import DeletePopUp from "../DeletePopUp/DeletePopUp";
import AdminTable from "../../components/Table/AdminTable";
import { server_api } from "../../const/api";
import axios from "axios";

function ViewPurchaseType() {
  const navigation = useNavigate();

  const [isOpen, setOpen] = useState(false);
  const [isEdit, setEdit] = useState(false);
  const [isDel, setDel] = useState(false);
  const [editDetails, setEditDetails] = useState("");
  const [editCatDetails, setEditCatDetails] = useState("");
  const [activeId, setActiveId] = useState("");
  
  const [data, setData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const columns = [
    {
      Header: "No.",
      accessor: "no",
      sortType: "basic",
    },
    {
      Header: "Name",
      accessor: "typename",
      sortType: "basic",
    },
    {
      Header: "Image",
      accessor: "image",
      sortType: "basic",
    },
    {
      Header: "Code",
      accessor: "code",
      sortType: "basic",
    },
    {
      Header: "Product Categories",
      accessor: "product_category_name",
      sortType: "basic",
    },
    {
      Header: "Action",
      accessor: "action",
      sortType: "basic",
    },
  ];
  const getProdCat = async () => {
    await axios
      .get(`${server_api}/api/getProductCategory`)
      .then((res) => setCategoryData(res.data));
  };
  function getPurchaseType() {
    const data1 = [];
    fetch(`${server_api}/api/getPurchaseType`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        response?.map((item, index) => {
          data1.push({
            no: index + 1,
            id: item?.id,
            typename: item?.type_name,
            color: item?.color,
            code: item?.code,
            image: <img src={item?.type_image} alt="" width="100" />,
            product_category_name: (
              item?.product_category_name.map((prod)=>(
                <ul style={{margin:'0', listStyle:'none'}}>
                  <li>{prod}</li>
                </ul>
              ))
            ),
            product_category_id: item?.product_category_id,
            action: (
              <ImageDiv>
                <img
                  src={EditIcon}
                  alt=""
                  onClick={() => {
                    setEditCatDetails(JSON.parse(item?.product_category_id));
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
  useEffect(() => {
    getPurchaseType();
    getProdCat();
  }, []);
  const sendRequest = async () => {
    const res = await axios
      .post(`${server_api}/api/deletePurchaseType`, {
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
        getPurchaseType()
        setDel(false)
      });
  };
  return (
    <Container>
      <MenuBar>
        <p>Purchase Type</p>
        <MenuItems>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "30px",
            }}
          >
            <Button onClick={() => setOpen(true)}>Add Purchase Type</Button>
          </div>
          <div
            style={{
              display: "flex",
              gap: "30px",
              justifyContent: "center",
            }}
          ></div>
        </MenuItems>
      </MenuBar>
      <TableContainer>
        <AdminTable
          columns={columns}
          data={data}
          heading="Exam Category List"
        />
        <AddPurchaseType
          isOpen={isOpen}
          onClose={() => setOpen(false)}
          categoryData={categoryData}
          getPurchaseType={getPurchaseType}
        />
        <EditPurchaseType
          isEdit={isEdit}
          onClose={() => setEdit(false)}
          editDetails={editDetails}
          setEditDetails={setEditDetails}
          categoryData={categoryData}
          editCatDetails={editCatDetails}
          setEditCatDetails={setEditCatDetails}
          getPurchaseType={getPurchaseType}
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

export default ViewPurchaseType;
