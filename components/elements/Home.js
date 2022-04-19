import React, { useState } from "react"

import { HomeModal } from "./ContentModal"

import HERO_CONTENT from "../../data/HERO_CONTENT.json"
import IMG_CREDIT from "../../data/IMG_CREDIT.json"
import LeftPanel from "./components/left-panel"
import RightPanel from "./components/right-panel"
import DownAnchor from "./components/down-anchor"

const Home = ({ languageContent, locale }) => {
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
              <LeftPanel
                languageContent={languageContent}
                HERO_CONTENT={HERO_CONTENT}
                locale={locale}
                onOpenModal={onOpenModal}
              />
              <RightPanel 
                IMG_CREDIT={IMG_CREDIT}
                locale={locale}
              />
              <DownAnchor
                sectionTarget={'portfolio'}
              />
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
