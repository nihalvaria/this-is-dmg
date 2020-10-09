import React from 'react'
import './SectionHeader.scss'

const SectionHeader = props => {
    
    return (
        <div className="SectionHeader">
            <p className="ellipsis">{ props.heading }</p>
        </div>
    )
}

export default SectionHeader