import React, { Component } from 'react'

export class Nav extends Component {
  state={}
  render() {
    return (
      <nav className="navbar navbar-expand-lg fixed-top-xs" id="mainNav">
        <div className="container-fluid">
          <a className="navbar-brand js-scroll-trigger"> <img src="./assets/images/logo.png" alt="" /></a>
          <div className="mobilemenu">
            <a href="javascript:void(0)" data-toggle="modal" data-target="#exampleModal"> <i className="fa fa-search searchmobile" /></a>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <i className="fa fa-bars" />
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">

                <a className="nav-link " href="#"> <img src="./assets/images/dashboard-ico.png" alt="" /> Dashboard</a>
              </li>
              <li className="nav-item">

                <a className="nav-link " href="#"><i className="fa fa-heart-o" /> Favourites</a>
              </li>
              <li className="nav-item">

                <a className="nav-link " href="#"> <img src="./assets/images/logout.png" alt="" /> Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
export default Nav;
