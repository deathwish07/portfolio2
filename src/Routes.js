import React from 'react';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
//import Speakings from './pages/Speakings';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';


const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path='/'>
                    <>
                        <Header />
                        <main className='main'>
                            <Home />
                            <About />
                            <Skills />
                            <Services />
                            <Qualification />
                            <Contact />
                        </main>
                        <Footer />
                        <ScrollUp />
                    </>
                </Route>
                {/* <Route path='/speakings'>
                <Speakings/>
            </Route> */}
            </Switch>
        </Router>
    )
}

export default Routes