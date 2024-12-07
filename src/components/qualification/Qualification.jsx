import React, { useState } from 'react';
import "./qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (

        <section className="qualification section" id="qualification">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1
                        ? "qualification__button qualification__active button--flex" :
                        "qualification__button button--flex"
                    }
                        onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification__icon">

                        </i> Education
                    </div>
                    <div className={toggleState === 2
                        ? "qualification__button qualification__active button--flex" :
                        "qualification__button button--flex"
                    }
                        onClick={() => toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification__icon">

                        </i> Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active"
                        : "qualification__content"
                    }>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Mathematics and Statistics</h3>
                                <span className="qualification__subtitle">IIT Kanpur - Dual degree</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt">
                                    </i> 2007-2012
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Artificial Intelligence</h3>
                                <span className="qualification__subtitle">Stanford University - Graduate certificate</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt">
                                    </i> 2017-2021
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className={toggleState === 2 ? "qualification__content qualification__content-active"
                        : "qualification__content"
                    }>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Summer research fellowship</h3>
                                <span className="qualification__subtitle">IISc - Bangalore</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt">
                                    </i> 2010
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Software Engineer</h3>
                                <span className="qualification__subtitle">Paypal - India</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt">
                                    </i> 2012-2013
                                </div>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Advisor</h3>
                                <span className="qualification__subtitle">Scalend - Bangalore</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt">
                                    </i> 2014-2019
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Mentor</h3>
                                <span className="qualification__subtitle">Springboard - Part time</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt">
                                    </i> 2019-2021
                                </div>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">ML manager</h3>
                                <span className="qualification__subtitle">Adobe</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt">
                                    </i> 2013-current
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification