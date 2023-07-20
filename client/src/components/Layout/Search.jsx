import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import ProductsContext from '../../context/products-context';

import { HiSearch } from 'react-icons/hi';

const Search = () => {
  const [query, setQuery] = useState('');
  const { setProducts } = useContext(ProductsContext);
  const queryChangeHandler = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    async function getProducts() {
      try {
        const products = await axios.get(
          `http://localhost:3001/api/v1/products?fields=price,name,image,company,rating&name=${query}`
        );
        setProducts(products.data.products);
      } catch (error) {
        console.log(error);
      }
    }

    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <div className="relative mb-4">
      <input
        type="text"
        name="name"
        onChange={queryChangeHandler}
        value={query}
        placeholder="Search"
        className="w-full bg-[#f8fafc] pl-8 py-1 rounded border shadow-sm"
      />

      <HiSearch className="absolute top-[9px] left-2 text-[#64748b]" />
    </div>
  );
};

export default Search;
