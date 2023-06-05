import React from "react";
import image from "../../../assets/logo1.png";
import logo from "../../../assets/logoHeader.png";
import image1 from "../../../assets/imgOtp.png";
import {
    BtnContinue,
    Overlay,
    Container,
    Otp,
    OtpDetails,
    OtpLogo,
    ResendOtp,
    SentOtp,
    SubOtpContainer,
    ContainerLogin,
    Details1,
    LogoInSignUp,
    ImgInSignUp,
    TextInSignUp,
    OtpDesc,
    TextInSignUp1,
} from "./OTPStyle";

function Modal() {
    return (
        <Container>
            <ContainerLogin>
                <Details1 bg={"#4669E8"} btlr={"13px"} bblr={"13px"}>
                    <LogoInSignUp width={"8vw"} mt={"30px"}>
                        <img src={logo} alt="logo" />
                    </LogoInSignUp>
                    <ImgInSignUp width={"80%"} mt={"40px"}>
                        <img src={image1} alt="logo" />
                    </ImgInSignUp>
                    <TextInSignUp
                        width={"100%"}
                        mt={"60px"}
                        fs={"24px"}
                        color={"white"}
                    >
                        <span>Verify your mobile number to continue</span>
                    </TextInSignUp>
                    <TextInSignUp
                        
                        fs={"12px"}
                        color={"white"}
                        mt={"50px"}
                    >
                        <p>
                            rem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut
                        </p>
                    </TextInSignUp>
                </Details1>

                <SubOtpContainer>
                    <Overlay>
                        <OtpDetails>
                            <OtpLogo>
                                <p>Mobile Verification</p>
                            </OtpLogo>
                            <OtpDesc>
                                <p>Please enter OTP to verify your account</p>
                            </OtpDesc>
                            <SentOtp>
                                <p>Enter OTP send to +91********51</p>
                            </SentOtp>
                            <Otp>
                                <form>
                                    <input type="text" />
                                    <input type="text" />
                                    <input type="text" />
                                    <input type="text" />
                                    <input type="text" />
                                </form>
                            </Otp>
                            <ResendOtp>
                                <a href="/">Resend OTP</a>
                            </ResendOtp>
                            <BtnContinue>
                                <button>Continue</button>
                            </BtnContinue>
                            <TextInSignUp1
                                width={"80%"}
                                mt={"50px"}
                                fs={"12px"}
                                fw={"600"}
                            >
                                <p style={{ color: "rgba(0, 0, 0, 0.5)" }}>
                                    By creating an account or logging in, you
                                    agree to clikekart{" "}
                                    <span style={{ color: "#4669E8" }}>
                                        condition of use{" "}
                                    </span>
                                    and{" "}
                                    <span style={{ color: "#4669E8" }}>
                                        privacy policy
                                    </span>
                                </p>
                            </TextInSignUp1>
                        </OtpDetails>
                    </Overlay>
                </SubOtpContainer>
            </ContainerLogin>
        </Container>
    );
}

export default Modal;
