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
              I am an AI Engineer at Sony AI on the AI Ethics team. I am interested in <strong>machine learning fairness</strong> and <strong>human-computer interaction</strong>. 
              Previously, I worked in the <a href="http://visualai.princeton.edu/" target="_blank">
              Princeton Visual AI Lab</a>, advised by <a href="https://www.cs.princeton.edu/~olgarus/" target="_blank">Professor Olga Russakovsky</a>.
            </body>
          </div>
        </div>
        <body>
          Previously, I received my undergraduate degree from Princeton University, where I majored
          in computer science with minors in Asian American Studies and statistics + machine learning.
          I also received my Master of Science in Engineering from Princeton as well where I worked with <a href="https://www.cs.princeton.edu/~olgarus/" target="_blank">Professor Olga Russakovsky</a> and <a href="https://www.andresmh.com/" target="_blank">Professor Andrés Monroy-Hernández</a>. 
        </body>
        <br/>
        <body>
          My pronouns are she/her. In my free time, I enjoy watching soccer (go Spurs!), working out, and baking.
        </body>
        <br/>
        <div>
          <a href="mailto:dorazhao99@gmail.com">[email]</a>
          &emsp; <a href="https://github.com/dorazhao99/" target="_blank">[github]</a>
          &emsp; <a href="https://twitter.com/dorazhao9" target="_blank">[twitter]</a>
          &emsp; <a href="https://www.linkedin.com/in/dorothy-z/" target="_blank">[linkedin]</a>
        </div>
      </div>
      <div>
        <h3> news </h3>
        <ul>
          <li className="news"><strong>[07/22]</strong> One paper accepted to CSCW 2022: <a href="https://arxiv.org/abs/2208.02796" target="_blank"> Understanding Teenage Perceptions and Configurations of Privacy on Instagram </a></li>
          <li className="news"><strong>[07/22]</strong> Started at Sony AI as an AI Engineer!</li>
          <li className="news"><strong>[06/22]</strong> Attended CVPR 2022 and presented a poster at the WiCV workshop.</li>
          <li className="news"><strong>[06/22]</strong> New preprint available: <a href="https://arxiv.org/abs/2206.09191" target="_blank"> Gender Artifacts in Visual Datasets</a>. </li>
          <li className="news"><strong>[05/22]</strong> Finished my Master's program at Princeton University!</li>
          <li className="news"><strong>[05/22]</strong> Defended my thesis on teenage perceptions of privacy on visual social media platforms, advised by Professor Andrés Monroy-Hernández.</li>
          <li className="news"><strong>[08/21]</strong> Started my Master's program at Princeton University!</li>
          <li className="news"><strong>[08/21]</strong> Finished my summer internship at Sony AI on the AI Ethics team, where I worked on generating synthetic data with GANs for reducing bias in object classification tasks.</li>
          <li className="news"><strong>[07/21]</strong> One paper accepted to ICCV 2021: <a href="https://arxiv.org/abs/2106.08503" target="_blank"> Understanding and Evaluating Racial Biases in Image Captioning </a></li>
        </ul>
      </div>
      <div>
        <h3> research </h3>
        <p className="highlight">* denotes equal contribution. Highlighted papers are most representative of my current research interests.</p>
        <div>
        <ul>
          <li className="research"><a href="https://arxiv.org/abs/2301.02560" target="_blank">Beyond Web-Scraping: Crowd-sourcing a Geographically Diverse Image Dataset</a> <br/>
            Vikram V. Ramaswamy, Sing Yu Lin, <strong>Dora Zhao</strong>, Aaron B. Adcock, Laurens van der Maaten, Deepti Ghadiyaram, Olga Russakovsky<br/>
            <strong><i>Under Submission</i></strong>
          </li> 
          <div className="representative">
            <li className="research"><a href="https://arxiv.org/abs/2210.11924" target="_blank">Men Also Do Laundry: Multi-Attribute Bias Amplification</a> <br/>
              <strong>Dora Zhao</strong>, Jerone Andrews, Alice Xiang<br/>
              <strong><i>Trustworthy and Responsible Machine Learning Workshop @ NeurIPS 2022</i></strong>
            </li> 
          </div>
          <div className="representative">
            <li className="research"><a href="https://arxiv.org/abs/2208.02796" target="_blank">Understanding Teenage Perceptions and Configurations of Privacy on Instagram</a> <br/>
              <strong>Dora Zhao</strong>, Mikako Inaba, Andrés Monroy-Hernández<br/>
              <strong><i>CSCW 2022</i></strong>
            </li> 
          </div>
          <div className="representative">
            <li className="research"><a href="https://arxiv.org/abs/2206.09191" target="_blank">Gender Artifacts in Visual Datasets</a> <br/>
              Nicole Meister*, <strong>Dora Zhao*</strong>, Angelina Wang, Vikram V. Ramaswamy, Ruth Fong, Olga Russakovsky <br/>
              <strong><i>Responsible Computer Vision Workshop @ ECCV 2022</i></strong>
            </li> 
          </div>
          <li className="research"><a href="https://dl.acm.org/doi/abs/10.1145/3491101.3516382" target="_blank">Anti-Racist HCI: Notes on an Emerging Critical Technical Practice</a> <br/>
            One of nineteen authors <br/>
            <strong><i>alt.CHI 2022</i></strong>
          </li>     
          <li className="research"><a href="https://arxiv.org/abs/2004.07999" target="_blank">REVISE: A Tool for Measuring and Mitigating Bias in Visual Datasets</a> <br/>
            Angelina Wang, Alexander Liu, Ryan Zhang, Anat Kleiman, Leslie Kim, <strong>Dora Zhao</strong>, Iroha Shirai, Arvind Narayanan, Olga Russakovsky <br/>
            <strong><i>IJCV 2022</i></strong>
          </li>
          <div className="representative">
          <li className="research"><a href="https://arxiv.org/abs/2106.08503" target="_blank">Understanding and Evaluating Racial Biases in Image Captioning</a> <br/>
            <strong>Dora Zhao</strong>, Angelina Wang, Olga Russakovsky <br/>
            <strong><i>ICCV 2021</i></strong>
          </li>
          </div>
        </ul>
        </div>
      </div>
      <div>
        <h3> teaching </h3>
        <div>
          <ul>
            <li className="news"> COS 333: Advanced Programming Techniques, Spring 2022 </li>
            <li className="news"> COS 333: Advanced Programming Techniques, Fall 2021 </li>
            <li className="news"> COS IW 07: Computer Vision for Social Good, Spring 2021 </li>
            <li className="news"> COS IW 08: Fairness of Visual Recognition, Spring 2021 </li>
          </ul>
        </div>

      </div>
    </Layout>
  )
}

export default LandingPage
