import { React, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Container, Sidenav, Button, Item, LinkBtn, NavOption } from "./SideNavStyle";
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";
function SideNav() {
  const navigation = useNavigate();
  const [isBtnClr, setIsBtnClr] = useState(false);
  const [isGeneral, setIsGeneral] = useState(false);
  const [isSales, setIsSales] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const [isServices, setIsServices] = useState(false);
  const [isServiceEngineers, setIsServiceEngineers] = useState(false);
  const [isExchange, setIsExchange] = useState(false);
  const [isQuiz, setIsQuiz] = useState(false);
  const [isTerms, setIsTerms] = useState(false);
  const location = useLocation();
  const [isQuotes, setIsQuotes] = useState(false);

  const quotes = () => {
    setIsQuotes((isQuotes) => !isQuotes);
  };
  const general = () => {
    setIsGeneral((isGeneral) => !isGeneral);
  };
  const sales = () => {
    setIsSales((isSales) => !isSales);
  };
  const exchange = () => {
    setIsExchange((isExchange) => !isExchange);
  };
  const quiz = () => {
    setIsQuiz((isQUiz) => !isQuiz);
  };
  const terms = () => {
    setIsTerms((isTerms) => !isTerms);
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
        <NavOption>
          <LinkBtn
            click={
              location.pathname === "/view-theme" || location.pathname == "/view-cart-post"
                ? true
                : false
            }
            onClick={general}>
            {" "}
            {isGeneral === true ? <AiOutlineMinusSquare /> : <AiOutlinePlusSquare />} General
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
                location.pathname === "/bank-details" ||
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
                click={location.pathname == "/bank-details" ? true : false}
                onClick={() => navigation("/bank-details")}>
                Bank Details
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
                Networking Products
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
                location.pathname === "/view-service-partner" ||
                location.pathname === "/view-service-engineer" ||
                location.pathname === "/view-customer-address-list" ||
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
                click={location.pathname == "/view-customer-address-list" ? true : false}
                onClick={() => navigation("/view-customer-address-list")}>
                Customer Address List
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
                location.pathname === "/view-service-types" ||
                location.pathname === "/view-service-pack" ||
                location.pathname === "/view-available-services" ||
                location.pathname === "/service-feedbacks" ||
                location.pathname === "/followup-feedback" ||
                location.pathname === "/service-updates" ||
                location.pathname === "/service-categories" ||
                location.pathname === "/service-partner-levels" ||
                location.pathname === "/product-taken-acknowledgement" ||
                location.pathname === "/service-quotation" ||
                location.pathname === "/product-purchase-request" ||
                location.pathname === "/service-expert"
                ? true
                : false
            }
            onClick={services}>
            {" "}
            {isServices === true ? <AiOutlineMinusSquare /> : <AiOutlinePlusSquare />} Services
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
                Service Updates
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

        {/* <NavOption>
          <LinkBtn
            click={location.pathname === "/view-service-list" ? true : false}
            onClick={servicesEngineers}
          >
            {" "}
            {isServiceEngineers === true ? <AiOutlineMinusSquare /> : <AiOutlinePlusSquare />}{" "}
            Service Partner
          </LinkBtn>
          {isServiceEngineers === true ? (
            <Item>
              <Button
                click={location.pathname == "/view-service-list" ? true : false}
                onClick={() => {
                  navigation("/view-service-list");
                  setIsBtnClr(false);
                }}
              >
                Service Complaints
              </Button>
            </Item>
          ) : (
            ""
          )}
        </NavOption> */}

        <NavOption>
          <LinkBtn
            click={
              location.pathname === "/exchange" || location.pathname == "/exchange-report" || location.pathname == "/inspection-report"
                ? true
                : false
            }
            onClick={exchange}>
            {" "}
            {isExchange === true ? <AiOutlineMinusSquare /> : <AiOutlinePlusSquare />} Exchange Offer
          </LinkBtn>
          {isExchange === true ? (
            <Item>
              <Button
                click={location.pathname == "/exchange" || location.pathname == "/inspection-report" ? true : false}
                onClick={() => {
                  navigation("/exchange");
                }}>
                Exchange
              </Button>
              <Button
                click={location.pathname == "/exchange-report" ? true : false}
                onClick={() => navigation("/exchange-report")}>
                Report
              </Button>
            </Item>
          ) : (
            ""
          )}
        </NavOption>


        <NavOption>
          <LinkBtn
            click={
              location.pathname === "/quiz"
                ? true
                : false
            }
            onClick={quiz}>
            {" "}
            {isQuiz === true ? <AiOutlineMinusSquare /> : <AiOutlinePlusSquare />} Quiz
          </LinkBtn>
          {isQuiz === true ? (
            <Item>
              <Button
                click={location.pathname == "/quiz"  ? true : false}
                onClick={() => {
                  navigation("/quiz");
                }}>
                Quiz
              </Button>
              {/* <Button
                click={location.pathname == "/quiz-questions" ? true : false}
                onClick={() => navigation("/quiz-questions")}>
                Quiz Questions
              </Button> */}
            </Item>
          ) : (
            ""
          )}
        </NavOption>

        <NavOption>
          <LinkBtn
            click={
              location.pathname === "/terms-and-conditions"
                ? true
                : false
            }
            onClick={terms}>
            {" "}
            {isTerms === true ? <AiOutlineMinusSquare /> : <AiOutlinePlusSquare />} Terms and Conditions
          </LinkBtn>
          {isTerms === true ? (
            <Item>
              <Button
                click={location.pathname == "/terms-and-conditions/delivery"  ? true : false}
                onClick={() => {
                  navigation("/terms-and-conditions/delivery");
                }}>
                Delivery
              </Button>
              {/* <Button
                click={location.pathname == "/quiz-questions" ? true : false}
                onClick={() => navigation("/quiz-questions")}>
                Quiz Questions
              </Button> */}
              <Button
                click={location.pathname == "/terms-and-conditions/warranty"  ? true : false}
                onClick={() => {
                  navigation("/terms-and-conditions/warranty");
                }}>
                Warranty
              </Button>
              <Button
                click={location.pathname == "/terms-and-conditions/invoice"  ? true : false}
                onClick={() => {
                  navigation("/terms-and-conditions/invoice");
                }}>
                Invoice
              </Button>
              <Button
                click={location.pathname == "/terms-and-conditions/purchase"  ? true : false}
                onClick={() => {
                  navigation("/terms-and-conditions/purchase");
                }}>
                Purchase
              </Button>
             
            </Item>
          ) : (
            ""
          )}
        </NavOption>

        <NavOption>
          <LinkBtn
            click={
              location.pathname === "/quotes"
                ? true
                : false
            }
            onClick={quotes}>
            {" "}
            {isQuotes === true ? <AiOutlineMinusSquare /> : <AiOutlinePlusSquare />} Quotes
          </LinkBtn>
          {isQuotes === true ? (
            <Item>
              <Button
                click={location.pathname == "/quotes"  ? true : false}
                onClick={() => {
                  navigation("/quotes");
                }}>
                Delivery
              </Button>
              {/* <Button
                click={location.pathname == "/quiz-questions" ? true : false}
                onClick={() => navigation("/quiz-questions")}>
                Quiz Questions
              </Button> */}
       
             </Item>
              ) : (
            ""
          )}
             </NavOption>
      </Sidenav>
    </Container>
  );
}

export default SideNav;
