import React from "react"
import { Topbar, ProfileLeft, Footer, } from '../components';

import headshot from '../assets/dorothyz.jpeg';
import {
  AiOutlineMail,
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiOutlineGithub
} from 'react-icons/ai';
import './about.css';

export default function About() {
  return  (
    <div className = "root">
      <Topbar />
      <div className = "container-about">
        <div className = "text-about">
          <div className = "title-about">
            ABOUT
          </div>
          <p>  Hello! My name is Dora Zhao, and I am an undergraduate student at Princeton
          University majoring in computer science with certificates in statistics & machine learning
          and Asian American studies. </p>
          <p> I am currently interning at Roost Travel Company working on building
          their listing and marketplace platforms in addition to returning as a
          summer investment analyst banking analyst at
          Goldman Sachs in the Financial Institutions Group (FIG). </p>
          <p> I am passionate about creating equitable technology. In particular,
          I am interested in fairness in machine learning, mitigating
          racial biases in AI, and improving access to technology. I enjoy thinking and
          learning about the ways in which technology interacts with existing social
          systems. </p> 
          <p> Feel free to reach out to colloborate or just say hello! </p>
          <div className="button-wrapper">
            <a className="button-link" href = "mailto: dorothyzhao@princeton.edu">
              <AiOutlineMail size={32} alt="Email"/>
            </a>
            <a className="button-link" href="https://www.linkedin.com/in/dorothy-z/" target="_blank">
              <AiOutlineLinkedin size={32} alt="LinkedIn"/>
            </a>
            <a className="button-link" href="https://github.com/dorazhao99" target="_blank">
              <AiOutlineGithub size={32}/>
            </a>
            <a className="button-link" href="https://www.instagram.com/doorughzow/?hl=en" target="_blank">
              <AiOutlineInstagram size={32} alt="Instagram"/>
            </a>
          </div>
        </div>
        <div>
          <img className="introImage" src={headshot} />
        </div>
      </div>
      <Footer/>
    </div>
  )
}
