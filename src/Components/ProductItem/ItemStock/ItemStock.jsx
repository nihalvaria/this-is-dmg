import React from 'react'
import './ItemStock.scss'
import SuccessImage from 'Assets/Images/success.png'
import WarningImage from 'Assets/Images/warning.png'
import DangerImage from 'Assets/Images/danger.png'

const ItemStock = props => {

    return (
        <div className="ItemStock flex">
            <span className="item-stock-con flex">
                <div className={ `stock-check flex ${ props.data.stock > 8 && 'success' }` }>
                    <p>Stock</p>
                    <img src={ props.data.stock === 0 ? DangerImage : ( props.data.stock > 8 ? SuccessImage : WarningImage ) } alt="stock-img"/>
                </div>
                {
                    props.data.stock <= 8 && (
                        <div className={ `stock-desc ${ props.data.stock === 0 && 'out-of-stock' }` } >
                            { 
                                props.data.stock === 0 ? `Back in ${ props.data.stockUpdateTime }!` : `${ props.data.stock } Tires Left` 
                            }
                        </div>
                    )
                }
            </span>
        </div>
    )
}

export default ItemStock