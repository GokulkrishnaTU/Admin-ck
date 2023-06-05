import { React, useState, useEffect } from "react";
import Select from 'react-select';
import {
    Container,
    Overlay,
    Modal,
    Details,
    ParaInDetail,
    DetailsInput,
    DetailsDropDown,
    DetailsBtn,
    DetailsBtn1,
    InputDate,
    Logo,
    ErrorMsg,
    TextInSignUp1,
    DetailsBtn2
} from "./SignUpModalStyle";
import Content from "../Content/Content";

function DetailsModal() {
    
    // const customStyles = {
    //     control: base => ({
    //       ...base,
    //       height: 40,
    //       borderRadius: '8px',
    //     })
    //   };
    // const options = [
    //     { value: 'School', label: 'School' },
    //     { value: 'Arts College', label: 'Arts College' },
    //     { value: 'Professional college', label: 'Professional college' },
    //     { value: 'Training college', label: 'Training college' },
    //     { value: 'Training college', label: 'Training college' },
    //     { value: 'Tution Center', label: 'Tution Center' },
    //     { value: 'ITI', label: 'ITI' },
    //     { value: 'Others', label: 'Others' }
    //   ]
      

    const typeArray = [
        {
            type: "School",
        },
        {
            type: "Arts College",
        },
        {
            type: "Professional college",
        },
        {
            type: "Training college",
        },
        {
            type: "Tution Center",
        },
        {
            type: "ITI",
        },
        {
            type: "Others",
        },
    ];

    const initialValues = {
        phonenumber: "",
        orgname: "",
        yourname: "",
        desi: "",
        pincode: "",
        district: "",
    };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

   

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors]);

    const validate = (values) => {
        const errors = {};
        if (!values.phonenumber) {
            errors.phonenumber = "Phone numbner is required!";
        }
        if (!values.yourname) {
            errors.yourname = "Name is required!";
        }
        if (!values.orgname) {
            errors.orgname = "Organization is required!";
        }
        if (!values.pincode) {
            errors.pincode = "pincode is required!";
        } else if (values.password.length > 10) {
            errors.password = "Password cannot exceed more than 4 characters";
        }
        if (!values.desi) {
            errors.desi = "designation is required!";
        }
        if (!values.district) {
            errors.district = "district is required!";
        }

        return errors;
    };
    return (
        <Container>
            {/* <Header /> */}
            <Modal>
                <Overlay>
                    <Content/>
                    <Details border={"1px solid rgba(0, 0, 0, 0.2)  "}>
                        {/*  */}
                        <Logo
                            fs={"20px"}
                            fw={"500"}
                            lh={"28.08px"}
                            mt={"20px"}
                            color={" #000000"}
                        >
                            <span>Sign Up</span>
                        </Logo>
                        <ParaInDetail>
                            <p>Enter details to continue</p>
                        </ParaInDetail>

                        <DetailsInput
                            type="text"
                            placeholder="Phone Number"
                            name="phonenumber"
                            value={formValues.phonenumber}
                            onChange={handleChange}
                            style={ {outlineColor: "rgba(0, 0, 0, 0.5)" }} 
                        />
                        <ErrorMsg>
                            <p>{formErrors.phonenumber}</p>
                        </ErrorMsg>
                        <DetailsInput
                            type="text"
                            placeholder="Organization Name"
                            name="orgname"
                            value={formValues.orgname}
                            onChange={handleChange}
                            style={ {outlineColor: "rgba(0, 0, 0, 0.5)" }} 
                        />
                        <ErrorMsg>
                            <p>{formErrors.orgname}</p>
                        </ErrorMsg>
                        <DetailsInput
                            type="text"
                            placeholder="Enter your Name"
                            name="yourname"
                            value={formValues.yourname}
                            onChange={handleChange}
                            style={ {outlineColor: "rgba(0, 0, 0, 0.5)" }} 
                        />
                        <ErrorMsg>
                            <p>{formErrors.yourname}</p>
                        </ErrorMsg>
                        <DetailsInput
                            type="text"
                            placeholder="Enter your Designation"
                            name="desi"
                            value={formValues.desi}
                            onChange={handleChange}
                            style={ {outlineColor: "rgba(0, 0, 0, 0.5)" }} 
                        />
                        <ErrorMsg>
                            <p>{formErrors.desi}</p>
                        </ErrorMsg>
                        <DetailsInput
                            type="text"
                            placeholder="Pin code"
                            name="pincode"
                            value={formValues.pincode}
                            onChange={handleChange}
                            style={ {outlineColor: "rgba(0, 0, 0, 0.5)" }} 
                        />
                        <ErrorMsg>
                            <p>{formErrors.pincode}</p>
                        </ErrorMsg>
                        <DetailsInput
                            type="text"
                            placeholder="District"
                            name="pincode"
                            value={formValues.pincode}
                            onChange={handleChange}
                            style={ {outlineColor: "rgba(0, 0, 0, 0.5)" }} 
                        />
                        <ErrorMsg>
                            <p>{formErrors.pincode}</p>
                        </ErrorMsg>  
                        {/* <DetailsDropDown>
                            <Select options={options}  styles={customStyles}  placeholder='Type of Organization'/>
                        </DetailsDropDown> */}
                        
                        <DetailsDropDown style={{
                                        outlineColor: "rgba(0, 0, 0, 0.5)",
                                    }}>
                            {/* <select> */}
                                <option value="">Type of Organization</option>
                                {typeArray?.map((item) => {
                                    return (
                                        <>
                                            <option value={item?.type}>
                                                {item?.type}
                                            </option>
                                        </>
                                    );
                                })}
                            {/* </select> */}
                        </DetailsDropDown>
                        <ErrorMsg>
                            <p>{formErrors.pincode}</p>
                        </ErrorMsg>  
                        <InputDate type="date" />
                        <DetailsBtn>
                            <DetailsBtn1 onClick={handleSubmit}>
                                Sign Up
                            </DetailsBtn1>
                            <DetailsBtn2>
                                Login
                            </DetailsBtn2>
                        </DetailsBtn>
                        <TextInSignUp1
                            width={"80%"}
                            mt={"20px"}
                            fs={"12px"}
                            fw={"600"}
                        >
                            <p style={{ color: "rgba(0, 0, 0, 0.5)" }}>
                                By creating an account or logging in, you agree
                                to clikekart{" "}
                                <span style={{ color: "#4669E8" }}>
                                    condition of use{" "}
                                </span>
                                and{" "}
                                <span style={{ color: "#4669E8" }}>
                                    privacy policy
                                </span>
                            </p>
                        </TextInSignUp1>
                    </Details>
                </Overlay>
            </Modal>
        </Container>
    );
}

export default DetailsModal;
