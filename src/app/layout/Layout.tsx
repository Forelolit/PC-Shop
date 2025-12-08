import { Footer } from '@modules/footerModule';
import { Header } from '@modules/headerModule';
import { Outlet } from 'react-router';

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
