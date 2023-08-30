import React from 'react';
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";
import './App.pcss';
import About from "./components/About/About.tsx";
import Projects from "./components/Projects/Projects.tsx";
import Skills from "./components/Skills/Skills.tsx";
import Contact from "./components/Contact/Contact.tsx";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.tsx";
import { ThemeProvider } from "./contexts/Theme.tsx";

const App = () => {
    return (
        <ThemeProvider>
        <div className={"app"}>
            <Header />
            <main>
                <About />
                <Projects />
                <Skills />
                <Contact />
                <ScrollToTop />
            </main>
            <Footer />
        </div>
        </ThemeProvider>

    )
}

export default App;
