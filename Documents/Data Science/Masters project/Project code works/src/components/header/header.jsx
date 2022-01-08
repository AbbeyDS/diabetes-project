import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div id="header">
      <nav class="navbar navbar-expand-lg navbar-light bg-white py-4">
        <div class="container">
          <Link to="/">
            <h5 className="brand">DiabetesApp</h5>
          </Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-aria-labelledby="navbarSupportedContent">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul class="navbar-nav">
              <li class="nav-item mx-3">
                <Link to="/" class="nav-link active" aria-current="page">Home</Link>
              </li>
              <li class="nav-item mx-3">
              <a href='https://diabetes.org/diabetes' target="_blank" class="nav-link">About Diabetes</a>
              </li>
              <li class="nav-item mx-3">
              <a href='https://diabetes.org' target="_blank" class="nav-link">More Resources</a>
              </li>
            </ul>
          </div>
          <Link to="/test">
            <button class="btn navbar-btn">Take Test</button>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Header
