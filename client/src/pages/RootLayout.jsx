import { Outlet } from 'react-router-dom';
import MainSection from '../components/Layout/MainSection';
import Navigation from '../components/Layout/Navigation';

const RootLayout = () => {
  return (
    <MainSection>
      <Navigation />
      <Outlet />
    </MainSection>
  );
};

export default RootLayout;
