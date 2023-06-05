import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminTable from "../../components/Table/AdminTable";
import { server_api } from "../../const/api";
import Assign from "./Assign";
import DetailsModal from "./DetailsModal";
import EstimatedPrice from "./EstimatedPrice";
import { A, Button, Container, MenuBar, MenuItems, MenuWrapperRight, TableContainer, Wrapper } from "./Exchange.styled";

function Exchange() {
  const navigate = useNavigate()
  const [view, setView] = useState(false);
  const [data, setData] = useState([]);
  const [isEstimatedPrice, setIsEstimatedPrice] = useState(false)
  const [viewDetails, setViewDetails] = useState(false)
  const [assign, setAssign] = useState(false)
  const [items, setItems] = useState([])
  console.log('items: ', items);
  const [priceId, setPriceId] = useState([])
  const [details, setDetails] = useState([])
  const[freelancer, setFreelancer] = useState([])
  console.log('freelancer: ', freelancer);
  const[parnter, setPartner] = useState([])
  console.log('parnter: ', parnter);

  const getExchangeData = () => {
    const data1 = []
    axios.get(`${server_api}/api/getExchangeForm`).then(resp => {
      console.log('resp: ', resp);
      resp?.data.map((item, index) => {
        data1.push({
          id: index + 1,
          product_category: item?.product_category_name,
          complaint: (JSON.parse(item?.complaint_id)[0]?.complaint) ? (JSON.parse(item?.complaint_id)[0]?.complaint) : (JSON.parse(item?.complaint_id)[0]?.name) ,
          physical_condition: item?.physical_condition == 0 ? 'Good' : item?.physical_condition == 1 ? 'fair' : 'Excellent',
          working_condition: item?.working_condition == 0 ? 'Good' : item?.working_condition == 1 ? 'fair' : 'Excellent',
          purchase_year: item?.purchase_year,
          reason: item?.reason_for_exchange_id,
          view_details: <a onClick={() => [setViewDetails(true), setDetails(item)]} style={{ color: 'blue', textDecoration: 'underline' }}>View Details</a>,
          estimated_price: item?.estimated_price ? item?.estimated_price : <a style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }} onClick={() => { setIsEstimatedPrice(true); setPriceId(item) }} > Estimate Price</a>,
          assign: item?.status == 1 && item?.freelancer != null ? <div style={{ display: 'flex', flexDirection: 'column' }}><Button >Assigned</Button><A onClick={() => {navigate("/inspection-report", {state : item}); setItems(item)}}>{item?.status_report == 0 ? '' : 'report'}</A></div>: 
                  item?.status == 1 && item?.freelancer == null  ? <div style={{ display: 'flex', flexDirection: 'column' }}><Button onClick={() => { setAssign(true); setItems(item) }}>Assign</Button></div> :
                  item?.status == 0 ? <div style={{ display: 'flex', flexDirection: 'column' }}><Button style={{ background: '#a3a4a8' }} disabled={true} onClick={() => { setAssign(true); setItems(item) }}>Assign</Button></div> : '',
                  // item?.status == 2 && item?.freelancer != null ? <div style={{ display: 'flex', flexDirection: 'column' }}><Button >Assigned</Button><A onClick={() => {navigate("/inspection-report", {state : item}); setItems(item)}}>report</A></div> : 
                  // item?status == 3 && item
                  
          
          
          
          // item?.freelancer != null ? <div style={{ display: 'flex', flexDirection: 'column' }}><Button onClick={() => { setAssign(true); setItems(item) }}>Assigned</Button><A onClick={() => {navigate("/inspection-report", {state : item}); setItems(item)}}>report</A></div> :
          //   <div style={{ display: 'flex', flexDirection: 'column' }}><Button style={{ background: '#a3a4a8' }} disabled={true} onClick={() => { setAssign(true); setItems(item) }}>Assign</Button><A style={{ pointerEvents: 'none' }}>report</A></div>,
          status: item?.status == 0 ? '' : item?.status == 1 ? <label>Accepted</label> : item?.status == 2 ? <label>Rejected</label> : item?.status == 3 ? <label>Postpond</label> : 'Accepted',
          user: `${item?.name} ${item?.address} ${item?.mob1}`
        })
      })
      setData(data1)
    })
  }
  useEffect(() => {
    getExchangeData()
  }, [])
 

  const columns = [
    {
      Header: "ID",
      accessor: "id",
      sortType: "basic",
    },
    {
      Header: "Product Category",
      accessor: "product_category",
      sortType: "basic",
    },
    {
      Header: "Complaint",
      accessor: "complaint",
      sortType: "basic",
    },
    {
      Header: "Physical Condition",
      accessor: "physical_condition",
      sortType: "basic",
    },

    {
      Header: "Working Condition",
      accessor: "working_condition",
      sortType: "basic",
    },
    {
      Header: "Purchase Year",
      accessor: "purchase_year",
      sortType: "basic",
    },
    {
      Header: "Reason for exchange",
      accessor: "reason",
      sortType: "basic",
    },
    {
      Header: "User details",
      accessor: "user",
      sortType: "basic",
    },
    {
      Header: "View Details",
      accessor: "view_details",
      sortType: "basic",
    },
    {
      Header: "Estimated Price",
      accessor: "estimated_price",
      sortType: "basic",
    },
    {
      Header: "Status",
      accessor: "status",
      sortType: "basic",
    },
    {
      Header: "Assign",
      accessor: "assign",
      sortType: "basic",
    },
  ];


  return (
    <Container>
      {isEstimatedPrice && <EstimatedPrice text="Enter Estimated Price" setIsEstimatedPrice={() => setIsEstimatedPrice(false)} items={priceId} getExchangeData={getExchangeData} />}
      {viewDetails && <DetailsModal details={details} setViewDetails={() => setViewDetails(false)} getExchangeData={getExchangeData} />}
      {assign && <Assign setAssign={() => setAssign(false)} items={items} getExchangeData={getExchangeData} />}
      <MenuBar>
        <p>Exchange</p>
        <MenuItems>
          <MenuWrapperRight></MenuWrapperRight>
        </MenuItems>
      </MenuBar>
      <TableContainer>
        <AdminTable
          columns={columns}
          data={data}
        />
      </TableContainer>
    </Container>
  );
}

export default Exchange;
