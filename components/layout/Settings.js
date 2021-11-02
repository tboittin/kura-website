import React from 'react';

const Settings = () => {
    return (
        <div>
                <div className="kura_tm_settings">
                    <div className="icon">
                        <img className="svg" src="/img/svg/setting.svg" alt="" />
                        <a className="link" href="#"></a>
                    </div>
                    <div className="wrapper">
                        <span className="title">Unlimited Colors</span>
                        <ul className="colors">
                            <li>
                                <a className="blue" href="#"></a>
                            </li>
                            <li>
                                <a className="green" href="#"></a>
                            </li>
                            <li>
                                <a className="brown" href="#"></a>
                            </li>
                            <li>
                                <a className="pink" href="#"></a>
                            </li>
                            <li>
                                <a className="orange" href="#"></a>
                            </li>
                            <li className="bl">
                                <a className="black" href="#"></a>
                            </li>
                            <li className="wh">
                                <a className="white" href="#"></a>
                            </li>
                            <li>
                                <a className="purple" href="#"></a>
                            </li>
                            <li>
                                <a className="sky" href="#"></a>
                            </li>
                            <li>
                                <a className="cadetBlue" href="#"></a>
                            </li>
                            <li>
                                <a className="crimson" href="#"></a>
                            </li>
                            <li>
                                <a className="olive" href="#"></a>
                            </li>
                            <li>
                                <a className="red" href="#"></a>
                            </li>
                        </ul>
                        <span className="title">Magic Cursor</span>
                        <ul className="cursor">
                            <li>
                                <a className="showme show" href="#"></a>
                            </li>
                            <li>
                                <a className="hide" href="#">
                                    <img
                                        className="svg"
                                        src="/img/svg/arrow.svg"
                                        alt=""
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
        </div>
    );
};

export default Settings;