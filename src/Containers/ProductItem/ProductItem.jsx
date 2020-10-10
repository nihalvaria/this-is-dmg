import React from 'react'
import "./ProductItem.scss"
import ItemCTABtn from 'Components/ProductItem/ItemCTABtn/ItemCTABtn'

const ProductItem = props => {

    return (
        <div className={ `ProductItem ${ props.data.featured ? 'featured' : 'basic' }` }>
            <ItemCTABtn state={ props.data.stock === 0 ? 'notify' : 'add' } featured={ props.data.featured } />
        </div>
    )
}

export default ProductItem