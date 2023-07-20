import { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import ProductsContext from '../../context/products-context';

const PageNumbers = ({ category }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const { products, setProducts } = useContext(ProductsContext);

  const nextPageHandler = async () => {
    setPageNumber((prev) => prev + 1);
  };

  const prevPageHandler = async () => {
    setPageNumber((prev) => prev + -1);
  };

  useEffect(() => {
    async function getProducts() {
      try {
        if (category === 'All') {
          const products = await axios.get(
            `http://localhost:3001/api/v1/products?fields=price,name,image,company,rating&page=${pageNumber}`
          );
          setProducts(products.data.products);
        } else {
          const products = await axios.get(
            `http://localhost:3001/api/v1/products?fields=price,name,image,company,rating&page=${pageNumber}&category=${category}`
          );
          setProducts(products.data.products);
        }
      } catch (error) {
        console.log(error);
      }
    }

    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber]);

  return (
    <div className="flex items-center justify-between gap-4 mt-4">
      <button
        disabled={pageNumber <= 1}
        className="px-2 py-1 bg-slate-50 text-[#64738b] border rounded shadow-sm"
        onClick={prevPageHandler}
      >
        Prev
      </button>
      <span className="text-lg font-medium">{pageNumber}</span>
      <button
        disabled={products.length < 9}
        className="px-2 py-1 bg-slate-50 text-[#64738b] border rounded shadow-sm"
        onClick={nextPageHandler}
      >
        Next
      </button>
    </div>
  );
};

export default PageNumbers;
