import React from 'react'
import Login from './Login'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
<>
<div className='container-fluid'>
<nav className="navbar navbar-expand-lg bg-body-tertiary py-4">
  <div className="container-fluid">
    <a classn="navbar-brand" href="#">Dribbble</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
      <Link to="/login" component={Login} className="btn btn-light rounded-pill px-3 me-3" type="submit">Login</Link>
        <button className="btn btn-dark rounded-pill px-3" type="submit">Sign up</button>
      </form>
    </div>
  </div>
</nav>
</div>
</>
  )
}

export default Header