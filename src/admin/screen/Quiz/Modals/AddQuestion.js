import React, { useState } from 'react'
import { Modal, ModalBody, ModalContent, ModalHeader } from '../../Exchange/ExchagePrice.styled'
import { Button } from '../../Exchange/Exchange.styled'
import CloseIcon from "@mui/icons-material/Close";
import { AnswerDiv, InputField, InputField1, InputFieldDiv, ModalBody1, NextBtn, OptionsDiv, QuestionDiv, QuestionHead } from './AddQuizStyle';
import { server_api } from '../../../const/api';
import axios from 'axios';

const AddQuestion = ({ setOpen, quizId, listQuizDetails }) => {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [num, setNum] = useState(1);
    const [values, setValues] = useState({
        question: '',
        option_a : '',
        option_b : '',
        option_c : '',
        option_d : '',
        answer: '',
        quiz_id: quizId.quiz_id
    })
    console.log('values: ', values);
    const nextquestion = () => {
        
        setCurrentQuestion(currentQuestion + 1);
        setNum(num + 1)
        setValues({
            ...values,
            question:'',
            option_a: '',
            option_b: '',
            option_c: '',
            option_d: '',
            answer:'',
        })
    }
    const handleChange = (e) => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name] : value
        })
    }
    const insertQuestions = () => {
        axios.post(`${server_api}/api/insert_questions`, values).then(resp => {
            console.log('resp: ', resp);
            listQuizDetails()

        })
    }
    return (
        <Modal>
            <ModalContent>
                <ModalHeader style={{ justifyContent: 'space-between' }}>
                    <label>Add Question</label>
                    <CloseIcon
                        style={{ fontSize: "large", cursor: "pointer" }}
                        opacity="0.5"
                        onClick={() => setOpen(false)}
                    />
                </ModalHeader>
                <hr style={{ width: '90%' }} />
               
                <ModalBody1 style={{gap: '20px', padding: '20px 30px' }} >
                    
                    <QuestionHead>{num}/5</QuestionHead>
                    <QuestionDiv>
                        <span>{num}.</span><InputField1 name='question' type='text' placeholder='Enter you question'value={values.question} required onChange={(e) => handleChange(e)}/>
                    </QuestionDiv>
                    <OptionsDiv>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <InputField name='option_a' type='text' placeholder='option A' value={values.option_a} required onChange={(e) => handleChange(e)}/>
                            <InputField name='option_b' type='text' placeholder='option B' value={values.option_b} required onChange={(e) => handleChange(e)}/>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <InputField name='option_c' type='text' placeholder='option C' value={values.option_c} required onChange={(e) => handleChange(e)}/>
                            <InputField name='option_d' type='text' placeholder='option D' value={values.option_d} required onChange={(e) => handleChange(e)}/>
                        </div>


                    </OptionsDiv>
                    <AnswerDiv>
                        <label>Answer :</label>
                        <select required name = 'answer' value={values.answer}  onChange={(e) => handleChange(e)}>
                            <option value=''>Select an answer</option>
                            <option  value='1'>A</option>
                            <option  value='2'>B</option>
                            <option  value='3'>C</option>
                            <option  value='4'>D</option>
                        </select>
                    </AnswerDiv>
                    {/* <Button style={{padding: '10px 20px'}} >Next</Button> */}
                    { 
                num === 5 ?
                    <NextBtn>

                        <Button onClick={() => {insertQuestions() ; setOpen(false)}}>Finish</Button>
                    </NextBtn>
                    :
                    <NextBtn >
                       
                <Button style={{padding: '10px 20px'}} onClick={() => {nextquestion(); insertQuestions()}}>Next</Button>
                
                
                    </NextBtn>
            }   
                </ModalBody1>
              
            </ModalContent>
        </Modal>
    )
}

export default AddQuestion