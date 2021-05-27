import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

const LandingPage = ({ data, location }) => {
  const siteTitle = ''

  return (
    <Layout location={location} title={siteTitle}>
      <div>
        <h2> Hi 👋, I'm Dora Zhao. </h2>
        <body>
          I am an incoming Master's student at Princeton University, studying
          computer science. I am interested in machine learning fairness, AI ethics, and
          human-computer interaction. Currently, I am working in the <a href="http://visualai.princeton.edu/" target="_blank">
          Princeton Visual AI Lab</a>, advised by <a href="https://www.cs.princeton.edu/~olgarus/" target="_blank">Professor Olga Russakovsky</a>.
          This summer, I am interning at Sony AI in the AI Ethics group.

          <br/>
          <br/>
          I received my undergraduate degree from Princeton University, where I majored
          in computer science with minors in Asian American Studies and statistics + machine learning.
          Previously, I have worked in the Stigma and Social Perception Lab led by Professors <a href="https://psych.princeton.edu/person/nicole-shelton" target="_blank">J. Nicole Shelton</a> and <a href="https://psych.princeton.edu/person/stacey-sinclair" target="_blank">Stacey Sinclair</a>,
          conducted <a href="https://ourpublicservice.org/our-work/time-for-a-change/" target="_blank">research</a> on the federal government,
          and interned at a travel start-up.
        </body>
        <br/>
        <div>
        <a href="mailto:dorothyz@princeton.edu">[email]</a>
        &emsp; <a href="https://github.com/dorazhao99/" target="_blank">[github]</a>
        &emsp; <a href="https://www.linkedin.com/in/dorothy-z/" target="_blank">[linkedin]</a>
        </div>
      </div>
      <div>
        <h3> news </h3>
        Coming soon.
      </div>
      <div>
        <h3> research </h3>
        Coming soon.
      </div>
    </Layout>
  )
}

export default LandingPage
