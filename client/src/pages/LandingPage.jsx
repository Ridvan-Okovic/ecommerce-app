import bgImage from '../assets/hero-bg-picture.png';
import search from '../assets/search.svg';
import logoWhite from '../assets/logo-white.svg';
import { NavLink } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="h-screen w-screen -translate-y-14 relative">
      <img src={bgImage} className="w-full h-full object-cover" alt="" />
      <nav className="w-full h-20 absolute top-0 left-0 flex items-center justify-between px-28 font-montserrat">
        <img src={logoWhite} className="w-36" alt="" />
        <ul className="space-x-10 font-medium text-white text-lg">
          <NavLink to="/home/products">Shop</NavLink>
          <NavLink>About Us</NavLink>
          <NavLink>Contact</NavLink>
        </ul>
        <div className="w-[144px] flex items-end justify-end">
          <NavLink
            to="/home/login"
            className="border px-[14px] py-[2px] rounded-full bg-white bg-opacity-20 backdrop-blur-lg text-white hover:border-slate-300"
          >
            Log in
          </NavLink>
        </div>
      </nav>

      <div className="absolute top-64 w-full space-y-8">
        <div className="space-y-4">
          <h1 className="z-10 text-white  text-center w-full text-6xl font-montserrat font-bold capitalize">
            Bring serenity to your home
          </h1>
          <h1 className="z-10 text-white  text-center w-full text-6xl font-montserrat font-bold capitalize">
            with our furniture
          </h1>
        </div>
        <div className="space-y-1">
          <h3 className="z-10 text-white w-full text-center text-lg font-montserrat">
            find your dream furniture for your home decoration
          </h3>
          <h3 className="z-10 text-white w-full text-center text-lg font-montserrat">
            with us, and we will make it happen.
          </h3>
        </div>
        <div className="z-10 w-full flex items-center justify-center absolute">
          <input
            type="text"
            className="rounded-full p-2 px-4 placeholder:text-white bg-opacity-20 backdrop-blur-lg bg-white border w-72 text-white"
            placeholder="Search furniture"
          />
          <button className="p-[6px] rounded-full bg-gradient-to-r from-green-400 to-cyan-500 -translate-x-[38px]">
            <img src={search} alt="" className="w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
