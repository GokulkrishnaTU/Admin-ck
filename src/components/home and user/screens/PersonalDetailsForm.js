import React from 'react'
import Header from '../header/Header'
                    
import {PerDetCon, PerDetForm, Info, NameInput, FullName, FirstName, LastName, TextInput, Gender, Radio, Input} from '../screens/screen'

function PersonalDetailsForm() {
  return (
   <PerDetCon>
       <Header />
       <PerDetForm>
           <NameInput>
                <Info>
                    <span>Personal Information</span>
                </Info>
                <FullName>
                    <FirstName>
                        <TextInput type='text' placeholder='Firsname' />
                    </FirstName>
                    <LastName>
                        <TextInput type='text' placeholder='Lastname' />
                    </LastName>
                </FullName>
                <Gender>
                    <label>Gender</label>
                    <Radio>
                        <Input type='radio' placeholder='Lastname' margin={'0 20px 0 0'}/>  Male
                        <Input type='radio' placeholder='Lastname' margin={'0 10px 0 12%'}/>  Female
                    </Radio>
                </Gender>
           </NameInput>
       </PerDetForm>
   </PerDetCon>
  )
}

export default PersonalDetailsForm
