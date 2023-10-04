import { NavLink } from 'react-router-dom';

import Logo from '../../assets/logo.svg';
import { HiShoppingCart } from 'react-icons/hi';

const Navigation = () => {
  return (
    <header className="w-full h-14 border-b px-10 font-montserrat shadow-sm">
      <nav className="w-full h-full flex items-center justify-between ">
        <ul className="flex gap-6 text-lg font-medium items-center">
          <NavLink to="/home">
            <img src={Logo} className="w-28" alt="logo" />
          </NavLink>
          <NavLink to={'/home/products'}>Shop</NavLink>
          <NavLink to={'/home/about'}>About Us</NavLink>
          <NavLink to={'/home/contact'}>Contact</NavLink>
        </ul>
        <ul className="flex gap-6 items-center justify-center">
          <li className="flex items-center justify-center gap-1">
            <HiShoppingCart className="text-xl" />
          </li>

          <NavLink
            to="/home/login"
            className="border px-[14px] py-[2px] rounded-full bg-slate-50 text-[#64748b] hover:border-slate-300"
          >
            Log in
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
