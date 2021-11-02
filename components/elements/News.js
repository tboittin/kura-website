import React, { useState } from "react";
// import Swiper core and required modules
import { Modal } from "react-responsive-modal";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const News = () => {
    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    return (
        <>
            <div className="kura_tm_section" id="news">
                <div className="kura_tm_news">
                    <div className="container">
                        <div className="kura_tm_main_title">
                            <span>News</span>
                            <h3>Latest News</h3>
                        </div>
                        <div
                            className="news_list wow fadeInUp"
                            data-wow-duration=".7s"
                        >
                            <div className="slick-container">
                                <div className="slick-wrapper">
                                    <Swiper
                                        slidesPerView={3}
                                        spaceBetween={30}
                                        loop={true}
                                        pagination={false}
                                        navigation={{
                                            prevEl: ".my_prev",
                                            nextEl: ".my_next",
                                        }}
                                        breakpoints={{
                                            320: {
                                              slidesPerView: 1,
                                              spaceBetween: 20
                                            },
                                            640: {
                                              slidesPerView: 1,
                                              spaceBetween: 20
                                            },
                                            768: {
                                              slidesPerView: 2,
                                              spaceBetween: 30
                                            },
                                            1024: {
                                              slidesPerView: 3,
                                              spaceBetween: 40
                                            }
                                          }}
                                    >
                                        <SwiperSlide className="slick-slide">
                                            <div className="list_inner">
                                                <div className="image">
                                                    <img
                                                        src="/img/portfolio/410-460.jpg"
                                                        alt=""
                                                    />
                                                    <div
                                                        className="main"
                                                        style={{
                                                            backgroundImage:
                                                                "url(/img/news/1.jpg)",
                                                        }}
                                                    ></div>
                                                </div>
                                                <div className="overlay"></div>
                                                <img
                                                    className="svg"
                                                    src="/img/svg/right-arrow.svg"
                                                    alt=""
                                                />
                                                <div className="details">
                                                    <span>
                                                        September 02, 2021
                                                    </span>
                                                    <h3>
                                                        VS Code Gets New
                                                        JavaScript Debugger
                                                    </h3>
                                                </div>
                                                <a
                                                    className="kura_tm_full_link"
                                                    onClick={onOpenModal}
                                                ></a>
                                                <div className="news_hidden_details">
                                                    <div className="news_popup_informations">
                                                        <div className="text">
                                                            <p>
                                                                Kura is a
                                                                leading web
                                                                design agency
                                                                with an
                                                                award-winning
                                                                design team that
                                                                creates
                                                                innovative,
                                                                effective
                                                                websites that
                                                                capture your
                                                                brand, improve
                                                                your conversion
                                                                rates, and
                                                                maximize your
                                                                revenue to help
                                                                grow your
                                                                business and
                                                                achieve your
                                                                goals.
                                                            </p>
                                                            <p>
                                                                In today’s
                                                                digital world,
                                                                your website is
                                                                the first
                                                                interaction
                                                                consumers have
                                                                with your
                                                                business. That's
                                                                why almost 95
                                                                percent of a
                                                                user’s first
                                                                impression
                                                                relates to web
                                                                design. It’s
                                                                also why web
                                                                design services
                                                                can have an
                                                                immense impact
                                                                on your
                                                                company’s bottom
                                                                line.
                                                            </p>
                                                            <p>
                                                                That’s why more
                                                                companies are
                                                                not only
                                                                reevaluating
                                                                their website’s
                                                                design but also
                                                                partnering with
                                                                Kura, the web
                                                                design agency
                                                                that’s driven
                                                                more than $2.4
                                                                billion in
                                                                revenue for its
                                                                clients. With
                                                                over 50 web
                                                                design awards
                                                                under our belt,
                                                                we're confident
                                                                we can design a
                                                                custom website
                                                                that drives
                                                                sales for your
                                                                unique business.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="slick-slide">
                                            <div className="list_inner">
                                                <div className="image">
                                                    <img
                                                        src="/img/portfolio/410-460.jpg"
                                                        alt=""
                                                    />
                                                    <div
                                                        className="main"
                                                        style={{
                                                            backgroundImage:
                                                                "url(/img/news/2.jpg)",
                                                        }}
                                                    ></div>
                                                </div>
                                                <div className="overlay"></div>
                                                <img
                                                    className="svg"
                                                    src="/img/svg/right-arrow.svg"
                                                    alt=""
                                                />
                                                <div className="details">
                                                    <span>August 17, 2021</span>
                                                    <h3>
                                                        Javalin Framework for
                                                        Kotlin and Java Updated
                                                    </h3>
                                                </div>
                                                <a
                                                    className="kura_tm_full_link"
                                                    onClick={onOpenModal}
                                                ></a>
                                                <div className="news_hidden_details">
                                                    <div className="news_popup_informations">
                                                        <div className="text">
                                                            <p>
                                                                Kura is a
                                                                leading web
                                                                design agency
                                                                with an
                                                                award-winning
                                                                design team that
                                                                creates
                                                                innovative,
                                                                effective
                                                                websites that
                                                                capture your
                                                                brand, improve
                                                                your conversion
                                                                rates, and
                                                                maximize your
                                                                revenue to help
                                                                grow your
                                                                business and
                                                                achieve your
                                                                goals.
                                                            </p>
                                                            <p>
                                                                In today’s
                                                                digital world,
                                                                your website is
                                                                the first
                                                                interaction
                                                                consumers have
                                                                with your
                                                                business. That's
                                                                why almost 95
                                                                percent of a
                                                                user’s first
                                                                impression
                                                                relates to web
                                                                design. It’s
                                                                also why web
                                                                design services
                                                                can have an
                                                                immense impact
                                                                on your
                                                                company’s bottom
                                                                line.
                                                            </p>
                                                            <p>
                                                                That’s why more
                                                                companies are
                                                                not only
                                                                reevaluating
                                                                their website’s
                                                                design but also
                                                                partnering with
                                                                Kura, the web
                                                                design agency
                                                                that’s driven
                                                                more than $2.4
                                                                billion in
                                                                revenue for its
                                                                clients. With
                                                                over 50 web
                                                                design awards
                                                                under our belt,
                                                                we're confident
                                                                we can design a
                                                                custom website
                                                                that drives
                                                                sales for your
                                                                unique business.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="slick-slide">
                                            <div className="list_inner">
                                                <div className="image">
                                                    <img
                                                        src="/img/portfolio/410-460.jpg"
                                                        alt=""
                                                    />
                                                    <div
                                                        className="main"
                                                        style={{
                                                            backgroundImage:
                                                                "url(/img/news/3.jpg)",
                                                        }}
                                                    ></div>
                                                </div>
                                                <div className="overlay"></div>
                                                <img
                                                    className="svg"
                                                    src="/img/svg/right-arrow.svg"
                                                    alt=""
                                                />
                                                <div className="details">
                                                    <span>July 05, 2021</span>
                                                    <h3>
                                                        JavaScript Dominated
                                                        Open Source in 2021
                                                    </h3>
                                                </div>
                                                <a
                                                    className="kura_tm_full_link"
                                                    onClick={onOpenModal}
                                                ></a>
                                                <div className="news_hidden_details">
                                                    <div className="news_popup_informations">
                                                        <div className="text">
                                                            <p>
                                                                Kura is a
                                                                leading web
                                                                design agency
                                                                with an
                                                                award-winning
                                                                design team that
                                                                creates
                                                                innovative,
                                                                effective
                                                                websites that
                                                                capture your
                                                                brand, improve
                                                                your conversion
                                                                rates, and
                                                                maximize your
                                                                revenue to help
                                                                grow your
                                                                business and
                                                                achieve your
                                                                goals.
                                                            </p>
                                                            <p>
                                                                In today’s
                                                                digital world,
                                                                your website is
                                                                the first
                                                                interaction
                                                                consumers have
                                                                with your
                                                                business. That's
                                                                why almost 95
                                                                percent of a
                                                                user’s first
                                                                impression
                                                                relates to web
                                                                design. It’s
                                                                also why web
                                                                design services
                                                                can have an
                                                                immense impact
                                                                on your
                                                                company’s bottom
                                                                line.
                                                            </p>
                                                            <p>
                                                                That’s why more
                                                                companies are
                                                                not only
                                                                reevaluating
                                                                their website’s
                                                                design but also
                                                                partnering with
                                                                Kura, the web
                                                                design agency
                                                                that’s driven
                                                                more than $2.4
                                                                billion in
                                                                revenue for its
                                                                clients. With
                                                                over 50 web
                                                                design awards
                                                                under our belt,
                                                                we're confident
                                                                we can design a
                                                                custom website
                                                                that drives
                                                                sales for your
                                                                unique business.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="slick-slide">
                                            <div className="list_inner">
                                                <div className="image">
                                                    <img
                                                        src="/img/portfolio/410-460.jpg"
                                                        alt=""
                                                    />
                                                    <div
                                                        className="main"
                                                        style={{
                                                            backgroundImage:
                                                                "url(/img/news/4.jpg)",
                                                        }}
                                                    ></div>
                                                </div>
                                                <div className="overlay"></div>
                                                <img
                                                    className="svg"
                                                    src="/img/svg/right-arrow.svg"
                                                    alt=""
                                                />
                                                <div className="details">
                                                    <span>April 22, 2021</span>
                                                    <h3>
                                                        Perfecto Tests
                                                        Progressive Web Apps
                                                    </h3>
                                                </div>
                                                <a
                                                    className="kura_tm_full_link"
                                                    onClick={onOpenModal}
                                                ></a>
                                                <div className="news_hidden_details">
                                                    <div className="news_popup_informations">
                                                        <div className="text">
                                                            <p>
                                                                Kura is a
                                                                leading web
                                                                design agency
                                                                with an
                                                                award-winning
                                                                design team that
                                                                creates
                                                                innovative,
                                                                effective
                                                                websites that
                                                                capture your
                                                                brand, improve
                                                                your conversion
                                                                rates, and
                                                                maximize your
                                                                revenue to help
                                                                grow your
                                                                business and
                                                                achieve your
                                                                goals.
                                                            </p>
                                                            <p>
                                                                In today’s
                                                                digital world,
                                                                your website is
                                                                the first
                                                                interaction
                                                                consumers have
                                                                with your
                                                                business. That's
                                                                why almost 95
                                                                percent of a
                                                                user’s first
                                                                impression
                                                                relates to web
                                                                design. It’s
                                                                also why web
                                                                design services
                                                                can have an
                                                                immense impact
                                                                on your
                                                                company’s bottom
                                                                line.
                                                            </p>
                                                            <p>
                                                                That’s why more
                                                                companies are
                                                                not only
                                                                reevaluating
                                                                their website’s
                                                                design but also
                                                                partnering with
                                                                Kura, the web
                                                                design agency
                                                                that’s driven
                                                                more than $2.4
                                                                billion in
                                                                revenue for its
                                                                clients. With
                                                                over 50 web
                                                                design awards
                                                                under our belt,
                                                                we're confident
                                                                we can design a
                                                                custom website
                                                                that drives
                                                                sales for your
                                                                unique business.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>

                                <div className="kura_tm_swiper_progress fill">
                                    <div className="my_pagination_in"></div>
                                    <div className="my_navigation">
                                        <ul>
                                            <li>
                                                <a className="my_prev">
                                                    <img
                                                        className="svg"
                                                        src="img/svg/right-arrow.svg"
                                                        alt=""
                                                    />
                                                </a>
                                            </li>
                                            <li>
                                                <a className="my_next">
                                                    <img
                                                        className="svg"
                                                        src="img/svg/right-arrow.svg"
                                                        alt=""
                                                    />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal open={open} onClose={onCloseModal} center>
                <div className="box_inner">
                    <div className="description_wrap" style={{ padding: "30px" }}>
                        <div className="news_popup_informations">
                            <div className="image">
                                <img src="img/news/1.jpg" alt="" />
                            </div>
                            <br />
                            <div className="details" style={{marginBottom:"20px"}}>
                                <span>September 02, 2021</span>
                                <h3>VS Code Gets New JavaScript Debugger</h3>
                                <div></div>
                            </div>
                            <div className="text">
                                <p>
                                    Kura is a leading web design agency with an
                                    award-winning design team that creates
                                    innovative, effective websites that capture
                                    your brand, improve your conversion rates,
                                    and maximize your revenue to help grow your
                                    business and achieve your goals.
                                </p>
                                <p>
                                    In today’s digital world, your website is
                                    the first interaction consumers have with
                                    your business. That's why almost 95 percent
                                    of a user’s first impression relates to web
                                    design. It’s also why web design services
                                    can have an immense impact on your company’s
                                    bottom line.
                                </p>
                                <p>
                                    That’s why more companies are not only
                                    reevaluating their website’s design but also
                                    partnering with Kura, the web design agency
                                    that’s driven more than $2.4 billion in
                                    revenue for its clients. With over 50 web
                                    design awards under our belt, we're
                                    confident we can design a custom website
                                    that drives sales for your unique business.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default News;
