import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import { describe, it, expect } from 'vitest';
import Services from '../../sections/Services';
import theme from '../../theme/theme';

const renderWithTheme = (ui: React.ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);

describe('Services', () => {
  it('renders the section heading', () => {
    renderWithTheme(<Services />);
    expect(screen.getByText(/Everything Your Cat Needs/i)).toBeInTheDocument();
  });

  it('renders all six service cards', () => {
    renderWithTheme(<Services />);
    expect(screen.getByText('Microchip Recognition')).toBeInTheDocument();
    expect(screen.getByText('Real-Time Alerts')).toBeInTheDocument();
    expect(screen.getByText('Mobile App Control')).toBeInTheDocument();
    expect(screen.getByText('Curfew Scheduling')).toBeInTheDocument();
    expect(screen.getByText('Smart Home Integration')).toBeInTheDocument();
    expect(screen.getByText('AI Behaviour Insights')).toBeInTheDocument();
  });

  it('has the correct section id for anchor navigation', () => {
    renderWithTheme(<Services />);
    expect(document.getElementById('services')).not.toBeNull();
  });
});
