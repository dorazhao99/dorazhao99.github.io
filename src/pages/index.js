import React from "react"
import { Topbar } from '../components';

import './index.css';
import headshot from '../assets/headshot1.png';

export default function Home() {
  return  (
    <div className = "root">
      <Topbar />
      <div className = "introWrapper">
        <div>
          <div className = "introTitle">
            Hi there! <br/>
            My name is Dora Zhao.
          </div>
          <div className = "introText">
            <p> I am a fourth-year undergraduate student <br/>
            at Princeton University studying computer science, <br/>
            statistics, and diasporic studies. </p>
            <p> My interests include <strong> fairness in computing </strong> <br/>
            and <strong> human-computer interaction</strong>. </p>
          </div>
        </div>
        <img className="introImage" src={headshot} />
      </div>
    </div>

  )
}
