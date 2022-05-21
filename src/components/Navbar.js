import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

function Navbar() {
    return (
      <nav>
        <Link to="/">Home</Link>
        <Link to="/">Agents</Link>
        <Link to="/">Maps</Link>
        <Link to="/">Weapons</Link>
      </nav>
    );
}

export { Navbar };
