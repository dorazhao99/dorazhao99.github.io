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
          <a className="selected" href="/research">selected publications</a>
          <a href="/cv.pdf">cv</a>
        </div>
        <h3> research </h3>
        <div>
          <p className="highlight">
            <i>See <a href="https://scholar.google.com/citations?user=Iq8AdKQAAAAJ&hl=en&oi=ao" target="_blank">Google Scholar</a> for full list of publications.</i>
            <br/>* denotes equal contribution. 
          </p>
        </div>
        
        <div>
        <ul>
        <li className="research"><a href="https://dl.acm.org/doi/full/10.1145/3746059.3747711" target="_blank">Knoll: Creating a Knowledge Ecosystem for Large Language Models</a>
            <br/>
            <strong>Dora Zhao</strong>, Diyi Yang, Michael S. Bernstein<br/>
            <strong><i>UIST 2025</i></strong>
          </li> 
          <li className="research"><a href="https://aclanthology.org/2025.findings-acl.70/" target="_blank">SPHERE: An Evaluation Card for Human-AI Systems</a>
            <br/>
            <strong>Dora Zhao*</strong>, Qianou Ma*, Xinran Zhao, Chenglei Si, Chenyang Yang, Ryan Louie, Ehud Reiter, Diyi Yang, Tongshuang Wu<br/>
            <strong><i>ACL 2025 (Findings)</i></strong>
          </li>           
          <li className="research"><a href="https://arxiv.org/abs/2406.06407" target="_blank">A Taxonomy of Challenges to Curating Fair Datasets</a>
            <br/>
            <strong>Dora Zhao*</strong>, Morgan Klaus Scheuerman*, Pooja Chitre, Jerone T.A. Andrews, Georgia Panagiotidou, Shawn Walker, Kathleen H Pine, Alice Xiang<br/>
            <strong><i>NeurIPS D&B 2024 (Oral)</i></strong>
          </li> 
          <li className="research"><a href="https://arxiv.org/abs/2407.08188" target="_blank">Position: Measure Dataset Diversity, Don't Just Claim It</a>
            <br/>
            <strong>Dora Zhao*</strong>, Jerone T.A. Andrews, Orestis Papakyriakopoulos, Alice Xiang<br/>
            <strong><i>ICML 2024 (Best Paper)</i></strong>
          </li> 
          <li className="research"><a href="https://arxiv.org/abs/2302.03629" target="_blank">Ethical Considerations for Responsible Data Curation</a> <br/>
            Jerone Andrews, <strong>Dora Zhao*</strong>, William Thong*, Apostolos Modas*, Orestis Papakyriakopoulos*, Shruti Nagpal* Alice Xiang<br/>
            <strong><i>NeurIPS D&B 2023 (Oral)</i></strong>
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
