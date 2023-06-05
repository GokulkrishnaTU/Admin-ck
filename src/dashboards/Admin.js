import React from "react";
import Home from "../components/home and user/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PersonalDetails from "../components/home and user/screens/PersonalDetails";
import Index from "../components/home and user/ProgressBar/Index.js";
import DeletePopUp from "../admin/screen/DeletePopUp/DeletePopUp";
import AdProfTyp from "../admin/screen/ProfessionType/AdProfTyp";
import AddPurchaseType from "../admin/screen/PurchaseType/AddPurchaseType";
import ViewTheme from "../admin/screen/Theme/ViewTheme/ViewTheme";
import EditTheme from "../admin/screen/Theme/EditTheme/EditTheme";
import ViewPurchaseType from "../admin/screen/PurchaseType/ViewPurchaseType";
import EditPurchaseType from "../admin/screen/PurchaseType/EditPurchaseType";
import ViewProfessionType from "../admin/screen/ProfessionType/ViewProfessionType";
import EditProfessionType from "../admin/screen/ProfessionType/EditProfessionType";
import Modal from "../components/home and user/modal/Modal";
import EditProfile from "../components/home and user/screens/EditProfile";
import SideNav from "../admin/components/Sidenav/SideNav";
import ProductCategory from "../admin/screen/ProductCategory/ProductCategory";
import OrderedProducts from "../admin/screen/OrderedProducts/OrderedProducts";
import OrderedProductDetails from "../admin/screen/OrderedProducts/OrderedProductDetails";
import CustomerCategory from "../admin/screen/CustomerCategory/CustomerCategory";
import Brand from "../admin/screen/Brand/Brand";
import CustomerSubCategory from "../admin/screen/CustomerSubCat/CustomerSubCategory";
import Products from "../admin/screen/Products/Products";
import TypeOfOrganization from "../admin/screen/TypeOfOrganization/TypeOfOrganization";
import GetAccessories from "../admin/screen/Accessories/GetAccessories";
import CustomerSalesReport from "../admin/screen/CustomerSalesReport/CustomerSalesReport";
import ViewInstallation from "../admin/screen/Installation/ViewInstallation";
import CustomerList from "../admin/screen/CustomerList/CustomerList";
import ViewFullDetails from "../admin/screen/CustomerSalesReport/ViewFullDetails";
import ViewServicePack from "../admin/screen/ServicePack/ViewServicePack";
import ViewCartPost from "../admin/screen/CartPost/ViewCartPost";
import ViewComponents from "../admin/screen/Components/ViewComponents";
import ServiceTypes from "../admin/screen/ServiceTypes/ServiceTypes";
import PurchaseFeedback from "../admin/screen/PurchaseFeedback/PurchaseFeedback";
import ServiceComplaints from "../admin/screen/ServiceComplaints/ServiceComplaints";
import ViewServicePartner from "../admin/screen/ServicePartner/ViewServicePartner";
import ViewServiceEngineer from "../admin/screen/ServiceEngineer/ViewServiceEngineer";
import ServiceList from "../admin/screen/ServiceList/ServiceList";
import CustomSaleForm from "../admin/screen/CustomerSalesReport/CustomSaleForm";
import ViewBankDetails from "../admin/screen/BankDetails/ViewBankDetails";
import PdfReport from "../admin/screen/CustomerSalesReport/PdfReport";
import CustomSaleUpdation from "../admin/screen/CustomerSalesReport/CustomSaleUpdation";
import AddProd from "../admin/screen/Products/AddProd";
import ViewCctvTypes from "../admin/screen/CctvTypes/ViewCctvTypes";
import ViewSpeakers from "../admin/screen/Speakers/ViewSpeakers";
import ViewNetworkingProduct from "../admin/screen/NetworkingProduct/ViewNetworkingProduct";
import ViewServices from "../admin/screen/Services/ViewServices";
import EditProd from "../admin/screen/Products/EditProd";
import CustomerAddressList from "../admin/screen/CustomerAddressList/CustomerAddressList";
import AddTheme from "../admin/screen/Theme/AddTheme/AddTheme";
import ViewCallCoordinator from "../admin/screen/CallCoordinator/ViewCallCoordinator";
import PurchaseReq from "../admin/screen/PurchaseReq/PurchaseReq";
import ServiceFeedbacks from "../admin/screen/ServiceFeedbacks/ServiceFeedbacks";
import Vendor from "../CallCoordinator/screens/Vendor/Vendor";
import FollowupFeedback from "../admin/screen/FollowupFeedback/FollowupFeedback";
import ServiceUpdates from "../admin/screen/ServiceUpdates/ServiceUpdates";
import ServiceCategory from "../admin/screen/ServiceCategory/ServiceCategory";
import ServicePartnerLevels from "../admin/screen/ServicePartnerLevels/ServicePartnerLevels";
import ProductTakenAcknowledgement from "../admin/screen/ProductTakenAcknowledgement/ProductTakenAcknowledgement";
import Quotation from "../admin/screen/ServiceQuotation/Quotation";
import ServiceExpert from "../admin/screen/ServiceExpert/ServiceExpert";
import UpdateServiceReg from "../admin/screen/ServiceExpert/UpdateServiceReg";
import UserTypes from "../admin/screen/UserTypes/UserTypes";
import AdminUsers from "../admin/screen/AdminUsers/AdminUsers";
import QuotationPdf from "../admin/screen/ServiceQuotation/QuotationPdf";
import Exchange from "../admin/screen/Exchange/Exchange";
import ExchangeReport from "../admin/screen/Exchange/ExchangeReport";
import InspectionReport from "../admin/screen/Exchange/InspectionReport";
import Quiz from '../admin/screen/Quiz/Quiz'
import QuizQuestion from "../admin/screen/Quiz/QuizQuestions/QuizQuestion";
import TermsandConditions from "../admin/screen/TermsandConditions/WarrantyTerms";
import InvoiceTerms from "../admin/screen/TermsandConditions/InvoiceTerms";
import PurchaseTerms from "../admin/screen/TermsandConditions/PurchaseTerms";
import DeliveryTerms from "../admin/screen/TermsandConditions/DeliveryTerms";
import Quotes from "../admin/screen/Quotes/Quotes";

function Admin() {
  return (
    <div className="sidenav">
      <SideNav />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/home" element={<Home />} />
        <Route path="/otp-modal" element={<Modal />} />
        <Route path="/personal-details" element={<PersonalDetails />} />
        <Route path="/edit-profile" element={<EditProfile />} />

        <Route path="/view-theme" element={<ViewTheme />} />
        <Route path="/add-theme" element={<AddTheme />} />
        <Route path="/edit-theme" element={<EditTheme />} />
        <Route path="/delete-theme" element={<DeletePopUp />} />

        <Route path="/view-prod" element={<ProductCategory />} />
        <Route path="/view-ordered-products" element={<OrderedProducts />} />
        <Route path="/ordered-product-details" element={<OrderedProductDetails />} />

        <Route path="/view-purchase-type" element={<ViewPurchaseType />} />
        <Route path="/add-purchase-type" element={<AddPurchaseType />} />
        <Route path="/edit-purchase-type" element={<EditPurchaseType />} />

        <Route path="/view-profession-type" element={<ViewProfessionType />} />
        <Route path="/add-profession-type" element={<AdProfTyp />} />
        <Route path="/edit-profession-type" element={<EditProfessionType />} />
        <Route path="/customer-category" element={<CustomerCategory />} />
        <Route path="/brand-list" element={<Brand />}></Route>
        <Route path="/view-customer-subcategory" element={<CustomerSubCategory />} />
        <Route path="/view-products" element={<Products />} />
        <Route path="/add-products" element={<AddProd />} />
        {/* <Route path="/add-prod" element={<AddProducts />} /> */}
        <Route path="/view-type-of-organizations" element={<TypeOfOrganization />} />
        <Route path="/get-accessories" element={<GetAccessories />} />
        <Route path="/view-customer-sales-report" element={<CustomerSalesReport />} />
        <Route path="/view-detailed-customer-sales-report" element={<ViewFullDetails />} />
        <Route path="/view-installation" element={<ViewInstallation />} />
        <Route path="/view-customer-list" element={<CustomerList />} />
        <Route path="/view-service-pack" element={<ViewServicePack />} />
        <Route path="/view-cart-post" element={<ViewCartPost />} />
        <Route path="/view-components" element={<ViewComponents />} />
        <Route path="/view-service-types" element={<ServiceTypes />} />
        <Route path="/purchase-feedbacks" element={<PurchaseFeedback />} />
        <Route path="/service-complaints" element={<ServiceComplaints />} />
        <Route path="/view-service-partner" element={<ViewServicePartner />} />
        <Route path="/view-service-engineer" element={<ViewServiceEngineer />} />
        <Route path="/view-service-list" element={<ServiceList />} />
        <Route path="/add-custom-sale-report" element={<CustomSaleForm />} />
        <Route path="/update-custom-sale-report" element={<CustomSaleUpdation />} />
        <Route path="/bank-details" element={<ViewBankDetails />} />
        <Route path="/pdf-report" element={<PdfReport />} />
        <Route path="/view-cctv-types" element={<ViewCctvTypes />} />
        <Route path="/view-speaker-types" element={<ViewSpeakers />} />
        <Route path="/view-networking-products" element={<ViewNetworkingProduct />} />
        <Route path="/view-available-services" element={<ViewServices />} />
        <Route path="/update-products" element={<EditProd />} />
        <Route path="/view-customer-address-list" element={<CustomerAddressList />} />
        <Route path="/view-call-coordinators" element={<ViewCallCoordinator />} />
        <Route path="/product-purchase-request" element={<PurchaseReq />} />
        <Route path="/service-feedbacks" element={<ServiceFeedbacks />} />
        <Route path="/view-vendor-details" element={<Vendor />} />
        <Route path="/followup-feedback" element={<FollowupFeedback />} />
        <Route path="/service-updates" element={<ServiceUpdates />} />
        <Route path="/service-categories" element={<ServiceCategory />} />
        <Route path="/service-partner-levels" element={<ServicePartnerLevels />} />
        <Route path="/product-taken-acknowledgement" element={<ProductTakenAcknowledgement />} />

        <Route path="/service-quotation" element={<Quotation />} />
        <Route path="/service-quotation-pdf" element={<QuotationPdf />} />

        <Route path="/service-expert" element={<ServiceExpert />} />
        <Route path="/service-expert/update" element={<UpdateServiceReg />} />
        <Route path="/user-types" element={<UserTypes />} />
        <Route path="/admin-users" element={<AdminUsers />} />
        <Route path="/exchange" element={<Exchange />} />
        <Route path="/exchange-report" element={<ExchangeReport />} />
        <Route path="/inspection-report" element={<InspectionReport />} />
        <Route path="/quiz" element={<Quiz/>} />
        <Route path="/terms-and-conditions/warranty" element={<TermsandConditions/>} />
        <Route path="/terms-and-conditions/invoice" element={<InvoiceTerms/>} />
        <Route path="/terms-and-conditions/purchase" element={<PurchaseTerms/>} />
        <Route path="/terms-and-conditions/delivery" element={<DeliveryTerms/>} />
        {/* <Route path="/quiz-questions" element={<QuizQuestion />} /> */}
        <Route path="/quotes" element={<Quotes/>} />
      </Routes>
    </div>
  );
}

export default Admin;
