import React, { Component } from 'react'
import { ThemeContext } from '../../context/theme/ThemeContext';
import { AuthContext } from '../../context/auth/AuthContext';

class Navbar extends Component {
    
    render() {

        return (
            <AuthContext.Consumer>{(authContext) => (
                <ThemeContext.Consumer>{(themeContext) => {
                    const { isAuthenticated, toggleAuth } = authContext;
                    const { isLightTheme, light, dark } = themeContext;
                    const theme = isLightTheme ? light : dark;

                    return (

                        <nav style={{ backgroundColor: theme.bg, color: theme.syntax }}>
                            <h1>Context</h1>
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact</li>
                                <li onClick={toggleAuth}>{isAuthenticated ? 'Logged In' : 'Logged Out'}</li>
                            </ul>
                        </nav>
                    );
                }}</ThemeContext.Consumer>
            )}</AuthContext.Consumer>

            

        )
    }
}

export default Navbar
