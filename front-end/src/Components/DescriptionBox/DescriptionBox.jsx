import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
        <div className="decriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="decriptionbox-description">
            <p>
                An e-commerce website is an online platform that allows businesses and individuals to buy and sell products or services over the internet. It provides a convenient way for customers to browse, select, and purchase items from the comfort of their own homes.
            </p>
            <p>
                    E-commerce websites typically feature a wide range of products, including clothing, electronics, home goods, and more. Customers can search for specific items, view product details and images, read reviews, and make secure payments online.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox