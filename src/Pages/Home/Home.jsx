import React from 'react'
import './Home.scss'
import Navbar from 'Containers/Navbar/Navbar'
import Filter from 'Containers/Filter/Filter'
import FullWidthButton from 'Components/Common/FullWidthButton/FullWidthButton'
import ProductItem from 'Containers/ProductItem/ProductItem'

import { useContext } from 'react'
import { Context } from 'Context/Context'

const Home = () => {

	const { featuredProducts, basicProducts } = useContext( Context )

	return (
		<div className="Home flex">
            <Navbar />
			<Filter />
			<div className="featured-list flex">
				{
					featuredProducts.map( item => {
							return <ProductItem key={ item.id } data={ item } />
					} )
				}
			</div>
			<div className="product-list flex">
				{
					basicProducts.map( item => {
							return <ProductItem key={ item.id } data={ item } />
					} )
				}
			</div>
			<FullWidthButton value={ 'Load More Items' } handleClick={ () => console.log( 'load more items' ) } />
        </div>
	)
}

export default Home