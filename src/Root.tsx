import React from 'react';
import { ThemeProvider } from './contexts/theme';
import App from './App';

const Root: React.FC = () => {
    return (
        <ThemeProvider>
            <App />
        </ThemeProvider>
    );
};

export default Root;
