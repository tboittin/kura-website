import React, { useState } from "react"
import HERO_CONTENT from "../../data/HERO_CONTENT.json"


const Home = () => {
  const [heroToggle, setHeroToggle] = useState("")
  return (
    <>
      <div class='kura_tm_section' id='home'>
        <div class='kura_tm_hero'>
          <div class='container'>
            <div class='content'>
              <div class='left'>
                <span class='name'>Thomas Boittin</span>
                <h3 class='job'>Web Developer</h3>
                <div class='services'>
                  <ul>
                    {HERO_CONTENT.map(content => (
                      <>
                        <li>
                          <a
                            href
                            onClick={() => {
                              heroToggle === content.keyword
                                ? setHeroToggle('')
                                : setHeroToggle(content.keyword)
                            }}
                          >
                            <img
                              class='image'
                              src='/img/service/1.jpg'
                              alt=''
                            />
                            <span>{content.title}</span>
                            <img
                              class='svg'
                              src='/img/svg/right-arrow.svg'
                              alt=''
                            />
                          </a>
                          {/* <div class='hidden_content'> */}
                            <div
                              className={
                                heroToggle === content.keyword
                                  ? "popup_informations_open"
                                  : "popup_informations_hidden"
                              }
                            >
                              <div class='description'>
                                {content.description.map(desc => (
                                  <p>{desc}</p>
                                ))}
                              </div>
                            </div>
                          {/* </div> */}
                        </li>
                      </>
                    ))}
                  </ul>
                </div>
                <div class='short_info'>
                  {/* <ul>
                    <li>
                      <div class='list_inner'>
                        <h3>2</h3>
                        <span>
                          Years of
                          <br />
                          Experience
                        </span>
                      </div>
                    </li>
                    <li>
                      <div class='list_inner'>
                        <h3>3K+</h3>
                        <span>
                          Happy
                          <br />
                          Customers
                        </span>
                      </div>
                    </li>
                  </ul> */}
                </div>
              </div>
              <div class='right'>
                <div class='image'>
                  <img src='/img/thumbs/3-4.jpg' alt='' />
                  <div
                    class='main'
                    style={{ backgroundImage: "url(img/hero/1.jpg)" }}
                  ></div>
                  <div class='shape'></div>
                </div>
              </div>
              <div class='down anchor'>
                <a href='#portfolio'>
                  <img class='svg' src='/img/svg/down-arrow.svg' alt='' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
