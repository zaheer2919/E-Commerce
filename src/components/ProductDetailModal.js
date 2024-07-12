import React from 'react';
import Modal from 'react-modal';

const ProductDetailModal = ({ product, onClose }) => {
  return (
    <Modal isOpen onRequestClose={onClose} contentLabel="Product Details">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.specifications}</p>
      <p>{product.reviews}</p>
      <button onClick={onClose}>Close</button>
    </Modal>
  );
};

export default ProductDetailModal;