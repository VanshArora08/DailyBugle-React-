import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="/"><span>Daily Bugle</span></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item"><a className="nav-link" href="/">About</a>
              </li>
              <li className="nav-item"><a className="nav-link" href="/">business</a></li>
              <li className="nav-item"><a className="nav-link" href="/">entertainment</a></li>
              <li className="nav-item"><a className="nav-link" href="/">general</a></li>
              <li className="nav-item"><a className="nav-link" href="/">health</a></li>
              <li className="nav-item"><a className="nav-link" href="/">science</a></li>
              <li className="nav-item"><a className="nav-link" href="/">sports</a></li>
              <li className="nav-item"><a className="nav-link" href="/">technology</a></li>
            </ul>
            </div>
        </div>
        </nav>

        
      </div>
    )
  }
}
