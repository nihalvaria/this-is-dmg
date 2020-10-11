import { productList } from "Data/ProductList";
import React, { useEffect, useState } from "react";

const Context = React.createContext();

const MIN_SEARCH_LEN = 3

const ContextProvider = (props) => {

    const [ basicProducts, setBasicProducts ] = useState( [] )
    const [ featuredProducts, setFeaturedProducts ] = useState( [] )
    const [ allProducts, setAllProducts ] = useState( [] )

    const [ searchQuery, setSearchQuery ] = useState( '' )
 
    useEffect( () => {
        const products = productList[ 'products' ]
        setAllProducts( products )
    }, [] )

    useEffect( () => {
        setBasicProducts( () => allProducts.filter( item => !item.featured ) )
        setFeaturedProducts( () => allProducts.filter( item => item.featured ) )
    }, [ allProducts ] )
    

    const searchFilter = product => {
        return product.name.toLowerCase().indexOf( searchQuery ) > -1 
    }

    useEffect( () => {
            if( searchQuery.length >= MIN_SEARCH_LEN ) {
                const searchFiltered = basicProducts.filter( searchFilter )
                setBasicProducts( searchFiltered )
            }
            else {
                setBasicProducts( () => allProducts.filter( item => !item.featured ) )
            }
    }, [ searchQuery ] )

    const handleCart = ( type, id ) => {
        const [ product ] = allProducts.filter( item => item.id === id )
        
        setAllProducts( prevState => {
            const newState = prevState.map( item => {
                if( item.id === id ) {
                    if( type === 'add' && product.cartValue < product.stock ) {
                        return ({
                            ...item,
                            cartValue: item.cartValue + 1
                        })
                    }
                    else if( type === 'remove' && product.cartValue > ( product.stock && 0 ) ) {
                        return ({
                            ...item,
                            cartValue: item.cartValue - 1
                        })
                    }
                }
                return item
           
            } )
            return newState
        } )
    }   

    return (
        <Context.Provider value={
            {
                basicProducts,
                featuredProducts,
                searchQuery,
                setSearchQuery,
                handleCart
            }
        } >
            { props.children }
        </Context.Provider>
    );
};

export { ContextProvider, Context };