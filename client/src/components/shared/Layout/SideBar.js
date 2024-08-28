import React from "react";
import { userMenu } from "./Menus/userMenu";
import { Link, useLocation } from "react-router-dom";
import '../../../styles/Layout.css';
const SideBar = () => {
  const location = useLocation();
  return (
    <>
      <div className="sidebar">
        <div className="menu">
          {userMenu.map((menu) => {
            const isActive = location.pathname === menu.path;
            return <div className={`menu-item ${isActive && 'active'}`}>
                <i className={menu.icon}></i>
                <Link to={menu.path}>{menu.name}</Link>
                </div>;
          })}
        </div>
      </div>
    </>
  );
};

export default SideBar;
