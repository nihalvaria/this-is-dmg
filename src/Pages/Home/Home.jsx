import React from 'react'
import './Home.scss'
import Navbar from 'Containers/Navbar/Navbar'
import Filter from 'Containers/Filter/Filter'
import FullWidthButton from 'Components/Common/FullWidthButton/FullWidthButton'

const Home = () => {

	return (
		<div className="Home flex">
            <Navbar />
			<Filter />
			<FullWidthButton value={ 'Load More Items' } handleClick={ () => console.log( 'load more items' ) } />
        </div>
	)
}

export default Home