import { useContext } from 'react';
import ProductsContext from '../../context/products-context';

import { VscArrowDown } from 'react-icons/vsc';

const Banner = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="flex w-full justify-between items-baseline gap-6 mb-4 text-xl font-medium">
      <h3>
        <span>{products.length} </span>
        Products Found
      </h3>
      <div className="border-t-2 h-1 w-[60%] pb-1"></div>
      <div className="flex flex-row gap-4">
        <h3>Sort By </h3>
        <span className="flex">
          Price
          <button className="flex items-center">
            (Lowest) <VscArrowDown />
          </button>
        </span>
      </div>
    </div>
  );
};

export default Banner;
