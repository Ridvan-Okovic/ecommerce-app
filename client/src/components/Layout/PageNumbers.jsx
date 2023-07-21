import { useContext } from 'react';
import ProductsContext from '../../context/products-context';

const PageNumbers = ({ pageNumber, setPageNumber }) => {
  const { products } = useContext(ProductsContext);

  const nextPageHandler = async () => {
    setPageNumber((prev) => prev + 1);
  };

  const prevPageHandler = async () => {
    setPageNumber((prev) => prev + -1);
  };

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
