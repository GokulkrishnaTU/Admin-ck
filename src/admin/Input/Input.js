import React from 'react'
import styled, { css } from 'styled-components'
import { colors, size } from '../../admin/tableConst/const'

const basicStyle=css`
 padding:0.5rem;
  ${'' /* margin:auto; */}
  font-size:${size.font};
  border:1px solid ${colors.inputborder};
  ${'' /* borderRadius:7px; */}
  width:92%;
  color:${colors.grey};
  &:focus {
    outline: none;
    border:1px solid ${colors.disabled};
  }  
`
const InputElement = styled.input`
 ${basicStyle};
   ${'' /* width:100%; */}
  
`
const TextAreaElement = styled.textarea`
  ${basicStyle};
   width:100vw;
  `
const SelectElement=styled.select`
   ${basicStyle};
   width:100%;
   background-color:transparent;
  
  `

function Input({ placeholder, textarea, dropdown, onChange,value }) {
  const [state,setState]=React.useState(true)
  // return (
    
  //   textarea ? <TextAreaElement />
  //     : dropdown ? <SelectElement ></SelectElement>
  //       : <InputElement autoFocus={state} placeholder={placeholder} onChange={onChange} value={value} onFocus={()=>setState(true)}  ></InputElement>
  // )
}

// export default Input
export {
  TextAreaElement,
  InputElement,
  SelectElement
}