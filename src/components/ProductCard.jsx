import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col transform transition-transform duration-300 hover:scale-105 h-full">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-gray-600 mt-2 mb-4 flex-grow  product-card-description">
          {product.description}
        </p>
        <div className="flex justify-between items-center mt-6">
          <span className="text-3xl font-bold text-indigo-600">
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full font-semibold 
                       hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Añadir al Carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
