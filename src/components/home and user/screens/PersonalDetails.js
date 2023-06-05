import {React, useState} from 'react'
import Header from '../header/Header'
import {PersonalInfoContainer, PersonalInfoSub, InfoChild1, InfoChild2, InfoHeader, Info, Edit, Description, 
    Name, Firstname, EditAddress, AddressLabel, AddressDetails, AddressDetailsChild1, AddressDetailsChild2,
    SaveBtn, Input, DetailsDropDown, EditInput, Address} from '../screens/screen'
import {useNavigate} from 'react-router-dom'
    
function PersonalDetails() {
    const navigtion = useNavigate();
    const [ editable, setEditable] = useState(false)
    const [editAddress, setEditAddress] = useState(false)

    const editProfile = () => {
        navigtion('/editProfile');
    }
const editBtn = () => {
    setEditable(true)
}

const editAddressBtn = () => {
    setEditAddress(true)
}  
  return (
    
    <PersonalInfoContainer>
       
        <Header/>
        <PersonalInfoSub>
           <InfoChild1>
                <InfoHeader>
                    <Info>
                        <span>Personal Information</span>
                    </Info>
                    <Edit>
                        <button onClick={editProfile}>Edit</button>
                        {/* <button onClick={function(event){ editBtn(); editAddressBtn()}}>Edit</button> */}
                    </Edit>
                </InfoHeader>
                
            {/* { editable === false? */}
                    {/* <> */}
                   
                    <Name width={'50%'}>
                        <Firstname>
                            <label>First Name</label>
                            <p>Aneesha</p>
                        </Firstname>
                        <Firstname>
                            <label>Last Name</label>
                            <p>Jenson</p>   
                        </Firstname>
                    </Name>
                    <Name  width={'50%'} >
                        <Firstname>
                            <label>DOB</label>
                            <p>12/12/1998</p> 
                        </Firstname>
                    </Name>
                    <Name width={'50%'} >
                        <Firstname>
                            <label>Email</label>
                            <p>email@sddress.com</p>
                        </Firstname>  
                    </Name>
                    <Name width={'50%'} >
                        <Firstname>
                            <label>Mobile Number 1</label>
                            <p>+919898989812</p> 
                        </Firstname>
                        <Firstname>
                            <label>Mobile Number 2</label>
                            <p>+919898989812</p> 
                        </Firstname>   
                    </Name>
                    
                    <Name width={'50%'}>
                        <Firstname>
                            <label>Profession</label>
                            <p>IT</p>
                        </Firstname>
                        
                    </Name>
                    <Name width={'50%'}>
                        
                        <Firstname>
                            <label>Type of orgnization  </label>
                            <p>Corporate</p>   
                        </Firstname>
                    </Name>
                    
                    <Name width={'50%'} >
                        <Firstname>
                            <label>Orgnization name</label>
                            <p>Woxro Technology</p>
                        </Firstname>
                    </Name>
                    <Name width={'50%'} >
                        <Firstname>
                            <label>Designation</label>
                            <p>Project Manager</p>
                        </Firstname>
                    </Name>
                    <Name width={'50%'} >
                        <Firstname>
                            <label>GST No</label>
                            <p>23123456</p>
                        </Firstname>
                    </Name>
                    {/* </>
                    :
                    <>        </> */}
  
            
           </InfoChild1>
           <InfoChild2>
           {/* { editAddress === false?
                    <> */}
                <Description>
                    <span>Shipping Address</span>
                    <EditAddress>
                        <AddressLabel>
                            <label>Address 1</label>
                        </AddressLabel>
                        <AddressDetails>
                            <AddressDetailsChild1>
                                <p>House name</p>
                                <p>Street Name</p>
                                <p>Village</p>
                                <p>Panchayat</p>
                                <p>Pin Code</p>
                                <p>District</p>
                                <p>State</p>
                            </AddressDetailsChild1>
                        </AddressDetails>
                    </EditAddress>
                    <EditAddress>
                        <AddressDetails>
                            <AddressDetailsChild2>
                                <button>+ Add another address</button>
                            </AddressDetailsChild2>
                        </AddressDetails>
                    </EditAddress>
                    
                        <SaveBtn>
                            <button>Save</button>
                        </SaveBtn>
                   
                </Description>
                {/* </>
                :
                <> */}
               
                {/* </>
           } */}
           </InfoChild2>
        </PersonalInfoSub>
    </PersonalInfoContainer>
  )
}

export default PersonalDetails
