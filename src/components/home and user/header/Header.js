import React from "react";
import {
    HeaderContainer,
    HeaderChild,
    HeaderRightChild,
    HeaderLogo,
    NavbarLink,
} from "../header/HeaderStyle";
import image from "../../../assets/logoHeader.png";
import menuIcon from "../../../assets/menu 1.png";
import profileIcon from "../../../assets/user(4) 1.png";
import cartIcon from "../../../assets/Group 1.png";
//import { Logo } from '../modal/ModalStyle'

function Header() {
    return (
        <HeaderContainer>
            <HeaderChild>
                <HeaderLogo width={"18%"}>
                    <img src={image} alt="logo" />
                </HeaderLogo>
            </HeaderChild>
            <HeaderRightChild>
                <NavbarLink>
                    <img
                        src={profileIcon}
                        alt="contactIcon"
                        width={"28px"}
                        height={"28px"}
                    />
                </NavbarLink>
                <NavbarLink>
                    <img
                        src={cartIcon}
                        alt="cart icon"
                        width={"28px"}
                        height={"28px"}
                    />
                </NavbarLink>
                <NavbarLink>
                    <img
                        src={menuIcon}
                        alt="menuIcon"
                        width={"28px"}
                        height={"28px"}
                    />
                </NavbarLink>
            </HeaderRightChild>
        </HeaderContainer>
    );
}

export default Header;
