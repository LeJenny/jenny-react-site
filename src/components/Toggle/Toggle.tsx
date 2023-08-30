import React, {useContext, useEffect} from 'react'
import { DarkModeSwitch } from 'react-toggle-dark-mode'
import {ThemeContext, ThemeProvider} from "../../contexts/Theme.tsx";
import '../../App.pcss'
import './Toggle.pcss'
import '../NavBar/NavBar.pcss'

const Toggle = () => {
    const { isDarkMode, setDarkMode } = useContext(ThemeContext);

    const computedStyle = getComputedStyle(document.documentElement);
    const clrPrimary = computedStyle.getPropertyValue('--clr-primary').trim();
    const clrFg = computedStyle.getPropertyValue('--clr-fg').trim();
    const toggleDarkMode = (checked: boolean) => {
        setDarkMode(checked);
    };

    useEffect(() => {
        const rootElement = document.body; // Or document.documentElement if you prefer

        if (isDarkMode) {
            rootElement.classList.add('dark');
            rootElement.classList.remove('light');
            document.documentElement.classList.add('dark');
            document.documentElement.classList.remove('light');
        } else {
            rootElement.classList.add('light');
            rootElement.classList.remove('dark');
            document.documentElement.classList.add('light');
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode])

    return (
        <>
            <div className="toggle-wrapper">
        <DarkModeSwitch
            style={{ marginBottom: '2rem' }}
            checked={isDarkMode}
            onChange={toggleDarkMode}
            size={30}

        />
            </div>
        </>
    )
}

export default Toggle