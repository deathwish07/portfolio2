import React, { useState } from 'react';
import "./services.css";

const Services = () => {
    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
    <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What I offer</span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-edit services__icon"></i>
                    <h3 className="services__title">Research</h3>
                </div>

                <span className="services__button" onClick={()=>toggleTab(1)}>View More<i className="uil uil-arrow-right services__button-icon"></i></span>
                <div className={toggleState ===1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={()=>toggleTab(0)}></i>
                        <h3 className="services__modal-title">AI/ML Research</h3>
                        <p className="services__modal-description">Excited to collaborate on AI/ML research opportunities or hackathons with active researchers and practitioners</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I do research on new ideas</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I do AI/ML consulting</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I build prototypes to test out ideas</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">Speaking and Publishing</h3>
                </div>

                <span className="services__button" onClick={()=>toggleTab(2)}>View More<i className="uil uil-arrow-right services__button-icon"></i></span>
                <div className={toggleState ===2 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={()=>toggleTab(0)}></i>
                        <h3 className="services__modal-title">Speaking</h3>
                        <p className="services__modal-description">Excited to talk about latest AI developments</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I talk about latest Generative AI advancements</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I collab on articles or panel discussions</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I provide my expert insights based on industry trends</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="services__content">
                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">Advice on interviews, finance and immigration</h3>
                </div>

                <span className="services__button" onClick={()=>toggleTab(3)}>View More<i className="uil uil-arrow-right services__button-icon"></i></span>
                <div className={toggleState ===3 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={()=>toggleTab(0)}></i>
                        <h3 className="services__modal-title">Software Developer</h3>
                        <p className="services__modal-description">Advice on various topics ranging from AI/ML interview preparation, Startups, Immigration visas, Investing, Speaking and Publishing </p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info"> Happy to help with pointers on AI/ML interview preparation</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info"> Help with building profile for skilled immigration visas  </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info"> Help with financial investing </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services