import { useContext } from 'react';
import ProductsContext from '../../context/products-context';

import { Listbox, Transition } from '@headlessui/react';
import { VscTriangleDown } from 'react-icons/vsc';

const Banner = ({ sort, setSort }) => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="flex w-full justify-between items-baseline gap-6 mb-4 2xl:text-lg 3xl:text-xl font-medium">
      <h3>
        <span>{products.length} </span>
        Products Found
      </h3>
      <div className="border-t-2 h-1 w-[60%] pb-1"></div>
      <div className="flex flex-row gap-4">
        <h3>Sort By </h3>
        <span className="flex flex-col">
          <Listbox value={sort} onChange={setSort}>
            <Listbox.Button className="bg-slate-50 w-36 text-left px-2 py-1 rounded border text-[#64738b] flex justify-between items-center shadow-sm text-sm">
              <span className="capitalize">{sort}</span>
              <VscTriangleDown />
            </Listbox.Button>
            <Transition
              enter="transition duration-300 ease-in-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-150 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Listbox.Options className="bg-slate-50 border rounded text-sm z-20 mt-2 text-[#64738b]">
                <div>
                  <Listbox.Option
                    value="None"
                    className="cursor-pointer px-2 py-1 hover:bg-slate-200 capitalize hover:text-slate-900"
                  >
                    None
                  </Listbox.Option>
                  <hr />
                  <Listbox.Option
                    value="Price lowest"
                    className="cursor-pointer px-2 py-1 hover:bg-slate-200 capitalize hover:text-slate-900"
                  >
                    Price lowest
                  </Listbox.Option>
                  <hr />
                  <Listbox.Option
                    value="Price highest"
                    className="cursor-pointer px-2 py-1 hover:bg-slate-200 capitalize hover:text-slate-900"
                  >
                    Price highest
                  </Listbox.Option>
                </div>
              </Listbox.Options>
            </Transition>
          </Listbox>
        </span>
      </div>
    </div>
  );
};

export default Banner;
