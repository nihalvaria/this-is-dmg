import React from 'react'
import "./ItemImage.scss"

const ItemImage = props => {

    return (
        <div className="ItemImage" >
            <img src={ props.data.badge } alt="badge" className="badge" />
            <img src={ props.data.productImage } alt="product-image" className="product-image"/>
        </div>
    )
}

export default ItemImage