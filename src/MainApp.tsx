import { Outlet } from 'react-router-dom';
import { useAnalytics } from './hooks/useAnalytics';
import NavBarWithRouter from './components/NavBar';
import Footer from './components/Footer';

function MainApp() {
    useAnalytics();

    return (
        <div className="MainApp">
            <NavBarWithRouter />
            <main className="main">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default MainApp;
