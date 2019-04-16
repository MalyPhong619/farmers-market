import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(){
  var styledNavbar = {
    backgroundColor: 'lightblue',
    paddingTop: '50px',
    color: 'white',
    fontFamily: 'arial',
    textAlign: 'center'
  };
  return (
    <div style={styledNavbar}>
      <h1>Avery's Organics Farmers Markets</h1>
      <Link to="/">Home</Link> | <Link to="/newpost">Write new post</Link>
    </div>
  );
}

export default Navbar;
