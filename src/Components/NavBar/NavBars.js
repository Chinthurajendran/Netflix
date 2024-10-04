import React from "react";
import "./NavBar.css";

function NavBars() {
  return (
    <div className="navbar">
      <div>
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
          alt="Netflix Logo"
        />
      </div>
      <div className="navbar2">
        <h3>Home</h3>
        <h3>TV shows</h3>
        <h3>Movies</h3>
        <h3>New & Popular</h3>
        <h3>My List</h3>
        <h3>Browse by Languages</h3>
      </div>
    </div>
  );
}

export default NavBars;
