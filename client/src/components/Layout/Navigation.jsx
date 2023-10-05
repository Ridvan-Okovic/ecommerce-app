import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

import Logo from '../../assets/logo.svg';
import cartSvg from '../../assets/cart.svg';

const Navigation = () => {
  const { amount } = useSelector((store) => store.cart);
  console.log(amount);
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
          <li className="flex items-center justify-center gap-1 relative">
            {amount > 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-5 h-5 bg-red-500 rounded-full absolute -top-2 -right-2 flex items-center justify-center text-xs font-montserrat font-medium text-white"
              >
                {amount}
              </motion.div>
            )}
            <img src={cartSvg} alt="cart" className="w-6" />
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
