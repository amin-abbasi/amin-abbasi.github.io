import { describe, test, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { lightTheme } from '../../app/theme/themes';
import NavBar from '../NavBar';

const renderWithProviders = (ui: React.ReactElement) => {
  return render(
    <BrowserRouter>
      <ThemeProvider theme={lightTheme}>
        {ui}
      </ThemeProvider>
    </BrowserRouter>
  );
};

describe('NavBar Component', () => {
  test('renders navigation brand logo', () => {
    renderWithProviders(<NavBar />);
    expect(screen.getByAltText(/main logo/i)).toBeInTheDocument();
  });
});
