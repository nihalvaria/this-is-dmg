import React from 'react'
import './FilterItem.scss'
import CloseImage from 'Assets/Images/close.png'

const FilterItem = props => {
    
    return (
        <div className="FilterItem flex">
            <p className="ellipsis">{ props.filterName }</p>
            <img src={ CloseImage } alt="clear-filter" />
        </div>
    )
}

export default FilterItem