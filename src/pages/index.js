import React from "react"
import { Topbar, ProfileLeft, ProfileRight, } from '../components';

import './index.css';

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
            <p> I am a fourth-year undergraduate student <br/>
            at Princeton University studying computer science, <br/>
            statistics, and diasporic studies. </p>
            <p> My interests include <strong> fairness in computing </strong> <br/>
            and <strong> human-computer interaction</strong>. </p>
          </div>
        </div>
      </div>
      <div className = "contentWrapper">
        <ProfileLeft
          title="Expresso"
          color="yellow"
          link="http://coffeeclub.princeton.edu/landing"
          description={expresso}
          image={expressoImage}/>
        <ProfileRight
          title="Driver's Ed"
          color="pink"
          link="https://karenying.github.io/drivers-ed/"
          description = {driver}
          image={driversImage}/>
        <ProfileLeft
          title="FER Audit"
          color="blue"
          link = "https://github.com/dorazhao99/emotiondetectionaudit"
          description={fer}
          image={ferImage}/>
      </div>
    </div>

  )
}
