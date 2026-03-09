import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import { describe, it, expect } from 'vitest';
import Process from '../../sections/Process';
import theme from '../../theme/theme';

const renderWithTheme = (ui: React.ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);

describe('Process', () => {
  it('renders the section heading', () => {
    renderWithTheme(<Process />);
    expect(screen.getByText(/Set Up in Four Simple Steps/i)).toBeInTheDocument();
  });

  it('renders all four process steps', () => {
    renderWithTheme(<Process />);
    expect(screen.getByText('Order Online')).toBeInTheDocument();
    expect(screen.getByText('Easy Installation')).toBeInTheDocument();
    expect(screen.getByText('Connect the App')).toBeInTheDocument();
    expect(screen.getByText('Relax')).toBeInTheDocument();
  });

  it('has the correct section id for anchor navigation', () => {
    renderWithTheme(<Process />);
    expect(document.getElementById('process')).not.toBeNull();
  });
});
