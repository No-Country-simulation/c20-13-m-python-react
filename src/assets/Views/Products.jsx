import React from 'react'
import '../styles/Products.css'
import logo from "/src/assets/img/logo.png";
import { Cards } from '../components/Cards.jsx'

export const Products = () => {
  
  const products = Array.from({length: 10}, (_, index) => ({
    id: index + 1,
    image: logo,
    text: `Producto ${index + 1}`,
  }))
  return (
    <div className="container justify-content-center">
      <div className="row ">
        {products.map((product) => ( 
          <div className="col-md-6 mb-4 " key={product.id}>
          <Cards image={product.image} altText={product.text}/>
        </div>
          ))}
      </div>
    </div>
  )
}

