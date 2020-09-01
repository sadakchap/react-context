import React, { Component } from 'react'
import { ThemeContext } from '../context/theme/ThemeContext'

class ThemeToggle extends Component {

    static contextType = ThemeContext;
    
    render() {
        const { toggleTheme } = this.context; 
        return (
            <div className="footer-btn-box">
                <button onClick={toggleTheme}>Toogle Theme</button>
            </div>
        )
    }
}

export default ThemeToggle
