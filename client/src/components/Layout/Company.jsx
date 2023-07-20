import { useEffect, useState, useContext } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import axios from 'axios';
import ProductsContext from '../../context/products-context';
import { VscTriangleDown } from 'react-icons/vsc';

const companies = ['All', 'Ikea', 'Liddy', 'Caressa', 'Marcos'];

const Company = () => {
  const { setProducts } = useContext(ProductsContext);
  const [selected, setSelected] = useState(companies[0]);

  useEffect(() => {
    async function getProducts() {
      try {
        if (selected === 'All') {
          const products = await axios.get(
            `http://localhost:3001/api/v1/products?fields=price,name,image,company,rating`
          );
          setProducts(products.data.products);
        } else {
          const products = await axios.get(
            `http://localhost:3001/api/v1/products?fields=price,name,image,company,rating&company=${selected.toLocaleLowerCase()}`
          );
          setProducts(products.data.products);
        }
      } catch (error) {
        console.log(error);
      }
    }

    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  return (
    <div className="w-full mb-4">
      <h3 className="text-lg font-semibold">Company</h3>
      <Listbox value={selected} onChange={setSelected}>
        <Listbox.Button className="bg-slate-50 w-full text-left px-2 py-1 rounded border text-[#64738b] flex justify-between items-center shadow-sm">
          <span>{selected}</span>
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
          <Listbox.Options className="bg-slate-50 border rounded  mt-2 text-[#64738b]">
            {companies.map((name, idx) => (
              <div key={idx}>
                <Listbox.Option
                  className="cursor-pointer px-2 py-1 hover:bg-slate-200 capitalize hover:text-slate-900"
                  value={name}
                >
                  {name}
                </Listbox.Option>
                {idx === 4 ? '' : <hr />}
              </div>
            ))}
          </Listbox.Options>
        </Transition>
      </Listbox>
    </div>
  );
};

export default Company;
