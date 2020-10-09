import React, { useState } from 'react'
import './SelectedFilters.scss'
import FilterItem from 'Components/Filter/FilterItem/FilterItem'

const SelectedFilters = () => {

    const [ selectedFilters, setSelectedFilters ] = useState( [ 'Continental', 'Continental Tyre' ] )

    const handleClearFilter = filter => {
        setSelectedFilters( prevState => {
            return prevState.filter( f => f !== filter )
        } )
    }
    
    return (
        <div className="SelectedFilters flex">
            <p className="selected-filters-text ellipsis">Selected Filters: </p>
            {
                selectedFilters.map( ( filterName, key ) => {
                    return (
                        <FilterItem key={ key } filterName={ filterName } handleClearFilter={ handleClearFilter } />
                    )
                } )
            }
        </div>
    )
}

export default SelectedFilters