import { useState } from 'react';

import Category from '../components/Layout/Category';
import Search from '../components/Layout/Search';
import Company from '../components/Layout/Company';
import Price from '../components/Layout/Price';
import Shipping from '../components/Layout/Shipping';
import ClearFilters from '../components/Layout/ClearFilters';
import Products from '../components/Shop/Products';
import Banner from '../components/Layout/Banner';
import PageNumbers from '../components/Layout/PageNumbers';

const HomePage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [company, setActiveCompany] = useState('All');
  const [pageNumber, setPageNumber] = useState(1);
  return (
    <section className="mx-56 h-[calc(100%-112px)] flex items-center justify-center font-montserrat">
      <aside className="w-72 px-4 h-full flex flex-col mt-32">
        <Search />
        <Category
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <Company company={company} setActiveCompany={setActiveCompany} />
        <Price />
        <Shipping />
        <ClearFilters
          setActiveCategory={setActiveCategory}
          setActiveCompany={setActiveCompany}
        />
      </aside>
      <section className="h-full w-[1200px] mt-32 flex flex-col items-center mx-12">
        <Banner />
        <Products
          category={activeCategory}
          company={company}
          pageNumber={pageNumber}
        />
        <PageNumbers pageNumber={pageNumber} setPageNumber={setPageNumber} />
      </section>
    </section>
  );
};

export default HomePage;
