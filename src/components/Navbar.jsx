import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(){
  var styledNavbar = {
    display: 'flex',
    backgroundColor: 'lightblue',
    paddingTop: '50px',
    color: 'white',
    fontFamily: 'arial',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '400px',
    padding: '0'
  };
  var styledLink = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '20px'
  };
  return (
    <div style={styledNavbar}>
      <h1>Avery's Organics Farmers Markets</h1>
      <span>
        <Link style={styledLink} to="/">home</Link> | <Link style={styledLink} to="/contact">contact</Link>
      </span>
    </div>
  );
}

export default Navbar;
