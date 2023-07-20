import { useState } from 'react';
import ProductsContext from './products-context';

const ProductsProvider = (props) => {
  const [products, setProducts] = useState([]);
  const productsContext = {
    products,
    setProducts,
  };
  return (
    <ProductsContext.Provider value={productsContext}>
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
