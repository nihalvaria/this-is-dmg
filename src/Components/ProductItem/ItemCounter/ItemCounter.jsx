import React from 'react'
import './ItemCounter.scss'
import AddImage from 'Assets/Images/plus.png'
import RemoveImage from 'Assets/Images/minus.png'

const ItemCounter = props => {

    return (
        <div className="ItemCounter flex" >
            <img src={ AddImage } alt="add-cart" onClick={ () => props.handleCart( "add" ) } />
            <p className="flex" >{ props.data.cartValue }</p>
            <img src={ RemoveImage } alt="remove-cart" onClick={ () => props.handleCart( "remove" ) } />
        </div>
    )
}

export default ItemCounter