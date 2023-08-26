import React, { createContext, useEffect, useState, ReactNode } from 'react';

export interface ThemeContextProps {
    themeName: string;
    toggleTheme: () => void;
}
const ThemeContext = createContext<ThemeContextProps | null>(null);

interface ThemeProviderProps {
    children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [themeName, setThemeName] = useState<string>('light');

    useEffect(() => {
        const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        setThemeName(darkMediaQuery.matches ? 'dark' : 'light');
        darkMediaQuery.addEventListener('change', (e) => {
            setThemeName(e.matches ? 'dark' : 'light');
        });
    }, []);

    const toggleTheme = () => {
        const name = themeName === 'dark' ? 'light' : 'dark';
        localStorage.setItem('themeName', name);
        setThemeName(name);
    };

    return (
        <ThemeContext.Provider value={{ themeName, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeProvider, ThemeContext };
