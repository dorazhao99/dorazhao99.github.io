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
              I am a fourth-year CS PhD student at Stanford University, co-advised by Professors <a href="https://hci.stanford.edu/msb/" target="_blank">Michael Bernstein</a> and  <a href="https://cs.stanford.edu/~diyiy/" target="_blank">Diyi Yang</a>.
              My research has been supported by the Paul & Daisy Soros Fellowship for New Americans, the Stanford Interdisciplinary Graduate Fellowship, and the Brown Institute for Media Innovation.
              Previously, I was an AI Engineer at Sony AI on the Ethics flagship project. I also worked in the <a href="http://visualai.princeton.edu/" target="_blank">
              Princeton Visual AI Lab</a>, advised by <a href="https://www.cs.princeton.edu/~olgarus/" target="_blank">Professor Olga Russakovsky</a>.
              <br/>
              <br/>
              My research lies at the intersection of <strong>human-computer interaction</strong> and <strong>responsible AI</strong>. I am broadly 
              interested in how we design AI systems that prioritize long-term benefits to users through (1) <i>measuring</i> longitudinal effects of interacting with AI systems, and (2) creating new methods or interaction approaches that support deeper user understanding.
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
            <li className="news"><strong>[06/26]</strong> Started an internship at Apple in the Human-Centered Machine Intelligence group working on boundary-maintaining behaviors in LLMs</li>
          <li className="news"><strong>[01/26]</strong> Started a part-time internship at Microsoft in the IDEAS group working on upskilling workers</li>
          <li className="news"><strong>[01/26]</strong> Three papers conditionally accepted at CHI 2026</li>
          <li className="news"><strong>[11/25]</strong> Helped organized a <a href="https://www.wired.com/story/the-biggest-ai-companies-met-to-find-a-better-path-for-chatbot-companions/" _target="blank">workshop on AI companionship</a> at Stanford </li>
         </ul>
      </div>

    </Layout>
  )
}

export default LandingPage
