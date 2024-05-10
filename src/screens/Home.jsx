import React, { useEffect } from 'react'
import HeroSection from '../components/HeroSection'
import { useDispatch } from 'react-redux'
import { fetchProducts } from '../feature/product/productSlice'
import ProductContainer from '../components/ProductContainer'

const Home = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])


    return (
        <>
            <HeroSection />
            <ProductContainer />
        </>
    )
}

export default Home