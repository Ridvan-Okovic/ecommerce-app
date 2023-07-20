import { HiSearch } from 'react-icons/hi';

const Search = () => {
  return (
    <div className="relative mb-4">
      <form action="">
        <input
          type="text"
          name="name"
          className="w-full bg-[#f8fafc] pl-8 rounded border outline-none focus:outline focus:outline-[#8b5cf5] focus:outline-2"
        />
      </form>
      <HiSearch className="absolute top-[5px] left-2 text-[#64748b]" />
    </div>
  );
};

export default Search;
