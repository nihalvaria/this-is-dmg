import { productList } from "Data/ProductList";
import React, { useEffect, useState } from "react";

const Context = React.createContext();

const MIN_SEARCH_LEN = 3

const ContextProvider = (props) => {

    const [ basicProducts, setBasicProducts ] = useState( [] )
    const [ featuredProducts, setFeaturedProducts ] = useState( [] )

    const [ searchQuery, setSearchQuery ] = useState( '' )

    useEffect( () => {
        const products = productList[ 'products' ]
        setBasicProducts( () => products.filter( item => !item.featured ) )
        setFeaturedProducts( () => products.filter( item => item.featured ) )
    }, [] )

    const searchFilter = product => {
        return product.name.toLowerCase().indexOf( searchQuery ) > -1 
    }

    useEffect( () => {
            if( searchQuery.length >= MIN_SEARCH_LEN ) {
                const searchFiltered = basicProducts.filter( searchFilter )
                setBasicProducts( searchFiltered )
            }
            else {
                setBasicProducts( () => productList[ 'products' ].filter( item => !item.featured ) )
            }
    }, [ searchQuery ] )

    return (
        <Context.Provider value={
            {
                basicProducts,
                featuredProducts,
                searchQuery,
                setSearchQuery
            }
        } >
            { props.children }
        </Context.Provider>
    );
};

export { ContextProvider, Context };