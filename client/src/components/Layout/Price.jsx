import { useState } from 'react';

const Price = () => {
  const [range, setRange] = useState('');

  const rangeChangeHandler = (e) => {
    setRange(e.target.value);
  };
  return (
    <div className="w-full mb-4">
      <h3 className="text-lg font-semibold">Price</h3>
      <form action="">
        <label htmlFor="range">
          {' '}
          <span>{range ? '$' : ''}</span>
          {range}{' '}
        </label>
        <input
          id="range"
          className="w-full accent-[#8b5cf5]"
          type="range"
          value={range}
          onChange={rangeChangeHandler}
          min={0}
          max={1000}
        />
      </form>
    </div>
  );
};

export default Price;
