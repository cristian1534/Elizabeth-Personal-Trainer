import React from "react";
import AdminClients from "../components/AdminClients";
import AdminMessages from "../components/AdminMessages";
import AdminPayment from "../components/AdminPayment";
import AdminVideos from "../components/AdminVideos";

const Admin = () => {
  return <div>
    <AdminMessages/>
    <AdminClients/>
    <AdminPayment/>
    <AdminVideos/>
  </div>;
};

export default Admin;
