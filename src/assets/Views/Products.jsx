import React from 'react'
import '../styles/Products.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import BCImage from '../Img/LogoRealBC.png'
import { Cards } from '../components/Cards.jsx'

export const Products = () => {
  
  const products = Array.from({length: 10}, (_, index) => ({
    id: index + 1,
    image: BCImage,
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

