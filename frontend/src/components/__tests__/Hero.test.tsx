import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import { describe, it, expect, vi } from 'vitest';
import Hero from '../../sections/Hero';
import theme from '../../theme/theme';

// scrollIntoView is not implemented in jsdom
window.HTMLElement.prototype.scrollIntoView = vi.fn();

const renderWithTheme = (ui: React.ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);

describe('Hero', () => {
  it('renders the main heading', () => {
    renderWithTheme(<Hero />);
    expect(screen.getByText(/The Smartest Door/i)).toBeInTheDocument();
    expect(screen.getByText(/for Your Cat/i)).toBeInTheDocument();
  });

  it('renders the primary CTA button', () => {
    renderWithTheme(<Hero />);
    expect(screen.getByRole('button', { name: /Book a Demo/i })).toBeInTheDocument();
  });

  it('renders the secondary CTA button', () => {
    renderWithTheme(<Hero />);
    expect(screen.getByRole('button', { name: /See How It Works/i })).toBeInTheDocument();
  });

  it('renders social proof stats', () => {
    renderWithTheme(<Hero />);
    expect(screen.getByText('10K+')).toBeInTheDocument();
    expect(screen.getByText('99.9%')).toBeInTheDocument();
    expect(screen.getByText('4.9★')).toBeInTheDocument();
  });

  it('has the correct section id for anchor navigation', () => {
    renderWithTheme(<Hero />);
    expect(document.getElementById('hero')).not.toBeNull();
  });
});
