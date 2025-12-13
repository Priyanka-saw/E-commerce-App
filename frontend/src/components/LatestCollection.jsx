import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import Productitem from './Productitem.jsx'
import { ShopContext } from '../context/ShopContext.jsx'
import Title from './Title.jsx'

const LatestCollection = () => {

    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
         setLatestProducts(products.slice(0, 10));
    }, []);

    return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
        <Title text1={"Latest"} text2={"COLLECTIONS"} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Discover our latest collections, featuring trendy designs and fresh styles to elevate your wardrobe. Explore now and find your new favorite pieces!
        </p>
        </div>

{/* Rendering products */}

      <div className='grid grid-col-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>

        {latestProducts.map((item, index) => (
          <Productitem 
          key={index} 
          id={item._id} 
          image={item.image} 
          name={item.name} 
          price={item.price} 
          />
        ))}

      </div>

    </div>
  )
}

export default LatestCollection