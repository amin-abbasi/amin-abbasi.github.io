import { Outlet } from 'react-router-dom';
import { useAnalytics } from './hooks/useAnalytics';
import NavBarWithRouter from './components/NavBar';
import Footer from './components/Footer';
import TranslationWarning from './components/TranslationWarning';
import GlobalBackground from './components/GlobalBackground';

function MainApp() {
    useAnalytics();

    return (
        <div className="MainApp">
            <GlobalBackground />
            <NavBarWithRouter />
            <main className="main">
                <Outlet />
            </main>
            <Footer />
            <TranslationWarning />
        </div>
    );
}

export default MainApp;
