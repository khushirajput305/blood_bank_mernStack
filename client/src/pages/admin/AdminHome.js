import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";
const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <>
      <Layout>
        <div className="container">
          <div className="d-flex flex-column mt-4">
            <h1>
              Welcome Admin <i className="text-success "> {user?.name}</i>
            </h1>
            <hr />
            <h2 className="mt-4 text-success">Manage Blood Bank App</h2>
            <hr />
            <p className="text-left">
              Welcome to the Blood Bank Admin Dashboard, your centralized
              platform for managing key operations of the blood bank system. As
              an admin, you have access to essential features, including the
              Donor List, where you can view and update donor details, track
              donation history, and ensure timely communication. The Hospital
              List allows you to manage partner hospitals, monitor blood
              requests, and coordinate deliveries efficiently. Additionally, the
              Organization List provides oversight of collaborating
              organizations and blood drives, helping you maintain strong
              relationships and ensure a steady supply of blood donations. With
              streamlined access to these resources, this dashboard is designed
              to optimize operations and support lifesaving efforts.
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AdminHome;
