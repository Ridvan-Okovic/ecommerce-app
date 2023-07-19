import { Outlet } from 'react-router-dom';
import MainSection from '../components/Layout/MainSection';
import Navigation from '../components/Layout/Navigation';
import Footer from '../components/Layout/Footer';

const RootLayout = () => {
  return (
    <MainSection>
      <Navigation />
      <Outlet />
      <Footer />
    </MainSection>
  );
};

export default RootLayout;
