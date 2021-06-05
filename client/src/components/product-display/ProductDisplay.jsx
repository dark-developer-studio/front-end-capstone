import React, { useState, useEffect } from 'react';

const ProductDisplay = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log('hey');
  }, []);

  return (
    <div>Test</div>
  );
};

export default ProductDisplay;
