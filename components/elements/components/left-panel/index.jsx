const LeftPanel = ({languageContent, HERO_CONTENT, locale, onOpenModal}) => {
    return (
        <div className="left">
                <span className="name">Thomas Boittin</span>
                <h3 className="job">{languageContent.job}</h3>
                <div className="services">
                  <ul>
                    {HERO_CONTENT[locale].map(content => (
                      <li key={content.keyword}>
                        <a
                          href="#"
                          onClick={() => {
                            onOpenModal(
                              content.image,
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
    )
}

export default LeftPanel