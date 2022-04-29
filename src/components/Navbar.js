import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

function Navbar() {
    return (
      <nav>
        <p>Navbar</p>
        <Link to="/">Home</Link>
      </nav>
    );
}

export { Navbar };
