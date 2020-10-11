import React from 'react'
import "./ProductItem.scss"
import ItemCTABtn from 'Components/ProductItem/ItemCTABtn/ItemCTABtn'
import ItemCounter from 'Components/ProductItem/ItemCounter/ItemCounter'
import ItemImage from 'Components/ProductItem/ItemImage/ItemImage'

import ApprovedBadgeImage from 'Assets/Images/appr.png'
import ItemStock from 'Components/ProductItem/ItemStock/ItemStock'

const ProductItem = props => {

    const handleCart = type => {
        console.log( type, props.data.id );
    }

    return (
        <div className={ `ProductItem ${ props.data.featured ? 'featured' : 'basic flex' }` } >
            {
                props.data.featured && <ItemImage data={ props.data } />
            }
            {
                props.data.featured && (
                        <div className="feature-tab flex">{ props.data.featured }</div>
                )
            }
            
            <p className="product-name">{ props.data.name }</p>
            
            <img src={ ApprovedBadgeImage } alt="approved-badge" className="approved-badge-image" />
            
            <div className="product-desc-container flex">
                <p className="product-desc">
                    { props.data.size }<br />
                    { props.data.vehicle }
                </p>
            </div>
            
            <ItemStock data={ props.data } />
            
            <div className="price-one-container flex">
                <p className="price-one flex">
                    <span>Price&#8201;</span>
                    <span>{ `${ props.data.currency }${ props.data.price }` }</span>
                </p>
            </div>
            
            <ItemCounter handleCart={ handleCart } />
            
            <div className="price-total-container flex">
                <p className="price-total">
                    <span>{ `Total ` }<b>{ `${ props.data.currency }${ props.data.price }` }</b><br /></span>
                    <span className="save-price-text">{ 'Save CALC!' }</span>
                </p>
            </div>
            
            <ItemCTABtn state={ props.data.stock === 0 ? 'notify' : 'add' } featured={ props.data.featured } handleCart={ handleCart } />
        </div>
    )
}

export default ProductItem