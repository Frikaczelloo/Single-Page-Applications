import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductDetails = ({ products }) => {
  const { id } = useParams(); 
  const product = products.filter(p => p.id === parseInt(id))[0]; 
  if (!product) return null;
  return (
    <div>
      <h1>{product.title}</h1>
      <p>Category: {product.category}</p>
      <p>Brand: {product.brand}</p>
      <p>Description: {product.description}</p>
      <p>Price: {product.price}</p>
      <img src={product.thumbnail} alt={product.title} />
      <br />
      <Link to="/">Back to product list</Link>  
    </div>
  );
};

export default ProductDetails;
