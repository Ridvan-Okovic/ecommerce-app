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
  const [checked, setChecked] = useState(false);

  return (
    <section className="mx-8 lg:mx-24 xl:mx-36 2xl:mx-36 3xl:mx-56 min-h-full flex mt-36 mb-36 justify-center font-montserrat">
      <aside className="w-72 px-4 flex flex-col">
        <Search />
        <Category
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <Company company={company} setActiveCompany={setActiveCompany} />
        <Price range={range} setRange={setRange} />
        <Shipping checked={checked} setChecked={setChecked} />
        <ClearFilters
          setActiveCategory={setActiveCategory}
          setActiveCompany={setActiveCompany}
          setSort={setSort}
          setRange={setRange}
          setChecked={setChecked}
        />
      </aside>
      <section className="flex flex-col items-center mx-12">
        <Banner sort={sort} setSort={setSort} />

        <Products
          category={activeCategory}
          company={company}
          pageNumber={pageNumber}
          sort={sort}
          range={range}
          checked={checked}
        />

        <PageNumbers pageNumber={pageNumber} setPageNumber={setPageNumber} />
      </section>
    </section>
  );
};

export default HomePage;
