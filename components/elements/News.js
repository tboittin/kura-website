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
            <div class="kura_tm_section" id="news">
                <div class="kura_tm_news">
                    <div class="container">
                        <div class="kura_tm_main_title">
                            <span>News</span>
                            <h3>Latest News</h3>
                        </div>
                        <div
                            class="news_list wow fadeInUp"
                            data-wow-duration=".7s"
                        >
                            <div class="slick-container">
                                <div class="slick-wrapper">
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
                                        <SwiperSlide class="slick-slide">
                                            <div class="list_inner">
                                                <div class="image">
                                                    <img
                                                        src="/img/portfolio/410-460.jpg"
                                                        alt=""
                                                    />
                                                    <div
                                                        class="main"
                                                        style={{
                                                            backgroundImage:
                                                                "url(/img/news/1.jpg)",
                                                        }}
                                                    ></div>
                                                </div>
                                                <div class="overlay"></div>
                                                <img
                                                    class="svg"
                                                    src="/img/svg/right-arrow.svg"
                                                    alt=""
                                                />
                                                <div class="details">
                                                    <span>
                                                        September 02, 2021
                                                    </span>
                                                    <h3>
                                                        VS Code Gets New
                                                        JavaScript Debugger
                                                    </h3>
                                                </div>
                                                <a
                                                    class="kura_tm_full_link"
                                                    onClick={onOpenModal}
                                                ></a>
                                                <div class="news_hidden_details">
                                                    <div class="news_popup_informations">
                                                        <div class="text">
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
                                        <SwiperSlide class="slick-slide">
                                            <div class="list_inner">
                                                <div class="image">
                                                    <img
                                                        src="/img/portfolio/410-460.jpg"
                                                        alt=""
                                                    />
                                                    <div
                                                        class="main"
                                                        style={{
                                                            backgroundImage:
                                                                "url(/img/news/2.jpg)",
                                                        }}
                                                    ></div>
                                                </div>
                                                <div class="overlay"></div>
                                                <img
                                                    class="svg"
                                                    src="/img/svg/right-arrow.svg"
                                                    alt=""
                                                />
                                                <div class="details">
                                                    <span>August 17, 2021</span>
                                                    <h3>
                                                        Javalin Framework for
                                                        Kotlin and Java Updated
                                                    </h3>
                                                </div>
                                                <a
                                                    class="kura_tm_full_link"
                                                    onClick={onOpenModal}
                                                ></a>
                                                <div class="news_hidden_details">
                                                    <div class="news_popup_informations">
                                                        <div class="text">
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
                                        <SwiperSlide class="slick-slide">
                                            <div class="list_inner">
                                                <div class="image">
                                                    <img
                                                        src="/img/portfolio/410-460.jpg"
                                                        alt=""
                                                    />
                                                    <div
                                                        class="main"
                                                        style={{
                                                            backgroundImage:
                                                                "url(/img/news/3.jpg)",
                                                        }}
                                                    ></div>
                                                </div>
                                                <div class="overlay"></div>
                                                <img
                                                    class="svg"
                                                    src="/img/svg/right-arrow.svg"
                                                    alt=""
                                                />
                                                <div class="details">
                                                    <span>July 05, 2021</span>
                                                    <h3>
                                                        JavaScript Dominated
                                                        Open Source in 2021
                                                    </h3>
                                                </div>
                                                <a
                                                    class="kura_tm_full_link"
                                                    onClick={onOpenModal}
                                                ></a>
                                                <div class="news_hidden_details">
                                                    <div class="news_popup_informations">
                                                        <div class="text">
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
                                        <SwiperSlide class="slick-slide">
                                            <div class="list_inner">
                                                <div class="image">
                                                    <img
                                                        src="/img/portfolio/410-460.jpg"
                                                        alt=""
                                                    />
                                                    <div
                                                        class="main"
                                                        style={{
                                                            backgroundImage:
                                                                "url(/img/news/4.jpg)",
                                                        }}
                                                    ></div>
                                                </div>
                                                <div class="overlay"></div>
                                                <img
                                                    class="svg"
                                                    src="/img/svg/right-arrow.svg"
                                                    alt=""
                                                />
                                                <div class="details">
                                                    <span>April 22, 2021</span>
                                                    <h3>
                                                        Perfecto Tests
                                                        Progressive Web Apps
                                                    </h3>
                                                </div>
                                                <a
                                                    class="kura_tm_full_link"
                                                    onClick={onOpenModal}
                                                ></a>
                                                <div class="news_hidden_details">
                                                    <div class="news_popup_informations">
                                                        <div class="text">
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

                                <div class="kura_tm_swiper_progress fill">
                                    <div class="my_pagination_in"></div>
                                    <div class="my_navigation">
                                        <ul>
                                            <li>
                                                <a class="my_prev">
                                                    <img
                                                        class="svg"
                                                        src="img/svg/right-arrow.svg"
                                                        alt=""
                                                    />
                                                </a>
                                            </li>
                                            <li>
                                                <a class="my_next">
                                                    <img
                                                        class="svg"
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
                <div class="box_inner">
                    <div class="description_wrap" style={{ padding: "30px" }}>
                        <div class="news_popup_informations">
                            <div class="image">
                                <img src="img/news/1.jpg" alt="" />
                            </div>
                            <br />
                            <div class="details" style={{marginBottom:"20px"}}>
                                <span>September 02, 2021</span>
                                <h3>VS Code Gets New JavaScript Debugger</h3>
                                <div></div>
                            </div>
                            <div class="text">
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
