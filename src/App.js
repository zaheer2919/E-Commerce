import React, { useState } from 'react';
import Product from './components/Product';
import Cart from './components/Cart';
import ProductDetailModal from './components/ProductDetailModal';
import './App.css';

const productsData = [
  { id: 1, name: 'Product 1', price: 100, image: 'https://via.placeholder.com/150', description: 'Description of Product 1', specifications: 'Specs of Product 1', reviews: 'Reviews of Product 1' },
  { id: 2, name: 'Product 2', price: 150, image: 'https://via.placeholder.com/150', description: 'Description of Product 2', specifications: 'Specs of Product 2', reviews: 'Reviews of Product 2' },
];

function App() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const addToCart = (product) => {
    const updatedCart = [...cart, { ...product, quantity: 1 }];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const adjustQuantity = (productId, quantity) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity } : item
    );
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div className="App">
      <h1>React E-commerce App</h1>
      <div className="products">
        {productsData.map((product) => (
          <Product
            key={product.id}
            product={product}
            onAddToCart={addToCart}
            onViewDetails={() => setSelectedProduct(product)}
          />
        ))}
      </div>
      <Cart
        cart={cart}
        onRemoveFromCart={removeFromCart}
        onAdjustQuantity={adjustQuantity}
      />
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}

export default App;