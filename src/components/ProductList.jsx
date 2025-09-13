
import React from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/products';

const ProductList = ({ onAddToCart }) => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-10">Nuestros Productos en Promocion por Temporada</h2>
      <div className="product-container">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;