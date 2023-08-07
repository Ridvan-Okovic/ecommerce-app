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
  const [sort, setSort] = useState('None');
  const [range, setRange] = useState(0);

  return (
    <section className="mx-56 h-full flex items-center justify-center font-montserrat mt-36">
      <aside className="w-72 px-4 h-full flex flex-col">
        <Search />
        <Category
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <Company company={company} setActiveCompany={setActiveCompany} />
        <Price range={range} setRange={setRange} />
        <Shipping />
        <ClearFilters
          setActiveCategory={setActiveCategory}
          setActiveCompany={setActiveCompany}
          setSort={setSort}
          setRange={setRange}
        />
      </aside>
      <section className="h-full w-[1200px] flex flex-col items-center mx-12">
        <Banner sort={sort} setSort={setSort} />

        <Products
          category={activeCategory}
          company={company}
          pageNumber={pageNumber}
          sort={sort}
          range={range}
        />

        <PageNumbers pageNumber={pageNumber} setPageNumber={setPageNumber} />
      </section>
    </section>
  );
};

export default HomePage;
