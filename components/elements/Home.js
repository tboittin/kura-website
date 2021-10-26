import React from "react"

const Home = () => {
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
                    <li>
                      <a href='#'>
                        <img class='image' src='/img/service/1.jpg' alt='' />
                        <span>Web Development</span>
                        <img
                          class='svg'
                          src='/img/svg/right-arrow.svg'
                          alt=''
                        />
                      </a>
                      <div class='hidden_content'>
                        <div class='popup_informations'>
                          <div class='description'>
                            <p>
                              Kura is a leading web design agency with an
                              award-winning design team that creates innovative,
                              effective websites that capture your brand,
                              improve your conversion rates, and maximize your
                              revenue to help grow your business and achieve
                              your goals.
                            </p>
                            <p>
                              In today’s digital world, your website is the
                              first interaction consumers have with your
                              business. That's why almost 95 percent of a user’s
                              first impression relates to web design. It’s also
                              why web design services can have an immense impact
                              on your company’s bottom line.
                            </p>
                            <p>
                              That’s why more companies are not only
                              reevaluating their website’s design but also
                              partnering with Kura, the web design agency that’s
                              driven more than $2.4 billion in revenue for its
                              clients. With over 50 web design awards under our
                              belt, we're confident we can design a custom
                              website that drives sales for your unique
                              business.
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <a href='#'>
                        <img class='image' src='/img/service/2.jpg' alt='' />
                        <span>Digital Marketing</span>
                        <img
                          class='svg'
                          src='/img/svg/right-arrow.svg'
                          alt=''
                        />
                      </a>
                      <div class='hidden_content'>
                        <div class='popup_informations'>
                          <div class='description'>
                            <p>
                              SEO is always at the top of any digital marketing
                              agency services list. That’s because it affects
                              all your online marketing strategies. SEO is vital
                              to ensure your website shows up in online
                              searches. Without effective SEO, prospective
                              customers may never get to see any of your digital
                              marketing efforts. That’s because search engines
                              have the power to choose which websites appear
                              when people conduct online searches.
                            </p>
                            <p>
                              {" "}
                              They decide this based on complex algorithms that
                              weigh up numerous criteria to determine if your
                              website is what the searcher is looking for. In
                              simple terms, SEO means optimizing all your online
                              content so that’s it’s easily discoverable by
                              these search engines. For example, if you’re
                              selling socks, you want the search engines to
                              present your website first when people type
                              ‘’socks’’ into their search bar. It makes sense
                              that thousands of websites would have a term like
                              ‘socks’ associated with them. That’s why it’s
                              important to use the services of a digital
                              marketing agency to help you stand out amongst the
                              competition.
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <a href='#'>
                        <img class='image' src='/img/service/3.jpg' alt='' />
                        <span>Graphic Design</span>
                        <img
                          class='svg'
                          src='/img/svg/right-arrow.svg'
                          alt=''
                        />
                      </a>
                      <div class='hidden_content'>
                        <div class='popup_informations'>
                          <div class='description'>
                            <p>
                              Visual content converts faster than words alone.
                              Content marketing strategies powered by dynamic
                              media outperform all others, and with a variety of
                              visual assets supporting your marketing, we turn
                              your brand into an ROI engine. Attract a larger
                              audience, nurture high-intent prospects and
                              enhance customer engagement with design that
                              matters.
                            </p>
                            <p>
                              Visualize complex data, intuitive concepts and
                              compelling narratives with infographics of every
                              size. Our expert designers synthesize dense
                              information and transform it into engaging
                              graphical stories that your audience will retain
                              in seconds and remember for weeks. Want to stay
                              top of mind?Infographics are shared or liked on
                              social media 3X more often than other content
                              types. Brafton graphic design services make
                              infographic.
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class='short_info'>
                  <ul>
                    <li>
                      <div class='list_inner'>
                        <h3>10+</h3>
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
                  </ul>
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
