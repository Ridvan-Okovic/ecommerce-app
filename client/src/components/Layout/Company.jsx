const Company = () => {
  return (
    <div className="w-full">
      <h3 className="text-lg font-semibold">Company</h3>
      <form action="">
        <select
          className="bg-[#f1f5f9] w-full rounded border py-1 text-[#64748b] relative"
          defaultValue="All"
        >
          <option value="All">All</option>
          <option value="Ikea">Ikea</option>
          <option value="Liddy">Liddy</option>
          <option value="Marcos">Marcos</option>
          <option value="Caressa">Caressa</option>
        </select>
      </form>
    </div>
  );
};

export default Company;
