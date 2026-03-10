'use client';

import React, { useState } from 'react';
import {
  AppBar,
  Box,
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
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import TopBar from './TopBar';
import Footer from './Footer';

interface NavItem {
  label: string;
  sectionId: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', sectionId: 'hero' },
  { label: 'Services', sectionId: 'services' },
  { label: 'Process', sectionId: 'process' },
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

  const handleNavClick = (sectionId: string) => {
    setDrawerOpen(false);
    if (pathname !== '/') {
      router.push('/');
      // Poll until the section element is in the DOM after navigation
      const tryScroll = (attemptsLeft: number) => {
        if (document.getElementById(sectionId)) {
          scrollToSection(sectionId);
        } else if (attemptsLeft > 0) {
          setTimeout(() => tryScroll(attemptsLeft - 1), 100);
        }
      };
      setTimeout(() => tryScroll(10), 100);
    } else {
      scrollToSection(sectionId);
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
          onClick={() => handleNavClick('hero')}
        />
        <IconButton onClick={() => setDrawerOpen(false)} size="small" aria-label="close menu">
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {NAV_ITEMS.map((item) => (
          <ListItemButton
            key={item.sectionId}
            onClick={() => handleNavClick(item.sectionId)}
            sx={{ borderRadius: 2, mx: 1, mb: 0.5 }}
          >
            <ListItemText
              primary={item.label}
              slotProps={{ primary: { fontWeight: 500 } }}
            />
          </ListItemButton>
        ))}
      </List>
      <Box sx={{ mt: 'auto', p: 2 }}>
        <Button
          variant="contained"
          fullWidth
          onClick={() => handleNavClick('contact')}
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
              onClick={() => handleNavClick('hero')}
            >
              <Image src="/transparent-logo.svg" alt="Digsy" width={120} height={40} />
            </Box>

            {/* Desktop nav */}
            {!isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, ml: 4, flexGrow: 1 }}>
                {NAV_ITEMS.map((item) => (
                  <Button
                    key={item.sectionId}
                    onClick={() => handleNavClick(item.sectionId)}
                    sx={{ color: 'text.secondary', '&:hover': { color: 'text.primary' } }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>
            )}

            {/* Desktop CTA */}
            {!isMobile && (
              <Button
                variant="contained"
                size="small"
                onClick={() => handleNavClick('contact')}
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
