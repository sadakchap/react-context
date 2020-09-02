import React, { useContext } from 'react'
import { ThemeContext } from '../../context/theme/ThemeContext';
import { AuthContext } from '../../context/auth/AuthContext';

const Navbar = () => {
    
    const { isAuthenticated, toggleAuth } = useContext(AuthContext);
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    return (
        <nav style={{ backgroundColor: theme.bg, color: theme.syntax }}>
            <h1>Context</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li onClick={toggleAuth} style={{cursor: 'pointer'}}>{isAuthenticated ? 'Logged In' : 'Logged Out'}</li>
            </ul>
        </nav>
    );
}

export default Navbar
