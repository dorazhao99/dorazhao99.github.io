import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import css from "./index.css"
import { StaticImage } from "gatsby-plugin-image"

const LandingPage = ({ data, location }) => {
  const siteTitle = ''

  return (
    <Layout location={location} title={siteTitle}>
      <div>
        <div className="navbar">
          <a className="selected" href='/'> home </a>
          <a href="/research">research</a>
          <a href="/cv.pdf">cv</a>
        </div>
        <div className="hero">
          <div className="profile-pic">
            <StaticImage
              className="bio-avatar"
              layout="fixed"
              formats={["AUTO", "WEBP", "AVIF"]}
              src="../images/headshot.png"
              width={200}
              height={200}
              quality={95}
              alt="Profile picture"
            />
          </div>
          <div>
            <h2> Hi 👋, I'm Dora Zhao. </h2>
            <body>
              I am a first-year CS PhD student at Stanford University, co-advised by Professors <a href="https://hci.stanford.edu/msb/" target="_blank">Michael Bernstein</a> and  <a href="https://cs.stanford.edu/~diyiy/" target="_blank">Diyi Yang</a>.
              Previously, I was an AI Engineer at Sony AI on the Ethics flagship project. I also worked in the <a href="http://visualai.princeton.edu/" target="_blank">
              Princeton Visual AI Lab</a>, advised by <a href="https://www.cs.princeton.edu/~olgarus/" target="_blank">Professor Olga Russakovsky</a>.
              <br/>
              <br/>
              My research lies at the intersection of <strong>human-computer interaction</strong> and <strong>machine learning fairness</strong>. I am broadly 
              interested in designing technical methods that empower community control over AI systems and improving practices around machine learning dataset collection.
              <br/><br/>
              If you are an undergraduate student interested in similar research topics, please feel free to reach out. 
            </body>
            <br/>
            <div>
              <a href="mailto:dorothyz@stanford.edu">[email]</a>
              &emsp; <a href="https://github.com/dorazhao99/" target="_blank">[github]</a>
              &emsp; <a href="https://twitter.com/dorazhao9" target="_blank">[twitter]</a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3> news </h3>
        <ul>
          <li className="news"><strong>[07/24]</strong> Attended ICML 2024 and presenting our position paper on dataset diversity.</li>
          <li className="news"><strong>[10/23]</strong> Gave a talk at understanding biases in multimodal systems at the <a href="https://muws-workshop.github.io/">MUWS</a> workshop @ CIKM 2023.</li>
          <li className="news"><strong>[10/23]</strong> Two papers accepted to NeurIPS D&B 2023.</li>
         </ul>
      </div>

    </Layout>
  )
}

export default LandingPage
