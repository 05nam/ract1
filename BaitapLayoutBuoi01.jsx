import React, { Component } from "react";

export default class BaitapLayoutBuoi01 extends Component {
  render() {
    return (
     <div>
  <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div classname="container">
        <a className="navbar-brand" href="#">
          Start Bootstrap
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className=" navbar-nav ml-md-auto" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
            <a className="nav-link" href="#">
              About
            </a>
            <a className="nav-link" href="#">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  </div>
  <div classname="body" />
  <div className="container">
  <div className="card">
  
  <div className="card-body">
    <h5 className="card-title">A warm welcome!</h5>
    <p className="card-text">Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
    <a href="#" className="btn btn-primary">Call to action </a>
  </div>
</div>


  </div>
</div>

    );
  }
}
