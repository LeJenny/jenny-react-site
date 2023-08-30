import { useContext, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { ThemeContext } from '../../contexts/Theme.tsx'
import Toggle from '../Toggle/Toggle.tsx'
import { projects, skills, contact } from '../../portfolio'
import './NavBar.pcss'

const NavBar = () => {
    const [showNavList, setShowNavList] = useState(false);  // <-- Moved up
    const context = useContext(ThemeContext);  // <-- Use the context variable here

    if (!context) {
        // Handle the case when context is null
        return null; // or some error UI
    }

    const { themeName, toggleTheme } = context;  // <-- Destructuring here

    const toggleNavList = () => setShowNavList(!showNavList);

    return (
        <nav className='center nav'>
            <ul
                style={{display: showNavList ? 'flex' : '' }}
                className='nav__list'
            >
                {projects.length ? (
                    <li className='nav__list-item'>
                        <a
                            href='#projects'
                            onClick={toggleNavList}
                            className='link link--nav'
                        >
                            Projects
                        </a>
                    </li>
                ) : null}

                {skills.length ? (
                    <li className='nav__list-item'>
                        <a
                            href='#skills'
                            onClick={toggleNavList}
                            className='link link--nav'
                        >
                            Skills
                        </a>
                    </li>
                ) : null}

                {contact.email ? (
                    <li className='nav__list-item'>
                        <a
                            href='#contact'
                            onClick={toggleNavList}
                            className='link link--nav'
                        >
                            Contact
                        </a>
                    </li>
                ) : null}

            </ul>

            <Toggle />

        </nav>
    );
};

export default NavBar
