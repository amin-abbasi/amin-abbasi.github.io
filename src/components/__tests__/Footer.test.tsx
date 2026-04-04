import { describe, test, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../app/theme/themes';
import Footer from '../Footer';

const renderWithProviders = (ui: React.ReactElement) => {
  return render(
    <ThemeProvider theme={lightTheme}>
      {ui}
    </ThemeProvider>
  );
};

describe('Footer Component', () => {
  test('renders system status', () => {
    renderWithProviders(<Footer />);
    expect(screen.getByText(/layout:footer.systemOnline/i)).toBeInTheDocument();
  });
});
