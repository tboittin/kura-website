import React, { useState, useEffect } from "react";

const Header = () => {
    const [isToggled, setToggled] = useState(false);
    const [scroll, setScroll] = useState(0);
    const toggleTrueFalse = () => setToggled(!isToggled);

    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100;
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }
        });

        var audio1 = document.querySelectorAll("#audio1");
        var audio2 = document.querySelectorAll("#audio2");
        var hamburger = document.querySelector(".trigger .hamburger");

        hamburger.addEventListener("click", function () {
            var element = this;

            if (element.classList.contains("is-active")) {
                audio1[0].play();
            } else {
                audio2[0].play();
            }
            return false;
        });

        // mobileMenuList.addEventListener("click", function () {
        //     document.querySelector(".trigger .hamburger").classList.remove("is-active");
        //     mobileMenu.slideUp();
        //     return false;
        // });
    });

    return (
        <>
            <div class={scroll ? "kura_tm_topbar animate" : "kura_tm_topbar"}>
                <div class="wrapper">
                    <div class="topbar_inner">
                        <div class="logo">
                            <a href="#">
                                <img src="/img/logo/dark.png" alt="" />
                            </a>
                        </div>
                        <div class="menu">
                            <div class="list">
                                <ul class="anchor_nav">
                                    <li
                                        class={
                                            isToggled
                                                ? "current opened"
                                                : "current"
                                        }
                                    >
                                        <a href="#home">Home</a>
                                    </li>
                                    <li class={isToggled ? "opened" : ""}>
                                        <a href="#portfolio">Portfolio</a>
                                    </li>
                                    <li class={isToggled ? "opened" : ""}>
                                        <a href="#skills">Skills</a>
                                    </li>
                                    <li class={isToggled ? "opened" : ""}>
                                        <a href="#timeline">Timeline</a>
                                    </li>
                                    <li class={isToggled ? "opened" : ""}>
                                        <a href="#price">Price</a>
                                    </li>
                                    <li class={isToggled ? "opened" : ""}>
                                        <a href="#news">News</a>
                                    </li>
                                    <li class={isToggled ? "opened" : ""}>
                                        <a href="#contact">Contact</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="trigger" onClick={toggleTrueFalse}>
                                <div
                                    class={
                                        isToggled
                                            ? "hamburger hamburger--slider is-active"
                                            : "hamburger hamburger--slider"
                                    }
                                >
                                    <div class="hamburger-box">
                                        <div class="hamburger-inner"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="kura_tm_mobile_menu">
                <div class="mobile_menu_inner">
                    <div class="mobile_in">
                        <div class="logo">
                            <a href="#">
                                <img src="/img/logo/dark.png" alt="" />
                            </a>
                        </div>
                        <div class="trigger" onClick={toggleTrueFalse}>
                            <div
                                class={
                                    isToggled
                                        ? "hamburger hamburger--slider is-active"
                                        : "hamburger hamburger--slider"
                                }
                            >
                                <div class="hamburger-box">
                                    <div class="hamburger-inner"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class={isToggled ? "dropdown active" : "dropdown"}>
                    <div class="dropdown_inner">
                        <ul class="anchor_nav">
                            <li class="current">
                                <a href="#home">Home</a>
                            </li>
                            <li>
                                <a href="#portfolio">Portfolio</a>
                            </li>
                            <li>
                                <a href="#skills">Skills</a>
                            </li>
                            <li>
                                <a href="#timeline">Timeline</a>
                            </li>
                            <li>
                                <a href="#price">Price</a>
                            </li>
                            <li>
                                <a href="#news">News</a>
                            </li>
                            <li>
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
