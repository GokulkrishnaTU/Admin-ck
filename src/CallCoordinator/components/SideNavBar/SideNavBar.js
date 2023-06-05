import { React, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Container, Sidenav, Button, Item, LinkBtn, NavOption } from "./SideNavBar.styled.js";
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";

function SideNavBar() {
  const navigation = useNavigate();
  const [isBtnClr, setIsBtnClr] = useState(false);
  const [isGeneral, setIsGeneral] = useState(false);
  const [isSales, setIsSales] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const [isServices, setIsServices] = useState(false);
  const [isServiceEngineers, setIsServiceEngineers] = useState(false);
  const [isServicePartners, setIsServicePartners] = useState(false);
  const location = useLocation();

  const general = () => {
    setIsGeneral((isGeneral) => !isGeneral);
  };
  const sales = () => {
    setIsSales((isSales) => !isSales);
  };
  const userClose = () => {
    setIsUser((isUser) => !isUser);
  };
  const services = () => {
    setIsServices((isServices) => !isServices);
  };
  const servicesEngineers = () => {
    setIsServiceEngineers((isServiceEngineers) => !isServiceEngineers);
  };
  const servicePartner = () => {
    setIsServicePartners((isServicePartners) => !isServicePartners);
  };
  const btnClr = () => {
    setIsBtnClr((isBtnClr) => !isBtnClr);
  };
  const handleClick = () => {
    navigation("/viewTheme");
    // setIsBtnClr(true);
    btnClr();
  };

  return (
    <Container>
      <Sidenav>
        {/* <NavOption>
          <LinkBtn
            click={location.pathname === "/product-taken-acknowledgement" ? true : false}
            onClick={general}
          >
            {" "}
            {isGeneral === true ? <AiOutlineMinusSquare /> : <AiOutlinePlusSquare />} General
          </LinkBtn>
          {isGeneral === true ? (
            <Item>
              <Button
                click={location.pathname == "/product-taken-acknowledgement" ? true : false}
                onClick={() => navigation("/product-taken-acknowledgement")}
              >
                Product Taken Acknowledgement
              </Button>
            </Item>
          ) : (
            ""
          )}
        </NavOption> */}

        <NavOption>
          <LinkBtn
            click={
              location.pathname == "/view-tickets" ||
                location.pathname == "/returned-tickets" ||
                location.pathname == "/assigned-tickets" ||
                location.pathname == "/product-taken-acknowledgement"
                ? true
                : false
            }
            onClick={sales}
          >
            {isSales === true ? <AiOutlineMinusSquare /> : <AiOutlinePlusSquare />} Tickets
          </LinkBtn>
          {isSales === true ? (
            <Item>
              <Button
                click={location.pathname == "/view-tickets" ? true : false}
                onClick={() => navigation("/view-tickets")}
              >
                All Tickets
              </Button>
              <Button
                click={location.pathname == "/assigned-tickets" ? true : false}
                onClick={() => navigation("/assigned-tickets")}
              >
                Assigned Tickets
              </Button>
              <Button
                click={location.pathname == "/returned-tickets" ? true : false}
                onClick={() => navigation("/returned-tickets")}
              >
                Returned Tickets
              </Button>
              <Button
                click={location.pathname == "/product-taken-acknowledgement" ? true : false}
                onClick={() => navigation("/product-taken-acknowledgement")}
              >
                Product Taken Acknowledgement
              </Button>
            </Item>
          ) : (
            ""
          )}
        </NavOption>

        <NavOption>
          <LinkBtn
            click={
              location.pathname == "/service-partner-levels" ||
                location.pathname == "/view-service-partner" ||
                location.pathname == "/service-partner-categories" ||
                location.pathname == "/service-partner-details"
                ? true
                : false
            }
            onClick={servicePartner}
          >
            {isServicePartners === true ? <AiOutlineMinusSquare /> : <AiOutlinePlusSquare />}{" "}
            Service Partner
          </LinkBtn>
          {isServicePartners === true ? (
            <Item>
              <Button
                click={location.pathname == "/view-service-partner" ? true : false}
                onClick={() => navigation("/view-service-partner")}
              >
                Service Partners
              </Button>
              <Button
                click={location.pathname == "/service-partner-levels" ? true : false}
                onClick={() => navigation("/service-partner-levels")}
              >
                Service Partner Levels
              </Button>
              <Button
                click={location.pathname == "/service-partner-categories" ? true : false}
                onClick={() => navigation("/service-partner-categories")}
              >
                Service Partner Categories
              </Button>
              <Button
                click={location.pathname == "/service-partner-details" ? true : false}
                onClick={() => navigation("/service-partner-details")}
              >
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
              location.pathname == "/view-vendor-details" ||
                location.pathname == "/service-engineers-list" ||
                location.pathname == "/secondary-service-partner"
                ? true
                : false
            }
            onClick={userClose}
          >
            {isUser === true ? <AiOutlineMinusSquare /> : <AiOutlinePlusSquare />} Other Users
          </LinkBtn>
          {isUser === true ? (
            <Item>
              <Button
                click={location.pathname == "/view-vendor-details" ? true : false}
                onClick={() => navigation("/view-vendor-details")}
              >
                Vendors
              </Button>
              <Button
                click={location.pathname == "/secondary-service-partner" ? true : false}
                onClick={() => navigation("/secondary-service-partner")}
              >
                Secondary Service Partner
              </Button>

              <Button
                click={location.pathname == "/service-engineers-list" ? true : false}
                onClick={() => navigation("/service-engineers-list")}
              >
                Service Engineers
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
                location.pathname === "/followup-feedback" ||
                location.pathname === "/service-updates"
                ? true
                : false
            }
            onClick={servicesEngineers}
          >
            {" "}
            {isServiceEngineers === true ? <AiOutlineMinusSquare /> : <AiOutlinePlusSquare />}{" "}
            Feedbacks
          </LinkBtn>
          {isServiceEngineers === true ? (
            <Item>
              <Button
                click={location.pathname == "/service-feedbacks" ? true : false}
                onClick={() => navigation("/service-feedbacks")}
              >
                Service Feedbacks
              </Button>
              <Button
                click={location.pathname == "/followup-feedback" ? true : false}
                onClick={() => navigation("/followup-feedback")}
              >
                Followup Feedbacks
              </Button>
              <Button
                click={location.pathname == "/service-updates" ? true : false}
                onClick={() => navigation("/service-updates")}
              >
                Service updates
              </Button>
            </Item>
          ) : (
            ""
          )}
        </NavOption>
      </Sidenav>
    </Container>
  );
}

export default SideNavBar;
