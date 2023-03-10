import axios from 'axios'
import React from 'react'
import getConfig from '../../utils/getConfig'
import './styles/productCartInfo.css'

const ProductCartInfo = ({product, getAllProductsCart}) => {

  const handleDeleteProduct = () => {
    const URL = `https://e-commerce-api.academlo.tech/${product.id}`
    axios.delete(URL, getConfig())
      .then(() => getAllProductsCart())
      .catch(err => console.log(err))
  }

  return (
    <article className='cart__item'>
      <header className='cart__item-header'>
        <h4 className='cart__category'>{product.brand}</h4>
        <h3 className='cart__name'>{product.title}</h3>
      </header>
      <i onClick={handleDeleteProduct} className="cart__trash fa-regular fa-trash-can"></i>
      <span className='cart__quantity'>{product.productsInCart.quantity}</span>
      <footer className='cart__item-footer'>
        <span className='cart__total-label'>Price:</span>
        <p className='cart__total-number'>{product.price}</p>
      </footer>
    </article>
  )
}

export default ProductCartInfo