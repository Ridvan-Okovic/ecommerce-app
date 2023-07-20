import { useEffect, useState } from 'react';
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getProducts() {
      try {
        const prods = await axios.get('http://localhost:3001/api/v1/products');
        setProducts(prods.data.products);
      } catch (error) {
        console.log(error);
      }
    }
    getProducts();
  }, []);

  console.log(products);

  return <div></div>;
};

export default Products;
