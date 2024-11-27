import React from 'react';

import logo from "./eggyheart_logo.png";

import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <header className="home-header">
        <img src={logo} alt="logo"/>
        <h1>Heyy</h1>
      </header>
      <ul>
                <li>
                    {/* Endpoint to route to Home component */}
                    <Link to="/">Home</Link>
                </li>
                <li>
                    {/* Endpoint to route to About component */}
                    <Link to="/clock">Clock</Link>
                </li>
                <li>
                    {/* Endpoint to route to Contact Us component */}
                    <Link to="/note">Note</Link>
                </li>
            </ul>
    </div>
  );
}

export default Home;