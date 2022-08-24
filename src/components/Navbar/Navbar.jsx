import React from "react";
import "./Navbar.css";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";

const Navbar = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="left">
          <span>EN</span>
          <div className="searchContainer">
            <input type="text" />
            <i></i>
          </div>
        </div>
        <div className="center">
          <span>MG</span>
        </div>
        <div className="right">
          <ul className="user-login">
            <li>Register</li>
            <li>Sign In</li>
            <li>
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
