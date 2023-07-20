import { useState } from 'react';

import Category from '../components/Layout/Category';
import Search from '../components/Layout/Search';
import Company from '../components/Layout/Company';
import Price from '../components/Layout/Price';
import Shipping from '../components/Layout/Shipping';
import ClearFilters from '../components/Layout/ClearFilters';
import Products from '../components/Shop/Products';
import Banner from '../components/Layout/Banner';

const HomePage = () => {
  const [setActiveCategory] = useState('All');
  return (
    <section className="mx-56 h-[calc(100%-112px)] flex items-center justify-center font-montserrat">
      <aside className="w-72 px-4 h-full flex flex-col mt-24">
        <Search />
        <Category setActiveCategory={setActiveCategory} />
        <Company />
        <Price />
        <Shipping />
        <ClearFilters />
      </aside>
      <section className="h-full mt-24 flex flex-col items-center mx-12">
        <Banner />
        <Products />
      </section>
    </section>
  );
};

export default HomePage;
