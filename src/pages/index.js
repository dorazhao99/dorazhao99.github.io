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
              I am a Master's student at Princeton University, studying
              computer science. I am interested in machine learning fairness, AI ethics, and
              human-computer interaction. Currently, I am working in the <a href="http://visualai.princeton.edu/" target="_blank">
              Princeton Visual AI Lab</a>, advised by <a href="https://www.cs.princeton.edu/~olgarus/" target="_blank">Professor Olga Russakovsky</a>.
              This past summer, I interned at Sony AI in the AI Ethics group.
            </body>
          </div>
        </div>
        <body>
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
        <ul>
          <li><strong>[05/22]</strong> Finished my Master's program at Princeton University!</li>
          <li><strong>[05/22]</strong> Defended my thesis on teenage perceptions of privacy on visual social media platforms, advised by Professor André Monroy-Hernández.</li>
          <li><strong>[08/21]</strong> Started my Master's program at Princeton University!</li>
          <li><strong>[08/21]</strong> Finished my summer internship at Sony AI on the AI Ethics team, where I worked on generating synthetic data with GANs for reducing bias in object classification tasks.</li>
          <li><strong>[07/21]</strong> One paper accepted to ICCV 2021: <a href="https://arxiv.org/abs/2106.08503" target="_blank"> Understanding and Evaluating Racial Biases in Image Captioning </a></li>
        </ul>
      </div>
      <div>
        <h3> research </h3>
        <div>
        <ul>
          <li><a href="https://arxiv.org/abs/2206.09191" target="_blank">Gender Artifacts in Visual Datasets</a> <br/>
            Nicole Meister*, <strong>Dora Zhao*</strong>, Angelina Wang, Vikram V. Ramaswamy, Ruth Fong, Olga Russakovsky <br/>
            <strong><i>arXiv 2022</i></strong>
          </li> 
          <li><a href="https://dl.acm.org/doi/abs/10.1145/3491101.3516382" target="_blank">Anti-Racist HCI: Notes on an Emerging Critical Technical Practice</a> <br/>
            One of nineteen authors <br/>
            <strong><i>alt.CHI 2022</i></strong>
          </li>     
          <li><a href="https://arxiv.org/abs/2004.07999" target="_blank">REVISE: A Tool for Measuring and Mitigating Bias in Visual Datasets</a> <br/>
            Angelina Wang, Alexander Liu, Ryan Zhang, Anat Kleiman, Leslie Kim, <strong>Dora Zhao</strong>, Iroha Shirai, Arvind Narayanan, Olga Russakovsky <br/>
            <strong><i>IJCV 2022</i></strong>
          </li>
          <li><a href="https://arxiv.org/abs/2106.08503" target="_blank">Understanding and Evaluating Racial Biases in Image Captioning</a> <br/>
            <strong>Dora Zhao</strong>, Angelina Wang, Olga Russakovsky <br/>
            <strong><i>ICCV 2021</i></strong>
          </li>

        </ul>
        </div>
      </div>
      <div>
        <h3> teaching </h3>
        <div>
          <ul>
            <li> COS 333: Advanced Programming Techniques, Spring 2022 </li>
            <li> COS 333: Advanced Programming Techniques, Fall 2021 </li>
            <li> COS IW 07: Computer Vision for Social Good, Spring 2021 </li>
            <li> COS IW 08: Fairness of Visual Recognition, Spring 2021 </li>
          </ul>
        </div>

      </div>
    </Layout>
  )
}

export default LandingPage
