import { Header } from '@modules/headerModule';
import { Outlet } from 'react-router';

export const Layout = () => {
    return (
        <main>
            <Header />
            <Outlet />
        </main>
    );
};
