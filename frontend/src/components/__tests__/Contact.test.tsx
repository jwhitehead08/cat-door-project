import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import { describe, it, expect } from 'vitest';
import Contact from '../../sections/Contact';
import theme from '../../theme/theme';

const renderWithTheme = (ui: React.ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);

describe('Contact', () => {
  it('renders the section heading', () => {
    renderWithTheme(<Contact />);
    expect(screen.getByText(/Ready to Get Started/i)).toBeInTheDocument();
  });

  it('renders the contact form with required fields', () => {
    renderWithTheme(<Contact />);
    expect(screen.getByLabelText(/Your Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email Address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/How can we help/i)).toBeInTheDocument();
  });

  it('renders the scheduler placeholder', () => {
    renderWithTheme(<Contact />);
    expect(screen.getByText(/Schedule a Live Demo/i)).toBeInTheDocument();
    expect(screen.getByText(/Open Scheduler/i)).toBeInTheDocument();
  });

  it('shows a success state after form submission', () => {
    renderWithTheme(<Contact />);
    fireEvent.change(screen.getByLabelText(/Your Name/i), {
      target: { value: 'Jane Doe' },
    });
    fireEvent.change(screen.getByLabelText(/Email Address/i), {
      target: { value: 'jane@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/How can we help/i), {
      target: { value: 'I would like a demo.' },
    });
    fireEvent.click(screen.getByRole('button', { name: /Send Message/i }));
    expect(screen.getByText(/Message Sent/i)).toBeInTheDocument();
  });

  it('has the correct section id for anchor navigation', () => {
    renderWithTheme(<Contact />);
    expect(document.getElementById('contact')).not.toBeNull();
  });
});
