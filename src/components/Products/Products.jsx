import React from "react";
import "./Products.css";
const Products = (props) => {
  const { img, name, seller, ratings, price } = props.product;
  const handleAddToCart = props.handleAddToCart;

  return (
    <div className="product">
      <img src={img} alt="pheanut butter" />
      <div className="product-info">
        <h6 className="product-name">{name}</h6>
        <p>${price}</p>
        <p>{seller}</p>
        <p>Rating: {ratings} Star</p>
      </div>

      <button
        onClick={() => handleAddToCart(props.product)}
        className="button-cart"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Products;
