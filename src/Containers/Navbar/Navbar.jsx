import React from 'react'
import "./Navbar.scss"
import OptionsImage from "Assets/Images/options-sharp.png"


const Navbar = () => {
    
	return (
		<nav className="Navbar flex">
            <div className="options-container flex">
                <img src={ OptionsImage } alt="options-img" />
            </div>
        </nav>
	)
}

export default Navbar