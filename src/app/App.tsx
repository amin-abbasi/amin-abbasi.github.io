import { useMemo, useState, useCallback } from 'react';
import './App.css';
import './styles/design-system.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'styled-components';
import useDarkMode from 'use-dark-mode';
import AppContext from './AppContext';
import MainApp from './MainApp';
import GlobalStyles from './theme/GlobalStyles';
import { lightTheme, darkTheme } from './theme/themes';

function App() {
    // Polyfill matchMedia on client only
    if (typeof window !== 'undefined') {
        // @ts-ignore
        window.matchMedia =
            window.matchMedia ||
            (() => ({
                matches: false,
                addListener: () => {},
                removeListener: () => {},
            }));
    }

    const darkMode = useDarkMode(true);
    const [bgSettings, setBgSettings] = useState({
        initials: "AA",
        showLogo: false,
        logoSize: 48,
        logoThickness: 18,
    });

    const setLogo = useCallback((show: boolean, initials?: string, size?: number, thickness?: number) => {
        setBgSettings((prev: any) => {
            const nextInitials = initials ?? prev.initials;
            const nextSize = size ?? prev.logoSize;
            const nextThickness = thickness ?? prev.logoThickness;
            
            if (prev.showLogo === show && 
                prev.initials === nextInitials &&
                prev.logoSize === nextSize &&
                prev.logoThickness === nextThickness) {
                return prev;
            }

            return {
                ...prev,
                showLogo: show,
                initials: nextInitials,
                logoSize: nextSize,
                logoThickness: nextThickness,
            };
        });
    }, []);

    const contextValue = useMemo(() => ({ 
        darkMode,
        background: { ...bgSettings, setLogo }
    }), [darkMode, bgSettings, setLogo]);

    return (
        <AppContext.Provider value={contextValue}>
            <ThemeProvider theme={darkMode.value ? darkTheme : lightTheme}>
                <GlobalStyles />
                <div className="App" data-theme={darkMode.value ? 'dark' : 'light'}>
                    <MainApp />
                </div>
            </ThemeProvider>
        </AppContext.Provider>
    );
}

export default App;
