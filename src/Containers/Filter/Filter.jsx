import SectionHeader from 'Components/Filter/SectionHeader/SectionHeader'
import SelectedFilters from 'Components/Filter/SelectedFilters/SelectedFilters'
import React from 'react'
import './Filter.scss'

const Filter = () => {
    
    return (
        <div className="Filter flex">
            <SectionHeader />

            <div className="filters-container flex">
                <SelectedFilters />
            </div>
        </div>
    )
}

export default Filter