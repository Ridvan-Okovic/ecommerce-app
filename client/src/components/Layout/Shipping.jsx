const Shipping = ({ checked, setChecked }) => {
  return (
    <form action="" className="w-full flex items-center justify-between mb-4">
      <label htmlFor="">Free Shipping</label>
      <input
        type="checkbox"
        onChange={(e) => {
          setChecked(e.target.checked);
        }}
        checked={checked === false ? false : true}
        className="h-4 w-4 accent-[#16a3b6]"
      />
    </form>
  );
};

export default Shipping;
