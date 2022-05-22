import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

function Navbar() {
    return (
      <nav className="bg-black h-20 w-screen flex justify-center items-center">
        <Link to="/" className="bg-gray-900 text-white px-3 py-2 rounded-md text-xl font-medium uppercase" aria-current="page">Home</Link>
        <Link to="/agents" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium uppercase">Agents</Link>
        <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium uppercase">Maps</Link>
        <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium uppercase">Weapons</Link>
      </nav>
    );
}

export { Navbar };
