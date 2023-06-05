import axios from 'axios'
import React, { useEffect, useMemo, useState } from 'react'
import AdminTable from '../../components/Table/AdminTable'
import { server_api } from '../../const/api'
import { Container, MenuBar, MenuItems, MenuWrapperRight, TableContainer } from '../Exchange/Exchange.styled'
import { Button } from '../ProductCategory/ProductCategory.styled'
import { ProdImageDiv } from '../Products/Products.styled'
import AddProduct from './Modals/AddProduct'
import AddQuestion from './Modals/AddQuestion'
import AddQuiz from './Modals/AddQuiz'
import QuizQuestion from './QuizQuestions/QuizQuestion'
import { AddProductD } from './QuizStyle'

const Quiz = () => {
    const [open, setOpen] = useState(false)
    const  [ data , setData] = useState([])
    const [addProduct, setAddProduct ] = useState(false)
    const [quizItem, setQuizItem] = useState([]) 
    const [questionModal, setQuestionModal] = useState(false)
    const [quizId, setQuizId] = useState([])
    const [viewModal, setViewModal] = useState(false)
    const [viewQuest, setViewQuest] = useState(false)
    console.log('questionModal: ', questionModal);
    // const datas = useMemo(() => [
    //     {
    //       id: '1', product_category: 'laptop', complaint: 'hinge broken',
    //       physical_condition: 'Good', working_condition: 'Good', purchase_year: '2018',
        
    //     },
    //     {
    //       id: '1', product_category: 'laptop', complaint: 'hinge broken',
    //       physical_condition: 'Good', working_condition: 'Good', purchase_year: '2018',
         
          
    //     }
    
    //   ], [])

 
    
    
      const columns = [
        {
          Header: "Quiz ID",
          accessor: "quiz_id",
          sortType: "basic",
        },
        {
          Header: "Starting Date",
          accessor: "starting_date",
          sortType: "basic",
        },
        {
          Header: "Starting Time",
          accessor: "starting_time",
          sortType: "basic",
        },
        {
          Header: "Ending Date",
          accessor: "ending_date",
          sortType: "basic",
        },
        {
          Header: "Ending Time",
          accessor: "ending_time",
          sortType: "basic",
        },
        {
          Header: "Product",
          accessor: "product",
          sortType: "basic",
        },
    
        {
          Header: "Quiz status",
          accessor: "quiz_status",
          sortType: "basic",
        },
        {
          Header: "Question",
          accessor: "question",
          sortType: "basic",
        },

        
        
      ];
      const listQuizDetails = () => {
        const data1 = []
        axios.get(`${server_api}/api/list_detailsquiz`).then(resp => {
          console.log('resp: ', resp);
            resp?.data.map(item => {
                data1.push({
                    quiz_id: item?.quiz_id,
                    starting_date: item?.starting_date,
                    starting_time: item?.starting_time,
                    ending_date: item?.ending_date,
                    ending_time: item?.ending_time,
                    product: item?.images == null ? <AddProductD onClick={() => {setAddProduct(true) ; setQuizItem(item)}}>Add Product</AddProductD> : <ProdImageDiv>
                    <img src={JSON.parse(item?.images)[0]} alt='product'/>
                  </ProdImageDiv>,
                    quiz_status: item?.status == 0 ? 'Active' : 'Not Active',
                    question: item?.questions_details?.length > 0 ? <AddProductD onClick={() => {setViewModal(true);setQuizId(item)}} >View Questions</AddProductD> :  <AddProductD onClick={() => {setQuestionModal(true); setQuizId(item)}}>Add Questions</AddProductD>
                    
                })
                
            })
            setData(data1)
        })
    }
    useEffect(() => {
        listQuizDetails()
    },[])
  return (
    <Container>
      {open && <AddQuiz setOpen={setOpen} listQuizDetails = {listQuizDetails}/>}
      {addProduct && <AddProduct setOpen={setAddProduct} quizItem = {quizItem}  listQuizDetails = {listQuizDetails}/>}
      {questionModal && <AddQuestion setOpen={setQuestionModal} listQuizDetails = {listQuizDetails} quizId ={quizId}/>}
      {viewModal && <QuizQuestion listQuizDetails = {listQuizDetails} setOpen={setViewModal} quizId = {quizId}/>}
      <MenuBar>
        <p>Quiz</p>
        <MenuItems>
        <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "30px",
            }}
          >
            <Button onClick={() => setOpen(true)}>Add Quiz</Button>
          </div>
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
  )
}

export default Quiz