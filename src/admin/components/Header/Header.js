import { React, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  HeaderContainer,
  ImageContainer,
  LogoContainer,
  Section,
  ImgDiv,
  Sidenav,
  //   NavOption,
} from "./Header.styled";
import { Logo, notification, user } from "../../assets/header/index";
import MenuIcon from "@mui/icons-material/Menu";
import "react-modern-drawer/dist/index.css";
import Drawer from "react-modern-drawer";
import CloseIcon from "@mui/icons-material/Close";
import ViewTheme from "../../screen/Theme/ViewTheme/ViewTheme";
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";
import { Button, Item, LinkBtn, NavOption } from "../Sidenav/SideNavStyle";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";

function Header(props) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isBtnClr, setIsBtnClr] = useState(false);

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const general = () => {
    setIsGeneral((isGeneral) => !isGeneral);
  };
  const sales = () => {
    setIsSales((isSales) => !isSales);
  };
  const userClose = () => {
    setIsUser((isUser) => !isUser);
  };
  const btnClr = () => {
    setIsBtnClr((isBtnClr) => !isBtnClr);
  };
  const services = () => {
    setIsServices((isServices) => !isServices);
  };
  const servicesEngineers = () => {
    setIsServiceEngineers((isServiceEngineers) => !isServiceEngineers);
  };

  const navigation = useNavigate();
  const location = useLocation();

  const [isGeneral, setIsGeneral] = useState(false);
  const [isSales, setIsSales] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const [isServiceEngineers, setIsServiceEngineers] = useState(false);
  const [isServices, setIsServices] = useState(false);

  return (
    <HeaderContainer>
      <Section>
        <ImgDiv>
         { location.pathname == '/' || location.pathname == '/admin/login' ||  location.pathname == '/call-coordinator/login' ? "" : <MenuIcon
            style={{
              color: "white",
              marginTop: "6px",
              marginRight: "10px",
            }}
            onClick={toggleDrawer}
          />}

          <Drawer
            className="header_drawer"
            open={isOpen}
            direction="left"
            style={{ width: "250px", overflowY: "scroll" }}>
            <CloseIcon
              style={{
                fontSize: "medium",
                color: "#4668E9",
                marginLeft: "90%",
                marginTop: "10%",
              }}
              onClick={toggleDrawer}
            />
            {props.role == "1" ? (
              <div>
                <NavOption>
                  <LinkBtn
                    click={
                      location.pathname === "/view-theme" || location.pathname === "/view-cart-post"
                        ? true
                        : false
                    }
                    onClick={general}>
                    {" "}
                    {isGeneral === true ? <AiOutlineMinusSquare /> : <AiOutlinePlusSquare />}{" "}
                    General
                  </LinkBtn>
                  {isGeneral === true ? (
                    <Item>
                      <Button
                        click={location.pathname == "/view-theme" ? true : false}
                        onClick={() => {
                          navigation("/view-theme");
                          setIsBtnClr(false);
                        }}>
                        Theme
                      </Button>
                      <Button
                        click={location.pathname == "/view-cart-post" ? true : false}
                        onClick={() => navigation("/view-cart-post")}>
                        Cart Post
                      </Button>
                    </Item>
                  ) : (
                    ""
                  )}
                </NavOption>
                <NavOption>
                  <LinkBtn
                    click={
                      location.pathname === "/view-products" ||
                      location.pathname === "/view-prod" ||
                      location.pathname === "/view-purchase-type" ||
                      location.pathname === "/brand-list" ||
                      location.pathname === "/view-ordered-products" ||
                      location.pathname === "/get-accessories" ||
                      location.pathname === "/view-customer-sales-report" ||
                      location.pathname === "/view-installation" ||
                      location.pathname === "/view-components" ||
                      location.pathname === "/purchase-feedbacks" ||
                      location.pathname === "/view-cctv-types" ||
                      location.pathname === "/view-speaker-types" ||
                      location.pathname === "/view-networking-products"
                        ? true
                        : false
                    }
                    onClick={sales}>
                    {isSales === true ? <AiOutlineMinusSquare /> : <AiOutlinePlusSquare />} Sales
                  </LinkBtn>
                  {isSales === true ? (
                    <Item>
                      <Button
                        click={location.pathname == "/view-prod" ? true : false}
                        onClick={() => navigation("/view-prod")}>
                        Product Category
                      </Button>
                      <Button
                        click={location.pathname == "/view-purchase-type" ? true : false}
                        onClick={() => navigation("/view-purchase-type")}>
                        Purchase Type
                      </Button>
                      <Button
                        click={location.pathname == "/brand-list" ? true : false}
                        onClick={() => navigation("/brand-list")}>
                        Brands
                      </Button>
                      <Button
                        click={location.pathname == "/view-ordered-products" ? true : false}
                        onClick={() => navigation("/view-ordered-products")}>
                        Product Ordered List
                      </Button>
                      <Button
                        click={location.pathname == "/get-accessories" ? true : false}
                        onClick={() => navigation("/get-accessories")}>
                        Accessories List
                      </Button>
                      <Button
                        click={location.pathname == "/view-products" ? true : false}
                        onClick={() => navigation("/view-products")}>
                        Products List
                      </Button>
                      <Button
                        click={location.pathname == "/view-customer-sales-report" ? true : false}
                        onClick={() => navigation("/view-customer-sales-report")}>
                        Customer Sales Report
                      </Button>
                      <Button
                        click={location.pathname == "/view-installation" ? true : false}
                        onClick={() => navigation("/view-installation")}>
                        Installation
                      </Button>

                      <Button
                        click={location.pathname == "/view-components" ? true : false}
                        onClick={() => navigation("/view-components")}>
                        Components
                      </Button>

                      <Button
                        click={location.pathname == "/purchase-feedbacks" ? true : false}
                        onClick={() => navigation("/purchase-feedbacks")}>
                        Purchase Feedbacks
                      </Button>

                      <Button
                        click={location.pathname == "/view-cctv-types" ? true : false}
                        onClick={() => navigation("/view-cctv-types")}>
                        CCTV Types
                      </Button>
                      <Button
                        click={location.pathname == "/view-speaker-types" ? true : false}
                        onClick={() => navigation("/view-speaker-types")}>
                        Speaker Types
                      </Button>
                      <Button
                        click={location.pathname == "/view-networking-products" ? true : false}
                        onClick={() => navigation("/view-networking-products")}>
                        Networking ProductTypes
                      </Button>
                    </Item>
                  ) : (
                    ""
                  )}
                </NavOption>
                <NavOption>
                  <LinkBtn
                    click={
                      location.pathname == "/view-profession-type" ||
                      location.pathname == "/view-type-of-organizations" ||
                      location.pathname == "/customer-category" ||
                      location.pathname === "/view-customer-list" ||
                      location.pathname == "/view-service-partner" ||
                      location.pathname === "/view-service-engineer" ||
                      location.pathname === "/view-call-coordinators" ||
                      location.pathname === "/view-vendor-details" ||
                      location.pathname === "/user-types" ||
                      location.pathname === "/admin-users"
                        ? true
                        : false
                    }
                    onClick={userClose}>
                    {isUser === true ? <AiOutlineMinusSquare /> : <AiOutlinePlusSquare />} User
                  </LinkBtn>
                  {isUser === true ? (
                    <Item>
                      <Button
                        click={location.pathname == "/user-types" ? true : false}
                        onClick={() => navigation("/user-types")}>
                        User Type
                      </Button>
                      <Button
                        click={location.pathname == "/admin-users" ? true : false}
                        onClick={() => navigation("/admin-users")}>
                        Admin Users
                      </Button>
                      <Button
                        click={location.pathname == "/view-profession-type" ? true : false}
                        onClick={() => navigation("/view-profession-type")}>
                        Profession Type
                      </Button>
                      <Button
                        click={location.pathname == "/view-type-of-organizations" ? true : false}
                        onClick={() => navigation("/view-type-of-organizations")}>
                        Type of Organization
                      </Button>
                      <Button
                        click={location.pathname == "/customer-category" ? true : false}
                        onClick={() => navigation("/customer-category")}>
                        Customer Category
                      </Button>

                      <Button
                        click={location.pathname == "/view-customer-list" ? true : false}
                        onClick={() => navigation("/view-customer-list")}>
                        Customer List
                      </Button>

                      <Button
                        click={location.pathname == "/view-service-partner" ? true : false}
                        onClick={() => navigation("/view-service-partner")}>
                        Service Partner
                      </Button>

                      <Button
                        click={location.pathname == "/view-service-engineer" ? true : false}
                        onClick={() => navigation("/view-service-engineer")}>
                        Service Engineer
                      </Button>
                      <Button
                        click={location.pathname == "/view-call-coordinators" ? true : false}
                        onClick={() => navigation("/view-call-coordinators")}>
                        Call Coordinator
                      </Button>
                      <Button
                        click={location.pathname == "/view-vendor-details" ? true : false}
                        onClick={() => navigation("/view-vendor-details")}>
                        Vendor Details
                      </Button>
                    </Item>
                  ) : (
                    ""
                  )}
                </NavOption>

                <NavOption>
                  <LinkBtn
                    click={
                      location.pathname === "/service-complaints" ||
                      location.pathname === "/view-service-pack" ||
                      location.pathname === "/view-service-types" ||
                      location.pathname === "/view-available-services" ||
                      location.pathname === "/service-feedbacks" ||
                      location.pathname === "/followup-feedback" ||
                      location.pathname === "/service-updates" ||
                      location.pathname === "/service-categories" ||
                      location.pathname === "/product-taken-acknowledgement" ||
                      location.pathname === "/service-quotation" ||
                      location.pathname === "/product-purchase-request" ||
                      location.pathname === "/service-expert"
                        ? true
                        : false
                    }
                    onClick={services}>
                    {" "}
                    {isServices === true ? <AiOutlineMinusSquare /> : <AiOutlinePlusSquare />}{" "}
                    Services
                  </LinkBtn>
                  {isServices === true ? (
                    <Item>
                      <Button
                        click={location.pathname == "/service-complaints" ? true : false}
                        onClick={() => {
                          navigation("/service-complaints");
                          setIsBtnClr(false);
                        }}>
                        Service Complaints
                      </Button>

                      <Button
                        click={location.pathname == "/view-service-pack" ? true : false}
                        onClick={() => navigation("/view-service-pack")}>
                        Service Pack
                      </Button>

                      <Button
                        click={location.pathname == "/view-service-types" ? true : false}
                        onClick={() => navigation("/view-service-types")}>
                        Service Types
                      </Button>
                      <Button
                        click={location.pathname == "/view-available-services" ? true : false}
                        onClick={() => navigation("/view-available-services")}>
                        Available Services
                      </Button>
                      <Button
                        click={location.pathname == "/service-feedbacks" ? true : false}
                        onClick={() => navigation("/service-feedbacks")}>
                        Service Feedbacks
                      </Button>
                      <Button
                        click={location.pathname == "/followup-feedback" ? true : false}
                        onClick={() => navigation("/followup-feedback")}>
                        Followup Feedbacks
                      </Button>
                      <Button
                        click={location.pathname == "/service-updates" ? true : false}
                        onClick={() => navigation("/service-updates")}>
                        Service updates
                      </Button>
                      <Button
                        click={location.pathname == "/service-categories" ? true : false}
                        onClick={() => navigation("/service-categories")}>
                        Service Categories
                      </Button>
                      <Button
                        click={location.pathname == "/service-partner-levels" ? true : false}
                        onClick={() => navigation("/service-partner-levels")}>
                        Service Partner Levels
                      </Button>
                      <Button
                        click={location.pathname == "/product-taken-acknowledgement" ? true : false}
                        onClick={() => navigation("/product-taken-acknowledgement")}>
                        Product Taken Acknowledgement
                      </Button>
                      <Button
                        click={location.pathname == "/product-purchase-request" ? true : false}
                        onClick={() => navigation("/product-purchase-request")}>
                        Purchase Requests
                      </Button>
                      <Button
                        click={location.pathname == "/service-quotation" ? true : false}
                        onClick={() => navigation("/service-quotation")}>
                        Quotation List
                      </Button>
                      <Button
                        click={location.pathname == "/service-expert" ? true : false}
                        onClick={() => navigation("/service-expert")}>
                        Service Expert
                      </Button>
                    </Item>
                  ) : (
                    ""
                  )}
                </NavOption>
              </div>
            ) : (
              ""
            )}

            {props.role == "2" ? (
              <>
                <NavOption>
                  <LinkBtn
                    click={
                      location.pathname === "/product-taken-acknowledgement" ||
                      location.pathname === "/service-updates"
                        ? true
                        : false
                    }
                    onClick={general}>
                    {" "}
                    {isGeneral === true ? <AiOutlineMinusSquare /> : <AiOutlinePlusSquare />}{" "}
                    General
                  </LinkBtn>
                  {isGeneral === true ? (
                    <Item>
                      <Button
                        click={location.pathname == "/product-taken-acknowledgement" ? true : false}
                        onClick={() => navigation("/product-taken-acknowledgement")}>
                        Product Taken Acknowledgement
                      </Button>

                      <Button
                        click={location.pathname == "/service-updates" ? true : false}
                        onClick={() => navigation("/service-updates")}>
                        Service updates
                      </Button>
                    </Item>
                  ) : (
                    ""
                  )}
                </NavOption>

                <NavOption>
                  <LinkBtn
                    click={
                      location.pathname == "/view-tickets" ||
                      location.pathname == "/returned-tickets" ||
                      location.pathname == "/assigned-tickets"
                        ? true
                        : false
                    }
                    onClick={sales}>
                    {isSales === true ? <AiOutlineMinusSquare /> : <AiOutlinePlusSquare />} Tickets
                  </LinkBtn>
                  {isSales === true ? (
                    <Item>
                      <Button
                        click={location.pathname == "/view-tickets" ? true : false}
                        onClick={() => navigation("/view-tickets")}>
                        All Tickets
                      </Button>
                      <Button
                        click={location.pathname == "/assigned-tickets" ? true : false}
                        onClick={() => navigation("/assigned-tickets")}>
                        Assigned Tickets
                      </Button>
                      <Button
                        click={location.pathname == "/returned-tickets" ? true : false}
                        onClick={() => navigation("/returned-tickets")}>
                        Returned Tickets
                      </Button>
                    </Item>
                  ) : (
                    ""
                  )}
                </NavOption>

                <NavOption>
                  <LinkBtn
                    click={
                      location.pathname == "/view-service-partner" ||
                      location.pathname == "/view-vendor-details" ||
                      location.pathname == "/service-partner-levels" ||
                      location.pathname == "/service-partner-categories" ||
                      location.pathname == "/service-partner-details" ||
                      location.pathname == "/service-engineers-list"
                        ? true
                        : false
                    }
                    onClick={userClose}>
                    {isUser === true ? <AiOutlineMinusSquare /> : <AiOutlinePlusSquare />} User
                  </LinkBtn>
                  {isUser === true ? (
                    <Item>
                      <Button
                        click={location.pathname == "/view-vendor-details" ? true : false}
                        onClick={() => navigation("/view-vendor-details")}>
                        Vendor Details
                      </Button>
                      <Button
                        click={location.pathname == "/view-service-partner" ? true : false}
                        onClick={() => navigation("/view-service-partner")}>
                        Service Partner
                      </Button>
                      <Button
                        click={location.pathname == "/service-engineers-list" ? true : false}
                        onClick={() => navigation("/service-engineers-list")}>
                        Service Engineers List
                      </Button>
                      <Button
                        click={location.pathname == "/service-partner-levels" ? true : false}
                        onClick={() => navigation("/service-partner-levels")}>
                        Service Partner Levels
                      </Button>
                      <Button
                        click={location.pathname == "/service-partner-categories" ? true : false}
                        onClick={() => navigation("/service-partner-categories")}>
                        Service Partner Categories
                      </Button>
                      <Button
                        click={location.pathname == "/service-partner-details" ? true : false}
                        onClick={() => navigation("/service-partner-details")}>
                        Service Partner Details
                      </Button>
                    </Item>
                  ) : (
                    ""
                  )}
                </NavOption>

                <NavOption>
                  <LinkBtn
                    click={
                      location.pathname == "/service-feedbacks" ||
                      location.pathname === "/followup-feedback"
                        ? true
                        : false
                    }
                    onClick={servicesEngineers}>
                    {" "}
                    {isServiceEngineers === true ? (
                      <AiOutlineMinusSquare />
                    ) : (
                      <AiOutlinePlusSquare />
                    )}{" "}
                    Feedbacks
                  </LinkBtn>
                  {isServiceEngineers === true ? (
                    <Item>
                      <Button
                        click={location.pathname == "/service-feedbacks" ? true : false}
                        onClick={() => navigation("/service-feedbacks")}>
                        Service Feedbacks
                      </Button>
                      <Button
                        click={location.pathname == "/followup-feedback" ? true : false}
                        onClick={() => navigation("/followup-feedback")}>
                        Followup Feedbacks
                      </Button>
                    </Item>
                  ) : (
                    ""
                  )}
                </NavOption>
              </>
            ) : (
              ""
            )}
          </Drawer>
        </ImgDiv>

        <LogoContainer>
          <img src={Logo} />
        </LogoContainer>
      </Section>

      { location.pathname == '/' || location.pathname == '/admin/login' ||  location.pathname == '/call-coordinator/login' ? null : <Section>
        <ImageContainer style={{ color: "white", fontSize: "14px" }}>
          {props.role == "1" && localStorage.getItem("loginDetails") ? "Admin" : ""}
          {props?.role == "2" && localStorage.getItem("loginDetails") ? "Call Coordinator" : ""}
        </ImageContainer>
        <ImageContainer>
          <img src={notification} alt="icon" />
        </ImageContainer>
        <ImageContainer>
          <img src={user} alt="icon" onClick={handleOpenNavMenu} />
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            // sx={{
            //   // display: { xs: "block" },
            //   padding: "0px",
            // }}
          >
            {!props?.role || props?.role == "null" || !localStorage.getItem("loginDetails") ? (
              <>
                <MenuItem
                  style={{ display: "flex", justifyContent: "center" }}
                  onClick={(e) => {
                    handleCloseNavMenu();
                    navigate("/admin/login");
                  }}>
                  <Typography>Admin</Typography>
                </MenuItem>
                <MenuItem
                  style={{ display: "flex", justifyContent: "center" }}
                  onClick={(e) => {
                    navigate("/call-coordinator/login");
                    handleCloseNavMenu();
                  }}>
                  <Typography>Call Coordinator</Typography>
                </MenuItem>
              </>
            ) : (
              <>
                {props?.role == "2" ? (
                  <MenuItem style={{ display: "flex", justifyContent: "center" }}>
                    <Typography style={{ padding: "2px 10px" }}>
                      Hi {props?.callCoordinator[0]?.name}
                    </Typography>
                  </MenuItem>
                ) : (
                  ""
                )}
                <MenuItem style={{ display: "flex", justifyContent: "center" }}>
                  <Typography
                    textAlign="center"
                    style={{ padding: "2px 10px" }}
                    onClick={() => {
                      localStorage.setItem("role", null);
                      handleCloseNavMenu();
                      props?.setRole("null");
                    }}>
                    Logout
                  </Typography>
                </MenuItem>
              </>
            )}
          </Menu>
        </ImageContainer>
      </Section>}
    </HeaderContainer>
  );
}
export default Header;
