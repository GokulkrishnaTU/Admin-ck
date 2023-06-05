import {React, useState} from 'react'
import Header from '../header/Header'
import {PersonalInfoContainer, PersonalInfoSub, InfoChild1, InfoChild2, InfoHeader, Info, Edit, Description, 
    Name, Firstname, EditAddress, AddressLabel, AddressDetails, AddressDetailsChild1, AddressDetailsChild2,
    SaveBtn, Input, DetailsDropDown, EditInput, Address} from '../screens/screen'

    
function EditProfile() {

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
                        <button>Edit</button>
                    </Edit>
                </InfoHeader>
                
           
                   
                    {/* <Name width={'50%'}>
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
                    </Name> */}
                    {/* </>
                    :<> */}
                   
                    <Name width={'47%'} mb={'10px'}>
                        <Firstname>
                            <label>First Name</label>
                            <EditInput type='text' placeholder='Firstname' style={ {outlineColor: "rgba(0, 0, 0, 0.5)" }} /> 
                        </Firstname>
                        <Firstname>
                            <label>Last Name</label>
                            <EditInput type='text' placeholder='Lastname' />   
                        </Firstname>
                    </Name>
                    <Name  width={'50%'} mb={'10px'} >
                        <Firstname>
                            <label>Date of birth</label>
                            <EditInput type='date' /> 
                        </Firstname>
                    </Name>
                    <Name width={'50%'} mb={'10px'} >
                        <Firstname>
                            <label>Email</label>
                            <EditInput type='text' placeholder='email' /> 
                        </Firstname>  
                    </Name>
                    <Name width={'47%'}mb={'10px'} >
                        <Firstname>
                            <label>Mob No 1</label>
                            <EditInput type='text' placeholder='phone 1' /> 
                        </Firstname>
                        <Firstname>
                            <label>Mob No 2</label>
                            <EditInput type='text' placeholder='phone 2' /> 
                        </Firstname>   
                    </Name>
                    
                        <label>Profession</label>
                        <DetailsDropDown>
                        <select >
                            <option value="">--select one--</option>
                            <option value="Commercial Shop">School</option>
                            <option value="Commercial Office">Arts College</option>
                            <option value="Commercial Land">Professional college</option>
                            <option value="Commercial Building">Training college</option>
                            <option value="Industrial Building">Tution Center</option>
                            <option value="Industrial Land">ITI</option>
                            <option value="Co-working Space">Others</option>
                        </select>
                        </DetailsDropDown>
                      
                        <label>Type of orgnization</label>
                        <DetailsDropDown>
                        <select >
                        <option value="">--select one--</option>
                            <option value="Commercial Shop">Commercial Shop</option>
                            <option value="Commercial Office">Commercial Office</option>
                            <option value="Commercial Land">Commercial Land</option>
                            <option value="Commercial Building">Commercial Building</option>
                            <option value="Industrial Building">Industrial Building</option>
                            <option value="Industrial Land">Industrial Land</option>
                            <option value="Co-working Space">Co-working Space</option>
                            <option value="Private Office">Private Office</option>
                            <option value="Meeting Room">Meeting Room</option>
                        </select> 
                        </DetailsDropDown>
                    <Name width={'50%'} mb={'10px'}>
                        <Firstname>
                            <label>Organization Name</label>
                            <EditInput type='text' placeholder='Organization Name'/>
                        </Firstname>
                    </Name>
                    <Name width={'50%'} mb={'10px'}> 
                        <Firstname>
                            <label>Designation</label>
                            <EditInput type='text' placeholder='Designation'/>
                        </Firstname>
                    </Name>
                    <Name width={'50%'} mb={'10px'} >
                        <Firstname>
                            <label>GST No</label>
                            <EditInput type='text' placeholder='GST No'/>
                        </Firstname>
                    </Name>
           {/* </>
  
            }            */}
            
           </InfoChild1>
           <InfoChild2>
           {/* { editAddress === false?
                    <> */}
                {/* <Description>
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
                   
                </Description> */}
                {/* </>
                :
                <> */}
                <Description>
                    <span>Shipping Address</span>
                    <EditAddress>
                        <AddressLabel>
                            <label>Address 1</label>
                        </AddressLabel>
                        <AddressDetails>
                        <AddressDetailsChild1>
                                <Address>
                                    <Input type='text' placeholder='House name'/>
                                </Address>
                                <Address>
                                    <Input type='text' placeholder='Street Name'/>  
                                </Address>
                                <Address>
                                    <Input type='text' placeholder='Village'/>
                                </Address>
                                <Address>
                                    <Input type='text' placeholder='Panchayat'/>
                                </Address>
                                <Address>
                                    <Input type='text' placeholder='Pincode'/>
                                </Address>
                                <Address>
                                     <Input type='text' placeholder='District'/>
                                </Address>
                                <Address>
                                    <Input type='text' placeholder='State'/>
                                </Address>
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
           } */}
           </InfoChild2>
        </PersonalInfoSub>
    </PersonalInfoContainer>
  )
}

export default EditProfile
