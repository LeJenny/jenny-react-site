import React from 'react';
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";
import './App.pcss';
import About from "./components/About/About.tsx";
import Projects from "./components/Projects/Projects.tsx";
import Skills from "./components/Skills/Skills.tsx";
import Contact from "./components/Contact/Contact.tsx";

const App: React.FC = () => {
    return (

        <>
            <Header />
            <main>
                <About />
                <Projects />
                <Skills />
                <Contact />
            </main>
            <Footer />
        </>
    )
}

export default App;
