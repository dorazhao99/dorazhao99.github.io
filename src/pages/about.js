import React from "react"
import { Topbar, ProfileLeft, } from '../components';

import './index.css';

export default function About() {
  return  (
    <div className = "root">
      <Topbar />
      <div className = "container-about">
        <div className = "title-about">
          ABOUT
        </div>
        <div className = "text-about">
          <p>  Hello! My name is Dora Zhao, and I am an undergraduate student at Princeton
          University majoring in computer science with certificates in statistics & machine learning and Asian American studies.
          I am currently interning at Roost Travel Company working on building
          their listing and marketplace platforms in addition to returning as a
          summer investment analyst banking analyst at
          Goldman Sachs in the Financial Institutions Group (FIG). </p>
          <p> I am passionate about creating equitable technology. In particular,
          I am interested in fairness in machine learning, mitigating
          racial biases in AI, and improving access to technology. I enjoy thinking and
          learning about the ways in which technology interacts with existing social
          systems. </p>
          <p> While I am currently based around New York City, I grew up in the Greater Philadelphia
          area. When I am not cheering on Philadelphia sports teams,
          I also enjoy baking, watching sitcoms, and drinking coffee. </p>
          <p> Feel free to reach out to colloborate or just say hello. </p>
        </div>
      </div>
    </div>
  )
}
