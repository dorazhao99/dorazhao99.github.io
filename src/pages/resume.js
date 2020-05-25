import React from "react"
import { Topbar, ProfileLeft, } from '../components';

import './index.css';
import resume from "../assets/resume.jpg";

export default function Resume() {
  return  (
    <div className = "root">
      <Topbar />
      <div className = "resumeWrapper">
          <img className = "resume" src= {resume} />
      </div>
    </div>
  )
}
