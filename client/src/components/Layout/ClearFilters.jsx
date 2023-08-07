const ClearFilters = ({
  setActiveCompany,
  setActiveCategory,
  setSort,
  setRange,
}) => {
  const removeFilters = () => {
    setActiveCategory('All');
    setActiveCompany('All');
    setSort('None');
    setRange(0);
  };
  return (
    <div className="w-full grid place-items-center">
      <button
        onClick={removeFilters}
        className="px-4 py-1 rounded bg-red-600 cursor-pointer text-white font-medium"
      >
        Clear Filters
      </button>
    </div>
  );
};

export default ClearFilters;
