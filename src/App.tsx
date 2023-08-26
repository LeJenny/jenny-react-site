import React from 'react';
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";
import './App.css';
import About from "./components/About/About.tsx";
import NavBar from "./components/NavBar/NavBar.tsx";
import Projects from "./components/Projects/Projects.tsx";
import Skills from "./components/Skills/Skills.tsx";

const App: React.FC = () => {
    return (

        <>
        <Header />
        <main>
            <About />
            <Projects />
            <Skills />
        </main>
        <Footer />
        </>
    )
}

export default App;
