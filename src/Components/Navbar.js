import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/"><span>Daily Bugle</span></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item"><Link className="nav-link" to="/business">business</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/entertainment">entertainment</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/health">health</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/science">science</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/sports">sports</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/technology">technology</Link></li>
            </ul>
            </div>
        </div>
        </nav>

        
      </div>
    )
  }
}
