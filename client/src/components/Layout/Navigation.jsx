import { NavLink } from 'react-router-dom';

import Logo from '../../assets/ecommerce-online-shopping-shoppingcart-svgrepo-com.svg';
import { HiShoppingCart } from 'react-icons/hi';

const Navigation = () => {
  return (
    <header className="w-full h-14 border-b px-10 font-montserrat shadow-sm">
      <nav className="w-full h-full flex items-center justify-between">
        <ul className="flex gap-6 text-lg font-medium items-center">
          <img src={Logo} className="w-12" alt="logo" />
          <NavLink to={'/home/products'}>Home</NavLink>
          <NavLink to={'/featured/products'}>Featured</NavLink>
        </ul>
        <ul className="flex gap-6 items-center justify-center">
          <li className="flex items-center justify-center gap-1">
            <HiShoppingCart className="text-xl" />
          </li>

          <button className="border px-[14px] py-[2px] rounded-full bg-slate-50 text-[#64748b] hover:border-slate-300">
            Log in
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
