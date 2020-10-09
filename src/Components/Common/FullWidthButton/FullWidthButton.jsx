import React from 'react'
import './FullWidthButton.scss'

const FullWidthButton = props => {

    return (
        <div className="FullWidthButton flex">
            <div className="clearfix-clicker" onClick={ props.handleClick } ></div>
            <p>{ props.value }</p>
        </div>
    )
}

export default FullWidthButton