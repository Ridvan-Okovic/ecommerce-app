import { useState } from 'react';

import Category from '../components/Layout/Category';
import Search from '../components/Layout/Search';
import Company from '../components/Layout/Company';

const HomePage = () => {
  const [setActiveCategory] = useState('All');
  return (
    <section className="mx-56 h-[calc(100%-112px)] flex items-center justify-center font-montserrat">
      <aside className="w-72 px-4 h-full border flex flex-col justify-center">
        <Search />
        <Category setActiveCategory={setActiveCategory} />
        <Company />
      </aside>
      <section className="w-full h-full border">Sta ima</section>
    </section>
  );
};

export default HomePage;
