import React, { useState } from "react"

import { HomeModal } from "./ContentModal"

import HERO_CONTENT from "../../data/HERO_CONTENT.json"

const Home = () => {
  const [open, setOpen] = useState(false)
  const [modalValue, setModalValue] = useState({
    img: null,
    title: "",
    description: [],
  })
  const onOpenModal = (img, title, description) => {
    setOpen(true)
    setModalValue({ img, title, description })
  }
  const onCloseModal = () => {
    setOpen(false)
    setModalValue({ img: null, title: "" })
  }
  return (
    <>
      <div className="kura_tm_section" id="home">
        <div className="kura_tm_hero">
          <div className="container">
            <div className="content">
              <div className="left">
                <span className="name">Thomas Boittin</span>
                <h3 className="job">Web Developer</h3>
                <div className="services">
                  <ul>
                    {HERO_CONTENT.map(content => (
                      <li key={content.keyword}>
                        <a
                          href='#'
                          onClick={() => {
                            onOpenModal(
                              `/img/hero/1.jpg`,
                              content.title,
                              content.description
                            )
                          }}
                        >
                          <img
                            className="image"
                            src="/img/service/1.jpg"
                            alt=""
                          />
                          <span>{content.title}</span>
                          <img
                            className="svg"
                            src="/img/svg/right-arrow.svg"
                            alt=""
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="short_info"></div>
              </div>
              <div className="right">
                <div className="image">
                  <img src="/img/thumbs/3-4.jpg" alt="" />
                  <div
                    className="main"
                    style={{ backgroundImage: "url(img/hero/1.jpg)" }}
                  ></div>
                  <div className="shape"></div>
                </div>
              </div>
              <div className="down anchor">
                <a href="#portfolio">
                  <img className="svg" src="/img/svg/down-arrow.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <HomeModal
          open={open}
          onCloseModal={() => onCloseModal()}
          img={modalValue.img}
          title={modalValue.title}
          description={modalValue.description}
        />
      </div>
    </>
  )
}

export default Home
