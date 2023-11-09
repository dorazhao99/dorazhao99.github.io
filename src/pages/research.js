import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import css from "./index.css"
import { StaticImage } from "gatsby-plugin-image"

const ResearchPage = ({ data, location }) => {
  const siteTitle = ''

  return (
    <Layout location={location} title={siteTitle}>
      <div>
        <div className="navbar">
          <a href='/'> home </a>
          <a className="selected" href="/research">research</a>
          <a href="cv.pdf">cv</a>
        </div>
        <h3> research </h3>
        <p className="highlight">* denotes equal contribution. Highlighted papers are most representative of my current research interests.</p>
        <div>
        <ul>
          <li className="research"><a href="https://arxiv.org/abs/2301.02560" target="_blank">Beyond Web-Scraping: Crowd-sourcing a Geographically Diverse Image Dataset</a> <br/>
            Vikram V. Ramaswamy, Sing Yu Lin, <strong>Dora Zhao</strong>, Aaron B. Adcock, Laurens van der Maaten, Deepti Ghadiyaram, Olga Russakovsky<br/>
            <strong><i>NeurIPS D&B 2023</i></strong>
          </li> 
          <li className="research"><a href="https://arxiv.org/abs/2302.03629" target="_blank">Principlism Guided Data Curation</a> <br/>
            Jerone Andrews, <strong>Dora Zhao*</strong>, William Thong*, Apostolos Modas*, Orestis Papakyriakopoulos*, Shruti Nagpal* Alice Xiang<br/>
            <strong><i>NeurIPS D&B 2023 (Oral presentation)</i></strong>
          </li> 
          <div className="representative">
            <li className="research"><a href="https://arxiv.org/abs/2206.09191" target="_blank">Gender Artifacts in Visual Datasets</a><br/>
              Nicole Meister*, <strong>Dora Zhao*</strong>, Angelina Wang, Vikram V. Ramaswamy, Ruth Fong, Olga Russakovsky <br/>
              <strong><i>ICCV 2023</i></strong>
            </li> 
          </div>
          <div className="representative">
            <li className="research"><a href="https://arxiv.org/abs/2210.11924" target="_blank">Men Also Do Laundry: Multi-Attribute Bias Amplification</a> <br/>
              <strong>Dora Zhao</strong>, Jerone Andrews, Alice Xiang<br/>
              <strong><i>ICML 2023</i></strong>
            </li> 
          </div>
          <li className="research"><a href="https://dl.acm.org/doi/abs/10.1145/3593013.3594049" target="_blank">Augmented Datasheets for Speech Datasets and Ethical Decision-Making</a> <br/>
            Orestis Papakyriakopoulos, Anna Seo Gyeong Choi, Jerone Andrews, Rebecca Bourke, William Thong, <strong>Dora Zhao</strong>, Alice Xiang, Allison Koenecke<br/>
            <strong><i>FAccT 2023</i></strong>
          </li> 
          <div className="representative">
            <li className="research"><a href="https://arxiv.org/abs/2208.02796" target="_blank">Understanding Teenage Perceptions and Configurations of Privacy on Instagram</a> <br/>
              <strong>Dora Zhao</strong>, Mikako Inaba, Andrés Monroy-Hernández<br/>
              <strong><i>CSCW 2022</i></strong>
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
    </Layout>
  )
}

export default ResearchPage
