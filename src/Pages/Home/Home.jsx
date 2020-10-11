import React from 'react'
import './Home.scss'
import Navbar from 'Containers/Navbar/Navbar'
import Filter from 'Containers/Filter/Filter'
import FullWidthButton from 'Components/Common/FullWidthButton/FullWidthButton'
import ProductItem from 'Containers/ProductItem/ProductItem'

import { productList } from 'Data/ProductList'

const Home = () => {

	return (
		<div className="Home flex">
            <Navbar />
			<Filter />
			<div className="featured-list flex">
				{
					productList[ 'products' ].map( item => {
						if( item.featured ) {
							return <ProductItem key={ item.id } data={ item } />
						}
					} )
				}
			</div>
			<div className="product-list flex">
				{
					productList[ 'products' ].map( item => {
						if( !item.featured ) {
							return <ProductItem key={ item.id } data={ item } />
						}
					} )
				}
			</div>
			<FullWidthButton value={ 'Load More Items' } handleClick={ () => console.log( 'load more items' ) } />
        </div>
	)
}

export default Home