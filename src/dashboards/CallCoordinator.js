import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import ServiceComplaints from "../admin/screen/ServiceComplaints/ServiceComplaints";
import ServiceFeedbacks from "../admin/screen/ServiceFeedbacks/ServiceFeedbacks";
import ViewServicePartner from "../CallCoordinator/screens/ServicePartner/ViewServicePartner";
import SideNavBar from "../CallCoordinator/components/SideNavBar/SideNavBar";
import Tickets from "../CallCoordinator/screens/Tickets/Tickets";
import Vendor from "../CallCoordinator/screens/Vendor/Vendor";
import ServicePartnerLevels from "../admin/screen/ServicePartnerLevels/ServicePartnerLevels";
import ProductTakenAcknowledgement from "../admin/screen/ProductTakenAcknowledgement/ProductTakenAcknowledgement";
import FollowupFeedback from "../admin/screen/FollowupFeedback/FollowupFeedback";
import ServiceUpdates from "../admin/screen/ServiceUpdates/ServiceUpdates";
import AllTickets from "../CallCoordinator/screens/AllTickets/AllTickets";
import ViewServiceEngineer from "../CallCoordinator/screens/ServiceEngineer/ViewServiceEngineer";
import ReturnedTickets from "../CallCoordinator/screens/Tickets/ReturnedTickets";
import AssignedTicket from "../CallCoordinator/screens/Tickets/AssignedTicket";
import ServiceCategory from "../admin/screen/ServiceCategory/ServiceCategory";
import ServicePartnerDetails from "../CallCoordinator/screens/ServicePartner/ServicePartnerDetails";
import ServiceEngineerDetails from "../CallCoordinator/screens/ServicePartner/ServiceEngineerDetails";
import SecondarySP from "../CallCoordinator/screens/SecondarySP/SecondarySP";
import Index from "../components/home and user/ProgressBar/Index";
import axios from "axios";
import { server_api } from "../admin/const/api";

function CallCoordinator(props) {
  const [details, setDetails] = useState("");
  const userId = localStorage.getItem("loginDetails");
  const sendRequest = async () => {
    const res = await axios
      .get(`${server_api}/api/getCallCordinator/${userId}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => {
      console.log("Res=>", data);
      setDetails(data);
    });
  }, []);

  props.func(details);
  return (
    <div className="sidenav">
      <SideNavBar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/service-complaints" element={<ServiceComplaints />} />
        <Route path="/view-service-partner" element={<ViewServicePartner />} />
        <Route path="/view-tickets" element={<Tickets details={details} />} />
        <Route path="/service-feedbacks" element={<ServiceFeedbacks />} />
        <Route path="/view-vendor-details" element={<Vendor />} />
        <Route path="/secondary-service-partner" element={<SecondarySP />} />
        <Route path="/service-partner-levels" element={<ServicePartnerLevels />} />
        <Route path="/product-taken-acknowledgement" element={<ProductTakenAcknowledgement />} />
        <Route path="/followup-feedback" element={<FollowupFeedback />} />
        <Route path="/service-updates" element={<ServiceUpdates />} />
        <Route path="/view-all-tickets" element={<AllTickets />} />
        <Route path="/service-engineers-list" element={<ViewServiceEngineer />} />
        <Route path="/returned-tickets" element={<ReturnedTickets />} />
        <Route path="/assigned-tickets" element={<AssignedTicket />} />
        <Route path="/service-partner-categories" element={<ServiceCategory />} />
        <Route path="/service-partner-details" element={<ServicePartnerDetails />} />
        <Route path="/service-Engineers-details" element={<ServiceEngineerDetails />} />
      </Routes>
    </div>
  );
}

export default CallCoordinator;
