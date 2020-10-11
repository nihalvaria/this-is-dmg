import React from 'react'
import "./Navbar.scss"

import OrdersImage from "Assets/Images/document-text-sharp.png"
import OptionsImage from "Assets/Images/options-sharp.png"
import AccountImage from "Assets/Images/person-sharp.png"
import CartImage from "Assets/Images/cart-sharp-nav.png"
import SearchImage from "Assets/Images/search.png"
import NotificationImage from "Assets/Images/active.png"
import { useContext } from 'react'
import { Context } from 'Context/Context'


const Navbar = () => {

    const { searchQuery, setSearchQuery } = useContext( Context )

    const navSideItems = [
        {
            name: 'Account',
            img: AccountImage,
            notification: false
        },
        {
            name: 'Orders',
            img: OrdersImage,
            notification: false
        },
        {
            name: 'Cart',
            img: CartImage,
            notification: true
        }
    ]
    
	return (
		<nav className="Navbar flex">
            <div className="options-container flex">
                <img src={ OptionsImage } alt="options-img" />
            </div>
            <div className="search-container flex">
                <input type="text" placeholder="Search" onChange={ e => setSearchQuery( e.target.value ) } value={ searchQuery }  />
                <img src={ SearchImage } alt="search-img" />
            </div>
            <div className="nav-side-items-container flex">
                {
                    navSideItems.map( item => (
                        <div key={ item.name } className="nav-side-item flex">
                            { item.notification && <img src={ NotificationImage } alt="notify" className="nav-notification" /> }
                            <img src={ item.img } alt={ item.name } />
                            <p>{ item.name }</p>
                        </div>
                    ) )
                }
            </div>
        </nav>
	)
}

export default Navbar