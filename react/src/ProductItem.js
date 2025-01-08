import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {
  return (
    <li>
      <Link to={`/details/${product.id}`}>{product.title}</Link>
    </li>
  );
};

export default ProductItem;
