import React, { useContext } from 'react';
import "./ProductDisplay.css";
import { HomeContext } from '../../Context/HomeContext';

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(HomeContext);

  const handleAddToCart = () => {
    addToCart(product.id);
    alert("Your product is added to the cart");
  };

  return (
    <div className='productdisplay'>
      <div className="productdisplayleft">
        <div className="productdisplay-img-list">
          <img src={product.image} alt='' />
          <img src={product.image} alt='' />
          <img src={product.image} alt='' />
          <img src={product.image} alt='' />
        </div>
        <div className='productdisplay-img'>
          <img src={product.image} alt='' className='productdisplay-main-img' />
        </div>
      </div>
      <div className="productdisplayright">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star-half-stroke"></i>
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-oldprices">${product.old_price}</div>
          <div className="productdisplay-right-newprices">${product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
        "Discover the latest additions to VPS Grocery!From exotic ingredients to everyday essentials, our new products are here to impress. Explore fresh flavors, unique items, and quality you can trust.Shop noww and elevate your grocery experience!""
        </div>
        <div className="productdisplay-right-size">
          <h1>Select size</h1>
          <div className="productdisplay-right-sizes">
            <div>1 Kg</div>
            <div>2 Kg</div>
            <div>3 Kg</div>
            <div>Bulk</div>
          </div>
        </div>
        <button onClick={handleAddToCart}>Add to cart</button>
        <p className='productdisplay-right-category'>
          <span>Category: </span>
          Farm Products
        </p>
        <p className='productdisplay-right-category'>
          <span>Tags: </span>
          Fresh, Organic, Locally Sourced, Gluten-Free, New Arrivals, Bestsellers, Discounted, Seasonal Offers, Limited Stock, High Protein, Healthy Snacks
        </p>
      </div>
    </div>
  );
}

export default ProductDisplay;
