import { useContext, useEffect } from 'react';
import axios from 'axios';
import ProductsContext from '../../context/products-context';
import Product from './Product';

const Products = ({ category, company, pageNumber }) => {
  const { products, setProducts } = useContext(ProductsContext);

  let url =
    'http://localhost:3001/api/v1/products?fields=price,name,image,company,rating';

  if (category !== 'All') {
    url = `http://localhost:3001/api/v1/products?fields=price,name,image,company,rating&category=${category}`;
  }

  if (company !== 'All') {
    url = `http://localhost:3001/api/v1/products?fields=price,name,image,company,rating&company=${company.toLocaleLowerCase()}`;
  }

  if (pageNumber !== 1) {
    url = `http://localhost:3001/api/v1/products?fields=price,name,image,company,rating&page=${pageNumber}`;
  }

  if (category !== 'All' && company !== 'All') {
    url = `http://localhost:3001/api/v1/products?fields=price,name,image,company,rating&company=${company.toLocaleLowerCase()}&category=${category}`;
  }

  if (category !== 'All' && pageNumber !== 1) {
    url = `http://localhost:3001/api/v1/products?fields=price,name,image,company,rating&page=${pageNumber}&category=${category}`;
  }

  if (company !== 'All' && pageNumber !== 1) {
    url = `http://localhost:3001/api/v1/products?fields=price,name,image,company,rating&page=${pageNumber}&company=${company.toLocaleLowerCase()}`;
  }

  useEffect(() => {
    async function getProducts() {
      try {
        const prods = await axios.get(url);
        setProducts(prods.data.products);
      } catch (error) {
        console.log(error);
      }
    }

    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, company, pageNumber]);

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
