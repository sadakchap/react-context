import React, { useContext } from 'react'
import { ThemeContext } from '../context/theme/ThemeContext'

const ThemeToggle = () => {
    const { toggleTheme } = useContext(ThemeContext)
    return (
        <div className="footer-btn-box">
            <button onClick={toggleTheme}>Toogle Theme</button>
        </div>
    )
}

export default ThemeToggle
