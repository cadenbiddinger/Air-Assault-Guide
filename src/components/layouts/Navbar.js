import React from 'react'
import logo from '../../logo.png';
import { Link } from 'react-router-dom';



function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <a className="navbar-brand ml-5" href="#">
    <img src={logo} alt="logo" style={{ width: '45px' }}></img></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav m-auto">
      <li className="nav-item active">
        <Link className="nav-link text-white text-uppercase ml-5" to="/">Home&nbsp;<i class="fas fa-home"></i> <span class="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white text-uppercase ml-5" to="/layout">Course Layout</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white text-uppercase ml-5" to="/preparation">Preperation</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white text-uppercase ml-5" to="/locations">Locations</Link>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
  );
}

export default Navbar;


// imported the { link } from react-router-dom to get the links in the navbar to work. In JSX react router works with the <Link> tag not the <a> tag. Also with the JSX you will not use a href but will use a to=""