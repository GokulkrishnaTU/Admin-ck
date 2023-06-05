import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import AdminTable from "../../components/Table/AdminTable";
import { server_api } from "../../const/api";
import { A, Container, MenuBar, MenuItems, MenuWrapperRight, TableContainer } from "./Exchange.styled";
import ReportModal from "./ReportModal";

function ExchangeReport() {
  const [reportModal, setReportModal] = useState(false)
  const [data, setData]  =useState([])
  const [array, setArray] =useState([])
  const [selected, setSelected] = useState(false)
  console.log('selected: ', selected);
  const [filterData, setFilterData] = useState([])
  console.log('filterData: ', filterData);

  const datas = useMemo(() => [
    {
      no: '1', product_category: 'laptop', complaint: 'hinge broken',
      reason: 'Outdated', user_details: 'Mathew Reji', estimated_price: '10000',
      final_price: '12000', sevice_personal: 'Freelancer', more_details: <A onClick={() => setReportModal(true)}>View Detals</A>, status: 'Accepted'
    },
    {
      no: '2', product_category: 'laptop', complaint: 'hinge broken',
      reason: 'Outdated', user_details: 'Mathew Reji', estimated_price: '10000',
      final_price: '12000', sevice_personal: 'Freelancer', more_details: <A onClick={() => setReportModal(true)}>View Detals</A>, status: 'Rejected'
    },
    {
      no: '3', product_category: 'laptop', complaint: 'hinge broken',
      reason: 'Outdated', user_details: 'Mathew Reji', estimated_price: '10000',
      final_price: '12000', sevice_personal: 'Freelancer', more_details: <A onClick={() => setReportModal(true)}>View Detals</A>, status: 'Postponed'
    }

  ], [])
  const acceptedData = () => {
    const data1 = []
    axios.get(`${server_api}/api/getaccept_data`).then(resp => {
      console.log('resp: ', resp);
      // setArray(resp.data)
      resp?.data.map((item, no) => {
        data1.push({
          no: no+ 1,
          product_category: item?.product_category_name,
          complaint: (JSON.parse(item?.complaint_id)[0]?.complaint) ? (JSON.parse(item?.complaint_id)[0]?.complaint) : (JSON.parse(item?.complaint_id)[0]?.name),
          reason: item?.reason_for_exchange_id,
          user_details: `${item?.name} ${item?.address} ${item?.mob1}`,
          estimated_price: item?.estimated_price,
          final_price: item?.final_price,
          sevice_personal: item?.freelancer == 0 ? 'Freelancer' : 'Service Partner',
          more_details: <A onClick={() => {setReportModal(true); setArray(item)}} >View Detals</A>,
          status:
          //  item?.status == 0 ? <label>Waiting for approval</label> : item?.status == 1 ? <label>Accepted</label> :
          item?.status == 2 ? <label>Rejected</label> : item?.status == 3 ? <label>Postpond</label> : item?.status == 4  ? <label>Accepted</label>:  item?.status == 1 ? 'Waiting for aprroval' : '',
        })
      })
      setData(data1)
    })
  }
  useEffect(() => {
    acceptedData()
  },[])
const filteredData = (value) => {
  console.log('data: ', data[0].status);

  console.log('hitt')
  let filterArray = data.filter((item) => item.status.props.children == value)
  
  console.log('filterArray: ', filterArray);
  setFilterData(filterArray)
}



  const columns = [
    {
      Header: "No",
      accessor: "no",
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
      Header: "Reason For Exchange",
      accessor: "reason",
      sortType: "basic",
    },

    {
      Header: "User Details",
      accessor: "user_details",
      sortType: "basic",
    },
    {
      Header: "Estimated Price",
      accessor: "estimated_price",
      sortType: "basic",
    },
    {
      Header: "Final Price",
      accessor: "final_price",
      sortType: "basic",
    },
    {
      Header: "Service Personal",
      accessor: "sevice_personal",
      sortType: "basic",
    },
    {
      Header: "More Details",
      accessor: "more_details",
      sortType: "basic",
    },
    {
      Header: "Status",
      accessor: "status",
      sortType: "basic",
    },
  ];


  return (
    <Container>
      {reportModal && <ReportModal setReportModal={() => setReportModal(false)} items={array} acceptedData={acceptedData}/>}
      <MenuBar>
        <p>Report</p>
        <MenuItems>
          <MenuWrapperRight>
            <select onChange={(e) => { filteredData(e.target.value); setSelected(true)} } >
              <option value="none">Select Cases</option>
              <option value="Accepted">Accepted</option>
              <option value="Rejected">Rejected</option>
              <option value="Postpond">Postponed</option>
            </select>
          </MenuWrapperRight>
        </MenuItems>
      </MenuBar>
      <TableContainer>
        <AdminTable
          columns={columns}
          data={selected ? filterData :  data}
        />
      </TableContainer>
    </Container>
  );
}

export default ExchangeReport;
