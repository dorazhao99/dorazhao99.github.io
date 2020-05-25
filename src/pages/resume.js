import React from "react"
import { Topbar, Resume} from '../components';

import './resume.css';
import resume from '../assets/resume.png';

export default function ResumePage() {
  return  (
    <div className = "root">
      <Topbar />
      <div className = "resumeWrapper">
        <img className = "resume" src= {resume} />
      </div>
    </div>
  )
}
