import React from 'react'
import './ItemCTABtn.scss'
import CartImage from 'Assets/Images/cart-black-1.png'
import NotifyImage from 'Assets/Images/notify.png'

const ItemCTABtn = props => {

    const Cart = () => {
        return (
           <div className='item-cart-cta'>
               <img src={ CartImage } alt=""/>
            </div> 
        )
    }
    
    const Notify = () => {
        return (
           <div className='item-notify-cta'>
               <img src={ NotifyImage } alt=""/>
            </div> 
        )
    }

    return (
        <div className={ `ItemCTABtn flex ${ props.state } ${ props.featured ? 'featured' : 'basic' }` }>
            <div className="clearfix-clicker" onClick={ () => props.handleCart( 'add' ) } ></div>
            {
                props.state === 'add' ? <Cart /> : <Notify />
            }
            <p>{ props.state === 'add' ? 'Add to Cart' : 'Notify Me!' }</p>
        </div>
    )
}

export default ItemCTABtn