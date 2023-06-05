import React from 'react'
import logo from "../../../assets/logoHeader.png";
import image1 from "../../../assets/Image1.png";
import {
    Details1,
    LogoInSignUp,
    ImgInSignUp,
    TextInSignUp
} from '../Content/ContentStyle'

function Content() {
  return (
    <Details1 bg={"#4669E8"} btlr={"13px"} bblr={"13px"}>
        <LogoInSignUp width={"40%"} mt={"30px"}>
            <img src={logo} alt="logo" />
        </LogoInSignUp>
        <ImgInSignUp width={"80%"} mt={"40px"}>
            <img src={image1} alt="logo" />
        </ImgInSignUp>
        <TextInSignUp
            width={"100%"}
            mt={"40px"}
            fs={"20px"}
            color={"white"}
        >
            <span>Sign Up to Explore the clikekart World</span>
        </TextInSignUp>
        <TextInSignUp
            width={"70%"}
            fs={"12px"}
            color={"white"}
            mt={"20px"}
        >
            <p>
                rem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore
                et
            </p>
        </TextInSignUp>
    </Details1>
  )
}

export default Content