import React from 'react';
import './speakings.css';
import Work1 from '../../assets/work1.jpg';
import Work2 from '../../assets/work2.jpg';
import Work3 from '../../assets/work3.jpg';
import Work4 from '../../assets/work4.jpg';
import Work5 from '../../assets/work5.jpg';

const Speakings = () => {
    return (
        <div className='speaking'>
        <section className="about section" id="speakings">
            <h2 className="section__title">Public Speakings</h2>
            <span className="section__subtitle"></span>
            <div className="about__container container grid">
                <img src= {Work1} alt="" className="about__img" />
                <div className="about__data">
                    <h2>Aiify</h2>
                    <p className="about__description">Aiify agentic AI summit with fellow prominent speakers
                    </p>
                    <a download="" href="https://aiify.io/events/agentic-summit/livestream-2024-09-23_24/" className="button button--flex">See Highlights!</a>
                </div>
                <div className="about__data">
                    <h2>Encord</h2>
                    <p className="about__description">
                        A session on Ai afterhours with encord
                    </p>
                    <a download="" href="https://www.youtube.com/watch?v=TgyxeVuHjG0" className="button button--flex">See Highlights!
                    </a>
                </div>
                <img src= {Work2} alt="" className="about__img" />
                <img src= {Work3} alt="" className="about__img" />
                <div className="about__data">
                    <h2>Analytics Vidhya</h2>
                    <p className="about__description">A session on Analytics vidhya about improving LLM-based marketing
                        analytics copilots with semantic search and fine tuning. 
                    </p>
                    <a download="" href="https://www.analyticsvidhya.com/events/datahour/improving-llm-based-marketing-analytics-copilots-with-semantic-search-and-fine-tuning/" className="button button--flex">See Highlights!
                    </a>
                </div>
                <div className="about__data">
                    <h2>Oreilly</h2>
                    <p className="about__description">A session on oreilly about GenAI superstream: developing
                        innovative apps with generative AI
                    </p>
                    <a download="" href="https://www.oreilly.com/live-events/genai-superstream-developing-innovative-apps-with-generative-ai/0642572100011/0642572100010/" className="button button--flex">See Highlights!
                    </a>
                </div>
                <img src= {Work4} alt="" className="about__img" />
                <img src= {Work5} alt="" className="about__img" />
                <div className="about__data">
                    <h2>Cloudxlab</h2>
                    <p className="about__description">Featured in cloudxlabs mega event Tech week 2024
                    </p>
                    <a download="" href="https://cloudxlab.com/tech-week?utm_source=Linkedin&utm_medium=event&utm_campaign=techweek2024" className="button button--flex">See Highlights!
                    </a>
                </div>
            </div>
        </section>
        </div>
    )
}

export default Speakings