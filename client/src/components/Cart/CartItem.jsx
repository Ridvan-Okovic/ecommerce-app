import {
  decreaseAmount,
  increaseAmount,
  removeFromCart,
} from '../../features/cart/cartSlice';
import { ArrowDown, ArrowUp } from '../../utils/icons';
import { useDispatch } from 'react-redux';

const CartItem = ({ id, name, price, amount, image }) => {
  const dispatch = useDispatch();
  console.log(id);
  return (
    <div className="flex items-center justify-between w-1/4 font-montserrat shadow-[0_1.5px_5px_0_rgba(0,0,0,0.15)] rounded-r">
      <div className="flex flex-row">
        <img
          src={image}
          alt="img"
          className="w-56 h-40 object-cover rounded-l"
        />
        <div className="flex flex-col justify-between items-start my-4 mx-4 capitalize font-medium">
          <div>
            <h3 className="text-xl">{name}</h3>
            <h4 className=" text-lg text-slate-500">$ {price}</h4>
          </div>
          <button
            onClick={() => dispatch(removeFromCart({ id }))}
            className="text-cyan-500"
          >
            Remove
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mx-4 gap-4">
        <button onClick={() => dispatch(increaseAmount({ id }))}>
          <ArrowUp />
        </button>
        <span className="w-full text-center text-xl  font-medium">
          {amount}
        </span>
        <button
          onClick={() => {
            if (amount === 1) {
              dispatch(removeFromCart({ id }));
              return;
            }
            dispatch(decreaseAmount({ id }));
          }}
        >
          <ArrowDown />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
