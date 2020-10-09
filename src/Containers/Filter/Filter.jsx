import SectionHeader from 'Components/Filter/SectionHeader/SectionHeader'
import SelectedFilters from 'Components/Filter/SelectedFilters/SelectedFilters'
import SortBy from 'Components/Filter/SortBy/SortBy'
import React from 'react'
import './Filter.scss'

const Filter = () => {
    
    return (
        <div className="Filter flex">
            <SectionHeader heading={ 'Recommended Products' } />

            <div className="filters-container flex">
                <SelectedFilters />
                <SortBy />
            </div>
        </div>
    )
}

export default Filter