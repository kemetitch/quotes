import React from "react";
import { NavLink } from "react-router-dom";
import Classes from "./MainNavigation.module.css";
const MainNavigation = () => {
  return (
    <header className={Classes.header}>
      <div className={Classes.logo}>Great Quotes</div>
      <nav className={Classes.nav}>
        <ul>
          <li>
            <NavLink
              to="/allquotes"
              className={({ isActive }) => (isActive ? Classes.active : "")}
            >
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/newquote"
              className={({ isActive }) => (isActive ? Classes.active : "")}
            >
              New Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNavigation;
