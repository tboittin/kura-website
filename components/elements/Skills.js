import dynamic from "next/dynamic";
import React, { useEffect } from "react";

import Pill from '../design/pill'

import SKILLS from '../../data/SKILLS.json'


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

                // console.log(boxTop);

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
            <div className="kura_tm_section" id="skills">
                <div className="kura_tm_skills">
                    <div className="container">
                        <div className="skills_inner">
                            <div className="left">
                                <div className="kura_tm_main_title light">
                                    <span>Skills</span>
                                    <h3>Programming Skills</h3>
                                </div>
                                <div
                                    className="text wow fadeInUp"
                                    data-wow-duration=".7s"
                                >
                                    <p>
                                        Here are some tools that I use to create web applications.
                                    </p>
                                </div>
                                {SKILLS && 
                                    <div>
                                        <h2>Languages</h2>
                                            {SKILLS.languages.map(skill => <Pill text={skill} key={skill}/>)}
                                        <h2>Tools</h2>
                                            {SKILLS.tools.map(skill => <Pill text={skill} key={skill}/>)}
                                        <h2>Soft Skills</h2>
                                            {SKILLS.softSkills.map(skill => <Pill text={skill} key={skill}/>)}
                                    </div>
                                }
                                {/* <div
                                    className="dodo_progress wow fadeInUp"
                                    data-wow-duration=".7s"
                                    data-wow-delay=".2s"
                                >
                                    <div className="progress_inner" data-value="95">
                                        <span>
                                            <span className="label">
                                                HTML &amp; CSS
                                            </span>
                                            <span className="number">95%</span>
                                        </span>
                                        <div className="background">
                                            <div className="bar">
                                                <div
                                                    className="bar_in"
                                                    style={{ width: "95%" }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="progress_inner" data-value="80">
                                        <span>
                                            <span className="label">
                                                JavaScript
                                            </span>
                                            <span className="number">80%</span>
                                        </span>
                                        <div className="background">
                                            <div className="bar">
                                                <div
                                                    className="bar_in"
                                                    style={{ width: "80%" }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="progress_inner" data-value="90">
                                        <span>
                                            <span className="label">WordPress</span>
                                            <span className="number">90%</span>
                                        </span>
                                        <div className="background">
                                            <div className="bar">
                                                <div
                                                    className="bar_in"
                                                    style={{ width: "90%" }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}

                            </div>
                            <div className="right">
                                <ParallaxVideo />
                                <div
                                    className="my_image jarallax"
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
