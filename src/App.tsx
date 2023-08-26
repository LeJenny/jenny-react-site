import React, { useContext } from 'react';
import { ThemeContext, ThemeContextProps } from './contexts/theme';
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";
import './App.css';

const App: React.FC = () => {
    const contextValue = useContext(ThemeContext);

    if (!contextValue) {
        return null;
    }

    const { themeName } = contextValue as ThemeContextProps;

    return (
        <div id='top' className={`${themeName} app`}>
            <Header />
            <Footer />
        </div>
    );
};

export default App;
