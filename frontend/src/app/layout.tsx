/* eslint-disable react-refresh/only-export-components */
import type { Metadata } from 'next';
import React from 'react';
import './globals.css';
import ThemeRegistry from '../lib/ThemeRegistry';
import Layout from '../components/Layout';

export const metadata: Metadata = {
  title: 'Digsy – Smart Pet Door Installation',
  description: 'Precision pet-door installation and architectural habitat systems for the modern home.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Layout>{children}</Layout>
        </ThemeRegistry>
      </body>
    </html>
  );
}
