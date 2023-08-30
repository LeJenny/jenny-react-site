import React from 'react';
import { header } from '../../portfolio'
import Navbar from '../NavBar/NavBar3.tsx'
import './Header2.pcss'

const Header = () => {
    const { homepage, title } = header

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
            <Navbar />
        </header>
    )
}

export default Header
