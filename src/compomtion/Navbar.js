import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <h5>Navbar</h5>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/sports">sports</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/science">science</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/business">business</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/health">health</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/entertainment">entertainment</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/technology">technology</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
