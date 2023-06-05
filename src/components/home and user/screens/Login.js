import { React } from "react";
// import Header from "../header/Header";
import logo from "../../../assets/logoHeader.png";
import image1 from "../../../assets/Image1.png";

import {
    LoginContainer,
    LoginConSub,
    SectionLogin,
    SectionsInLogin,
    SectionsInLogin2,
    LogoInLogin,
    LoginSec1,
    LoginSec2,
    LoginTitle,
    LoginTitle1,
    LoginInput,
    LoginButton,
    LinkToCreate,
    Link1,
    Link2,
    ImgInLogin,
} from "./screen";

function Login() {
    return (
        <LoginContainer>
            <LoginConSub>
                <SectionLogin>
                    <SectionsInLogin
                        background={"#4669E8"}
                        btlr={"15px"}
                        bblr={"15px"}
                    >
                        <LoginSec1>
                            <LogoInLogin width={"30%"}>
                                <img src={logo} alt="logo" />
                            </LogoInLogin>
                            <ImgInLogin width={"85%"} mt={"35px"}>
                                <img src={image1} alt="logo" />
                            </ImgInLogin>
                            <LogoInLogin
                                mt={"20px"}
                                color={"white"}
                                fs={"18px"}
                                fw={"500"}
                            >
                                <span>
                                    Login to Explore the clikekart World
                                </span>
                            </LogoInLogin>
                            <LogoInLogin
                                width={"90%"}
                                mt={"20px"}
                                color={"white"}
                                fs={"14px"}
                            >
                                <span>
                                    rem ipsum dolor sit amet, consectetur
                                    adipiscing elit,
                                </span>
                            </LogoInLogin>
                        </LoginSec1>
                    </SectionsInLogin>
                    <SectionsInLogin2 border={" 1px solid rgba(0, 0, 0, 0.2)"}>
                        <LoginSec2>
                            <LoginTitle>
                                <span>Login</span>
                            </LoginTitle>
                            <LoginTitle1 mt={"20px"}>
                                <span>Enter Phone Number to Login</span>
                            </LoginTitle1>
                            <LoginTitle mt={"30px"}>
                                <LoginInput
                                    type="text"
                                    placeholder="Enter phone number"
                                    style={{
                                        outlineColor: "rgba(0, 0, 0, 0.5)",
                                    }}
                                />
                            </LoginTitle>
                            <LoginTitle mt={"15px"}>
                                <LoginButton>Sign In</LoginButton>
                            </LoginTitle>
                            <LinkToCreate>
                                <Link1 color={"rgba(0, 0, 0, 0.5)"}>
                                    <a href="\">New to Clikekart?</a>
                                </Link1>
                                <Link2 color={"#4669E8"}>
                                    <a href="\">Create an account</a>
                                </Link2>
                            </LinkToCreate>
                            <LogoInLogin
                                width={"80%"}
                                mt={"20px"}
                                fs={"14px"}
                                color={"rgba(0, 0, 0, 0.5)"}
                                fw={"700"}
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
                            </LogoInLogin>
                        </LoginSec2>
                    </SectionsInLogin2>
                </SectionLogin>
            </LoginConSub>
        </LoginContainer>
    );
}

export default Login;
