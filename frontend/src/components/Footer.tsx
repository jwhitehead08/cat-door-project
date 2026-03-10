'use client';

import React from 'react';
import Image from 'next/image';
import { Box, Container, Grid, Link, Typography, Divider, Stack } from '@mui/material';
import NextLink from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

interface FooterColumn {
  heading: string;
  links: { label: string; href: string; external?: boolean }[];
}

const COLUMNS: FooterColumn[] = [
  {
    heading: 'Services',
    links: [
      { label: 'Smart Pet Doors', href: '#services' },
      { label: 'Vertical Habitats', href: '#services' },
      { label: 'Custom Builds', href: '#services' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'How It Works', href: '#process' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact Us', href: '#contact' },
    ],
  },
  {
    heading: 'Growth',
    links: [
      { label: 'Franchise Partnerships', href: '/franchise' },
      { label: 'Franchise Enquiry', href: '/franchise#enquiry-form' },
    ],
  },
];

const isAnchor = (href: string) => href.startsWith('#');

// Matches /some-path#some-id — a route with a hash fragment
const isRouteWithHash = (href: string) => href.startsWith('/') && href.includes('#');
const isRoute = (href: string) => href.startsWith('/') && !href.includes('#');

const FooterLink: React.FC<{ label: string; href: string; external?: boolean }> = ({
  label,
  href,
  external,
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const sx = {
    color: 'text.secondary',
    textDecoration: 'none',
    fontSize: '0.875rem',
    lineHeight: 1.9,
    display: 'block',
    cursor: 'pointer',
    transition: 'color 0.15s',
    '&:hover': { color: 'primary.main' },
  };

  if (external) {
    return <Link href={href} sx={sx}>{label}</Link>;
  }

  // Route + hash — navigate to the page then scroll to the element
  if (isRouteWithHash(href)) {
    const [path, hash] = href.split('#');
    return (
      <Link
        sx={sx}
        onClick={(e) => {
          e.preventDefault();
          router.push(path);
          setTimeout(() => {
            document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 100);
        }}
      >
        {label}
      </Link>
    );
  }

  // Plain route
  if (isRoute(href)) {
    return (
      <Link
        component={NextLink}
        href={href}
        sx={sx}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        {label}
      </Link>
    );
  }

  // Anchor — navigate home first if not already there, then scroll
  return (
    <Link
      sx={sx}
      onClick={(e) => {
        e.preventDefault();
        const id = href.slice(1);
        if (pathname !== '/') {
          router.push('/');
          setTimeout(() => {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 100);
        } else {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }}
    >
      {label}
    </Link>
  );
};

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        borderTop: '1px solid',
        borderColor: 'divider',
        backgroundColor: 'background.paper',
        pt: { xs: 6, md: 8 },
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {/* Brand column */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ mb: 1.5 }}>
              <Image src="/transparent-logo.svg" alt="Digsy" width={160} height={54} />
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 280, lineHeight: 1.75 }}>
              Precision pet-door installation and architectural habitat systems
              for the modern home.
            </Typography>
          </Grid>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <Grid size={{ xs: 6, sm: 4, md: isAnchor(col.links[0]?.href) ? 2 : 2 }} key={col.heading}>
              <Typography
                variant="subtitle2"
                fontWeight={700}
                color="text.primary"
                gutterBottom
                sx={{ letterSpacing: '0.04em', textTransform: 'uppercase', fontSize: '0.7rem' }}
              >
                {col.heading}
              </Typography>
              {col.links.map((link) => (
                <FooterLink key={link.label} {...link} />
              ))}
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ mb: 3 }} />

        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 1 }}>
          <Typography variant="caption" color="text.secondary">
            © {new Date().getFullYear()} Digsy. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={2}>
            <Link href="#" sx={{ color: 'text.secondary', fontSize: '0.75rem', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>
              Privacy Policy
            </Link>
            <Link href="#" sx={{ color: 'text.secondary', fontSize: '0.75rem', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>
              Terms of Service
            </Link>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
