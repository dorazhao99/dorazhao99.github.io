import React from "react"
import {
  Topbar,
  ProfileLeft,
  ProfileRight,
  Footer,
} from '../components';
import headshot from '../assets/dorothyz.jpeg';
import './index.css';
import {
  AiOutlineMail,
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiOutlineGithub
} from 'react-icons/ai';

import expressoImage from '../assets/expresso.png';
import driversImage from '../assets/drivers.png';
import ferImage from '../assets/fer.png';

export default function Home() {
  const expresso = "An mobile ordering web application built for Princeton’s only student-run coffee shop, the Coffee Club";
  const fer = "An intersectional audit conducted on commercial facial emotion recognition classifiers, looking at the effects of skin color and gender";
  const driver = "An infinite-runner web game that simulates driving through Princeton’s campus while the player avoids obstacles on the road."

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
            <p> I am a fourth-year undergraduate student at Princeton University <br/>
            studying computer science, statistics, and diasporic studies. </p>

            <p> My interests include <strong>AI ethics </strong>, <strong> fairness in computing </strong> <br/>
            and <strong> human-computer interaction</strong>. I am especially interested <br/>
            in evaluating and mitigating social biases in computing. </p>

            <p> In my spare time, I enjoy reading (check out my <a> reading list </a> for 2021), drinking coffee, and cooking. </p>
          </div>
        </div>
        <div className="imgWrapper">
          <img className="introImage" alt="Smiling girl standing in front of a wall" src={headshot} />
        </div>
      </div>
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
      <Footer/>
    </div>

  )
}
// <div className = "contentWrapper">
//   <ProfileLeft
//     title="Expresso"
//     color="yellow"
//     link="http://coffeeclub.princeton.edu/landing"
//     description={expresso}
//     image={expressoImage}/>
//   <ProfileRight
//     title="Driver's Ed"
//     color="pink"
//     link="https://karenying.github.io/drivers-ed/"
//     description = {driver}
//     image={driversImage}/>
//   <ProfileLeft
//     title="FER Audit"
//     color="blue"
//     link = "https://github.com/dorazhao99/emotiondetectionaudit"
//     description={fer}
//     image={ferImage}/>
// </div>
