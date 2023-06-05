import React, { useState } from 'react'
import { Modal, ModalBody, ModalContent, ModalHeader } from '../../Exchange/ExchagePrice.styled'
import { Button } from '../../Exchange/Exchange.styled'
import CloseIcon from "@mui/icons-material/Close";
import { InputField, InputFieldDiv, ModalBody1 } from './AddQuizStyle';
import axios from 'axios';
import { server_api } from '../../../const/api';

const AddQuiz = ({setOpen, listQuizDetails}) => {
    const [values, setValues] = useState({
        starting_date: '',
        starting_time:'',
        ending_date: '',
        ending_time: ''
        
    })
    console.log('values: ', values);
    const handleChange = (e) => {
        const {name , value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    }
    const insertQuiz = () => {
        setOpen(true)
        axios.post(`${server_api}/api/insertion_quiz`, values).then(resp => {
          setOpen(false)
            console.log('resp: ', resp);
            if(resp.data.code == 200){
                alert('Quiz inserted')
                listQuizDetails()
            }

        })
    }

    
  return (
<Modal>
      <ModalContent>
        <ModalHeader style={{justifyContent: 'space-between'}}>
            <label>Add Quiz</label>
          <CloseIcon
            style={{ fontSize: "large", cursor: "pointer" }}
            opacity="0.5"
            onClick={() => setOpen(false)}
          />
        </ModalHeader>
        <hr style={{width: '90%'}}/>
        <ModalBody1 >
          <InputFieldDiv>
          <p>Starting Date</p>
          <InputField name='starting_date' type = "date" onChange={(e) => handleChange(e)} />
          </InputFieldDiv>
          <InputFieldDiv>
          <p>Starting Time</p>
          <InputField name='starting_time' type = "time" onChange={(e) => handleChange(e)} />
          </InputFieldDiv>
          <InputFieldDiv>
          <p>Ending Date</p>
          <InputField name='ending_date' type = "date" onChange={(e) => handleChange(e)} />
          </InputFieldDiv>
          <InputFieldDiv>
          <p>Ending Time</p>
          <InputField name='ending_time' type = "time" onChange={(e) => handleChange(e)} />
          </InputFieldDiv>
          <Button onClick={() => insertQuiz()}>Submit</Button>
        </ModalBody1>
      </ModalContent>
    </Modal>
  )
}

export default AddQuiz