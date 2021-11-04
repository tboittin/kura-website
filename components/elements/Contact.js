import React from "react"

import CONTACT from "../../data/CONTACT.json"

const Contact = () => {
  return (
    <div>
      <div className="kura_tm_section" id="contact">
        <div className="kura_tm_contact">
          <div className="container">
            <div className="kura_tm_main_title">
              <span>Contact</span>
              <h3>Get in Touch</h3>
            </div>
            <div className="contact_inner">
              <div className="left wow fadeInUp" data-wow-duration=".7s">
                <div className="text">
                  {/* <p>
                    Please fill out the form on this section to contact with me.
                    Or call between 9:00 a.m. and 8:00 p.m. ET, Monday through
                    Friday
                  </p> */}
                </div>
                <div className="short">
                  <ul>
                    {CONTACT &&
                      CONTACT.map(info => (
                        <li key={info.keyword}>
                          <div className="list_inner">
                            <img
                              src={info.icon}
                              alt=""
                              className="svg replaced-svg"
                            />
                            <span>{info.text}</span>
                          </div>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
              <div className="right wow fadeInUp" data-wow-duration=".7s">
                <div className="fields">
                  <form
                    action="/"
                    method="post"
                    className="contact_form"
                    id="contact_form"
                    autoComplete="off"
                  >
                    <div
                      className="returnmessage"
                      data-success="Your message has been received, We will contact you soon."
                    ></div>
                    <div className="empty_notice">
                      <span>Please Fill Required Fields</span>
                    </div>
                    <div className="first">
                      <ul>
                        <li>
                          <input id="name" type="text" placeholder="Name" />
                        </li>
                        <li>
                          <input id="email" type="text" placeholder="Email" />
                        </li>
                      </ul>
                    </div>
                    <div className="last">
                      <textarea id="message" placeholder="Message"></textarea>
                    </div>
                    <div className="kura_tm_button" data-position="left">
                      <a id="send_message" href="#">
                        <span>Submit</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          id="Layer"
                          enableBackground="new 0 0 64 64"
                          height="512"
                          viewBox="0 0 64 64"
                          width="512"
                          className="svg replaced-svg"
                        >
                          <path d="m37.379 12.552c-.799-.761-2.066-.731-2.827.069-.762.8-.73 2.066.069 2.828l15.342 14.551h-39.963c-1.104 0-2 .896-2 2s.896 2 2 2h39.899l-15.278 14.552c-.8.762-.831 2.028-.069 2.828.393.412.92.62 1.448.62.496 0 .992-.183 1.379-.552l17.449-16.62c.756-.755 1.172-1.759 1.172-2.828s-.416-2.073-1.207-2.862z"></path>
                        </svg>
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
