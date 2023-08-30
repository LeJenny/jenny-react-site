import React, { createContext, useState, useEffect } from 'react';
import PropTypes from "prop-types";

const ThemeContext = createContext();
    const ThemeProvider = ({ children }) => {
    const [themeName, setThemeName] = useState('light')
    const [isDarkMode, setDarkMode  ] = useState(false);

    useEffect(() => {
        const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        setThemeName(darkMediaQuery.matches ? 'dark' : 'light')
        darkMediaQuery.addEventListener('change', (e) => {
            setThemeName(e.matches ? 'dark' : 'light')
        });
    }, [])

    return (
        <ThemeContext.Provider value={{ isDarkMode, setDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
};

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export { ThemeProvider, ThemeContext }
