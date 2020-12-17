import React from "react"
import { Topbar, ProfileLeft, Footer, } from '../components';

import './contact.css';

export default function Contact() {
  return  (
    <div className = "root">
      <Topbar />
      <div className = "container-about">
        <div className = "text-about">
          <div className = "title-about">
            CONTACT
          </div>
          <div>
            <p>
            Interested in getting touch?
            </p>

            <p>
            If you want to talk about any of my projects, fairness in computing, or anything at all, feel <br/>
            free to reach out!
            </p>

            <p>
            The best way to contact me is using my email <a href = "mailto: dorothyzhao@princeton.edu"> dorothyzhao (at) princeton (dot) edu </a>. <br/>
            You can also reach me on Twitter-- my handle is dorazhao9.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
