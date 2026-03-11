'use client';

import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Chip,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Button,
  useMediaQuery,
  useTheme,
  Container,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import TopBar from './TopBar';
import Footer from './Footer';

interface NavItem {
  label: string;
  sectionId: string;
  href?: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', sectionId: 'hero', href: '/' },
  { label: 'Services', sectionId: 'services', href: '/services' },
  { label: 'Process', sectionId: 'process', href: '/process' },
  { label: 'Results', sectionId: 'results', href: '/gallery' },
  { label: 'Resources', sectionId: 'resources', href: '/resources' },
  { label: 'Contact', sectionId: 'contact' },
];

const DRAWER_WIDTH = 260;


interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;
    const appBar = document.querySelector('header') as HTMLElement | null;
    const offset = appBar ? appBar.offsetHeight : 0;
    element.style.scrollMarginTop = `${offset}px`;
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleNavClick = (item: NavItem) => {
    setDrawerOpen(false);
    if (item.href) {
      if (item.href === pathname) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        router.push(item.href);
      }
      return;
    }
    if (pathname !== '/') {
      router.push('/');
      // Poll until the section element is in the DOM after navigation
      const tryScroll = (attemptsLeft: number) => {
        if (document.getElementById(item.sectionId)) {
          scrollToSection(item.sectionId);
        } else if (attemptsLeft > 0) {
          setTimeout(() => tryScroll(attemptsLeft - 1), 100);
        }
      };
      setTimeout(() => tryScroll(10), 100);
    } else {
      scrollToSection(item.sectionId);
    }
  };

  const drawerContent = (
    <Box
      sx={{ width: DRAWER_WIDTH, pt: 2, display: 'flex', flexDirection: 'column', height: '100%' }}
      role="presentation"
    >
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 2, mb: 2 }}>
        <Image
          src="/transparent-logo.svg"
          alt="Digsy"
          width={120}
          height={40}
          style={{ cursor: 'pointer' }}
          onClick={() => handleNavClick({ label: 'Home', sectionId: 'hero', href: '/' })}
        />
        <IconButton onClick={() => setDrawerOpen(false)} size="small" aria-label="close menu">
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {NAV_ITEMS.map((item) => (
          <ListItemButton
            key={item.sectionId}
            onClick={() => handleNavClick(item)}
            sx={{ borderRadius: 2, mx: 1, mb: 0.5 }}
          >
            <ListItemText
              primary={item.label}
              slotProps={{ primary: { fontWeight: 500 } }}
            />
          </ListItemButton>
        ))}
      </List>
      <Divider sx={{ mx: 2, my: 1 }} />
      <List>
        <ListItemButton
          component="a"
          href="/locations/college-station-bryan"
          sx={{ borderRadius: 2, mx: 1, mb: 0.5 }}
        >
          <LocationOnIcon sx={{ fontSize: 18, color: '#500000', mr: 1 }} />
          <ListItemText
            primary="College Station, TX"
            slotProps={{ primary: { fontWeight: 600, fontSize: '0.9rem', color: '#500000' } }}
          />
        </ListItemButton>
      </List>
      <Box sx={{ mt: 'auto', p: 2 }}>
        <Button
          variant="contained"
          fullWidth
          onClick={() => handleNavClick({ label: 'Contact', sectionId: 'contact' })}
        >
          Get Started
        </Button>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Thin announcement bar */}
      <TopBar />

      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backdropFilter: 'blur(12px)',
          backgroundColor: 'rgba(248,250,252,0.90)',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ py: 0.5 }}>
            {/* Logo */}
            <Box
              sx={{ display: 'flex', alignItems: 'center', flexGrow: { xs: 1, md: 0 }, cursor: 'pointer' }}
              onClick={() => handleNavClick({ label: 'Home', sectionId: 'hero', href: '/' })}
            >
              <Image src="/transparent-logo.svg" alt="Digsy" width={120} height={40} />
            </Box>

            {/* Desktop nav */}
            {!isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, ml: 4, flexGrow: 1 }}>
                {NAV_ITEMS.map((item) => (
                  <Button
                    key={item.sectionId}
                    onClick={() => handleNavClick(item)}
                    sx={{ color: 'text.secondary', '&:hover': { color: 'text.primary' } }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>
            )}

            {/* Location pill */}
            {!isMobile && (
              <Chip
                icon={<LocationOnIcon sx={{ fontSize: '14px !important', color: '#fff !important' }} />}
                label="College Station, TX"
                size="small"
                component="a"
                href="/locations/college-station-bryan"
                clickable
                sx={{
                  mr: 1.5,
                  backgroundColor: '#500000',
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: '0.72rem',
                  '&:hover': { backgroundColor: '#6B0000' },
                }}
              />
            )}

            {/* Desktop CTA */}
            {!isMobile && (
              <Button
                variant="contained"
                size="small"
                onClick={() => handleNavClick({ label: 'Contact', sectionId: 'contact' })}
              >
                Get Started
              </Button>
            )}

            {/* Mobile hamburger */}
            {isMobile && (
              <IconButton
                aria-label="open menu"
                onClick={() => setDrawerOpen(true)}
                edge="end"
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        ModalProps={{ keepMounted: true }}
      >
        {drawerContent}
      </Drawer>

      {/* Page content */}
      <Box component="main" sx={{ flex: 1 }}>
        {children}
      </Box>

      <Footer />
    </Box>
  );
};

export default Layout;
