import React from 'react';
import { header } from '../../portfolio';
import NavBar from '../NavBar/NavBar';  // Change this line
import './Header.css';

const Header: React.FC = () => {
    const { homepage, title } = header;

    return (
        <header className='header center'>
            <h3>
                {homepage ? (
                    <a href={homepage} className='link'>
                        {title}
                    </a>
                ) : (
                    title
                )}
            </h3>
            <NavBar />  {/* Change this line */}
        </header>
    );
};

export default Header;
