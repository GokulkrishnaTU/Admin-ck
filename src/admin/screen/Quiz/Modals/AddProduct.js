import React, { useEffect, useState } from 'react'
import { Modal, ModalBody, ModalContent, ModalHeader } from '../../Exchange/ExchagePrice.styled'
import { Button } from '../../Exchange/Exchange.styled'
import CloseIcon from "@mui/icons-material/Close";
import { InputField, InputFieldDiv, ModalBody1 } from './AddQuizStyle';
import Select from 'react-select'
import axios from 'axios';
import { server_api } from '../../../const/api';

const AddProduct = ({setOpen, quizItem, listQuizDetails}) => {
    const [selectedOption, setSelectedOption] = useState([])
    console.log('selectedOption: ', selectedOption);
    const [options, setOptions] = useState([])
    const [selected, setSelected] = useState([])
    const [productId, setProductId] = useState([])
    // const [data, setData] = useState({
    //     product_id: '',
    //     delivery_charge : '200',
    //     quiz_id : quizItem.quiz_id
    // })
    const [selectedProductId, setSelectedProductId] = useState('')
    console.log('selectedProductId: ', selectedProductId.value);
    console.log('options: ', options);
    // const options = [
    //     { value: 'chocolate', label: 'Chocolate' },
    //     { value: 'strawberry', label: 'Strawberry' },
    //     { value: 'vanilla', label: 'Vanilla' }
    //   ]

    const getProducts = () => {
        const data1 = []
        axios.get(`${server_api}/api/getProductList`).then(resp => {
            resp?.data.filter((item) => item?.product_category_id == selectedProductId.value).map(i => {
                data1.push({
                    value: i?.id,
                    label: i?.model
                })
            })
            setOptions(data1)
        })
    }
    

    const getProductCat = () => {
        const data1 = []
        axios.get(`${server_api}/api/getProductCategory`).then(resp => {
            resp?.data.map(i => {
                data1.push({
                    value: i?.id,
                    label: i?.product_category_name
                })
            })
            setProductId(data1)
        })
    }
    useEffect(() => {
        getProducts()
    },[selectedProductId.value])
    useEffect (() => {
        getProductCat()

    },[])

    const handleSubmit = () => {
        setOpen(false)
        const data= {
            product_id: selectedOption.value,
        delivery_charge : '200',
        quiz_id : quizItem.quiz_id
        }
    console.log('data: ', data);

        axios.post(`${server_api}/api/insertionQuizProducts`, data).then(resp => {
            console.log('resp: ', resp);
            if(resp.data.code == 200) {
                alert('Product added')
                listQuizDetails()
            }

        })
    }
  return (
    <Modal>
      <ModalContent style={{maxWidth: '600px'}}>
        <ModalHeader style={{justifyContent: 'space-between'}}>
            <label>Add Product</label>
          <CloseIcon
            style={{ fontSize: "large", cursor: "pointer" }}
            opacity="0.5"
            onClick={() => setOpen(false)}
          />
        </ModalHeader>
        <hr style={{width: '90%'}}/>
        <ModalBody1 >
            <InputFieldDiv style={{paddingTop: '2px'}}>
            <p>Select Product Category</p>
            <Select
                      defaultValue={selectedProductId}
                      onChange={(setSelectedProductId)}
                      options={productId}
                      value={selectedProductId}
                    />
            </InputFieldDiv>
            <InputFieldDiv style={{paddingTop: '2px'}}>
            <p>Select Product</p>
            <Select
                      defaultValue={selectedOption}
                      onChange={setSelectedOption}
                      options={options}
                      value={selectedOption}
                    />
            </InputFieldDiv>
            <Button onClick={() => handleSubmit()}>Submit</Button>
        </ModalBody1>
      </ModalContent>
    </Modal>
  )
}

export default AddProduct