import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MainSection from '../components/Layout/MainSection';
import Navigation from '../components/Layout/Navigation';

import { calculateTotal } from '../features/cart/cartSlice';

const RootLayout = () => {
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartItems]);

  return (
    <MainSection>
      <Navigation />
      <Outlet />
    </MainSection>
  );
};

export default RootLayout;
