import React from 'react'
import "./DescriptionBox.css"

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews(122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>Welcome to VPS Grocery, your one-stop online destination for all your daily essentials. We offer a wide range of fresh produce, quality groceries, and household items at unbeatable prices. With easy navigation and secure payment options, shopping for your needs has never been simpler.</p>
        <p>Experience fast delivery and exceptional service, making VPS Grocery your trusted partner for hassle-free</p>
      </div>
    </div>
  )
}

export default DescriptionBox
