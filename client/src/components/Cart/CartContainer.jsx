import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const CartContainer = () => {
  const { cartItems, amount } = useSelector((store) => store.cart);

  console.log(cartItems);

  if (amount < 1) {
    return (
      <div className="text-center mt-24">
        <h3 className="text-center text-5xl font-montserrat font-medium capitalize">
          Your bag
        </h3>
        {amount < 1 && (
          <h3 className="text-center text-lg text-slate-400 mt-12">
            Your bag is currently empty
          </h3>
        )}
      </div>
    );
  }

  return (
    <div className="w-full h-full">
      <section className="w-full h-full">
        <div className="text-center mt-24">
          <h3 className="text-center text-5xl font-montserrat font-medium capitalize">
            Your bag
          </h3>
        </div>
        <div className="w-full h-full flex flex-col items-center mt-16 gap-8">
          {cartItems.map((item) => {
            return (
              <CartItem
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
                amount={item.amount}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default CartContainer;
