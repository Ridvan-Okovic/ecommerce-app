const Price = ({ range, setRange }) => {
  const rangeChangeHandler = (e) => {
    setRange(e.target.value);
  };
  return (
    <div className="w-full mb-4">
      <h3 className="text-lg font-semibold">Price</h3>
      <form action="">
        <label htmlFor="range">
          {' '}
          <span>{'$'}</span>
          {range}{' '}
        </label>
        <input
          id="range"
          className="w-full accent-[#b49b8b]"
          type="range"
          value={range}
          onChange={rangeChangeHandler}
          min={0}
          max={309}
        />
      </form>
    </div>
  );
};

export default Price;
