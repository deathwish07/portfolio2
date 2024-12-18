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
                                <h3 className="qualification__title">Electronics and Communications Engineering</h3>
                                <span className="qualification__subtitle">Andhra University - BTech</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt">
                                    </i> 2010-2014
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
                                <h3 className="qualification__title">Electrical Engineering</h3>
                                <span className="qualification__subtitle">Arizona State university - Master of science</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt">
                                    </i> 2014-2016
                                </div>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Electrical Engineering</h3>
                                <span className="qualification__subtitle">Arizona State university - Doctor of philosophy</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt">
                                    </i> 2015-2020
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                    </div>
                    <div className={toggleState === 2 ? "qualification__content qualification__content-active"
                        : "qualification__content"
                    }>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Summer Intern</h3>
                                <span className="qualification__subtitle">Bharat Sanchar Nigam Limited</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt">
                                    </i> 2012
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
                                <h3 className="qualification__title">Summer Intern</h3>
                                <span className="qualification__subtitle">Indian Institute of Technology, Madras</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt">
                                    </i> 2013
                                </div>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Research Aide</h3>
                                <span className="qualification__subtitle">SENSIP, Arizona State University</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt">
                                    </i> 2014-2015
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
                                <h3 className="qualification__title">Research Assistant</h3>
                                <span className="qualification__subtitle">BLISS, Arizona State University</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt">
                                    </i> 2015-2020
                                </div>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Postdoctoral Researcher</h3>
                                <span className="qualification__subtitle">WISCA, Arizona State University</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt">
                                    </i> 2020-current
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