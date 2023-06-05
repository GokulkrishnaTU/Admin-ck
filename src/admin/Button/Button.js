import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { colors, size } from '../../admin/tableConst/const'

const SaveButtonElement = styled.button`

    background-color:${props => props.type};
    width:100%;
    color:${colors.white};
    border:1px solid ${props => props.type};
    padding:0.4rem;
    font-size:${size.font};
    display:flex;
    justify-content:center;
    flex-direction:row;
    align-items:center;
    border-radius:2px;
    cursor:pointer;
    ${'' /* text-transform:capitalize; */}
`
const OutlinedButtonElement = styled.button`
    background-color:${colors.white};
    width:100%;
    color:${colors.green};
    border:1px solid ${colors.green};
    font-size:${size.font};
    display:flex;
    padding:0.4rem;
    justify-content:center;
    flex-direction:row;
    align-items:center;
    font-weight:bold;
    border-radius:2px;
    cursor:pointer;
    ${'' /* text-transform:uppercase; */}
`
const IconElement = styled.text`
    ${'' /* color:${props => props.fill ? colors.white : colors.green}; */}
    color:${props=>props.color};

    margin-right:0.25rem;
    font-size:${size.btnIcon};
    
`
const ButtonGroup=styled.div `
  display:flex;
  flexDirection:row;
  flex-wrap:wrap;
 
  background-color:${colors.blackish_grey};
//   top:0;
//   padding-top:1rem;
//    position:absolute;

  `

function Button({ name, type, filled, Icon }) {
    const [color, setColor] = useState();

    useEffect(() => {
        let c = type === 'primary' ? colors.green
            : type === 'danger' ? colors.red
                : type === 'info' ? colors.info
                    : type === 'warning' ? colors.warning
                        : colors.grey
        setColor(c);
    }, [])

    // return (
    //     // filled && Icon ?
    //     // <SaveButtonElement type={color}><IconElement fill={filled}><Icon /></IconElement> {name}</SaveButtonElement> 
    //     //     : Icon ? <OutlinedButtonElement ><IconElement fill={filled}><Icon /></IconElement>  {name}</OutlinedButtonElement>
    //     //     : filled && <SaveButtonElement type={color}> {name}</SaveButtonElement> 
    //     filled ?
    //         <SaveButtonElement type={color}><IconElement fill={filled}><Icon /></IconElement> {name}</SaveButtonElement>
    //         : <OutlinedButtonElement type={color} ><IconElement fill={filled}><Icon /></IconElement>  {name}</OutlinedButtonElement>
    // )

}

// export default Button

export {
    IconElement,
    SaveButtonElement,
    OutlinedButtonElement,
    ButtonGroup
}