import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const token = window.localStorage.getItem("auth")
  return (
    <div>
      <nav className="navbar navbar-light  container">
        <Link
          className="navbar-brand "
          to="/"
          style={{ marginLeft: "15px", fontWeight: "bolder", fontSize: "22px" }}
          onClick={()=> window.localStorage.clear() }
        >
          {token ? "Log Out" : null }
        </Link>
      

      <Link
        to="/about"
        className="navbar-brand "
        style={{
          marginLeft: "15px",
          fontWeight: "bolder",
          fontSize: "22px",
          paddingLeft: "15px"
        }}
      >
        About
      </Link>
      </nav>
    </div>
  );
};

export default Header;