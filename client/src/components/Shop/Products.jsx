import { Suspense, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import ProductsContext from '../../context/products-context';
import Product from './Product';

const Products = ({ category, company, pageNumber, sort, range, checked }) => {
  const { products, setProducts } = useContext(ProductsContext);
  const [error, setError] = useState(false);

  let url =
    'http://localhost:3001/api/v1/products?fields=price,name,image,company,rating,free_shipping,featured';

  if (company !== 'All') {
    url = url + `&company=${company.toLocaleLowerCase()}`;
  }

  if (category !== 'All') {
    url = url + `&category=${category}`;
  }

  if (pageNumber !== 1) {
    url = url + `&page=${pageNumber}`;
  }

  if (sort.trim() === 'Price lowest') {
    url = url + `&sort=price`;
  }

  if (sort.trim() === 'Price highest') {
    url = url + `&sort=-price`;
  }

  if (checked) {
    url = url + `&shipping=${checked}`;
  }

  if (Number(range) !== 0) {
    url = url + `&numericFilters=price<=${Number(range)}`;
  } else {
    url = url + `&numericFilters=price>${Number(range)}`;
  }

  useEffect(() => {
    async function getProducts() {
      try {
        const prods = await axios.get(url);
        if (prods.data.nbHits === 0) {
          setError(true);
        } else {
          setError(false);
        }
        setProducts(prods.data.products);
      } catch (error) {
        console.log(error);
      }
    }

    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, company, pageNumber, sort, range, checked]);

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
        featured={product.featured}
      />
    );
  });

  return (
    <>
      {error && noProductsFound}
      <div className="grid grid-cols-3 gap-x-6 gap-y-8">
        <Suspense
          fallback={
            <p className="text-center w-full font-medium text-xl">Loading...</p>
          }
        >
          {mappedProducts}
        </Suspense>
      </div>
    </>
  );
};

export default Products;
