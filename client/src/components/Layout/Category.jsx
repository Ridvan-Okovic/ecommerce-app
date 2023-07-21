const categories = [
  'All',
  'Office',
  'Kitchen',
  'Bedroom',
  'Dining',
  'Living room',
];

const Category = ({ activeCategory, setActiveCategory }) => {
  const addFilter = (category) => (e) => {
    e.preventDefault();
    setActiveCategory(category);
  };

  return (
    <>
      <h3 className="text-lg font-semibold">Category</h3>
      <ul className="flex flex-col items-start gap-1 mb-4">
        {categories.map((category, index) => {
          return (
            <button
              key={index}
              onClick={addFilter(category)}
              className={
                category === activeCategory
                  ? 'text-[#64738b] font-semibold'
                  : 'text-[#abb2bc]'
              }
            >
              {category}
            </button>
          );
        })}
      </ul>
    </>
  );
};

export default Category;
