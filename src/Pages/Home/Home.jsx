import React from 'react'
import './Home.scss'
import Navbar from 'Containers/Navbar/Navbar'
import Filter from 'Containers/Filter/Filter'

const Home = () => {

	return (
		<div className="Home flex">
            <Navbar />
			<Filter />
        </div>
	)
}

export default Home