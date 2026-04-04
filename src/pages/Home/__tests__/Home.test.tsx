import { describe, test, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '@app/theme/themes';
import AppContext from '@app/AppContext';
import Home from '../Home';

const mockContext = {
  darkMode: { value: false, toggle: vi.fn(), enable: vi.fn(), disable: vi.fn() },
  background: { initials: 'AA', showLogo: false, logoSize: 48, logoThickness: 18, setLogo: vi.fn() }
};

describe('Home Page', () => {
  test('renders loading state', () => {
    render(<AppContext.Provider value={mockContext}><ThemeProvider theme={lightTheme}><Home /></ThemeProvider></AppContext.Provider>);
    expect(screen.getByText(/resHome:name/i)).toBeInTheDocument();
  });
});
