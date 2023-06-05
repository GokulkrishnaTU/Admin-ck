import styled from "styled-components";

export const InputFieldDiv = styled.div`
  padding: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  p {
    font-size: 12px;
    color: #c4c4c4;
    padding-bottom: 5px;
    margin: 0;
  }
`;
export const InputField = styled.input`
  border: 1px solid #c4c4c4;
  padding: 10px 20px;
  border-radius: 5px;
  /* width: 100%; */
  pointer-events:  ${(props)=>props.edit ? "auto":"none"};

`;
export const InputField1 = styled.input`
  border: 1px solid #c4c4c4;
  padding: 10px 20px;
  border-radius: 5px;
  border: ${(props)=>props.edit ? "1px solid grey":"none"};
  width: 100%;
  height: auto;
  pointer-events:  ${(props)=>props.edit ? "auto":"none"};

  :focus{
    border: none;
  }
`;

export const ModalBody1 = styled.div`
    padding: 20px 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    /* width: 100%; */
    justify-content: center;
    align-items: center;
    /* padding-bottom: 30px; */
`
export const QuestionDiv = styled.div`
    border: 1px solid gray;
    width: 100%;
    height: auto;
    padding: 10px;
    display: flex;
    align-items: center;
    gap: 20px
`
export const OptionsDiv = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid gray;
    width: 100%;
    height: auto;
    padding: 10px;
    justify-content: center;
    gap: 20px
`
export const AnswerDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    select{
        /* width: 200px; */
        padding: 8px 20px;
        border-radius: 10px;
    }
`
export const QuestionHead = styled.div`
    
`
export const NextBtn = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    width:90%;
    justify-content:center;
    `