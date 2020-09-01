import React, { Component } from 'react'
import { ThemeContext } from '../../context/theme/ThemeContext'

class Navbar extends Component {
    
    render() {

        return (

            <ThemeContext.Consumer>{(context) => {

                const { isLightTheme, light, dark } = context;
                const theme = isLightTheme ? light : dark;

                return(

                    <nav style={{ backgroundColor: theme.bg, color: theme.syntax }}>
                        <h1>Context</h1>  
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </nav>
                );
            }}</ThemeContext.Consumer>

        )
    }
}

export default Navbar
