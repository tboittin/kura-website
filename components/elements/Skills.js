import dynamic from "next/dynamic";
import React, { useEffect } from "react";


const ParallaxVideo = dynamic(import("./Parallax"), {
    ssr: false,
});

const Skills = () => {
    useEffect(() => {
        const boxes = document.querySelectorAll(".bar");

        window.addEventListener("scroll", checkBoxes);

        checkBoxes();

        function checkBoxes() {
            const triggerBottom = (window.innerHeight / 5) * 5;

            boxes.forEach((box) => {
                const boxTop = box.getBoundingClientRect().top;

                console.log(boxTop);

                if (boxTop < triggerBottom) {
                    box.classList.add("open");
                } else {
                    box.classList.remove("open");
                }
            });
        }
    });

    return (
        <div>
            <div class="kura_tm_section" id="skills">
                <div class="kura_tm_skills">
                    <div class="container">
                        <div class="skills_inner">
                            <div class="left">
                                <div class="kura_tm_main_title light">
                                    <span>Skills</span>
                                    <h3>Programming Skills</h3>
                                </div>
                                <div
                                    class="text wow fadeInUp"
                                    data-wow-duration=".7s"
                                >
                                    <p>
                                        For more than 20 years our experts have
                                        been accomplishing enough with modern
                                        Web Development, new generation web and
                                        app programming language.
                                    </p>
                                </div>
                                <div
                                    class="dodo_progress wow fadeInUp"
                                    data-wow-duration=".7s"
                                    data-wow-delay=".2s"
                                >
                                    <div class="progress_inner" data-value="95">
                                        <span>
                                            <span class="label">
                                                HTML &amp; CSS
                                            </span>
                                            <span class="number">95%</span>
                                        </span>
                                        <div class="background">
                                            <div class="bar">
                                                <div
                                                    class="bar_in"
                                                    style={{ width: "95%" }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="progress_inner" data-value="80">
                                        <span>
                                            <span class="label">
                                                JavaScript
                                            </span>
                                            <span class="number">80%</span>
                                        </span>
                                        <div class="background">
                                            <div class="bar">
                                                <div
                                                    class="bar_in"
                                                    style={{ width: "80%" }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="progress_inner" data-value="90">
                                        <span>
                                            <span class="label">WordPress</span>
                                            <span class="number">90%</span>
                                        </span>
                                        <div class="background">
                                            <div class="bar">
                                                <div
                                                    class="bar_in"
                                                    style={{ width: "90%" }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="right">
                                <ParallaxVideo />
                                <div
                                    class="my_image jarallax"
                                    data-speed="0"
                                    style={{
                                        backgroundImage:
                                            "url(/img/portfolio/2.jpg)",
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
