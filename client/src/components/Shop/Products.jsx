import { useContext, useEffect } from 'react';
import axios from 'axios';
import ProductsContext from '../../context/products-context';
import Product from './Product';

const Products = ({ category }) => {
  const { products, setProducts } = useContext(ProductsContext);

  useEffect(() => {
    async function getProducts() {
      try {
        if (category === 'All') {
          const prods = await axios.get(
            'http://localhost:3001/api/v1/products?fields=price,name,image,company,rating'
          );
          setProducts(prods.data.products);
        } else {
          const prods = await axios.get(
            `http://localhost:3001/api/v1/products?fields=price,name,image,company,rating&category=${category}`
          );
          setProducts(prods.data.products);
        }
      } catch (error) {
        console.log(error);
      }
    }

    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  const noProductsFound = (
    <p className="text-center w-full font-medium text-xl">
      No products match your description.
    </p>
  );

  const mappedProducts = products.map((product) => {
    return (
      <Product
        key={product._id}
        id={product._id}
        name={product.name}
        image={product.image}
        company={product.company}
        rating={product.rating}
        price={product.price}
      />
    );
  });

  return (
    <>
      {mappedProducts.length === 0 && noProductsFound}
      <div className="grid grid-cols-3 gap-x-6 gap-y-8">
        {mappedProducts.length > 0 && mappedProducts}
      </div>
    </>
  );
};

export default Products;
