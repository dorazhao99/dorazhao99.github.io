import React from "react"
import { Topbar, Footer, } from '../components';
import './404.css';

export default function Default404() {
  return (
    <div className = "root">
      <Topbar/>
      <div className="content-container">
        <div className="found-wrapper">
          <h1 className="found-title"> 4<span>😮</span>4!</h1>
          <h3 className="found-text">
            Oh no, it looks like the page you are looking for cannot be found.
          </h3>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
