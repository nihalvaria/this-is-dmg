import React from 'react'
import './SortBy.scss'
import DropdownImage from 'Assets/Images/down.png'

const SortBy = () => {
    
    return (
        <div className="SortBy flex">
            <p className="ellipsis">Sort by: </p>
            
            <div className="sort-container flex">
                <select className="sort-dropdown">
                    <option>Popularity</option>
                    <option>Lowest Price</option>
                    <option>Most Stock</option>
                    <option>Model A - Z</option>
                    <option>Code No.</option>
                </select>
                <img src={ DropdownImage } alt=""/>
            </div>
        </div>
    )
}

export default SortBy