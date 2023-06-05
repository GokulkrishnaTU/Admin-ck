import React, { useState } from 'react'
import { Modal, ModalBody, ModalContent, ModalHeader } from '../../Exchange/ExchagePrice.styled'
import { Button } from '../../Exchange/Exchange.styled'
import CloseIcon from "@mui/icons-material/Close";
import { AnswerDiv, InputField, InputField1, InputFieldDiv, ModalBody1, OptionsDiv, QuestionDiv } from '../Modals/AddQuizStyle';
import { ViewQuestionDiv } from './QuizQuestionStyle';
import { updateApi } from '../../../../api/api';
import axios from "axios"
import { server_api } from '../../../const/api';


const QuizQuestion = ({ setOpen, quizId ,listQuizDetails}) => {
    console.log('quizId: ', quizId);
    const [currentSlide, setCurrentSlide] = useState(1);

        const [edit, setEdit] = useState(false);
        console.log('edit: ', edit);


        function handleChange(event) {
            const {name, value} = event.target
            setValues({
                ...values,
                [name] : value
            })
          }

          const updateApi=()=>{
             
            axios.post(`${server_api}/api/update_questions`,values).then(response=>{
                listQuizDetails()
                console.log('responseeeeeeeeeeee: ', response);
              
            })
          }
        // const [event, setEvent] = useState({pointerEvents:"none"});

        const [values, setValues] = useState({
            question: quizId?.questions_details[currentSlide-1]?.questions,
        option_a : quizId?.questions_details[currentSlide-1]?.option_a,
        option_b : quizId?.questions_details[currentSlide-1]?.option_b,
        option_c : quizId?.questions_details[currentSlide-1]?.option_c,
        option_d : quizId?.questions_details[currentSlide-1]?.option_d,
        answer: quizId?.questions_details[currentSlide-1]?.answer,
        quiz_id: quizId.quiz_id,
        id:  quizId?.questions_details[currentSlide-1]?.id,
    })

    const changeValue=()=>{

        setCurrentSlide(currentSlide + 1)
        setValues({...values,
            question: quizId?.questions_details[currentSlide-1]?.questions,
            option_a : quizId?.questions_details[currentSlide-1]?.option_a,
            option_b : quizId?.questions_details[currentSlide-1]?.option_b,
            option_c : quizId?.questions_details[currentSlide-1]?.option_c,
            option_d : quizId?.questions_details[currentSlide-1]?.option_d,
            answer: quizId?.questions_details[currentSlide-1]?.answer,
            quiz_id: quizId.quiz_id,
            id:  quizId?.questions_details[currentSlide-1]?.id,
        
        })

        
        


    }

    const changeValue1=()=>{

        setCurrentSlide(currentSlide - 1)
        setValues({...values,
            question: quizId?.questions_details[currentSlide-1]?.questions,
            option_a : quizId?.questions_details[currentSlide-1]?.option_a,
            option_b : quizId?.questions_details[currentSlide-1]?.option_b,
            option_c : quizId?.questions_details[currentSlide-1]?.option_c,
            option_d : quizId?.questions_details[currentSlide-1]?.option_d,
            answer: quizId?.questions_details[currentSlide-1]?.answer,
            quiz_id: quizId.quiz_id,
            id:  quizId?.questions_details[currentSlide-1]?.id,
        
        })

        
        


    }


    console.log('values: ', values);
    return (
        <Modal>
            <ModalContent>
                <ModalHeader style={{ justifyContent: 'space-between' }}>
                    <label>Quiz Questions</label>
                    <CloseIcon
                        style={{ fontSize: "large", cursor: "pointer" }}
                        opacity="0.5"
                        onClick={() => setOpen(false)}
                    />
                </ModalHeader>
                <hr style={{ width: '90%' }} />






                <ModalBody1 >
                    <ViewQuestionDiv>
                        <label>{currentSlide}/5</label>
                        
                        {edit ?<button onClick={ () => {setEdit(false);updateApi()}}>submit</button>:                        <button onClick={ () => setEdit(true)}  >Edit</button>

}
                        

                        <QuestionDiv>
                            <InputField1 name=' question' value={values?.question} edit={edit} onChange={handleChange} />
                        </QuestionDiv>
                        <OptionsDiv>
                        <div style={{ display: 'flex', justifyContent: 'space-between'} }>
                           <div> 
                            <label>Option A</label>
                            <InputField name='option_a' value={values?.option_a} edit={edit} onChange={handleChange}/>

                  
                           </div>
                           <div>
                            <label>Option B</label>
                            <InputField name='option_b' value={values?.option_b} edit={edit} onChange={handleChange} />
                            </div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div>
                            <label>Option C</label>
                            <InputField name='option_c' value={values?.option_c} type={"text"} edit={edit} onChange={handleChange}/>
                                </div>
                                <div>
                                <label>Option D</label>
                                <InputField name='option_d' value={values?.option_d} edit={edit} onChange={handleChange}/>
                            </div>
                           
                        </div>
                        </OptionsDiv>
                        
                        <AnswerDiv>
                        {edit? <div>
                        <label>Answer :</label>

                            <select required name = 'answer' value={values.answer}  onChange={(e) => handleChange(e)}>
                            <option value=''>Select an answer</option>
                            <option  value='1'>A</option>
                            <option  value='2'>B</option>
                            <option  value='3'>C</option>
                            <option  value='4'>D</option>
                        </select>

                        </div>  
                         :
                            <p>{quizId?.questions_details[currentSlide-1]?.answer  == 1 ? 'A' : quizId?.questions_details[currentSlide-1]?.answer == 2 ? 'B' :quizId?.questions_details[currentSlide-1]?.answer == 3 ? 'C' 
                            : quizId?.questions_details[currentSlide-1]?.answer == 4 ? 'D' : ''}</p>
                            }
                        </AnswerDiv>
                    </ViewQuestionDiv>


                    <div style={{display: 'flex' , gap: '10px'}}>
                        {currentSlide > 1 && (
                            <button style={{width: '100px'}} onClick={() => changeValue1()}>
                                Previous
                            </button>
                        )}
                        {currentSlide < 5 && (
                            <button style={{width: '100px'}} onClick={() => changeValue()}>
                                Next
                            </button>
                        )}
                    </div>
                </ModalBody1>
            </ModalContent>
        </Modal>
    )
}

export default QuizQuestion