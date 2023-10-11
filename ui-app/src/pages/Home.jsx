import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Footer from '../components/Footer'
import Services from '../components/Services'
import Announcements from '../components/Announcements'

/**
 * Home page component to render the product and services
 * @param {*} param0 
 * @returns 
 */
const Home = ({ setCartItems, cartItemsQuantity }) => {
  return (
    <div>
      <Announcements/>
       <Navbar cartItemsQuantity={cartItemsQuantity} />
       <Slider/>
       <Categories/>
       <Products setCartItems={setCartItems}/>
       <Services setCartItems={setCartItems} />
       <Footer/>
    </div>
  )
}

export default Home

