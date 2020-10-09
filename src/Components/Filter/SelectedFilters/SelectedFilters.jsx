import React from 'react'
import './SelectedFilters.scss'
import FilterItem from 'Components/Filter/FilterItem/FilterItem'

const SelectedFilters = () => {
    
    return (
        <div className="SelectedFilters flex">
            <p className="ellipsis">Selected Filters: </p>
            <FilterItem filterName={ 'Continental' } />
            <FilterItem filterName={ 'Continental Tire' } />
        </div>
    )
}

export default SelectedFilters